export const buildMessage = (
  to: string,
  subject: string,
  html: string,
  replyTo?: string,
) => {
  const GMAIL_USER = process.env.GMAIL_USER;

  const msg = 
`From: ${GMAIL_USER}
To: ${to}
Subject: ${subject}
${replyTo ? `Reply-To: ${replyTo}\n` : ""}MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8

${html}`;

  return Buffer.from(msg)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};
