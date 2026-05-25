export type Category = "Operations" | "Crops" | "Investment" | "Milestone";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  image: string;
};

export const CATEGORY_COLORS: Record<Category, { bg: string; text: string; border: string }> = {
  Operations: { bg: "#009245", text: "#fff", border: "#009245" },
  Crops: { bg: "#FBB03B", text: "#0D0D0D", border: "#FBB03B" },
  Investment: { bg: "#ED1C24", text: "#fff", border: "#ED1C24" },
  Milestone: { bg: "transparent", text: "#F5F5F5", border: "#F5F5F5" },
};

export const posts: PostMeta[] = [
  {
    slug: "phase-1-solar-pump",
    title: "Phase 1 Begins: Solar Pump Installation Underway",
    date: "2025-04-10",
    category: "Operations",
    excerpt:
      "Exwick Farm's first major infrastructure investment is now in motion — a solar-powered irrigation pump that will transform how we manage water across the entire property.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "blueberry-soil-preparation",
    title: "Blueberry Zone — Soil Preparation Complete",
    date: "2025-03-22",
    category: "Crops",
    excerpt:
      "After months of soil analysis and pH balancing, our dedicated blueberry growing zone is ready. This premium export crop will be central to our Year 2 revenue targets.",
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "canadian-investors",
    title: "Welcoming Our First Investors from Canada",
    date: "2025-02-14",
    category: "Investment",
    excerpt:
      "A milestone for AfriCan: our first cohort of Canadian investors has formally joined the vision. Their commitment brings not just capital, but cross-continental expertise and market access.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
];
