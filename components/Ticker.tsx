"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Ticker() {
  const { t } = useLang();

  // Interleave ticker items with the gold separator ✦
  const items: string[] = [];
  t.ticker.forEach((it) => {
    items.push(it);
    items.push("✦");
  });

  return (
    <div className="relative overflow-hidden border-y border-ink-line bg-ink-soft py-4">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-6 font-serif italic text-2xl md:text-3xl text-cream/80 tracking-tight"
          >
            {it === "✦" ? <span className="text-gold">✦</span> : it}
          </span>
        ))}
      </div>
    </div>
  );
}
