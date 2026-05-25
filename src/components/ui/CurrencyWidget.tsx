"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Rates = { ZWL: number; CAD: number; USD: number };

const CACHE_KEY = "african_fx_cache";
const FALLBACK: Rates = { ZWL: 36000, CAD: 1.36, USD: 1 };

const CURRENCIES = [
  { code: "USD", symbol: "$", label: "US Dollar", flag: "🇺🇸" },
  { code: "CAD", symbol: "CA$", label: "Canadian Dollar", flag: "🇨🇦" },
  { code: "ZWL", symbol: "Z$", label: "Zimbabwe Dollar", flag: "🇿🇼" },
] as const;

type CurrencyCode = "USD" | "CAD" | "ZWL";

function toUSD(amount: number, code: CurrencyCode, rates: Rates): number {
  if (code === "USD") return amount;
  return amount / rates[code];
}

function fromUSD(usd: number, code: CurrencyCode, rates: Rates): number {
  if (code === "USD") return usd;
  return usd * rates[code];
}

function fmt(n: number, code: CurrencyCode): string {
  if (isNaN(n) || !isFinite(n)) return "";
  const decimals = code === "ZWL" ? 0 : 2;
  return n.toFixed(decimals);
}

export default function CurrencyWidget() {
  const [open, setOpen] = useState(false);
  const [rates, setRates] = useState<Rates>(FALLBACK);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [amounts, setAmounts] = useState<Record<CurrencyCode, string>>({
    USD: "1",
    CAD: "",
    ZWL: "",
  });
  const initiated = useRef(false);

  const applyRates = useCallback((base: CurrencyCode, value: string, r: Rates) => {
    const num = parseFloat(value);
    if (!value || isNaN(num)) {
      setAmounts({ USD: "", CAD: "", ZWL: "" });
      return;
    }
    const usd = toUSD(num, base, r);
    setAmounts({
      USD: base === "USD" ? value : fmt(usd, "USD"),
      CAD: base === "CAD" ? value : fmt(fromUSD(usd, "CAD", r), "CAD"),
      ZWL: base === "ZWL" ? value : fmt(fromUSD(usd, "ZWL", r), "ZWL"),
    });
  }, []);

  useEffect(() => {
    if (initiated.current) return;
    initiated.current = true;

    // Try cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { rates: r, ts } = JSON.parse(cached) as { rates: Rates; ts: number };
        if (Date.now() - ts < 6 * 60 * 60 * 1000) {
          setRates(r);
          setLastUpdated(new Date(ts).toLocaleTimeString());
          applyRates("USD", "1", r);
          return;
        }
      }
    } catch {}

    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        const r: Rates = {
          USD: 1,
          CAD: data.rates?.CAD ?? FALLBACK.CAD,
          ZWL: data.rates?.ZWL ?? FALLBACK.ZWL,
        };
        setRates(r);
        const now = Date.now();
        setLastUpdated(new Date(now).toLocaleTimeString());
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ rates: r, ts: now }));
        } catch {}
        applyRates("USD", "1", r);
      })
      .catch(() => {
        setRates(FALLBACK);
        applyRates("USD", "1", FALLBACK);
      });
  }, [applyRates]);

  const handleChange = (code: CurrencyCode, value: string) => {
    setAmounts((prev) => ({ ...prev, [code]: value }));
    applyRates(code, value, rates);
  };

  return (
    <div className="fixed bottom-[4.5rem] right-6 z-40">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(true)}
            aria-label="Open currency converter"
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#FBB03B]/50 text-lg flex items-center justify-center shadow-lg hover:border-[#FBB03B] transition-colors"
          >
            💱
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.22 }}
            className="w-72 bg-[#1A1A1A] border border-[#FBB03B]/40 rounded-sm shadow-2xl shadow-[#FBB03B]/10 p-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-[family-name:var(--font-montserrat)] font-bold text-[#FBB03B] uppercase tracking-wider">
                  Currency
                </span>
                <span className="text-xs text-[#9A9A9A]">Converter</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Currency inputs */}
            <div className="space-y-2">
              {CURRENCIES.map(({ code, symbol, label, flag }) => (
                <div
                  key={code}
                  className="flex items-center gap-2 bg-[#0D0D0D] border border-[#2A2A2A] rounded-sm px-3 py-2 focus-within:border-[#FBB03B]/60 transition-colors"
                >
                  <span className="text-base select-none">{flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-[#9A9A9A] font-[family-name:var(--font-montserrat)] uppercase tracking-wider leading-none mb-0.5">
                      {label}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-[#FBB03B] font-[family-name:var(--font-montserrat)] font-semibold w-7 flex-shrink-0">
                        {symbol}
                      </span>
                      <input
                        type="number"
                        min="0"
                        value={amounts[code as CurrencyCode]}
                        onChange={(e) => handleChange(code as CurrencyCode, e.target.value)}
                        className="w-full bg-transparent text-[#F5F5F5] text-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-[#2A2A2A]">
              <p className="text-[10px] text-[#9A9A9A] text-center font-[family-name:var(--font-montserrat)]">
                {lastUpdated ? `Rates updated: ${lastUpdated}` : "Fetching live rates…"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
