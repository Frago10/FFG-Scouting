# FFG-Scouting — Project Context

> **Read this first** when resuming the project in a new conversation. It gives a cold-start brief: the brand, the stack, what has been built, the latest decisions, and what is intentionally NOT here yet. Pair it with `README.md` for deployment specifics.

---

## 1 · What this is

A premium, dark-mode, bilingual (EN/ES) single-page landing for **FFG-Scouting** — a global athlete career advisory founded by Malcom Frago.

- **Brand:** FFG-Scouting (sometimes shortened to FFG).
- **Tagline:** *Beyond the game. Global athlete careers.*
- **Service category:** "Global Athlete Career Advisory."
- **Audience:** athletes 15–28, families, sporting directors, clubs.
- **Goal:** sell the advisory; pre-qualify leads; route to WhatsApp / Instagram / Athlete Path Assessment form.

The site is **about the company**, not the person. Malcom's individual trajectory lives **inside the Staff section's founder modal**, not on the landing.

---

## 2 · Stack & non-negotiables

- **Next.js 14** App Router, **static export** (`output: "export"`).
- **TypeScript** strict.
- **Tailwind CSS** with custom palette: `ink-deep #050505`, `cream #f4ecd8`, `gold #c9a96a`, `lime #c8ff3e`.
- **Framer Motion** for cinematic entrances, scroll-driven animations and modal transitions.
- **Fonts:** Cormorant Garamond (serif), Inter (sans), JetBrains Mono (data/labels).
- **i18n:** single dictionary in `lib/i18n.ts` (en + es mirror trees) + `lib/LanguageContext.tsx` provider. Auto-detects browser language, persists in `localStorage` (`ffg.lang`).
- **No emojis in code or docs** unless explicitly requested.
- **No new prose docs** unless the user asks; edit copy in `lib/i18n.ts`.

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
| 10 | `Contact`        | `#contact`    | Form (Web3Forms) + WhatsApp ES/CR + Instagram          |
| 11 | `Footer`         | —             | Brand wordmark, contact, language toggle               |

`Navbar` is fixed; `ScrollProgress` paints a gold→cream→lime bar at top of viewport.

---

## 4 · Content sources

The PDF `Athlete_Path_Frago_Premium_Deck.pdf` (lives in user's Downloads, not in repo) is the canonical content source. Headings used:

- WHO WE ARE / QUIÉNES SOMOS
- FOUNDER / FUNDADOR  →  expanded into the Staff modal
- PHILOSOPHY / FILOSOFÍA  →  4 mantras
- WHO WE SERVE / PARA QUIÉN ES  →  4 cards
- HOW WE WORK / CÓMO TRABAJAMOS  →  4-step process
- SERVICES / SERVICIOS  →  4 tiers (PRICES REMOVED at user request)
- BOOKING / RESERVAS  →  Contact step pills + WhatsApp links
- CONTACT / CONTACTO  →  Footer + Contact section

The PDF tagline-line *"Beyond the game. Global athlete careers."* is the global tagline.

---

## 5 · Contact / channels (do not change without asking)

- **Form recipient:** `jeanpaulfrago10@gmail.com` (via Web3Forms — see `README` for key flow).
- **WhatsApp Spain:** `+34 642 190 257` — `https://wa.me/34642190257?text=PATH`
- **WhatsApp Costa Rica:** `+506 7271 6335` — `https://wa.me/50672716335?text=PATH`
- **Company Instagram:** `@athletepathfrago`
- **Founder Instagram:** `@_fragom11` (used inside the Staff modal only)
- **Footer addresses:** `malcom@frago.football`, `press@frago.football` (illustrative — confirm before treating as live).

---

## 6 · Hero — current design

- **Background:** pure CSS, defined in `app/globals.css → .hero-gold-bg`. Multiple radial gradients of gold/champagne over deep black + SVG gold-dust particles overlay + animated conic shimmer. **Sharp at any resolution; zero KB downloaded.** The earlier 740×493 AVIF was discarded for blurriness — do NOT bring it back unless replaced by a 2000px+ asset.
- **Hero element:** the FFG logo image (`/public/images/ffg-logo.jpg`) rendered with `mix-blend-screen` so its dark background fuses into the page; only the cream letters float.
- **Subtitle (below logo):** "Beyond the game." in serif italic, "the game." in gold.
- **No stat boxes.** They existed earlier (Age range / Continents / Promises) but the user removed them.

---

## 7 · Staff — founder modal mechanics

- Three cards: **Malcom Frago (clickable, full bio)** + 2 advisor placeholders (`advisor-2`, `advisor-3`) that do NOT open.
- Founder card layout: horizontal split, portrait `aspect-[4/5]` + bio.
- Founder image: `/images/malcom-founder.png` — fit with `object-cover object-center` over `bg-cream`. Whole face/torso visible, no crop.
- Modal: ESC closes, body scroll locks, internal scroll-driven progress line (uses `useScroll({ container: ref })`), reveals dual-identity (Player ↔ Advisor) + 5-chapter trajectory (Aspire → Saprissa Sub-23 → USA Greenville → Costa Rica → España).
- Copy reinforces **"Active Pro Footballer"** — Malcom is still playing professionally, this is not past tense.

---

## 8 · Recent decisions (chronological)

1. Rebranded from "Frago Football Group / Athlete Path | Frago" attempts back to **FFG-Scouting** at user request.
2. Pivoted landing from athlete-portfolio to company-first (per PDF deck).
3. Moved Malcom's personal trajectory into the Staff modal.
4. Added bilingual EN/ES toggle with persistence + `layoutId` pill animation.
5. Hero: AVIF dropped (low-res), replaced with pure-CSS gold-dust bg.
6. Hero stats removed; FFG logo replaced typographic "Beyond the game" as main element.
7. Services prices removed; section title shortened to "Services."
8. Navbar restructured to 3-column grid for symmetry (logo / centered links / lang+CTA).
9. Adapted for **GitHub Pages deployment** — static export, client-side Web3Forms, basePath helper.

---

## 9 · Deployment — GitHub Pages

**Production URL:** <https://ffg-scouting.com/>
**Default branch:** `master`
**Pages source:** GitHub Actions (workflow-driven)

See `README.md §3` for the full procedure. Summary:

- `next.config.mjs` has `output: "export"` + conditional `basePath`/`assetPrefix` from `NEXT_PUBLIC_BASE_PATH`.
- `public/CNAME` contains `ffg-scouting.com` — required so re-deploys preserve the custom domain.
- `public/.nojekyll` prevents GH Pages from skipping `_next/`.
- `.github/workflows/deploy.yml` builds on push to `master` (also `main`), keeps `NEXT_PUBLIC_BASE_PATH` empty because the site is served at the root of the custom domain, uploads `./out`, deploys via `actions/deploy-pages@v4`.
- All `<img>` and asset paths go through `lib/asset.ts` so they inherit any basePath if the project ever moves to `user.github.io/repo`.
- Repo secret required: **`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`**.

The contact form is fully client-side now — there is no server route in the project. `app/api/` does not exist and should NOT be reintroduced unless the hosting target changes off GH Pages.

**Off-custom-domain switch:** delete `public/CNAME` and edit the workflow's `NEXT_PUBLIC_BASE_PATH` env to `/${{ github.event.repository.name }}`.

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
  asset.ts          # base-path-aware path helper

public/
  .nojekyll
  images/
    ffg-logo.jpg              # used in Hero
    hero-bg.avif              # legacy (kept but no longer referenced; CSS replaces it)
    malcom-founder.png        # current Staff founder image
    malcom-founder.jpg        # previous Staff founder image (kept for reference)
    portrait.webp             # earlier portrait, no longer referenced
    aspire.jpg saprissa-training.jpg usa-greenville.jpg usa-celebration.jpg costa-rica.jpg spain.jpg
                              # chapter photos used inside the Staff modal trajectory

.github/workflows/deploy.yml  # GH Pages CI
next.config.mjs               # static export config
tailwind.config.ts            # palette + typography + animations
.env.example                  # NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY + NEXT_PUBLIC_BASE_PATH
```

---

## 11 · Do / Don't

**DO**
- Edit copy in `lib/i18n.ts` only — components consume `useLang().t`.
- Keep both `en` and `es` trees in sync (every key, both languages).
- Wrap every new image path with `asset()` from `lib/asset.ts`.
- Keep the staff modal as the only place Malcom's career details live.
- Verify with `npx tsc --noEmit && npm run build` before claiming done.

**DON'T**
- Reintroduce an `app/api/` route (kills GH Pages static export).
- Use `next/image` (no optimizer on static export — stick to plain `<img>`).
- Put prices back into Services without explicit user approval.
- Hard-code asset paths starting with `/` — they must go through `asset()`.
- Touch `.hero-gold-bg` unless replacing it with an equally sharp asset.

---

## 12 · Open items / ideas (none assigned)

- Optional: connect a custom domain (e.g. `ffg-scouting.com`) and drop `NEXT_PUBLIC_BASE_PATH`.
- Optional: replace 2 advisor placeholder cards with real advisors when info is available.
- Optional: add a press / media kit page (currently just an email reference in the form column).
- Optional: micro-conversion analytics (Plausible / Umami — self-hosted-friendly, GDPR-clean).

---

*This file is the project's memory. Update it whenever a structural decision changes.*
