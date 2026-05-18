"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "loading") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus({ kind: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus({
          kind: "error",
          message: json.error || "Something went wrong. Please try WhatsApp."
        });
        return;
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try WhatsApp or Instagram."
      });
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-ink-deep border-t border-ink-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-ultrawide text-gold">
                {t.contact.section}
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tightest">
              {t.contact.title1}
              <br />
              <span className="italic text-shimmer">{t.contact.title2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 text-cream/70 leading-relaxed">
            {t.contact.sub}
          </div>
        </div>

        {/* Quick step pills */}
        <div className="grid md:grid-cols-3 gap-px bg-ink-line border border-ink-line mb-px">
          {t.contact.steps.map((s, i) => (
            <div key={i} className="bg-ink-deep p-5 flex items-start gap-4">
              <span className="font-serif text-shimmer text-2xl tabular leading-none shrink-0">
                0{i + 1}
              </span>
              <div className="font-mono text-[11px] uppercase tracking-ultrawide text-cream leading-relaxed">
                {s}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-px bg-ink-line border border-ink-line">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="md:col-span-7 bg-ink-deep p-6 md:p-12 space-y-6 relative"
          >
            {/* Honeypot — hidden from users, bots fill it */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              aria-hidden
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t.contact.name} name="name" required />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                  {t.contact.role}
                </label>
                <select
                  name="role"
                  className="mt-2 w-full bg-transparent border-b border-ink-line py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                >
                  {t.contact.roles.map((r) => (
                    <option key={r} className="bg-ink-deep">
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Field label={t.contact.email} name="email" type="email" required />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full bg-transparent border-b border-ink-line py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={status.kind === "loading"}
                type="submit"
                className="group inline-flex items-center gap-3 bg-lime text-ink-deep px-6 py-3 font-mono text-[11px] uppercase tracking-ultrawide hover:bg-cream transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.kind === "loading" ? "Sending…" : t.contact.transmit}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.button>

              <AnimatePresence mode="wait">
                {status.kind === "success" && (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-ultrawide text-lime"
                  >
                    <span className="h-2 w-2 rounded-full bg-lime" />
                    Message sent — we'll reply within 48h.
                  </motion.div>
                )}
                {status.kind === "error" && (
                  <motion.div
                    key="err"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-ultrawide text-gold"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

          {/* Direct channels */}
          <div className="md:col-span-5 bg-ink-deep p-8 md:p-12 flex flex-col gap-5">
            <a
              href="https://wa.me/34642190257?text=PATH"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 border border-ink-line p-5 hover:border-lime hover:bg-ink-soft transition-colors"
            >
              <span className="grid place-items-center h-10 w-10 bg-lime/10 border border-lime/40 text-lime shrink-0">
                <WhatsappIcon />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                  {t.contact.whatsappEs}
                </div>
                <div className="font-serif text-xl text-cream mt-1 tabular">
                  +34 642 190 257
                </div>
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold/70 mt-1">
                  send 'PATH' →
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/50672716335?text=PATH"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 border border-ink-line p-5 hover:border-lime hover:bg-ink-soft transition-colors"
            >
              <span className="grid place-items-center h-10 w-10 bg-lime/10 border border-lime/40 text-lime shrink-0">
                <WhatsappIcon />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                  {t.contact.whatsappCr}
                </div>
                <div className="font-serif text-xl text-cream mt-1 tabular">
                  +506 7271 6335
                </div>
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold/70 mt-1">
                  send 'PATH' →
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/athletepathfrago"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 border border-ink-line p-5 hover:border-gold hover:bg-ink-soft transition-colors"
            >
              <span className="grid place-items-center h-10 w-10 bg-gold/10 border border-gold/40 text-gold shrink-0">
                <InstagramIcon />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
                  {t.contact.instagram}
                </div>
                <div className="font-serif text-xl text-cream mt-1">
                  {t.contact.instagramHandle}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-ultrawide text-gold/70 mt-1">
                  DM 'PATH' →
                </div>
              </div>
            </a>

            <div className="mt-auto pt-6 border-t border-ink-line">
              <div className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted mb-3">
                {t.contact.current}
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                <span className="font-serif italic text-2xl text-cream">
                  {t.contact.open}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center font-serif italic text-2xl md:text-3xl text-gold">
          {t.contact.tagline}
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-ultrawide text-cream-muted">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-ink-line py-3 text-cream focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1-1.2-.5-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9s0-.4.1-.6c.1-.1.3-.3.4-.5l.3-.5c.1-.2 0-.4 0-.6S9.4 7.5 9.3 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3 2 3.1 4.9 4.3c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C3.9 14.9 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
