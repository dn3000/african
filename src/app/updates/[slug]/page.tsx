import { posts, CATEGORY_COLORS } from "@/lib/posts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | AfriCan — Exwick Farm`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 480 }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug)!;
  const { default: Post } = await import(`@/content/updates/${slug}.mdx`);
  const color = CATEGORY_COLORS[post.category];

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D0D0D] pt-20">
        {/* Hero image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/40 via-transparent to-[#0D0D0D]" />
        </div>

        {/* Article */}
        <article className="max-w-2xl mx-auto px-4 sm:px-6 -mt-16 relative z-10 pb-24">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm"
              style={{
                background: color.bg,
                color: color.text,
                border: `1px solid ${color.border}`,
              }}
            >
              {post.category}
            </span>
            <span className="text-[#9A9A9A] text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
              {formattedDate}
            </span>
          </div>

          {/* MDX content */}
          <div className="prose-african">
            <Post />
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
            <Link
              href="/#updates"
              className="text-[#009245] font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-widest hover:text-[#00b358] transition-colors"
            >
              ← Back to Updates
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
