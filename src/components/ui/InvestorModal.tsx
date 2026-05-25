"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, AlertCircle } from "lucide-react";
import Image from "next/image";

const PROFILES = [
  { id: "african", icon: "🌍", label: "African Partner" },
  { id: "canadian", icon: "🍁", label: "Canadian Investor" },
  { id: "corporate", icon: "🏢", label: "Corporate / Institution" },
  { id: "community", icon: "🤝", label: "Community Supporter" },
] as const;

type ProfileId = (typeof PROFILES)[number]["id"];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvestorModal({ isOpen, onClose }: Props) {
  const [selected, setSelected] = useState<ProfileId | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setSelected(null);
      setEmail("");
      setError(null);
    }, 350);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || !email) return;
    setLoading(true);
    setError(null);
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const res = await fetch("/api/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: selected, email, timezone }),
      });
      if (!res.ok) throw new Error("Failed");
      try {
        localStorage.setItem(
          "african_investor_interest",
          JSON.stringify({ profile: selected, email, timestamp: new Date().toISOString() })
        );
      } catch {}
      setSubmitted(true);
    } catch {
      setError("Submission failed. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md" />
        <Dialog.Content
          aria-describedby="investor-modal-desc"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm shadow-2xl p-8"
          >
            {/* Close */}
            <button onClick={handleClose} className="absolute top-4 right-4 text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors" aria-label="Close">
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <span className="inline-block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#FBB03B] border border-[#FBB03B]/30 px-3 py-1 rounded-sm mb-4">
                      Investor Relations
                    </span>
                    <Dialog.Title className="font-[family-name:var(--font-montserrat)] font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] mb-2">
                      Join the AfriCan Vision
                    </Dialog.Title>
                    <Dialog.Description id="investor-modal-desc" className="text-[#9A9A9A] text-sm leading-relaxed">
                      Select your investor profile to receive a tailored information pack.
                    </Dialog.Description>
                  </div>

                  {/* Profile tiles */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {PROFILES.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { setSelected(p.id); setError(null); }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-sm border transition-all duration-200 text-center ${
                          selected === p.id
                            ? "border-[#FBB03B] bg-[#FBB03B]/10 text-[#F5F5F5]"
                            : "border-[#2A2A2A] bg-[#0D0D0D] text-[#9A9A9A] hover:border-[#FBB03B]/40 hover:text-[#F5F5F5]"
                        }`}
                      >
                        <span className="text-2xl">{p.icon}</span>
                        <span className="font-[family-name:var(--font-montserrat)] font-semibold text-xs uppercase tracking-wide leading-tight">
                          {p.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Email + submit */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="investor-email" className="sr-only">Email address</label>
                      <input
                        id="investor-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(null); }}
                        placeholder="Your email address"
                        className="w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#FBB03B]/60 rounded-sm px-4 py-3 text-[#F5F5F5] placeholder-[#9A9A9A]/60 text-sm outline-none transition-colors"
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-2 bg-[#ED1C24]/10 border border-[#ED1C24]/30 rounded-sm px-3 py-2.5">
                        <AlertCircle size={14} className="text-[#ED1C24] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-[#F5F5F5]">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!selected || !email || loading}
                      className="w-full bg-[#ED1C24] text-white font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-sm px-8 py-3.5 rounded-sm hover:bg-[#c8151c] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-[#ED1C24]/30 flex items-center justify-center gap-2"
                    >
                      {loading ? <><Loader2 size={16} className="animate-spin" />Sending…</> : "Send Me the Pack"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                    className="flex justify-center mb-6"
                  >
                    <Image src="/images/logo.png" alt="AfriCan" width={80} height={80} className="object-contain drop-shadow-lg" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <p className="font-[family-name:var(--font-montserrat)] font-extrabold text-2xl text-[#F5F5F5] mb-3">
                      Thank you — Blessing will be in touch.
                    </p>
                    <p className="text-[#9A9A9A] text-sm leading-relaxed max-w-sm mx-auto">
                      We&apos;ve noted your interest as a{" "}
                      <span className="text-[#FBB03B] font-semibold">
                        {PROFILES.find((p) => p.id === selected)?.label}
                      </span>
                      . A welcome email is on its way to your inbox.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 text-sm text-[#9A9A9A] hover:text-[#F5F5F5] font-[family-name:var(--font-montserrat)] uppercase tracking-widest underline underline-offset-4 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
