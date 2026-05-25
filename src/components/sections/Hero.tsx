"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useInvestorModal } from "@/context/InvestorModalContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const { openModal } = useInvestorModal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── MOBILE background: single full-bleed farm image ── */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
          alt="Golden African farmland at sunset"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Strong dark overlay so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/60 to-[#0D0D0D]/85" />
        {/* Subtle green glow bottom-left */}
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#009245]/20 blur-3xl pointer-events-none" />
      </div>

      {/* ── DESKTOP split-screen background ── */}
      <div className="absolute inset-0 hidden md:flex">
        {/* Left — African farmland */}
        <div className="w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
            alt="Lush golden farmland at sunset representing African agricultural heritage"
            fill
            className="object-cover"
            priority
          />
          {/* Darken left edge (content legibility) and fade into right panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-[#0D0D0D]/30 to-[#0D0D0D]/60" />
        </div>

        {/* Right — Solar / agri-tech aesthetic (Canadian innovation) */}
        <div className="w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80"
            alt="Solar panels on agricultural land representing modern agri-tech innovation"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay keeps it moody and legible */}
          <div className="absolute inset-0 bg-[#0D0D0D]/72" />
          {/* Blend seam with left panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-transparent" />
          {/* Accent glows */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#009245]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-[#ED1C24]/12 blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-28 md:py-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#FBB03B] border border-[#FBB03B]/30 px-3 py-1 rounded-sm">
                Exwick Farm × African
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-[#F5F5F5] mb-6"
            >
              Bridging{" "}
              <span className="text-[#009245]">Continents.</span>
              <br />
              Building{" "}
              <span className="text-[#ED1C24]">Futures.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-[#9A9A9A] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              Transforming Exwick Farm into a modern, sustainable agricultural
              hub — powered by AfriCan innovation and connecting two continents
              through food, technology, and community.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#crops"
                className="inline-flex items-center justify-center border-2 border-[#009245] text-[#F5F5F5] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-[#009245]/10 transition-all duration-300"
              >
                Explore the Farm
              </a>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center bg-[#ED1C24] text-white font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-[#c8151c] shadow-lg hover:shadow-[#ED1C24]/30 transition-all duration-300"
              >
                Invest in Innovation
              </button>
            </motion.div>

            {/* Tagline strip */}
            <motion.p
              variants={itemVariants}
              className="mt-10 text-[#9A9A9A]/60 text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]"
            >
              Zimbabwe · Canada · Global Markets
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#FBB03B]/70 hover:text-[#FBB03B] transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
