import { verifyRecaptcha } from "@/app/utils/reCAPTCHA";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { buildMessage } from "@/app/utils/buildEmail";
import { EmailLayout } from "@/app/components/emailTemplates/mailContact";

const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const GMAIL_USER = process.env.GMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URI,
);

oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

export async function POST(req: Request) {
  const { form, token } = await req.json();
  if (!token) {
    return NextResponse.json(
      { error: "Error de verificacion de seguridad, intentalo nuevamente" },
      { status: 400 },
    );
  }
  try {
    const recaptcha = await verifyRecaptcha(token);

    if (!recaptcha.success) {
      return NextResponse.json({ error: "Captcha inválido" }, { status: 403 });
    }
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const html = EmailLayout({
      content: `
    <tr>
      <td style="padding:20px;">
        <h2>Hola ${form.name}, este es un resumen de tu mensaje.</h2>
        <p>${form.message}</p>
        </td>
    </tr>
    <tr>
    <td style="padding:20px;">
        <p>Gracias por escribirme, te contestare a la brevedad.</p>
    </td>
    </tr>
  `,
    });

    const mailToUser = buildMessage(form.email, "Consulta Online", html);

      const htmladmin = EmailLayout({
      content: `
    <tr>
      <td style="padding:20px;">
        <h2> Te escribio ${form.name}, este es un resumen de su mensaje y sus datos de contacto.</h2>
        <p>Nombre: ${form.name}</p>
        <p>Apellido: ${form.surname}</p>
        <p>Tel.: ${form.phone}</p>
        <p>Email: ${form.email}</p>
        </td>
    </tr>
    <tr>  
    <td style="padding:20px;">
        <p>Mensaje: ${form.message}</p>
    </td>
    </tr>
    <tr>
    <td style="padding:20px;">
        <p>Recorda contestarle a la brevedad.</p>
    </td>
    </tr>
  `,
    });

    const mailToAdmin = buildMessage(
      GMAIL_USER!,
      "Consulta Online",
      htmladmin,
    );

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: mailToUser },
    });
    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: mailToAdmin },
    });

    return NextResponse.json({ message: "Mensaje enviado" });
  } catch (e) {
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  }
}
