"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInvestorModal } from "@/context/InvestorModalContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Farm", href: "#crops" },
  { label: "Innovation", href: "#innovation" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { openModal } = useInvestorModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 glass ${scrolled ? "border-b border-[#F5F5F5]/10" : "border-b border-transparent"
          }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="AfriCan — Exwick Farm"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-[family-name:var(--font-montserrat)] font-medium tracking-wide transition-colors duration-200 pb-1 ${activeLink === link.href
                    ? "text-[#FBB03B]"
                    : "text-[#F5F5F5]/80 hover:text-[#F5F5F5]"
                  }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FBB03B] rounded-full"
                  />
                )}
              </a>
            ))}
            <button
              onClick={openModal}
              className="ml-2 bg-[#ED1C24] text-white text-sm font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-300 hover:bg-[#c8151c] hover:shadow-lg hover:shadow-[#ED1C24]/30"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile hamburger — explicit size + touch target + bg ring */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm text-[#F5F5F5] border border-[#F5F5F5]/15 hover:border-[#FBB03B]/50 hover:text-[#FBB03B] transition-colors duration-200 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-16 glass flex flex-col"
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#F5F5F5] hover:text-[#FBB03B] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => { setMenuOpen(false); openModal(); }}
                className="mt-4 bg-[#ED1C24] text-white font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-8 py-4 rounded-sm text-base"
              >
                Partner With Us
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
