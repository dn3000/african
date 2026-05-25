import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const BLESSING_EMAIL = process.env.BLESSING_EMAIL || "contact@africanfarm.com";
const FROM_EMAIL = "AfriCan <onboarding@resend.dev>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://exwickfarm.com";

const COUNTRY_NAMES: Record<string, string> = {
  ZW: "Zimbabwe", CA: "Canada", US: "United States", GB: "United Kingdom",
  ZA: "South Africa", NG: "Nigeria", KE: "Kenya", AU: "Australia",
  DE: "Germany", FR: "France", OTHER: "Other",
};

function notificationHtml(d: { name: string; email: string; country: string; phone: string; inquiry: string; message: string }) {
  const country = COUNTRY_NAMES[d.country] || d.country || "Not specified";
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:Arial,sans-serif;background:#0D0D0D;color:#F5F5F5;margin:0;padding:0}
.wrap{max-width:600px;margin:0 auto;background:#1A1A1A}
.hdr{background:#0D0D0D;padding:24px 32px;border-bottom:3px solid #009245}
.logo{font-size:18px;font-weight:800;color:#F5F5F5;letter-spacing:.04em}
.logo span{color:#009245}
.sub{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#9A9A9A;margin-top:6px}
.body{padding:32px}
.title{font-size:22px;font-weight:800;color:#F5F5F5;margin-bottom:8px}
.subtitle{font-size:13px;color:#9A9A9A;margin-bottom:24px}
.field{margin-bottom:14px;border:1px solid #2A2A2A;border-radius:4px;overflow:hidden}
.lbl{background:#2A2A2A;padding:5px 14px;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#9A9A9A;font-weight:700}
.val{padding:12px 14px;font-size:14px;color:#F5F5F5}
.badge{display:inline-block;background:#009245;color:#fff;padding:4px 12px;border-radius:3px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.ftr{background:#0D0D0D;padding:18px 32px;border-top:1px solid #2A2A2A;text-align:center;font-size:11px;color:#9A9A9A}
</style></head><body>
<div class="wrap">
  <div class="hdr"><div class="logo">AfriCan<span> |</span> Exwick Farm</div><div class="sub">New Contact Form Submission</div></div>
  <div class="body">
    <div class="title">New Enquiry Received</div>
    <div class="subtitle">Someone reached out via the AfriCan website contact form.</div>
    <div class="field"><div class="lbl">Full Name</div><div class="val">${d.name}</div></div>
    <div class="field"><div class="lbl">Email</div><div class="val"><a href="mailto:${d.email}" style="color:#009245">${d.email}</a></div></div>
    <div class="field"><div class="lbl">Country</div><div class="val">${country}</div></div>
    ${d.phone ? `<div class="field"><div class="lbl">Phone</div><div class="val">${d.phone}</div></div>` : ""}
    <div class="field"><div class="lbl">Inquiry Type</div><div class="val">${d.inquiry ? `<span class="badge">${d.inquiry}</span>` : "Not specified"}</div></div>
    <div class="field"><div class="lbl">Message</div><div class="val" style="white-space:pre-wrap">${d.message}</div></div>
  </div>
  <div class="ftr">AfriCan | Exwick Farm &nbsp;·&nbsp; Zimbabwe &amp; Canada</div>
</div></body></html>`;
}

function confirmationHtml(name: string) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:Arial,sans-serif;background:#0D0D0D;color:#F5F5F5;margin:0;padding:0}
.wrap{max-width:600px;margin:0 auto;background:#1A1A1A}
.hdr{background:#0D0D0D;padding:24px 32px;border-bottom:3px solid #009245}
.logo{font-size:18px;font-weight:800;color:#F5F5F5}
.logo span{color:#009245}
.body{padding:40px 32px;text-align:center}
.icon{font-size:48px;margin-bottom:16px}
.title{font-size:24px;font-weight:800;color:#F5F5F5;margin-bottom:12px}
.text{font-size:14px;color:#9A9A9A;line-height:1.75;max-width:380px;margin:0 auto 16px}
.hl{color:#009245;font-weight:700}
.ftr{background:#0D0D0D;padding:18px 32px;border-top:1px solid #2A2A2A;text-align:center;font-size:11px;color:#9A9A9A}
</style></head><body>
<div class="wrap">
  <div class="hdr"><div class="logo">AfriCan<span> |</span> Exwick Farm</div></div>
  <div class="body">
    <div class="icon">🌱</div>
    <div class="title">Message Received, ${firstName}!</div>
    <p class="text">Thank you for reaching out to <span class="hl">AfriCan — Exwick Farm</span>. Blessing will personally review your message and be in touch <span class="hl">within 48 hours</span>.</p>
    <p class="text" style="font-size:13px">In the meantime, explore our story at <a href="${SITE_URL}" style="color:#009245">exwickfarm.com</a></p>
  </div>
  <div class="ftr">AfriCan | Exwick Farm &nbsp;·&nbsp; Zimbabwe &amp; Canada</div>
</div></body></html>`;
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, country, phone, inquiry, message } = body as Record<string, string>;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: BLESSING_EMAIL,
        subject: `[AfriCan] ${inquiry || "New"} enquiry from ${name}`,
        html: notificationHtml({ name, email, country, phone, inquiry, message }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "AfriCan — We received your message",
        html: confirmationHtml(name),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
