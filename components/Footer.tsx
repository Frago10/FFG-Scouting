"use client";

import { useLang } from "@/lib/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative bg-ink-deep border-t border-ink-line overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.85] tracking-tightest">
              F<span className="italic text-gold">F</span>G
            </div>
            <div className="font-mono text-[11px] uppercase tracking-ultrawide text-gold mt-2">
              FFG-Scouting · Athlete Career Advisory
            </div>
            <p className="font-mono text-[11px] uppercase tracking-ultrawide text-cream-muted mt-4 max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="mt-6">
              <LanguageToggle />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold mb-4">
              {t.footer.site}
            </div>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a href="#who" className="hover:text-gold">
                  {t.nav.who}
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-gold">
                  {t.nav.philosophy}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#staff" className="hover:text-gold">
                  {t.nav.staff}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold mb-4">
              {t.footer.contact}
            </div>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  className="hover:text-gold"
                  href="https://wa.me/34642190257?text=PATH"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp ES → +34 642 190 257
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gold"
                  href="https://wa.me/50672716335?text=PATH"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp CR → +506 7271 6335
                </a>
              </li>
              <li>Madrid · San José</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold mb-4">
              {t.footer.network}
            </div>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  className="hover:text-gold"
                  href="https://instagram.com/athletepathfrago"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram → @athletepathfrago
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gold"
                  href="https://instagram.com/_fragom11"
                  target="_blank"
                  rel="noreferrer"
                >
                  Founder IG → @_fragom11
                </a>
              </li>
              <li>
                <a className="hover:text-gold" href="#staff">
                  Staff profiles →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-ink-line font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
          <span>{t.footer.rights}</span>
          <span>{t.footer.designed}</span>
          <span>{t.footer.version}</span>
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 font-serif text-[clamp(8rem,30vw,28rem)] leading-none text-cream/[0.03] select-none pointer-events-none whitespace-nowrap">
        FFG-SCOUTING
      </div>
    </footer>
  );
}
