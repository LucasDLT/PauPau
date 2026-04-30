type EmailLayoutProps = {
  content: string;
  logoUrl?: string;
};

export const EmailLayout = ({ content, logoUrl }: EmailLayoutProps) => { 
  return `
  <html>
    <body style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">

      <!-- Wrapper -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="
          background: #fde68a;
          background: linear-gradient(to bottom, rgba(253,186,116,0.4), rgba(253,224,71,0.4), rgba(254,240,138,0.2));
          padding: 20px 10px;
        "
      >
        <tr>
          <td align="center">

            <!-- Container -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
              style="
                max-width:600px;
                background:#95dae995;
                border-radius:12px;
                overflow:hidden;
                font-family: Arial, sans-serif;
              "
            >

              <!-- Header (Logo) -->
              <tr>
                <td align="center" style="padding:20px;">
                  ${
                    logoUrl
                      ? `<img src="${logoUrl}" alt="Logo" width="120" style="display:block;" />`
                      : `<h2 style="margin:0;">Tu Marca</h2>`
                  }
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="border-top:1px solid #eee;"></td>
              </tr>

              <!-- Content dinámico -->
              ${content}

              <!-- Footer -->
              <tr>
                <td style="padding:20px; text-align:center; font-size:12px; color:#000000;">
                  © ${new Date().getFullYear()} - PauPau Arte en Arcilla - Todos los derechos reservados
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
  </html>
  `;
};