import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const BLESSING_EMAIL = process.env.BLESSING_EMAIL || "contact@africanfarm.com";
const FROM_EMAIL = "AfriCan <onboarding@resend.dev>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://exwickfarm.com";

const PROFILE_LABELS: Record<string, string> = {
  african: "🌍 African Partner",
  canadian: "🍁 Canadian Investor",
  corporate: "🏢 Corporate / Institution",
  community: "🤝 Community Supporter",
};

function leadHtml(d: { profile: string; email: string; timezone: string; timestamp: string }) {
  const label = PROFILE_LABELS[d.profile] || d.profile;
  const date = new Date(d.timestamp).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" });
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:Arial,sans-serif;background:#0D0D0D;color:#F5F5F5;margin:0;padding:0}
.wrap{max-width:600px;margin:0 auto;background:#1A1A1A}
.hdr{background:#0D0D0D;padding:24px 32px;border-bottom:3px solid #FBB03B}
.logo{font-size:18px;font-weight:800;color:#F5F5F5}
.logo span{color:#FBB03B}
.sub{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#9A9A9A;margin-top:6px}
.body{padding:32px}
.title{font-size:22px;font-weight:800;color:#F5F5F5;margin-bottom:8px}
.subtitle{font-size:13px;color:#9A9A9A;margin-bottom:24px}
.field{margin-bottom:14px;border:1px solid #2A2A2A;border-radius:4px;overflow:hidden}
.lbl{background:#2A2A2A;padding:5px 14px;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#9A9A9A;font-weight:700}
.val{padding:12px 14px;font-size:14px;color:#F5F5F5}
.badge{display:inline-block;background:#FBB03B;color:#0D0D0D;padding:4px 12px;border-radius:3px;font-size:13px;font-weight:700}
.ftr{background:#0D0D0D;padding:18px 32px;border-top:1px solid #2A2A2A;text-align:center;font-size:11px;color:#9A9A9A}
</style></head><body>
<div class="wrap">
  <div class="hdr"><div class="logo">AfriCan<span> |</span> Investor Lead</div><div class="sub">New interest submitted via the website</div></div>
  <div class="body">
    <div class="title">New Investor Interest</div>
    <div class="subtitle">Someone submitted the investor form on the AfriCan website.</div>
    <div class="field"><div class="lbl">Investor Profile</div><div class="val"><span class="badge">${label}</span></div></div>
    <div class="field"><div class="lbl">Email</div><div class="val"><a href="mailto:${d.email}" style="color:#FBB03B">${d.email}</a></div></div>
    <div class="field"><div class="lbl">Submitted</div><div class="val">${date}${d.timezone ? ` (${d.timezone})` : ""}</div></div>
  </div>
  <div class="ftr">AfriCan | Exwick Farm &nbsp;·&nbsp; Zimbabwe &amp; Canada</div>
</div></body></html>`;
}

function welcomeHtml(email: string, profile: string) {
  const label = PROFILE_LABELS[profile] || profile;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:Arial,sans-serif;background:#0D0D0D;color:#F5F5F5;margin:0;padding:0}
.wrap{max-width:600px;margin:0 auto;background:#1A1A1A}
.hdr{background:#0D0D0D;padding:24px 32px;border-bottom:3px solid #FBB03B}
.logo{font-size:18px;font-weight:800;color:#F5F5F5}
.logo span{color:#FBB03B}
.body{padding:40px 32px}
.greeting{font-size:22px;font-weight:800;color:#F5F5F5;margin-bottom:16px}
.text{font-size:14px;color:#9A9A9A;line-height:1.8;margin-bottom:16px}
.hl{color:#FBB03B;font-weight:700}
.green{color:#009245;font-weight:700}
.pill{display:inline-block;background:#FBB03B;color:#0D0D0D;padding:3px 10px;border-radius:3px;font-size:12px;font-weight:700}
.divider{border:none;border-top:1px solid #2A2A2A;margin:24px 0}
.sig{font-size:14px;color:#F5F5F5}
.ftr{background:#0D0D0D;padding:18px 32px;border-top:1px solid #2A2A2A;text-align:center;font-size:11px;color:#9A9A9A}
</style></head><body>
<div class="wrap">
  <div class="hdr"><div class="logo">AfriCan<span> |</span> Exwick Farm</div></div>
  <div class="body">
    <div class="greeting">Welcome to the AfriCan Vision 🌍</div>
    <p class="text">Thank you for your interest as a <span class="pill">${label}</span>. You've taken the first step in joining something truly transformative.</p>
    <p class="text"><span class="hl">Exwick Farm</span> is a 10-hectare agri-tech estate in Zimbabwe being developed to bridge African agricultural potential with Canadian diaspora investment — building a self-sustaining, multi-income farm that creates local jobs, exports premium produce, and opens doors for the AfriCan community worldwide.</p>
    <p class="text"><span class="green">Blessing Jumo</span> will personally follow up to discuss how your involvement can shape Exwick Farm's next chapter. Expect to hear from her within a few days.</p>
    <hr class="divider">
    <p class="text"><strong style="color:#F5F5F5">What to expect:</strong><br>
    ✓ Personalised information pack matched to your investor profile<br>
    ✓ Farm financials, phase roadmap, and impact projections<br>
    ✓ A direct conversation with Blessing about your vision</p>
    <hr class="divider">
    <div class="sig">Warmly,<br><strong>Blessing Jumo</strong><br><span style="color:#9A9A9A;font-size:12px">Founder, AfriCan | Exwick Farm</span></div>
  </div>
  <div class="ftr">AfriCan | Exwick Farm &nbsp;·&nbsp; Zimbabwe &amp; Canada &nbsp;·&nbsp; <a href="${SITE_URL}" style="color:#FBB03B">exwickfarm.com</a></div>
</div></body></html>`;
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { profile, email, timezone } = body as Record<string, string>;

    if (!profile || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: BLESSING_EMAIL,
        subject: `[AfriCan] New investor lead — ${PROFILE_LABELS[profile] || profile}`,
        html: leadHtml({ profile, email, timezone: timezone || "", timestamp }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "Welcome to the AfriCan Vision",
        html: welcomeHtml(email, profile),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Investor API]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
