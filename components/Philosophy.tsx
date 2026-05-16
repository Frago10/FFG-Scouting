"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Philosophy() {
  const { t, lang } = useLang();

  return (
    <section
      id="philosophy"
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Big watermark word */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-serif text-[clamp(8rem,22vw,18rem)] leading-none text-cream/[0.025] select-none pointer-events-none whitespace-nowrap rotate-[-90deg] origin-left">
        PHILOSOPHY
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.philosophy.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tightest">
              {t.philosophy.title1}
              <br />
              <span className="italic text-cream/70">{t.philosophy.title2}</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-px bg-ink-line border border-ink-line">
          {t.philosophy.mantras.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`bg-ink-deep p-8 md:p-10 ${
                i % 2 === 0 ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-xs text-gold tabular shrink-0 mt-3">
                  0{i + 1}
                </span>
                <p className="font-serif italic text-3xl md:text-4xl leading-[1.1] tracking-tight text-cream">
                  {lang === "en" ? m.en : m.es}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-ink-line flex items-center gap-3">
          <span className="h-1 w-1 rounded-full bg-gold" />
          <p className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
            {t.philosophy.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
