interface SectionLabelProps {
  children: React.ReactNode;
  color?: "gold" | "green" | "red";
  className?: string;
}

export default function SectionLabel({
  children,
  color = "gold",
  className = "",
}: SectionLabelProps) {
  const colors = {
    gold: "text-[#FBB03B] border-[#FBB03B]/30",
    green: "text-[#009245] border-[#009245]/30",
    red: "text-[#ED1C24] border-[#ED1C24]/30",
  };

  return (
    <span
      className={`inline-block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.25em] border px-3 py-1 rounded-sm ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
}
