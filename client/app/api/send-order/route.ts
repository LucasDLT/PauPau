import { google } from "googleapis";
import { NextResponse } from "next/server";
import { buildMessage } from "@/app/utils/buildEmail";
import { verifyRecaptcha } from "@/app/utils/reCAPTCHA";

const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;


const oAuth2Client = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URI,
);

oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

export async function POST(req: Request) {
  const {
    cart: { timestamp, listItems },
    infoUser: {
      name,
      surname,
      dni,
      country,
      city,
      address,
      phone,
      email,
      aditionalInfo,
      send,
    },
    token,
  } = await req.json();
  if (!email || !email.includes("@")) {
    throw new Error("Email inválido");
  }

  if (!token) {
    return NextResponse.json(
      { error: "Error de verificacion de seguridad, intentalo nuevamente" },
      { status: 400 },
    );
  }

const recaptcha = await verifyRecaptcha(token);

if (!recaptcha.success) {
  return NextResponse.json(
    { error: "Captcha inválido" },
    { status: 403 }
  );
}

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

 

  const mailToAdmin = buildMessage(
    GMAIL_USER!,
    "Solicitud de venta Online",
    `<h1>Hola</h1>`,
    email,
  );

  const mailToUser = buildMessage(
    email,
    "Solicitud de compra online",
    `<h1>Hola</h1>`,
  );

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: mailToAdmin,
    },
  });
  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: mailToUser,
    },
  });
  try {
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);

    return NextResponse.json(
      { error: "Error enviando email" },
      { status: 500 },
    );
  }
}
