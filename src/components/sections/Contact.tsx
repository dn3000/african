"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const inquiryTypes = ["Investor", "Export Partner", "Community", "Media", "Other"];

const countries = [
  { code: "ZW", label: "Zimbabwe (+263)" },
  { code: "CA", label: "Canada (+1)" },
  { code: "US", label: "United States (+1)" },
  { code: "GB", label: "United Kingdom (+44)" },
  { code: "ZA", label: "South Africa (+27)" },
  { code: "NG", label: "Nigeria (+234)" },
  { code: "KE", label: "Kenya (+254)" },
  { code: "AU", label: "Australia (+61)" },
  { code: "DE", label: "Germany (+49)" },
  { code: "FR", label: "France (+33)" },
  { code: "OTHER", label: "Other" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("AfriCan contact form submission:", form);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#0D0D0D] border border-[#2A2A2A] text-[#F5F5F5] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#009245] transition-colors placeholder-[#9A9A9A]/50";

  return (
    <section id="contact" className="bg-[#0D0D0D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel color="green">Get In Touch</SectionLabel>
          <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-[#F5F5F5] mt-4">
            Partner With AfriCan
          </h2>
          <p className="text-[#9A9A9A] mt-4 max-w-lg mx-auto">
            Whether you&apos;re an investor, export partner, or community member — we&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-[#1A1A1A] rounded-lg p-8 flex flex-col justify-between border border-[#2A2A2A]"
          >
            <div>
              <div className="mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.svg"
                  alt="AfriCan logo"
                  className="h-9 w-auto object-contain"
                />
              </div>

              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-[#F5F5F5] mb-2">
                AfriCan — Exwick Farm
              </h3>
              <p className="text-[#9A9A9A] text-sm mb-8">Contact: Blessing Jumo</p>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#009245]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#009245]" />
                  </div>
                  <div>
                    <div className="text-[#F5F5F5] text-sm font-medium">Locations</div>
                    <div className="text-[#9A9A9A] text-xs mt-0.5">
                      Zimbabwe (Africa) | Canada
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBB03B]/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#FBB03B]" />
                  </div>
                  <div>
                    <div className="text-[#F5F5F5] text-sm font-medium">Email</div>
                    <div className="text-[#9A9A9A] text-xs mt-0.5">contact@africanfarm.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#ED1C24]/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#ED1C24]" />
                  </div>
                  <div>
                    <div className="text-[#F5F5F5] text-sm font-medium">Phone</div>
                    <div className="text-[#9A9A9A] text-xs mt-0.5">+1 (Canada) | +263 (Zimbabwe)</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-[#2A2A2A]">
              <div className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#9A9A9A] mb-2">
                Currency
              </div>
              <div className="flex gap-3">
                {["ZWL", "CAD", "USD"].map((c) => (
                  <span
                    key={c}
                    className="bg-[#2A2A2A] text-[#F5F5F5] text-xs font-[family-name:var(--font-montserrat)] font-bold px-3 py-1 rounded-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-[#1A1A1A] rounded-lg p-8 border border-[#2A2A2A]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl text-[#F5F5F5] mb-3">
                  Message Received!
                </h3>
                <p className="text-[#9A9A9A] max-w-sm">
                  Thank you for reaching out. The AfriCan team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-2">
                    Inquiry Type *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, inquiry: type }))}
                        className={`px-4 py-2 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest rounded-sm border transition-all ${
                          form.inquiry === type
                            ? "bg-[#009245] border-[#009245] text-white"
                            : "border-[#2A2A2A] text-[#9A9A9A] hover:border-[#009245]/40 hover:text-[#F5F5F5]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest text-[#9A9A9A] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your interest in AfriCan / Exwick Farm..."
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ED1C24] text-white font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-sm py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-[#c8151c] shadow-lg hover:shadow-[#ED1C24]/30 transition-all duration-300"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
