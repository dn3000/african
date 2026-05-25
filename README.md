# AfriCan — Exwick Farm Website

**Bridging Continents. Building Futures.**

Official website for AfriCan / Exwick Farm — a premium agri-tech brand connecting Africa and Canada through sustainable agriculture, innovation, and community.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| Tailwind CSS v4 | Styling |
| Framer Motion | Scroll animations |
| Lucide React | Icons |
| react-countup | Animated stat numbers |
| react-intersection-observer | Scroll triggers |

---

## Project Structure

```
src/
  app/
    layout.tsx          Global layout, fonts (Montserrat + Inter), SEO metadata
    page.tsx            Composes all sections
    globals.css         CSS variables, dark theme, utility classes
  components/
    layout/
      Navbar.tsx        Fixed glass-morphism nav + mobile drawer
      Footer.tsx        Three-column footer with logo and locations
    sections/
      Hero.tsx          Full-viewport split-screen hero with animations
      StatsBar.tsx      Animated count-up stats bar
      About.tsx         Our Story + Mission & Vision
      CropHub.tsx       Crop cards — blueberries, strawberries, onions, livestock
      Innovation.tsx    Agri-tech feature blocks with alternating layout
      Roadmap.tsx       Three-phase vertical timeline + financial strip
      Contact.tsx       Split contact form with inquiry type selector
    ui/
      Button.tsx        Reusable button (primary / outline / ghost)
      SectionLabel.tsx  Uppercase badge labels in gold/green/red
      StatCard.tsx      Animated count-up stat card
      CropCard.tsx      Hover-animated crop card with image + badge
      TimelineItem.tsx  Roadmap timeline card (alternating sides)
public/
  images/
    logo.svg            AfriCan placeholder logo (replace with logo.png)
```

---

## Adding the Official Logo

The site uses a placeholder SVG at `/public/images/logo.svg`.

To use the official AfriCan logo:
1. Place `african_logo.png` at `public/images/logo.png`
2. In `Navbar.tsx`, `Footer.tsx`, and `Contact.tsx`, change `logo.svg` → `logo.png` in the `src` attribute

---

## Brand Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-green` | `#009245` | Identity, sustainability, Africa |
| `--color-red` | `#ED1C24` | Action, buttons, Canada |
| `--color-gold` | `#FBB03B` | Accents, icons, highlights |
| `--color-black` | `#0D0D0D` | Primary background |
| `--color-dark` | `#1A1A1A` | Section backgrounds |
| `--color-mid` | `#2A2A2A` | Card backgrounds |
| `--color-light` | `#F5F5F5` | Primary text |
| `--color-muted` | `#9A9A9A` | Subtext |

---

## Scripts

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

## Stock Photos

All images use Unsplash source URLs as v1 placeholders. Replace with licensed or owned photography before production launch.

---

## Roadmap (v2 Features)

- [ ] Replace Unsplash placeholders with professional photography
- [ ] Connect Lorex/Nest live camera API (farm monitoring)
- [ ] Backend for contact form (email → Blessing Jumo)
- [ ] Investor portal / dashboard
- [ ] WhatsApp chat widget
- [ ] Multi-language support (English / French for Canada)

---

© 2025 AfriCan. All rights reserved. | Exwick Farm — Powered by AfriCan Innovation
