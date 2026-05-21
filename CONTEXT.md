# FFG-Scouting — Project Context

> **Read this first** when resuming the project in a new conversation. Cold-start brief: brand, stack, what's been built, current decisions, and what is intentionally NOT here. Pair with `README.md` for deployment specifics.

---

## 1 · What this is

Premium, dark-mode, bilingual (EN/ES) single-page landing for **FFG-Scouting** — a global athlete career advisory founded by Malcom Frago.

- **Brand:** FFG-Scouting (sometimes shortened to FFG)
- **Tagline:** *Beyond the game. Global athlete careers.*
- **Service category:** Global Athlete Career Advisory
- **Audience:** athletes, families, sporting directors, clubs
- **Goal:** pre-qualify leads and route them to WhatsApp / Instagram / Assessment booking

The site is **about the company**, not the person. Malcom's individual trajectory lives **inside the Staff section's founder modal**, not on the landing.

---

## 2 · Stack & non-negotiables

- **Next.js 14** App Router, **static export** (`output: "export"`)
- **TypeScript** strict
- **Tailwind CSS** with custom palette: `ink-deep #050505`, `cream #f4ecd8`, `gold #c9a96a`, `lime #c8ff3e`
- **Framer Motion** for cinematic entrances, scroll-driven animations and modal transitions
- **Fonts:** Cormorant Garamond (serif), Inter (sans), JetBrains Mono (data/labels)
- **i18n:** single dictionary in `lib/i18n.ts` (en + es mirror trees) + `lib/LanguageContext.tsx` provider. Auto-detects browser language, persists in `localStorage` (`ffg.lang`)
- **No emojis in code or docs** unless explicitly requested
- **No new prose docs** unless the user asks; edit copy in `lib/i18n.ts`

---

## 3 · Section order (top → bottom in `app/page.tsx`)

| # | Component         | Anchor        | Purpose                                                |
| - | ----------------- | ------------- | ------------------------------------------------------ |
| 1 | `Hero`            | `#top`        | CSS gold-dust bg + FFG logo + "Beyond the game." subtitle |
| 2 | `Ticker`          | —             | Infinite serif marquee of brand keywords               |
| 3 | `WhoWeAre`        | `#who`        | 3 pillars: Advisory · Pathway · Method                 |
| 4 | `Philosophy`      | `#philosophy` | 4 mantras lifted from the PDF deck                     |
| 5 | `WhoWeServe`      | `#serve`      | 4 audience cards (Athletes · Family · Global · Transition) |
| 6 | `Process`         | `#process`    | 4-step pathway with scroll-driven progress line        |
| 7 | `Services`        | `#services`   | 4 service tiers — **prices intentionally removed**     |
| 8 | `Staff`           | `#staff`      | Founder card + 2 advisor placeholders; modal w/ full Malcom profile |
| 9 | `Manifesto`       | `#manifesto`  | Word-by-word reveal of brand mantra                    |
| 10 | `Contact`        | `#contact`    | mailto: form + WhatsApp ES/CR + Instagram              |
| 11 | `Footer`         | —             | Brand wordmark, contact, language toggle               |

`Navbar` is fixed; `ScrollProgress` paints a gold→cream→lime bar at top of viewport.

---

## 4 · Content sources

The PDF `Athlete_Path_Frago_Premium_Deck.pdf` (lives in user's Downloads, not in repo) is the canonical content source. Headings used:

- WHO WE ARE / QUIÉNES SOMOS
- FOUNDER / FUNDADOR  →  expanded into the Staff modal
- PHILOSOPHY / FILOSOFÍA  →  4 mantras
- WHO WE SERVE / PARA QUIÉN ES  →  4 cards (with `15–28` removed from card 1 at user's request)
- HOW WE WORK / CÓMO TRABAJAMOS  →  4-step process
- SERVICES / SERVICIOS  →  4 tiers (PRICES REMOVED at user request)
- BOOKING / RESERVAS  →  Contact step pills + WhatsApp links
- CONTACT / CONTACTO  →  Footer + Contact section

Tagline *"Beyond the game. Global athlete careers."* is the global tagline.

---

## 5 · Contact / channels

- **Form recipient:** `jeanpaulfrago10@gmail.com` — set in `components/Contact.tsx` (`RECIPIENT_EMAIL` constant). Form submission opens the visitor's email client via `mailto:` pre-filled with their data. **No third-party services**.
- **WhatsApp Spain:** `+34 642 190 257` — `https://wa.me/34642190257?text=PATH`
- **WhatsApp Costa Rica:** `+506 7271 6335` — `https://wa.me/50672716335?text=PATH`
- **Company Instagram:** `@athletepathfrago`
- **Founder Instagram:** `@_fragom11` (used inside the Staff modal only)

---

## 6 · Hero — current design

- **Background:** pure CSS, defined in `app/globals.css → .hero-gold-bg`. Multiple radial gradients of gold/champagne over deep black + SVG gold-dust particles overlay + animated conic shimmer. **Sharp at any resolution; zero KB downloaded.**
- **Hero element:** the FFG logo image (`/images/ffg-logo.jpg`) with `mix-blend-screen` so its dark background fuses into the page; only the cream letters float.
- **Subtitle (below logo):** "Beyond the game." — serif italic, "the game." in gold.
- **No stat boxes.** They existed earlier (Age range / Continents / Promises) but the user removed them.

---

## 7 · Staff — founder modal mechanics

- Three cards: **Malcom Frago (clickable, full bio)** + 2 advisor placeholders (`advisor-2`, `advisor-3`) that do NOT open.
- Founder card layout: horizontal split — portrait `aspect-[4/5]` + bio.
- Founder image: `/images/malcom-founder.png` (white-shirt headshot). `object-cover object-center` over `bg-cream`, whole face/torso visible.
- Modal: ESC closes, body scroll locks, scroll-driven progress line (uses `useScroll({ container: ref })`), reveals dual-identity (Player ↔ Advisor) + 5-chapter trajectory (Aspire → Saprissa Sub-23 → USA Greenville → Costa Rica → España).
- Copy reinforces **"Active Pro Footballer"** — Malcom is still playing professionally.

---

## 8 · Deployment — GitHub Pages

**Production URL:** <https://ffg-scouting.com/>
**Default branch:** `master`
**Pages source:** *Deploy from a branch* → `master` / `/docs`

The deploy flow is intentionally simple (no GitHub Actions, no third-party services):

```
npm run deploy          # next build → rename out/ to docs/
.\git_push.ps1          # add + commit + push origin master
                        # ↳ GH Pages auto-publishes ffg-scouting.com
```

`scripts/deploy.mjs` is the single source of truth for the build flow. `setup_git.ps1` / `git_push.ps1` mirror the **triarch** project pattern at `OB vault/03 - Resources/Data Engineering/Python/triarch`.

Key files for hosting:

- `public/CNAME` → `ffg-scouting.com` (pins the custom domain across deploys)
- `public/.nojekyll` → stops GH Pages from skipping `_next/`
- `docs/` → committed; this is what GH Pages serves
- `next.config.mjs` → `output: "export"` + `trailingSlash: true` + `images.unoptimized: true`

**Nothing else.** No Vercel config. No `.github/workflows/`. No `lib/asset.ts` helper. No env vars.

---

## 9 · Recent decisions (chronological)

1. Rebranded to **FFG-Scouting** (final).
2. Pivoted landing from athlete-portfolio to company-first (per PDF deck).
3. Moved Malcom's trajectory into the Staff modal.
4. Added bilingual EN/ES toggle with persistence + `layoutId` pill animation.
5. Hero: AVIF dropped (was low-res), replaced with pure-CSS gold-dust bg.
6. Hero stats removed; FFG logo replaced typographic "Beyond the game" as main element.
7. Services prices removed; title shortened to "Services."
8. Navbar restructured to 3-column grid for symmetry.
9. **Switched away from GitHub Actions + Web3Forms + Vercel** to the triarch-style simple flow: build to `/docs`, push to master, GH Pages serves it. Contact form now uses `mailto:` directly.

---

## 10 · File map for fast orientation

```
app/
  layout.tsx        # html shell, fonts, language provider, metadata
  page.tsx          # imports + section composition
  globals.css       # tailwind + custom utilities (.hero-gold-bg, .grain, .stripes, .text-shimmer, .mask-radial)

components/
  Navbar.tsx        Hero.tsx        Ticker.tsx          WhoWeAre.tsx
  Philosophy.tsx    WhoWeServe.tsx  Process.tsx         Services.tsx
  Staff.tsx         Manifesto.tsx   Contact.tsx         Footer.tsx
  LanguageToggle.tsx                ScrollProgress.tsx

lib/
  i18n.ts           # EN/ES dictionary (single source of truth for copy)
  LanguageContext.tsx

public/
  CNAME             # ffg-scouting.com
  .nojekyll
  images/
    ffg-logo.jpg              # used in Hero
    malcom-founder.png        # current Staff founder image
    malcom-founder.jpg        # earlier founder shot (kept as reference)
    portrait.webp             # earlier portrait, no longer referenced
    hero-bg.avif              # legacy low-res bg (no longer referenced; CSS replaces it)
    aspire.jpg saprissa-training.jpg usa-greenville.jpg usa-celebration.jpg costa-rica.jpg spain.jpg
                              # chapter photos used inside the Staff modal trajectory

scripts/
  deploy.mjs        # next build → rename out/ to docs/

docs/               # COMMITTED build output — GH Pages serves this folder

setup_git.ps1       # first-time: git init + remote + initial commit
git_push.ps1        # every deploy: npm run deploy + add + commit + push

next.config.mjs     # static export config (output:export, trailingSlash, images.unoptimized)
tailwind.config.ts  # palette + typography + animations
```

---

## 11 · Do / Don't

**DO**
- Edit copy in `lib/i18n.ts` only — components consume `useLang().t`.
- Keep both `en` and `es` trees in sync (every key, both languages).
- Use plain `/images/...` paths in components — no helper, no prefix.
- Keep the Staff modal as the only place Malcom's career details live.
- Run `npm run deploy` before pushing — it rebuilds `/docs`, which is what GH Pages serves.
- Verify with `npx tsc --noEmit && npm run deploy` before claiming done.

**DON'T**
- Reintroduce an `app/api/` route (static export forbids it).
- Add GitHub Actions, Vercel, Web3Forms, or any third-party form service. The user explicitly removed these.
- Use `next/image` (no optimizer on static export — stick to plain `<img>`).
- Put prices back into Services without explicit user approval.
- Touch `.hero-gold-bg` unless replacing it with an equally sharp asset.
- Ignore `/docs/` in git — it must be committed for GH Pages to serve it.

---

## 12 · Open / optional ideas

- Move 2 advisor placeholder cards to real advisors once info is available.
- Press / media kit page.
- Self-hosted analytics (Plausible / Umami).

---

*This file is the project's memory. Update it whenever a structural decision changes.*
