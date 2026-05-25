"use client";

import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: 10, suffix: "+", label: "Hectares of Land" },
  { value: 10, suffix: "", label: "Year Growth Plan" },
  { value: 2, suffix: "", label: "Continents Served" },
  { value: 5, suffix: "+", label: "Agricultural Sectors" },
];

export default function StatsBar() {
  return (
    <section id="stats" className="bg-[#1A1A1A] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 md:justify-between">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              showDivider={i < stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
