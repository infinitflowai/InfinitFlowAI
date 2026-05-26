import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, business, service, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Câmpuri obligatorii lipsă.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const waPhone = phone ? phone.replace(/\D/g, '').replace(/^0/, '40') : ''

    await transporter.sendMail({
      from: `"InfinitFlowAI Site" <${process.env.GMAIL_USER}>`,
      to: 'infinitflowai@gmail.com',
      replyTo: email,
      subject: 'Cerere nouă de pe site-ul InfinitFlowAI',
      text: [
        `Nume: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone || '—'}`,
        `Afacere: ${business || '—'}`,
        `Serviciu: ${service || '—'}`,
        `Mesaj:\n${message || '—'}`,
      ].join('\n\n'),
      html: `<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<style>
:root{color-scheme:dark;supported-color-schemes:dark;}
body,#li-outer{background-color:#020817 !important;}
#li-card{background-color:#06111f !important;}
#li-hdr{background-color:#06111f !important;}
#li-bdy{background-color:#06111f !important;}
#li-msgbox{background-color:#081827 !important;}
#li-actbox{background-color:#081827 !important;}
#li-footer{background-color:#040e1a !important;}
</style>
</head>
<body id="li-outer" style="margin:0;padding:0;background-color:#020817 !important;">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#020817" style="background-color:#020817 !important;width:100%">
<tr><td align="center" style="padding:32px 16px">

  <table id="li-card" width="720" cellpadding="0" cellspacing="0" bgcolor="#06111f"
    style="max-width:720px;width:100%;background-color:#06111f !important;border-radius:18px;border:1px solid #0ea5c6;overflow:hidden">

    <!-- HEADER -->
    <tr>
      <td id="li-hdr" bgcolor="#06111f"
        style="background-color:#06111f !important;padding:28px 36px 22px;border-bottom:1px solid #0d2a3a">
        <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0ea5c6 !important">LEAD NOU DE PE SITE</p>
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:28px;font-weight:800;color:#00d9ff !important;line-height:1.2">Cerere nouă — InfinitFlowAI</h1>
      </td>
    </tr>

    <!-- BODY -->
    <tr>
      <td id="li-bdy" bgcolor="#06111f"
        style="background-color:#06111f !important;padding:28px 36px">

        <!-- FIELDS -->
        <table width="100%" cellpadding="0" cellspacing="0"
          style="border-collapse:collapse;margin-bottom:26px">
          <tr>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 18px 13px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#a8b6cc !important;white-space:nowrap;width:120px;vertical-align:middle;border-bottom:1px solid #0d2a3a">Nume</td>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 0;font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff !important;vertical-align:middle;border-bottom:1px solid #0d2a3a">${name}</td>
          </tr>
          <tr>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 18px 13px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#a8b6cc !important;white-space:nowrap;width:120px;vertical-align:middle;border-bottom:1px solid #0d2a3a">Email</td>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 0;vertical-align:middle;border-bottom:1px solid #0d2a3a">
              <a href="mailto:${email}" style="font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#00d9ff !important;text-decoration:none">${email}</a>
            </td>
          </tr>
          <tr>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 18px 13px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#a8b6cc !important;white-space:nowrap;width:120px;vertical-align:middle;border-bottom:1px solid #0d2a3a">Telefon</td>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 0;vertical-align:middle;border-bottom:1px solid #0d2a3a">
              ${phone ? `<a href="tel:${phone.replace(/\s/g, '')}" style="font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#00d9ff !important;text-decoration:none">${phone}</a>` : '<span style="font-family:Arial,sans-serif;font-size:16px;color:#4a5a70 !important">—</span>'}
            </td>
          </tr>
          <tr>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 18px 13px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#a8b6cc !important;white-space:nowrap;width:120px;vertical-align:middle;border-bottom:1px solid #0d2a3a">Afacere</td>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 0;font-family:Arial,sans-serif;font-size:16px;font-weight:600;color:#ffffff !important;vertical-align:middle;border-bottom:1px solid #0d2a3a">${business || '—'}</td>
          </tr>
          <tr>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 18px 13px 0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#a8b6cc !important;white-space:nowrap;width:120px;vertical-align:middle">Serviciu</td>
            <td bgcolor="#06111f" style="background-color:#06111f !important;padding:13px 0;font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#00d9ff !important;vertical-align:middle">${service || '—'}</td>
          </tr>
        </table>

        <!-- MESSAGE BOX -->
        <table id="li-msgbox" width="100%" cellpadding="0" cellspacing="0"
          style="margin-bottom:24px;border-radius:12px;border:1px solid #0ea5c6;background-color:#081827 !important">
          <tr>
            <td bgcolor="#081827" style="background-color:#081827 !important;padding:18px 22px;border-radius:12px">
              <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0ea5c6 !important">MESAJ CLIENT</p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#e5eefc !important;white-space:pre-wrap">${message || '—'}</p>
            </td>
          </tr>
        </table>

        <!-- ACTIONS BOX -->
        <table id="li-actbox" width="100%" cellpadding="0" cellspacing="0"
          style="border-radius:12px;border:1px solid #0ea5c6;background-color:#081827 !important">
          <tr>
            <td bgcolor="#081827" style="background-color:#081827 !important;padding:18px 22px;border-radius:12px">
              <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0ea5c6 !important">ACȚIUNI RAPIDE</p>
              <table width="100%" cellpadding="0" cellspacing="0"
                style="margin-bottom:10px;border-radius:8px;border:1px solid #00d9ff;background-color:#07111d !important">
                <tr>
                  <td bgcolor="#07111d" style="background-color:#07111d !important;padding:11px 16px;border-radius:8px">
                    <a href="mailto:${email}" style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;color:#00d9ff !important;display:block">
                      ✉️ &nbsp;Răspunde: ${email}
                    </a>
                  </td>
                </tr>
              </table>
              ${phone ? `<table width="100%" cellpadding="0" cellspacing="0"
                style="margin-bottom:10px;border-radius:8px;border:1px solid #00d9ff;background-color:#07111d !important">
                <tr>
                  <td bgcolor="#07111d" style="background-color:#07111d !important;padding:11px 16px;border-radius:8px">
                    <a href="tel:${phone.replace(/\s/g, '')}" style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;color:#00d9ff !important;display:block">
                      📞 &nbsp;Sună: ${phone}
                    </a>
                  </td>
                </tr>
              </table>` : ''}
              ${waPhone.length >= 10 ? `<table width="100%" cellpadding="0" cellspacing="0"
                style="border-radius:8px;border:1px solid #00d9ff;background-color:#07111d !important">
                <tr>
                  <td bgcolor="#07111d" style="background-color:#07111d !important;padding:11px 16px;border-radius:8px">
                    <a href="https://wa.me/${waPhone}" style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;color:#00d9ff !important;display:block">
                      💬 &nbsp;WhatsApp: ${phone}
                    </a>
                  </td>
                </tr>
              </table>` : ''}
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td id="li-footer" bgcolor="#040e1a"
        style="background-color:#040e1a !important;padding:14px 36px;border-top:1px solid #0d2a3a">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#4a5a70 !important;text-align:center">
          Lead primit prin formularul de contact · InfinitFlowAI · ${new Date().toLocaleDateString('ro-RO', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>
      </td>
    </tr>

  </table>
</td></tr>
</table>
</body>
</html>`,
    })

    // Confirmation email to client
    try {
      await transporter.sendMail({
        from: `"InfinitFlowAI" <${process.env.GMAIL_USER}>`,
        to: email,
        replyTo: 'infinitflowai@gmail.com',
        subject: 'Am primit cererea ta — InfinitFlowAI',
        text: `Bună ziua,\n\nAm primit cererea ta și îți mulțumim că ai contactat InfinitFlowAI.\n\nVom analiza informațiile trimise și revenim către tine cât mai curând cu o propunere potrivită pentru afacerea ta.\n\nDacă vrei să ne trimiți detalii suplimentare, ne poți răspunde direct la acest email sau ne poți contacta pe WhatsApp la 0750448872.\n\nCu respect,\nEchipa InfinitFlowAI`,
        html: `<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<style>
:root{color-scheme:dark;supported-color-schemes:dark;}
body,#body-wrap{background-color:#020817 !important;}
#email-card{background-color:#06111f !important;}
#email-header{background-color:#06111f !important;}
#email-body{background-color:#06111f !important;}
#email-infobox{background-color:#081827 !important;}
#email-footer{background-color:#040e1a !important;}
#btn-phone,#btn-wa{background-color:#07111d !important;}
.main-text{color:#e5eefc !important;}
.muted-text{color:#a8b6cc !important;}
.cyan-text{color:#00d9ff !important;}
</style>
</head>
<body id="body-wrap" style="margin:0;padding:0;background-color:#020817 !important;">
<table id="outer" width="100%" cellpadding="0" cellspacing="0" bgcolor="#020817" style="background-color:#020817 !important;width:100%">
<tr><td align="center" style="padding:32px 16px">

  <table id="email-card" width="600" cellpadding="0" cellspacing="0" bgcolor="#06111f"
    style="max-width:600px;width:100%;background-color:#06111f !important;border-radius:16px;border:2px solid #0ea5c6;overflow:hidden">

    <!-- HEADER -->
    <tr>
      <td id="email-header" bgcolor="#06111f"
        style="background-color:#06111f !important;padding:28px 32px 22px;border-bottom:1px solid #0d2a3a">
        <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0ea5c6 !important">MESAJ AUTOMAT</p>
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:24px;font-weight:800;color:#00d9ff !important">InfinitFlowAI</h1>
      </td>
    </tr>

    <!-- BODY -->
    <tr>
      <td id="email-body" bgcolor="#06111f"
        style="background-color:#06111f !important;padding:26px 32px">

        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#e5eefc !important">Bună ziua,</p>
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#e5eefc !important">Am primit cererea ta și îți mulțumim că ai contactat <strong style="color:#ffffff !important;font-weight:700">InfinitFlowAI</strong>.</p>
        <p style="margin:0 0 22px;font-family:Arial,sans-serif;font-size:15px;line-height:1.75;color:#e5eefc !important">Vom analiza informațiile trimise și revenim către tine cât mai curând cu o propunere potrivită pentru afacerea ta.</p>

        <!-- INFO BOX -->
        <table id="email-infobox" width="100%" cellpadding="0" cellspacing="0"
          style="margin-bottom:26px;border-radius:10px;border:1px solid #0ea5c6;background-color:#081827 !important">
          <tr>
            <td bgcolor="#081827"
              style="background-color:#081827 !important;padding:18px 20px;border-radius:10px">
              <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#a8b6cc !important">Ne poți răspunde direct la acest email sau ne poți contacta rapid:</p>

              <!-- PHONE BUTTON -->
              <table id="btn-phone" width="100%" cellpadding="0" cellspacing="0"
                style="margin-bottom:10px;border-radius:8px;border:1px solid #00d9ff;background-color:#07111d !important">
                <tr>
                  <td bgcolor="#07111d"
                    style="background-color:#07111d !important;padding:11px 16px;border-radius:8px">
                    <a href="tel:+40750448872"
                      style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;color:#00d9ff !important;display:block">
                      📞 &nbsp;Sună: 0750 448 872
                    </a>
                  </td>
                </tr>
              </table>

              <!-- WHATSAPP BUTTON -->
              <table id="btn-wa" width="100%" cellpadding="0" cellspacing="0"
                style="border-radius:8px;border:1px solid #00d9ff;background-color:#07111d !important">
                <tr>
                  <td bgcolor="#07111d"
                    style="background-color:#07111d !important;padding:11px 16px;border-radius:8px">
                    <a href="https://wa.me/40750448872"
                      style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;color:#00d9ff !important;display:block">
                      💬 &nbsp;WhatsApp: Scrie-ne pe WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

        <!-- SIGNATURE -->
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#a8b6cc !important">
          Cu respect,<br>
          <strong style="color:#e5eefc !important;font-weight:700">Echipa InfinitFlowAI</strong>
        </p>

      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td id="email-footer" bgcolor="#040e1a"
        style="background-color:#040e1a !important;padding:14px 32px;border-top:1px solid #0d2a3a">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#4a5a70 !important;text-align:center">
          Acest email a fost trimis automat. Poți răspunde direct dacă vrei să ne trimiți detalii suplimentare.
        </p>
      </td>
    </tr>

  </table>
</td></tr>
</table>
</body>
</html>`,
      })
    } catch (clientMailErr) {
      console.error('[contact/route] client confirmation email failed:', clientMailErr)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact/route]', err)
    return NextResponse.json({ error: 'Eroare la trimiterea emailului.' }, { status: 500 })
  }
}
