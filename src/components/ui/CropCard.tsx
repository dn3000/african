"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CropCardProps {
  emoji: string;
  title: string;
  badge: string;
  badgeColor: "red" | "green" | "gold";
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const badgeStyles = {
  red: "bg-[#ED1C24] text-white",
  green: "bg-[#009245] text-white",
  gold: "bg-[#FBB03B] text-[#0D0D0D]",
};

export default function CropCard({
  emoji,
  title,
  badge,
  badgeColor,
  description,
  imageSrc,
  imageAlt,
}: CropCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(0,146,69,0.2)" }}
      transition={{ duration: 0.3 }}
      className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#009245]/40 transition-colors duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        <span
          className={`absolute top-3 right-3 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${badgeStyles[badgeColor]}`}
        >
          {badge}
        </span>
      </div>
      <div className="p-6">
        <div className="text-3xl mb-3">{emoji}</div>
        <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-[#F5F5F5] mb-3">
          {title}
        </h3>
        <p className="text-[#9A9A9A] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
