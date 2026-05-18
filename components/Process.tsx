"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const { t } = useLang();

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.process.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tightest">
              {t.process.title1}
              <br />
              <span className="italic text-cream/70">{t.process.title2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:items-end">
            <p className="text-cream/75 leading-relaxed">{t.process.sub}</p>
          </div>
        </div>

        {/* Horizontal pathway */}
        <div className="relative">
          {/* Track */}
          <div className="hidden md:block absolute left-0 right-0 top-[58px] h-px bg-ink-line" />
          <motion.div
            className="hidden md:block absolute left-0 top-[58px] h-px bg-gradient-to-r from-gold via-cream to-lime"
            style={{ width: lineWidth }}
          />

          <div className="grid md:grid-cols-4 gap-px bg-ink-line border border-ink-line md:bg-transparent md:border-0">
            {t.process.steps.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-ink-deep p-6 md:p-8 group"
              >
                {/* Step head */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-serif text-shimmer text-4xl tabular leading-none">
                    {s.k}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-ultrawide text-gold border border-gold/30 px-2 py-1">
                    {s.tag}
                  </span>
                </div>

                {/* Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-2 h-4 w-4 items-center justify-center">
                  <div className="absolute inset-0 bg-ink-deep border border-gold" />
                  <div className="absolute inset-[3px] bg-gold" />
                </div>

                <div className="font-serif text-2xl md:text-3xl text-cream leading-tight mb-3 mt-4 md:mt-8 break-words">
                  {s.t}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed break-words">{s.d}</p>

                {/* Arrow between steps */}
                {i < t.process.steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-[58px] -translate-y-1/2 translate-x-1/2 z-10 h-6 w-6 items-center justify-center bg-ink-deep border border-ink-line text-gold text-xs">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
