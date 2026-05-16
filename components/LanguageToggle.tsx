"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`relative inline-flex items-center bg-ink-soft border border-ink-line ${
        compact ? "p-0.5" : "p-1"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultrawide transition-colors ${
            lang === l ? "text-ink-deep" : "text-cream-muted hover:text-cream"
          }`}
          aria-pressed={lang === l}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-cream"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative">{l}</span>
        </button>
      ))}
    </div>
  );
}
