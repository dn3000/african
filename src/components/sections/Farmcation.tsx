"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInvestorModal } from "@/context/InvestorModalContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const EXPERIENCES = [
  {
    icon: "🌅",
    title: "Weekend Retreat",
    desc: "Two nights on the farm. Walk the plots, meet the team, and experience Zimbabwean agricultural life at a pace that restores.",
    tag: "48 Hours",
    tagColor: "#009245",
  },
  {
    icon: "🌱",
    title: "Volunteer Season",
    desc: "Spend 2–4 weeks working alongside our crew during planting or harvest. Learn sustainable techniques you can take home.",
    tag: "2–4 Weeks",
    tagColor: "#FBB03B",
  },
  {
    icon: "🏕️",
    title: "Investor Tour",
    desc: "A structured site visit for prospective investors — walk the land, review financials on-site, and meet Blessing directly.",
    tag: "By Arrangement",
    tagColor: "#ED1C24",
  },
] as const;

export default function Farmcation() {
  const { openModal } = useInvestorModal();

  return (
    <section id="farmcation" className="relative overflow-hidden">
      {/* Full-width hero image */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80"
          alt="Sunlit forest trail on the Exwick Farm estate — Farmcation agri-tourism experience"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/30 via-[#0D0D0D]/40 to-[#0D0D0D]" />

        {/* Phase tag */}
        <div className="absolute top-6 left-6 sm:left-8 lg:left-12">
          <span className="inline-block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#ED1C24] border border-[#ED1C24]/50 bg-[#0D0D0D]/60 backdrop-blur-sm px-3 py-1 rounded-sm">
            Launching Phase 3
          </span>
        </div>
      </div>

      {/* Content block */}
      <div className="bg-[#0D0D0D] green-grid-bg py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="max-w-2xl mb-14">
              <span className="inline-block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#FBB03B] border border-[#FBB03B]/30 px-3 py-1 rounded-sm mb-4">
                Agri-Tourism
              </span>
              <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] mb-5 leading-tight">
                Farmcation —{" "}
                <span className="text-[#009245]">Where Agriculture</span>
                <br />
                Meets Experience
              </h2>
              <p className="text-[#9A9A9A] text-base leading-relaxed">
                A future income stream that invites visitors, volunteers, and eco-tourists to live and
                work on Exwick Farm. Packages range from weekend agri-retreats to month-long
                sustainable farming immersions — connecting people to the land that feeds them.
              </p>
            </motion.div>

            {/* Experience cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {EXPERIENCES.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#009245]/40 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4">{exp.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] text-base">
                      {exp.title}
                    </h3>
                    <span
                      className="text-[9px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm border ml-auto flex-shrink-0"
                      style={{ color: exp.tagColor, borderColor: `${exp.tagColor}50` }}
                    >
                      {exp.tag}
                    </span>
                  </div>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center bg-[#009245] text-white font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-[#007a3a] shadow-lg hover:shadow-[#009245]/30 transition-all duration-300"
              >
                Register Interest
              </button>
              <p className="text-[#9A9A9A] text-sm">
                Farmcation launches with Phase 3. Register now to be first on the list.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
