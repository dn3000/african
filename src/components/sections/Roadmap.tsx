"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const phases = [
  {
    phase: "Phase 1 — Foundation",
    period: "NOW  ·  0–12 Months",
    color: "green" as const,
    items: [
      "Piggery rehabilitation & structured pen expansion",
      "Solar pump installation & borehole upgrade",
      "Initial crop fencing & zone demarcation",
      "Small-scale vegetable production begins",
      "Labour hire and daily operations structure",
    ],
  },
  {
    phase: "Phase 2 — Growth",
    period: "1–3 Years",
    color: "gold" as const,
    items: [
      "Poultry launch — broilers & layers",
      "Additional borehole drilling / storage tanks",
      "Solar-powered irrigation system completed",
      "AfriCan farm shop established",
      "Local supply contracts secured",
    ],
  },
  {
    phase: "Phase 3 — Scale",
    period: "3–10 Years",
    color: "red" as const,
    items: [
      "Full agri-processing facility",
      "Branded AfriCan products — international distribution",
      "Permanent staff housing",
      "Orchard establishment & mixed-use estate",
      "Farmcation / eco-tourism launch",
    ],
  },
];

const financials = [
  { label: "Year 1 Setup", value: "$8K–$12K", note: "Initial investment" },
  { label: "Year 2–3", value: "Profitable", note: "Piggery + vegetables" },
  { label: "Year 5+", value: "Self-Sustaining", note: "Multi-stream income" },
];

const colorMap = {
  green: {
    dot: "bg-[#009245] ring-[#009245]/30",
    label: "text-[#009245]",
    card: "border-[#009245]/20 hover:border-[#009245]/50",
    bar: "bg-[#009245]",
  },
  gold: {
    dot: "bg-[#FBB03B] ring-[#FBB03B]/30",
    label: "text-[#FBB03B]",
    card: "border-[#FBB03B]/20 hover:border-[#FBB03B]/50",
    bar: "bg-[#FBB03B]",
  },
  red: {
    dot: "bg-[#ED1C24] ring-[#ED1C24]/30",
    label: "text-[#ED1C24]",
    card: "border-[#ED1C24]/20 hover:border-[#ED1C24]/50",
    bar: "bg-[#ED1C24]",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-[#1A1A1A] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel color="gold">Strategic Roadmap</SectionLabel>
          <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] mt-4">
            Built for the Long Game
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[#2A2A2A]" />

          <div className="space-y-10">
            {phases.map((phase, i) => {
              const c = colorMap[phase.color];
              const isRight = i % 2 === 0;

              return (
                <div key={phase.phase} className="relative flex items-start md:justify-center">
                  {/* Dot on the line */}
                  <div
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ring-4 ${c.dot} ${c.bar} ring-[#1A1A1A] z-10 mt-6`}
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isRight ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 }}
                    className={`ml-12 md:ml-0 md:w-5/12 bg-[#0D0D0D] border ${c.card} rounded-lg p-6 transition-colors duration-300 ${
                      isRight ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className={`font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest ${c.label} mb-1`}>
                      {phase.phase}
                    </div>
                    <div className="text-[#9A9A9A] text-xs mb-4 font-medium">{phase.period}</div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#F5F5F5]">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bar}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Financial summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg p-8"
        >
          <div className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#FBB03B] text-center mb-8">
            Financial Trajectory
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {financials.map((f, i) => (
              <div key={f.label} className="text-center">
                <div className="font-[family-name:var(--font-montserrat)] font-extrabold text-2xl text-[#F5F5F5] mb-1">
                  {f.value}
                </div>
                <div className="text-[#FBB03B] text-xs font-semibold mb-1">{f.label}</div>
                <div className="text-[#9A9A9A] text-xs">{f.note}</div>
                {i < financials.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#2A2A2A]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
