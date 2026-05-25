"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

type PhotoItem = {
  type: "photo";
  id: number;
  src: string;
  alt: string;
  category: string;
};

type VideoItem = {
  type: "video";
  id: number;
  pexelsId: string;
  poster: string;
  title: string;
  category: string;
};

type MediaItem = PhotoItem | VideoItem;

// 6 photos + 6 videos = 50/50 split
const MEDIA: MediaItem[] = [
  { type: "photo", id: 1, src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format", alt: "Drip irrigation channels running across crop rows at Exwick Farm", category: "Infrastructure" },
  { type: "video", id: 2, pexelsId: "2835989", poster: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80&auto=format", title: "Farm harvest in progress", category: "Farm Life" },
  { type: "photo", id: 3, src: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80&auto=format", alt: "Ripe blueberry clusters hanging on the vine ready for export harvest", category: "Crops" },
  { type: "video", id: 4, pexelsId: "3571264", poster: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80&auto=format", title: "Green crop field panorama", category: "Farm Life" },
  { type: "photo", id: 5, src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format", alt: "Raised garden beds with mixed vegetables and flowering plants", category: "Crops" },
  { type: "video", id: 6, pexelsId: "1448735", poster: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format", title: "Irrigation sprinklers in field", category: "Infrastructure" },
  { type: "photo", id: 7, src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80&auto=format", alt: "Farm team working together during the growing season", category: "Team" },
  { type: "video", id: 8, pexelsId: "3209286", poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format", title: "Golden hour over the farmland", category: "Farm Life" },
  { type: "photo", id: 9, src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80&auto=format", alt: "Greenhouse seedling nursery with rows of young crop starts", category: "Infrastructure" },
  { type: "video", id: 10, pexelsId: "5548390", poster: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80&auto=format", title: "Drone footage over crop fields", category: "Farm Life" },
  { type: "photo", id: 11, src: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800&q=80&auto=format", alt: "Free-range livestock grazing on open pasture land at the farm", category: "Farm Life" },
  { type: "video", id: 12, pexelsId: "3686388", poster: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80&auto=format", title: "Vegetable crop cultivation", category: "Crops" },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Farm Life":      { bg: "#009245", text: "#fff" },
  "Crops":          { bg: "#FBB03B", text: "#0D0D0D" },
  "Infrastructure": { bg: "#ED1C24", text: "#fff" },
  "Team":           { bg: "#F5F5F5", text: "#0D0D0D" },
};

function Lightbox({ items, index, onClose, onPrev, onNext }: {
  items: PhotoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = items[index];
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? onNext() : onPrev();
    setTouchStart(null);
  };

  const colors = CATEGORY_COLORS[photo.category] || { bg: "#009245", text: "#fff" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.93 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src.replace("w=800", "w=1600")}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
        <div
          className="absolute top-4 left-4 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-3 py-1 rounded-sm"
          style={{ background: colors.bg, color: colors.text }}
        >
          {photo.category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent p-4 pt-12">
          <p className="text-[#F5F5F5] text-sm">{photo.alt}</p>
          <p className="text-[#9A9A9A] text-xs mt-1">{index + 1} / {items.length}</p>
        </div>
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A]/80 border border-[#2A2A2A] flex items-center justify-center text-[#F5F5F5] hover:bg-[#2A2A2A] transition-colors"
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A]/80 border border-[#2A2A2A] flex items-center justify-center text-[#F5F5F5] hover:bg-[#2A2A2A] transition-colors"
        aria-label="Next photo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1A1A1A]/80 border border-[#2A2A2A] flex items-center justify-center text-[#F5F5F5] hover:bg-[#2A2A2A] transition-colors"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
      </button>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = MEDIA.filter((m): m is PhotoItem => m.type === "photo");

  const open = (photoIndex: number) => setLightboxIndex(photoIndex);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => i === null ? null : (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setLightboxIndex((i) => i === null ? null : (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="bg-[#1A1A1A] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel color="green">Gallery</SectionLabel>
          <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] mt-4">
            Life on Exwick Farm
          </h2>
          <p className="text-[#9A9A9A] mt-4 max-w-lg mx-auto">
            A living record of our transformation — photos and video from the ground up.
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {MEDIA.map((item, i) => {
            const colors = CATEGORY_COLORS[item.category] || { bg: "#009245", text: "#fff" };

            if (item.type === "photo") {
              const photoIndex = photos.findIndex((p) => p.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer bg-[#2A2A2A]"
                  onClick={() => open(photoIndex)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/60 transition-all duration-300 flex items-end p-3">
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              );
            }

            // Video tile — autoplays silently via Pexels background embed
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="break-inside-avoid group relative overflow-hidden rounded-sm bg-[#2A2A2A]"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* Poster fallback shown until iframe loads */}
                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    className="object-cover absolute inset-0"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Pexels background embed — autoplay muted loop, no controls */}
                  <iframe
                    src={`https://player.pexels.com/video/${item.pexelsId}/?background=1`}
                    className="absolute inset-0 w-full h-full pointer-events-none scale-[1.02]"
                    allow="autoplay; fullscreen"
                    loading="lazy"
                    title={item.title}
                  />
                  {/* Play icon + hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D0D0D]/20 group-hover:bg-[#0D0D0D]/55 transition-all duration-300 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Category badge on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span
                      className="text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={photos}
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
