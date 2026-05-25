"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  phase: string;
  period: string;
  color: "green" | "gold" | "red";
  items: string[];
  isLeft?: boolean;
}

const colorMap = {
  green: {
    dot: "bg-[#009245] shadow-[#009245]/50",
    border: "border-[#009245]/30 hover:border-[#009245]/60",
    label: "text-[#009245]",
    line: "bg-[#009245]",
  },
  gold: {
    dot: "bg-[#FBB03B] shadow-[#FBB03B]/50",
    border: "border-[#FBB03B]/30 hover:border-[#FBB03B]/60",
    label: "text-[#FBB03B]",
    line: "bg-[#FBB03B]",
  },
  red: {
    dot: "bg-[#ED1C24] shadow-[#ED1C24]/50",
    border: "border-[#ED1C24]/30 hover:border-[#ED1C24]/60",
    label: "text-[#ED1C24]",
    line: "bg-[#ED1C24]",
  },
};

export default function TimelineItem({
  phase,
  period,
  color,
  items,
  isLeft = false,
}: TimelineItemProps) {
  const c = colorMap[color];

  return (
    <div
      className={`flex items-start gap-0 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`flex-1 bg-[#1A1A1A] border ${c.border} rounded-lg p-6 transition-colors duration-300 ml-6 md:ml-0 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
      >
        <div className={`font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest ${c.label} mb-1`}>
          {phase}
        </div>
        <div className="text-[#9A9A9A] text-xs mb-4 font-medium">{period}</div>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#F5F5F5]">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Center dot — only shown on md+ */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-8">
        <div className={`w-4 h-4 rounded-full shadow-lg ${c.dot}`} />
      </div>

      {/* Mobile left dot */}
      <div className="md:hidden absolute left-0 flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full shadow-lg ${c.dot}`} />
      </div>

      {/* Spacer on alternating side */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}
