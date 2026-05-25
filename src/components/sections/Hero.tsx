"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        {/* Left panel — African farmland */}
        <div className="w-1/2 relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
            alt="Lush golden farmland at sunset representing African agricultural heritage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-[#0D0D0D]/30 to-transparent" />
        </div>

        {/* Right panel — dark tech aesthetic */}
        <div className="w-full md:w-1/2 relative bg-[#0D0D0D]">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
            alt="Modern agri-tech farm representing Canadian innovation"
            fill
            className="object-cover opacity-20 md:hidden"
            priority
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/80 md:bg-transparent" />
          {/* Subtle green glow */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#009245]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-[#ED1C24]/8 blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-24 md:py-0">
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#ED1C24] text-white font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-[#c8151c] shadow-lg hover:shadow-[#ED1C24]/30 transition-all duration-300"
              >
                Invest in Innovation
              </a>
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
