import { google } from "googleapis";
import { NextResponse } from "next/server";
import { buildMessage } from "@/app/utils/buildEmail";
import { EmailLayout } from "@/app/components/emailTemplates/mailContact";
import { verifyRecaptcha } from "@/app/utils/reCAPTCHA";
import { products } from "@/app/mock";
import { getOrderItems } from "@/app/helpers";

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
    return NextResponse.json({ error: "Captcha inválido" }, { status: 403 });
  }

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  const listItemsNormalizate = getOrderItems(listItems, products);

  const htmlAdmin = EmailLayout({
    content: `
    <tr>
      <td style="padding:20px;">
        <h2>Se recibió un nuevo pedido desde la tienda online.</h2>

        <h3>Datos del comprador</h3>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${surname}</p>
        <p><strong>DNI:</strong> ${dni}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>

        <br>

        <h3>Dirección de entrega</h3>

        <p><strong>País:</strong> ${country}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Tipo de envío:</strong> ${
          send === "free" ? "Punto de encuentro" : "Envío con costo a coordinar"
        }</p>

        ${
          aditionalInfo
            ? `<p><strong>Información adicional:</strong> ${aditionalInfo}</p>`
            : ""
        }
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <h3>Productos solicitados</h3>

        ${listItemsNormalizate
          .map(
            (item: any) => `
             <img
      src="${item.image}"
      width="120"
      alt="${item.name}"
      style="display:block; border-radius:8px;"
    />

              <p>
                • ${item.name} <br>
                Cantidad: ${item.quantity}
              </p>
            `,
          )
          .join("")}
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <p>Recordá contactar al cliente para confirmar el pedido y coordinar el pago y/o envío.</p>
      </td>
    </tr>
  `,
  });
  console.log("listItems", listItems);

  const htmlUser = EmailLayout({
    content: `
    <tr>
      <td style="padding:20px;">
        <h2>¡Gracias por tu compra!</h2>

        <p>Hola <strong>${name}</strong>, recibimos correctamente tu solicitud.</p>

        <p>En las próximas horas nos pondremos en contacto con vos para confirmar el pedido, el pago y coordinar el envío.</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <h3>Resumen del pedido</h3>

        ${listItemsNormalizate
          .map(
            (item: any) => `
             <img
      src="${item.image}"
      width="120"
      alt="${item.name}"
      style="display:block; border-radius:8px;"
    />

              <p>
                • ${item.name}<br>
                Cantidad: ${item.quantity}
              </p>
            `,
          )
          .join("")}
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <h3>Datos de entrega</h3>

        <p><strong>Nombre:</strong> ${name} ${surname}</p>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>País:</strong> ${country}</p>
        <p><strong>Tipo de envío:</strong> ${
          send === "free" ? "Punto de encuentro" : "Envío con costo a coordinar"
        }</p>
      </td>
    </tr>

    <tr>
      <td style="padding:20px;">
        <p>
          Si alguno de estos datos es incorrecto, respondé este correo para que podamos ayudarte antes de preparar el pedido.
        </p>

        <p>¡Muchas gracias por confiar en nosotros!</p>
      </td>
    </tr>
  `,
  });
  const mailToAdmin = buildMessage(
    GMAIL_USER!,
    "Nuevo pedido recibido",
    htmlAdmin,
    email,
  );

  const mailToUser = buildMessage(email, "Recibimos tu pedido", htmlUser);
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
