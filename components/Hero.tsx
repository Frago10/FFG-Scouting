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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const { t } = useLang();

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-deep grain"
    >
      {/* Background — pure CSS gold-dust gradient, infinitely sharp */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="hero-gold-bg absolute inset-0" />
        {/* Vignettes for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/30 via-transparent to-ink-deep/30" />
      </motion.div>

      {/* Decorative side rails */}
      <div className="absolute top-0 bottom-0 left-6 lg:left-10 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-[2]" />
      <div className="absolute top-0 bottom-0 right-6 lg:right-10 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-[2]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 min-h-[100svh] flex flex-col"
      >
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-12 md:pt-16"
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

        {/* Center stage */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-14 md:py-20">
          {/* Tagline / category */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <span className="h-px w-8 md:w-12 bg-gold" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-ultrawide text-gold">
              {t.hero.tag}
            </span>
            <span className="h-px w-8 md:w-12 bg-gold" />
          </motion.div>

          {/* FFG Logo as main hero element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="sr-only">FFG-Scouting</h1>
            <img
              src="/images/ffg-logo.jpg"
              alt="FFG · Frago Football Group"
              className="block w-[260px] sm:w-[320px] md:w-[400px] lg:w-[440px] h-auto select-none mix-blend-screen drop-shadow-[0_20px_60px_rgba(201,169,106,0.25)]"
              draggable={false}
            />
            {/* Faint corner brackets */}
            <span className="hidden md:block absolute -top-4 -left-6 h-6 w-6 border-l border-t border-gold/40" />
            <span className="hidden md:block absolute -top-4 -right-6 h-6 w-6 border-r border-t border-gold/40" />
            <span className="hidden md:block absolute -bottom-4 -left-6 h-6 w-6 border-l border-b border-gold/40" />
            <span className="hidden md:block absolute -bottom-4 -right-6 h-6 w-6 border-r border-b border-gold/40" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 md:mt-14 font-serif italic text-3xl md:text-5xl lg:text-6xl text-cream leading-tight tracking-tight max-w-3xl"
          >
            {t.hero.first}{" "}
            <span className="text-gold">{t.hero.last}</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-8 md:mt-10 text-cream/80 leading-relaxed max-w-2xl text-base md:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-cream text-ink-deep px-6 py-3 font-mono text-[11px] uppercase tracking-ultrawide hover:bg-lime transition-colors"
            >
              {t.hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#philosophy"
              className="group inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-[11px] uppercase tracking-ultrawide text-cream hover:border-gold hover:text-gold transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
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
