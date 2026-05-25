"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    id: "water",
    headline: "Solar-Powered Irrigation",
    body: "Upgrading from a manual borehole to a fully automated solar-powered water system with storage tanks — ensuring year-round crop irrigation independent of grid power.",
    tags: ["☀️ Solar Energy", "💧 Water Security", "⚡ Off-Grid"],
    imageSrc:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Solar panels on agricultural land powering an off-grid irrigation system",
    tagColor: "bg-[#009245]/15 text-[#009245] border border-[#009245]/25",
    isLeft: false,
  },
  {
    id: "cameras",
    headline: "24/7 Smart Camera Network",
    body: "Real-time live feeds accessible to investors and partners across Canada and Africa. AI-assisted motion detection and thermal imaging protect livestock and high-value horticultural zones.",
    tags: ["📷 Live Feed", "🤖 AI Alerts", "🔒 Security"],
    note: "Camera integration placeholder — Lorex/Nest API to be connected in v2.",
    imageSrc:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern farm security and monitoring system with smart cameras",
    tagColor: "bg-[#FBB03B]/15 text-[#FBB03B] border border-[#FBB03B]/25",
    isLeft: true,
  },
  {
    id: "farmcation",
    headline: "Farmcation — Agri-Tourism Meets Modern Agriculture",
    body: "A future business stream blending sustainable agriculture with eco-tourism. Visitors and investors can experience Exwick Farm first-hand — creating revenue, awareness, and community.",
    tags: ["🌿 Eco-Tourism", "🏕️ Farmstay"],
    badge: "COMING PHASE 3",
    imageSrc:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Eco-lodge set in lush nature representing the Farmcation agri-tourism concept",
    tagColor: "bg-[#ED1C24]/15 text-[#ED1C24] border border-[#ED1C24]/25",
    isLeft: false,
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="bg-[#0D0D0D] green-grid-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <SectionLabel color="red">Agri-Tech Infrastructure</SectionLabel>
          <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] mt-4">
            Innovation Powering the Future Farm
          </h2>
        </motion.div>

        {/* Feature blocks */}
        <div className="space-y-24">
          {features.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                feat.isLeft ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={feat.isLeft ? "lg:col-start-2" : ""}>
                <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={feat.imageSrc}
                    alt={feat.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/40 to-transparent" />
                  {feat.badge && (
                    <span className="absolute top-4 left-4 bg-[#ED1C24] text-white text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                      {feat.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className={feat.isLeft ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h3 className="font-[family-name:var(--font-montserrat)] font-extrabold text-2xl md:text-3xl text-[#F5F5F5] mb-4 leading-tight">
                  {feat.headline}
                </h3>
                <p className="text-[#9A9A9A] leading-relaxed mb-6">{feat.body}</p>
                {feat.note && (
                  <p className="text-[#9A9A9A]/60 text-xs italic mb-5">{feat.note}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-[family-name:var(--font-montserrat)] font-semibold px-3 py-1.5 rounded-sm ${feat.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
