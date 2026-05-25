import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
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
  title: "AfriCan | Exwick Farm — Bridging Continents. Building Futures.",
  description:
    "AfriCan transforms Exwick Farm into a modern agri-tech estate connecting Africa and Canada through sustainable agriculture, innovation, and community.",
  keywords:
    "AfriCan, Exwick Farm, agribusiness, Zimbabwe, Canada, sustainable farming, agri-tech, investment",
  openGraph: {
    title: "AfriCan | Exwick Farm",
    description: "Bridging Continents. Building Futures.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
