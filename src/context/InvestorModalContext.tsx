"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import InvestorModal from "@/components/ui/InvestorModal";

interface InvestorModalContextValue {
  openModal: () => void;
}

const InvestorModalContext = createContext<InvestorModalContextValue>({
  openModal: () => {},
});

export function useInvestorModal() {
  return useContext(InvestorModalContext);
}

export function InvestorModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InvestorModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <InvestorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </InvestorModalContext.Provider>
  );
}
