"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import CropCard from "@/components/ui/CropCard";

const mainCrops = [
  {
    emoji: "🫐",
    title: "Blueberry Excellence",
    badge: "EXPORT MARKET",
    badgeColor: "red" as const,
    description:
      "Cultivated using precision pH management and organic matter enrichment. Targeted at premium export markets in Canada and Europe.",
    imageSrc:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Rows of blueberry bushes on a premium horticultural farm",
  },
  {
    emoji: "🍓",
    title: "Strawberry Fields",
    badge: "HIGH YIELD",
    badgeColor: "green" as const,
    description:
      "Vertical and hydro-farming techniques to maximise yield per square metre while conserving water — perfect for Zimbabwe's climate.",
    imageSrc:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright red strawberries growing in a well-maintained strawberry field",
  },
  {
    emoji: "🧅",
    title: "Sustainable Onions",
    badge: "FOOD SECURITY",
    badgeColor: "gold" as const,
    description:
      "High-yield, long shelf-life varieties designed to serve local food security needs and regional wholesale markets.",
    imageSrc:
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Freshly harvested golden onions representing Exwick Farm's food security crops",
  },
];

const secondaryCrops = [
  {
    icon: "🐖",
    title: "Livestock — Piggery & Poultry",
    phase: "PHASE 1 + 2",
    phaseColor: "text-[#009245]",
    description:
      "Piggery rehabilitation underway with structured pen expansion. Broiler and layer poultry launch planned for Phase 2, providing dual income streams.",
    imageSrc:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sustainable farm animals on a modern ethical livestock operation",
  },
  {
    icon: "🌳",
    title: "Orchards & Mixed Crops",
    phase: "PHASE 3",
    phaseColor: "text-[#FBB03B]",
    description:
      "Long-term mixed orchard and vegetable rotation planned for Phase 3, establishing perennial income and soil regeneration cycles.",
    imageSrc:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Established fruit orchard rows representing Exwick Farm Phase 3 diversification",
  },
];

export default function CropHub() {
  return (
    <section id="crops" className="bg-[#0D0D0D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel color="gold">High-Value Horticulture</SectionLabel>
          <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] mt-4 mb-4">
            The Crop Innovation Hub
          </h2>
          <p className="text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            Premium export crops cultivated with precision agriculture techniques
            for maximum yield, quality, and global marketability.
          </p>
        </motion.div>

        {/* Main 3-crop grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainCrops.map((crop, i) => (
            <motion.div
              key={crop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <CropCard {...crop} />
            </motion.div>
          ))}
        </div>

        {/* Secondary 2-crop row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryCrops.map((crop, i) => (
            <motion.div
              key={crop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#FBB03B]/30 transition-colors duration-300 flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-52 h-48 sm:h-auto flex-shrink-0">
                <Image
                  src={crop.imageSrc}
                  alt={crop.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 208px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A] hidden sm:block" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{crop.icon}</span>
                  <span
                    className={`font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest ${crop.phaseColor}`}
                  >
                    {crop.phase}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-lg text-[#F5F5F5] mb-2">
                  {crop.title}
                </h3>
                <p className="text-[#9A9A9A] text-sm leading-relaxed">
                  {crop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
