"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function WhoWeAre() {
  const { t } = useLang();

  return (
    <section
      id="who"
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 stripes opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.who.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tightest">
              {t.who.title1}
              <br />
              <span className="italic text-cream/70">{t.who.title2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:items-end">
            <p className="text-cream/75 leading-relaxed font-serif text-2xl italic text-gold">
              {t.brand.tagline}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          {t.who.pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-ink-deep p-8 md:p-10 group hover:bg-ink-soft transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold mb-6">
                {p.k}
              </div>
              <div className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tightest text-cream mb-4 break-words">
                {p.t}
              </div>
              <p className="text-cream/70 leading-relaxed break-words">{p.d}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
