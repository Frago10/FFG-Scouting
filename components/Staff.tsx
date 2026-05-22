"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { asset } from "@/lib/asset";

const memberImage: Record<string, string> = {
  malcom: asset("/images/malcom-founder.png"),
  "advisor-2": asset("/images/spain.jpg"),
  "advisor-3": asset("/images/usa-greenville.jpg")
};

export default function Staff() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  // Lock scroll while modal open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const founder = t.staff.members.find((m) => m.id === "malcom")!;
  const advisors = t.staff.members.filter((m) => m.id !== "malcom");

  return (
    <section
      id="staff"
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.staff.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] tracking-tightest">
              {t.staff.title1}
              <br />
              <span className="italic text-cream/70">{t.staff.title2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex md:items-end">
            <p className="text-cream/75 leading-relaxed">{t.staff.sub}</p>
          </div>
        </div>

        {/* Founder card — split layout: portrait left + bio right */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          onClick={() => setOpen(founder.id)}
          className="group w-full text-left bg-ink-deep border border-ink-line hover:border-gold/50 transition-colors mb-px"
        >
          <div className="grid md:grid-cols-12 items-stretch">
            {/* Portrait — aspect matches the source, full image visible */}
            <div className="md:col-span-4 relative aspect-[4/5] md:aspect-auto md:min-h-[520px] overflow-hidden bg-cream border-b md:border-b-0 md:border-r border-ink-line">
              <img
                src={memberImage[founder.id]}
                alt={founder.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              />
              {/* Subtle bottom gradient only, so the entire face/torso stays visible */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-deep/40 to-transparent" />

              <div className="absolute top-3 left-3 h-5 w-5 border-l border-t border-ink-deep/40" />
              <div className="absolute top-3 right-3 h-5 w-5 border-r border-t border-ink-deep/40" />
              <div className="absolute bottom-3 left-3 h-5 w-5 border-l border-b border-ink-deep/40" />
              <div className="absolute bottom-3 right-3 h-5 w-5 border-r border-b border-ink-deep/40" />

              <div className="absolute top-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-ultrawide text-ink-deep/70">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                  01 / FOUNDER
                </span>
                <span>{founder.locale}</span>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-8 p-6 md:p-10 flex flex-col gap-4 md:gap-5">
              <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold break-words">
                {founder.role}
              </div>
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[0.95] tracking-tightest break-words">
                Malcom <span className="italic text-shimmer">Frago.</span>
              </div>
              <p className="text-cream/75 leading-relaxed max-w-2xl break-words">
                {founder.short}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {founder.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-ultrawide border border-gold/40 text-gold px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-ink-line flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                  Click to expand full profile
                </span>
                <span className="inline-flex items-center gap-2 bg-lime text-ink-deep px-4 py-2 font-mono text-[10px] uppercase tracking-ultrawide group-hover:gap-3 transition-all whitespace-nowrap">
                  {t.staff.open} <span>→</span>
                </span>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Advisor cards */}
        <div className="grid md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          {advisors.map((m, i) => (
            <div
              key={m.id}
              className="relative bg-ink-deep group cursor-default"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={memberImage[m.id]}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-ultrawide text-cream/80">
                  <span>0{i + 2} / ADVISOR</span>
                  <span>{m.locale}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold mb-2">
                  {m.role}
                </div>
                <div className="font-serif text-2xl md:text-3xl text-cream leading-tight mb-3">
                  {m.name}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed mb-5">
                  {m.short}
                </p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] uppercase tracking-ultrawide border border-cream/20 text-cream-muted px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open === "malcom" && <MalcomModal onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Malcom Modal — full trajectory                              */
/* ─────────────────────────────────────────────────────────── */

function MalcomModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const m = t.staff.malcom;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const images = [
    asset("/images/aspire.jpg"),
    asset("/images/saprissa-training.jpg"),
    asset("/images/usa-celebration.jpg"),
    asset("/images/costa-rica.jpg"),
    asset("/images/spain.jpg")
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-ink-deep/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-4 md:inset-10 bg-ink-deep border border-ink-line overflow-y-auto"
      >
        {/* Sticky modal header */}
        <div className="sticky top-0 z-30 bg-ink-deep/90 backdrop-blur border-b border-ink-line">
          <div className="px-6 md:px-10 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-ultrawide text-gold shrink-0">
                {m.kicker}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted truncate hidden md:inline">
                · FFG-Scouting · ACTIVE 25/26
              </span>
            </div>
            <button
              onClick={onClose}
              className="group inline-flex items-center gap-2 border border-cream/30 hover:border-lime hover:bg-lime hover:text-black px-3 py-2 font-mono text-[10px] uppercase tracking-ultrawide transition-colors"
            >
              {t.staff.close}
              <span className="h-3 w-3 grid place-items-center text-[10px]">✕</span>
            </button>
          </div>
        </div>

        {/* Hero block */}
        <div className="relative grid md:grid-cols-12 gap-px bg-ink-line border-b border-ink-line">
          <div className="md:col-span-5 relative aspect-[4/5] md:aspect-auto md:min-h-[640px] bg-cream overflow-hidden">
            <img
              src={asset("/images/malcom-founder.png")}
              alt="Malcom Frago"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-deep/30 to-transparent" />
          </div>
          <div className="md:col-span-7 bg-ink-deep p-6 md:p-12 flex flex-col gap-5 md:gap-6 justify-center">
            <div className="flex items-start gap-3">
              <span className="h-px w-8 md:w-12 bg-gold mt-2 shrink-0" />
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-ultrawide text-gold break-words">
                Founder · Active Pro Footballer · Lead Advisor
              </span>
            </div>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tightest break-words">
              Malcom <span className="italic text-shimmer">Frago.</span>
            </h3>
            <p className="text-cream/80 leading-relaxed max-w-2xl break-words">{m.intro}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink-line border border-ink-line mt-2">
              {m.stats.map((s) => (
                <div key={s.l} className="bg-ink-deep p-4">
                  <div className="font-serif text-shimmer text-2xl md:text-3xl tabular leading-none">
                    {s.v}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-ultrawide text-cream-muted mt-2 break-words">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={m.social.igUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-cream/30 hover:border-gold hover:text-gold px-4 py-2 font-mono text-[10px] uppercase tracking-ultrawide transition-colors"
              >
                Instagram · {m.social.ig}
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dual identity */}
        <div className="grid md:grid-cols-2 gap-px bg-ink-line border-b border-ink-line">
          <div className="bg-ink-deep p-8 md:p-12 relative">
            <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-ultrawide text-lime">
              01 / PLAYER
            </span>
            <h4 className="font-serif text-4xl text-cream leading-tight">
              {m.dual.playerTitle}
            </h4>
            <p className="mt-2 font-serif italic text-2xl text-lime">
              {m.dual.playerSub}
            </p>
            <p className="mt-6 text-cream/75 leading-relaxed">
              {m.dual.playerBody}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 pt-4 border-t border-ink-line">
              {m.dual.playerBullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-lime shrink-0" />
                  <span className="text-cream/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink-deep p-8 md:p-12 relative">
            <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-ultrawide text-gold">
              02 / ADVISOR
            </span>
            <h4 className="font-serif text-4xl text-cream leading-tight">
              {m.dual.scouterTitle}
            </h4>
            <p className="mt-2 font-serif italic text-2xl text-gold">
              {m.dual.scouterSub}
            </p>
            <p className="mt-6 text-cream/75 leading-relaxed">
              {m.dual.scouterBody}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 pt-4 border-t border-ink-line">
              {m.dual.scouterBullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-gold shrink-0" />
                  <span className="text-cream/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trajectory */}
        <div className="relative px-6 md:px-12 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-gold" />
            <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
              Trajectory · Five passports
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-ink-line -translate-x-1/2" />
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold via-cream to-lime -translate-x-1/2"
              style={{ height: lineY }}
            />

            <div className="space-y-16 md:space-y-24">
              {m.chapters.map((c, i) => {
                const isRight = i % 2 === 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: ref, once: false, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative grid md:grid-cols-2 gap-6 md:gap-12"
                  >
                    <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className="relative h-4 w-4">
                        <div className="absolute inset-0 bg-ink-deep border border-gold" />
                        <div className="absolute inset-[3px] bg-gold" />
                      </div>
                    </div>

                    <div
                      className={`pl-12 md:pl-0 ${
                        isRight ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"
                      }`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden border border-ink-line bg-ink-soft">
                        <img
                          src={images[i]}
                          alt={c.place}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/20 to-transparent" />
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-ultrawide text-cream/80">
                          <span>
                            {c.flag} {c.place}
                          </span>
                          <span>{c.coord}</span>
                        </div>
                        <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-ultrawide text-gold">
                          CH. 0{i + 1}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`pl-12 md:pl-0 ${
                        isRight ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isRight ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                          {c.year}
                        </span>
                        <span className="h-px w-8 bg-gold" />
                      </div>
                      <h5 className="font-serif text-3xl md:text-5xl leading-[0.95] tracking-tightest">
                        {c.title}
                      </h5>
                      <div
                        className={`mt-2 font-serif italic text-xl ${
                          isRight ? "text-gold" : "text-lime"
                        }`}
                      >
                        {c.place} · {c.flag}
                      </div>
                      <p
                        className={`mt-4 text-cream/75 leading-relaxed max-w-md text-sm ${
                          isRight ? "md:ml-auto" : ""
                        }`}
                      >
                        {c.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer of modal */}
        <div className="border-t border-ink-line px-6 md:px-12 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
          <span>END OF PROFILE</span>
          <span>FFG-SCOUTING · CONFIDENTIAL</span>
          <button
            onClick={onClose}
            className="text-cream hover:text-gold transition-colors"
          >
            {t.staff.close} ✕
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
