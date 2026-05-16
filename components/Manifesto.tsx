"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Manifesto() {
  const { t } = useLang();

  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-48 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 stripes opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-12 bg-gold" />
          <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
            {t.manifesto.section}
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-9">
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              {t.manifesto.words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.15 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`inline-block mr-3 ${
                    w.c === "lime"
                      ? "italic text-lime"
                      : w.c === "gold"
                      ? "italic text-gold"
                      : w.c === "shimmer"
                      ? "text-shimmer font-semibold"
                      : "text-cream"
                  }`}
                >
                  {w.t}
                </motion.span>
              ))}
            </p>
          </div>

          <div className="md:col-span-3 md:border-l md:border-ink-line md:pl-8 flex flex-col gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                {t.manifesto.signed}
              </div>
              <div className="font-serif italic text-3xl text-cream mt-2">
                Malcom Frago
              </div>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted leading-relaxed">
              {t.manifesto.role}
              <br />
              {t.manifesto.where}
              <br />
              {t.manifesto.year}
            </div>
            <div className="mt-4 h-24 relative">
              <svg viewBox="0 0 200 80" className="h-full">
                <motion.path
                  d="M5,55 C20,15 40,75 60,40 C80,5 100,65 120,30 C140,5 165,55 195,30"
                  fill="none"
                  stroke="#c9a96a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
