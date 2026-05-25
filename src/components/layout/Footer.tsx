import { MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "The Farm", href: "#crops" },
  { label: "Innovation", href: "#innovation" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#F5F5F5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="AfriCan — Exwick Farm"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-[#9A9A9A] text-sm leading-relaxed max-w-xs">
              Bridging Continents. Building Futures. A premium agri-tech brand
              uniting Africa and Canada through sustainable agriculture and
              innovation.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3 mt-6">
              {["Li", "Tw", "Fb", "IG"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-xs text-[#9A9A9A] hover:border-[#009245] hover:text-[#009245] transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-xs text-[#FBB03B] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest text-xs text-[#FBB03B] mb-6">
              Our Locations
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#009245] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#F5F5F5] text-sm font-medium">Africa</div>
                  <div className="text-[#9A9A9A] text-xs">Exwick Farm, Zimbabwe</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ED1C24] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#F5F5F5] text-sm font-medium">Canada</div>
                  <div className="text-[#9A9A9A] text-xs">AfriCan HQ, Canada</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FBB03B] flex-shrink-0" />
                <span className="text-[#9A9A9A] text-xs">contact@africanfarm.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FBB03B] flex-shrink-0" />
                <span className="text-[#9A9A9A] text-xs">+1 (Canada) | +263 (Zimbabwe)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F5F5F5]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9A9A9A] text-xs">
            © 2025 AfriCan. All rights reserved.
          </p>
          <p className="text-[#9A9A9A] text-xs">
            Exwick Farm —{" "}
            <span className="text-[#009245]">Powered by AfriCan Innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
