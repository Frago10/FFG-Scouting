"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const { t } = useLang();

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-deep grain"
    >
      {/* Background image with parallax — boots & ball */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2000&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/40 via-ink-deep/70 to-ink-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/30 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none z-[1]" />

      <div className="absolute top-0 bottom-0 left-6 lg:left-10 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-[2]" />
      <div className="absolute top-0 bottom-0 right-6 lg:right-10 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-[2]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 min-h-[100svh] flex flex-col justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-6 pt-12 md:pt-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
              {t.hero.active}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
            <span>FFG-SCOUTING</span>
            <span>SAN JOSÉ ↔ MADRID</span>
            <span>EST. MMXXVI</span>
          </div>
        </motion.div>

        <div className="flex-1 flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.hero.tag}
              </span>
            </motion.div>

            <h1 className="font-serif text-cream leading-[0.85] tracking-tightest">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(3.5rem,12vw,11rem)] font-light"
              >
                {t.hero.first}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(3.5rem,12vw,11rem)] italic text-shimmer font-medium -mt-2 md:-mt-6"
              >
                {t.hero.last}
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8"
            >
              <p className="md:col-span-6 font-serif text-xl md:text-2xl text-cream/85 leading-snug max-w-xl">
                {t.hero.sub}
              </p>

              <div className="md:col-span-5 md:col-start-8 flex flex-col gap-6">
                <div className="grid grid-cols-3 gap-px bg-ink-line border border-ink-line">
                  {t.hero.stats.map((s) => (
                    <div key={s.l} className="bg-ink-deep/60 backdrop-blur-sm p-4">
                      <div className="font-serif text-3xl text-cream tabular">
                        {s.v}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-ultrawide text-cream-muted mt-1">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-cream text-ink-deep px-6 py-3 font-mono text-[11px] uppercase tracking-ultrawide hover:bg-lime transition-colors"
                  >
                    {t.hero.ctaPrimary}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="#philosophy"
                    className="group inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-[11px] uppercase tracking-ultrawide text-cream hover:border-gold hover:text-gold transition-colors"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex items-end justify-between gap-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted max-w-xs leading-relaxed">
            <span className="text-gold">{t.hero.footnote}</span>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
            <span className="h-8 w-px bg-cream/30" />
            {t.hero.scroll}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
