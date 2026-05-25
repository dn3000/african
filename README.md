# AfriCan | Exwick Farm

**Bridging Continents. Building Futures.**

A Next.js website for AfriCan / Exwick Farm — a 10-hectare agri-tech estate in Zimbabwe connecting African agricultural potential with Canadian diaspora investment.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Email**: Resend
- **CMS**: Sanity Studio (v3)
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the root. All variables are documented here:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key — get one at [resend.com](https://resend.com) |
| `BLESSING_EMAIL` | Yes | Email that receives contact form + investor leads |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public URL (e.g. `https://exwickfarm.com`) — used in email links |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | WhatsApp number with country code, no spaces (e.g. `12045551234`) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes (CMS) | Sanity project ID — created at [sanity.io/manage](https://sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes (CMS) | Usually `production` |
| `SANITY_API_TOKEN` | Yes (CMS) | Sanity read/write token (Editor permissions) |

### Example `.env.local`

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
BLESSING_EMAIL=blessing@exwickfarm.com
NEXT_PUBLIC_SITE_URL=https://exwickfarm.com
NEXT_PUBLIC_WHATSAPP_NUMBER=12045551234
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_xxxxxxxxxxxxx
```

---

## Resend Email Setup

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Create an API key → add as `RESEND_API_KEY`
3. **Verify your domain** to send from a custom `@exwickfarm.com` address
4. Until verified, emails send from `onboarding@resend.dev` (fine for testing)
5. Once verified, update `FROM_EMAIL` in `src/app/api/contact/route.ts` and `src/app/api/investor/route.ts` to `AfriCan <noreply@exwickfarm.com>`

---

## Sanity CMS Setup

The site has Sanity Studio embedded at `/studio`. Before using it:

### 1. Create a Sanity project

```bash
npm create sanity@latest
```

Or create a project at [sanity.io/manage](https://sanity.io/manage). Note the **Project ID**.

### 2. Create an API token

In your Sanity project → **API → Tokens → Add API token** with **Editor** permissions.

### 3. Add environment variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_editor_token
```

### 4. Access the Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio).

The schema includes a **Blog Post** type with: Title, Slug, Date, Category (`Operations` / `Crops` / `Investment` / `Milestone`), Excerpt, Main Image, Body (rich text), Author.

### 5. Migrate existing posts

The 3 existing MDX posts can be created manually in the Studio. The GROQ queries are ready at `src/sanity/lib/queries.ts`. Once posts are in Sanity, update `src/components/sections/Updates.tsx` and `src/app/updates/[slug]/page.tsx` to fetch from Sanity instead of the static `posts` array.

---

## Deployment (Vercel)

### 1. Push to GitHub

```bash
git add .
git commit -m "v3 — email, CMS, gallery, analytics"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)

### 3. Add environment variables

In Vercel → **Settings → Environment Variables**, add all variables from the table above for Production, Preview, and Development environments.

### 4. Set custom domain

Vercel → **Settings → Domains** → add `exwickfarm.com` and configure DNS.

### 5. Post-deploy checklist

- [ ] OG image: `https://yourdomain.com/api/og`
- [ ] Sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Contact form delivers to Blessing + sends confirmation to submitter
- [ ] Investor modal delivers lead to Blessing + welcome email to submitter
- [ ] WhatsApp button links to correct number
- [ ] Vercel Analytics shows first visit in dashboard
- [ ] Sanity Studio accessible at `https://yourdomain.com/studio`

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form handler (Resend)
│   │   ├── investor/route.ts     # Investor lead handler (Resend)
│   │   └── og/route.tsx          # Dynamic OG image
│   ├── studio/[[...tool]]/       # Sanity Studio
│   ├── updates/[slug]/           # Blog post pages (MDX)
│   ├── layout.tsx                # Root layout + Analytics + SpeedInsights
│   └── page.tsx                  # Homepage
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ClientProviders.tsx   # WhatsApp + ScrollToTop + CurrencyWidget
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── About.tsx
│   │   ├── CropHub.tsx
│   │   ├── Innovation.tsx
│   │   ├── Farmcation.tsx
│   │   ├── Roadmap.tsx           # Phase progress bars + milestones
│   │   ├── Updates.tsx           # Blog feed with Latest badge
│   │   ├── Gallery.tsx           # Masonry photo gallery + lightbox
│   │   └── Contact.tsx           # Live email form (Resend)
│   └── ui/
│       ├── InvestorModal.tsx     # Live investor lead capture (Resend)
│       ├── WhatsAppButton.tsx    # Floating WhatsApp CTA (bottom-left)
│       └── ...
├── config/
│   └── roadmap.ts                # Phase progress % and milestone states
├── content/updates/              # MDX blog posts
├── lib/
│   ├── posts.ts                  # Static post metadata
│   └── utils.ts
└── sanity/
    ├── lib/
    │   ├── client.ts             # Sanity client
    │   ├── queries.ts            # GROQ queries
    │   └── image.ts              # Image URL builder
    └── schemaTypes/
        ├── blogPost.ts           # Blog post document schema
        └── index.ts
```

---

## Brand Colors

| Token | Hex | Use |
|---|---|---|
| Green | `#009245` | Primary accent, growth, sustainability |
| Red | `#ED1C24` | CTA, urgency, partnership |
| Gold | `#FBB03B` | Investor-facing, prosperity |
| Black | `#0D0D0D` | Page background |
| Dark | `#1A1A1A` | Card backgrounds |
| Mid | `#2A2A2A` | Borders, dividers |
| Light | `#F5F5F5` | Primary text |
| Muted | `#9A9A9A` | Secondary text |
