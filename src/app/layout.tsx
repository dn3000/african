import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { ClientProviders } from "@/components/layout/ClientProviders";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://african-exwick.vercel.app"),
  title: "AfriCan | Exwick Farm — Bridging Continents. Building Futures.",
  description:
    "AfriCan transforms Exwick Farm into a modern agri-tech estate connecting Africa and Canada through sustainable agriculture, innovation, and community.",
  keywords:
    "AfriCan, Exwick Farm, agribusiness, Zimbabwe, Canada, sustainable farming, agri-tech, investment",
  openGraph: {
    title: "AfriCan | Exwick Farm",
    description: "Bridging Continents. Building Futures.",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "AfriCan | Exwick Farm — Bridging Continents. Building Futures.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriCan | Exwick Farm",
    description: "Bridging Continents. Building Futures.",
    images: ["/api/og"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AfriCan | Exwick Farm",
  description:
    "AfriCan transforms Exwick Farm into a modern agri-tech estate connecting Africa and Canada through sustainable agriculture, innovation, and community.",
  url: "https://african-exwick.vercel.app",
  logo: "https://african-exwick.vercel.app/images/logo.png",
  foundingLocation: {
    "@type": "Place",
    name: "Zimbabwe",
  },
  areaServed: ["Zimbabwe", "Canada", "Global Markets"],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Investor Relations",
    email: "blessing@exwickfarm.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ClientProviders>{children}</ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
