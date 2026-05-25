"use client";

import { ReactNode } from "react";
import { InvestorModalProvider } from "@/context/InvestorModalContext";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CurrencyWidget from "@/components/ui/CurrencyWidget";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <InvestorModalProvider>
      {children}
      <ScrollToTop />
      <CurrencyWidget />
      <WhatsAppButton />
    </InvestorModalProvider>
  );
}
