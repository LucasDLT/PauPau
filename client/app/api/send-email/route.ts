import { google } from "googleapis";
import { NextResponse } from "next/server";

const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const RECAPTCHA_KEY_SECRET = process.env.RECAPTCHA_KEY_SECRET;

console.log({
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REFRESH_TOKEN,
  GMAIL_USER,
});

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

  const verifyURL = "https://www.google.com/recaptcha/api/siteverify";

  const recaptchaRes = await fetch(verifyURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${RECAPTCHA_KEY_SECRET}&response=${token}`,
  });

  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return NextResponse.json(
      {
        error:
          "Fallo la verificacion de seguridad, intentalo nuevamente para verificar que eres humano",
      },
      { status: 403 },
    );
  }
  //lo de arriba puede ir en una funcion aux y pasarle recaptcha como parametro

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  const buildMessage = (
    to: string,
    subject: string,
    html: string,
    replyTo?: string,
  ) => {
    const msg = `From: ${GMAIL_USER}
To: ${to}
Subject: ${subject}
${replyTo ? `Reply-To: ${replyTo}` : ""}
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8

${html}`;

    return Buffer.from(msg)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };

  const mailToAdmin = buildMessage(
    GMAIL_USER!,
    "Solicitud de venta Online",
    `<h1>Hola</h1>`,
    email,
  );
  console.log(email);

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
