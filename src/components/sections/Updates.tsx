import { posts, CATEGORY_COLORS, type PostMeta } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

function PostCard({ post, isLatest }: { post: PostMeta; isLatest?: boolean }) {
  const color = CATEGORY_COLORS[post.category];
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/updates/${post.slug}`}
      className="group flex flex-col bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#009245]/50 transition-all duration-300 snap-center min-w-[min(82vw,340px)] md:min-w-0 flex-shrink-0 md:flex-shrink"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 300px, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
        {/* Category tag */}
        <span
          className="absolute top-3 left-3 text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm"
          style={{ background: color.bg, color: color.text, border: `1px solid ${color.border}` }}
        >
          {post.category}
        </span>
        {/* Latest Update badge */}
        {isLatest && (
          <span className="absolute top-3 right-3 text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#FBB03B] text-[#0D0D0D] animate-pulse">
            Latest
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[#9A9A9A] text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-wider mb-2">
          {formattedDate}
        </p>
        <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] text-base leading-snug mb-3 group-hover:text-[#009245] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#9A9A9A] text-sm leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 text-[#009245] text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
          Read More <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function Updates() {
  return (
    <section id="updates" className="py-20 md:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#009245] border border-[#009245]/30 px-3 py-1 rounded-sm mb-4">
            Latest News
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl sm:text-4xl text-[#F5F5F5] mb-4">
            From the Farm
          </h2>
          <p className="text-[#9A9A9A] text-base max-w-xl">
            Real updates from the ground — milestones, crop progress, and the people building Exwick Farm into something extraordinary.
          </p>
        </div>

        {/* Cards — swipeable snap cards on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-px-4 md:scroll-px-0 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} isLatest={i === 0} />
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="md:hidden mt-4 text-center text-[#9A9A9A]/50 text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-widest">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}
