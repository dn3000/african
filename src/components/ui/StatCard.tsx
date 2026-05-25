"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  showDivider?: boolean;
}

export default function StatCard({
  value,
  suffix = "",
  label,
  showDivider = true,
}: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex items-center gap-8">
      <div className="text-center px-4 py-2">
        <div className="text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] font-extrabold text-[#FBB03B] leading-none">
          {inView ? (
            <CountUp end={value} duration={2.5} suffix={suffix} />
          ) : (
            <span>0{suffix}</span>
          )}
        </div>
        <div className="mt-2 text-sm text-[#F5F5F5] font-medium tracking-wide">
          {label}
        </div>
      </div>
      {showDivider && (
        <div className="hidden md:block h-12 w-px bg-[#F5F5F5]/15 flex-shrink-0" />
      )}
    </div>
  );
}
