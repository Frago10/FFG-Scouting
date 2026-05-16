"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 stripes opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.services.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tightest">
              {t.services.title1}
              <br />
              <span className="italic text-cream/70">{t.services.title2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:items-end">
            <p className="text-cream/75 leading-relaxed">{t.services.sub}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {t.services.items.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative bg-ink-deep p-6 md:p-8 flex flex-col group transition-colors ${
                s.best ? "ring-1 ring-gold/40" : "hover:bg-ink-soft"
              }`}
            >
              {s.best && (
                <span className="absolute -top-[1px] right-4 bg-gold text-ink-deep px-3 py-1 font-mono text-[9px] uppercase tracking-ultrawide">
                  RECOMMENDED
                </span>
              )}

              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-ultrawide text-gold">
                  {s.k}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                  {t.services.currency}
                </span>
              </div>

              <div className="font-serif text-xl md:text-2xl text-cream leading-tight mb-5 min-h-[60px]">
                {s.t}
              </div>

              <div className="mb-2">
                <span
                  className={`font-serif text-4xl md:text-5xl tabular leading-none ${
                    s.best ? "text-shimmer" : "text-cream"
                  }`}
                >
                  {s.price}
                </span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted mb-6">
                {s.unit}
              </div>

              <p className="text-cream/70 text-sm leading-relaxed mb-6 flex-1">
                {s.d}
              </p>

              <a
                href="#contact"
                className={`group/btn inline-flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-ultrawide border px-4 py-3 transition-colors ${
                  s.best
                    ? "border-gold bg-gold text-ink-deep hover:bg-cream hover:border-cream"
                    : "border-cream/30 text-cream hover:border-gold hover:text-gold"
                }`}
              >
                {t.nav.book}
                <span className="transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
