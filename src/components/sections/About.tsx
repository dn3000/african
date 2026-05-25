"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  { icon: "🌱", title: "Sustainability First", desc: "Every decision prioritises long-term ecological health and yield sustainability." },
  { icon: "🌍", title: "Africa–Canada Bridge", desc: "Dual-continent operations connecting markets, knowledge, and opportunity." },
  { icon: "👨‍👩‍👧", title: "Family Values", desc: "Rooted in family stewardship, community uplift, and generational legacy." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <>
      {/* --- OUR STORY --- */}
      <section id="about" className="bg-[#0D0D0D] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-[420px] md:h-[520px] rounded-lg overflow-hidden border-l-4 border-[#009245]">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80"
                  alt="Rows of mixed vegetables and cover crops growing across Exwick Farm fields"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#009245] text-white rounded-lg px-6 py-4 shadow-2xl">
                <div className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl leading-none">10+</div>
                <div className="text-xs mt-1 opacity-90">Years Vision</div>
              </div>
            </motion.div>

            {/* Right — Text */}
            <div className="space-y-6">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <SectionLabel color="green">Our Story</SectionLabel>
              </motion.div>

              <motion.h2
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] leading-tight"
              >
                From Family Land to Continental Vision
              </motion.h2>

              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-4 text-[#9A9A9A] leading-relaxed"
              >
                <p>
                  Exwick Farm is a jointly managed family agribusiness operated
                  under the <span className="text-[#FBB03B] font-semibold">AfriCan</span> brand — a name that embodies our dual
                  identity and global ambition. Rooted in Africa, connected to
                  Canada.
                </p>
                <p>
                  What began as a modest property — a few pig pens, a manual
                  borehole, and basic housing — is being transformed into a
                  modern, diversified agri-estate through strategic investment,
                  innovation, and family commitment.
                </p>
              </motion.div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    custom={3 + i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="bg-[#1A1A1A] rounded-lg p-4 border border-[#2A2A2A] hover:border-[#009245]/40 transition-colors"
                  >
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <div className="font-[family-name:var(--font-montserrat)] font-bold text-sm text-[#F5F5F5] mb-1">{p.title}</div>
                    <div className="text-[#9A9A9A] text-xs leading-relaxed">{p.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Management card */}
              <motion.div
                custom={6}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="bg-[#1A1A1A] border-l-4 border-[#FBB03B] rounded-r-lg p-5"
              >
                <div className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#FBB03B] mb-3">
                  Management Team
                </div>
                <ul className="space-y-1.5 text-sm text-[#9A9A9A]">
                  <li><span className="text-[#F5F5F5] font-medium">Co-Owners:</span> B. Jumo</li>
                  <li><span className="text-[#F5F5F5] font-medium">Key Advisor:</span> V. Jumo (Co-founder)</li>
                  <li><span className="text-[#F5F5F5] font-medium">Operator:</span> AfriCan (Investment, Operations &amp; Development)</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="relative py-20 overflow-hidden">
        {/* Green tinted background */}
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <div className="absolute inset-0 bg-[#009245]/8" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel color="green">Purpose</SectionLabel>
            <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] mt-4">
              Our Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] border-t-4 border-[#FBB03B] rounded-b-lg p-8"
            >
              <div className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#FBB03B] mb-4">
                Vision
              </div>
              <blockquote className="text-[#F5F5F5] text-lg leading-relaxed italic">
                &ldquo;To develop Exwick Farm into a thriving, profitable, and
                sustainable agricultural estate that supports the family and
                local community.&rdquo;
              </blockquote>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#1A1A1A] border-t-4 border-[#009245] rounded-b-lg p-8"
            >
              <div className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#009245] mb-4">
                Mission
              </div>
              <blockquote className="text-[#F5F5F5] text-lg leading-relaxed italic">
                &ldquo;To implement cost-effective and scalable farming systems
                — spanning livestock, horticulture, water infrastructure, and
                agri-processing — that meet international standards.&rdquo;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
