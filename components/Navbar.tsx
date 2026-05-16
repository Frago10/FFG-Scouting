"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLang();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const links = [
    { label: t.nav.who, href: "#who" },
    { label: t.nav.philosophy, href: "#philosophy" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.staff, href: "#staff" }
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-deep/70 border-b border-ink-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Left: logo (always justify-start) */}
        <a href="#top" className="group flex items-center gap-3 shrink-0 justify-self-start">
          <div className="relative h-9 w-9 grid place-items-center bg-ink border border-gold/30 group-hover:border-gold transition-colors">
            <span className="font-serif text-cream text-lg tracking-tight leading-none">
              F<span className="text-gold">F</span>G
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-cream text-sm tracking-wide">
              FFG-Scouting
            </span>
            <span className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
              Athlete Career Advisory
            </span>
          </div>
        </a>

        {/* Center: nav links, geometrically centered */}
        <ul className="hidden lg:flex items-center justify-self-center">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative px-3 xl:px-4 py-2 text-[11px] uppercase tracking-ultrawide font-mono text-cream-muted hover:text-cream transition-colors flex items-center gap-2"
              >
                <span className="text-gold/60">0{i + 1}</span>
                <span>{l.label}</span>
                <span className="absolute left-3 xl:left-4 right-3 xl:right-4 bottom-1 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: lang toggle + CTA */}
        <div className="flex items-center gap-3 justify-self-end">
          <LanguageToggle />
          <a
            href="#contact"
            className="group relative hidden sm:inline-flex items-center gap-2 border border-cream/30 hover:border-lime hover:bg-lime hover:text-black px-4 py-2 text-[11px] uppercase tracking-ultrawide font-mono transition-all whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime group-hover:bg-black animate-pulse" />
            {t.nav.book}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
