"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function WhoWeServe() {
  const { t } = useLang();

  return (
    <section
      id="serve"
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.serve.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tightest">
              {t.serve.title1}
              <br />
              <span className="italic text-cream/70">{t.serve.title2}</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {t.serve.cards.map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative bg-ink-deep p-6 md:p-8 group hover:bg-ink-soft transition-colors min-h-[300px] flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-6">
                <span className="font-serif text-shimmer text-5xl tabular leading-none">
                  {c.k}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-ultrawide text-gold/70 text-right">
                  {t.ui.serveLabels[i]}
                </span>
              </div>
              <div className="font-serif text-2xl md:text-3xl text-cream leading-tight mb-4 break-words">
                {c.t}
              </div>
              <p className="text-cream/70 text-sm leading-relaxed mt-auto">{c.d}</p>
              <span className="absolute top-0 left-0 h-px w-0 bg-lime group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
