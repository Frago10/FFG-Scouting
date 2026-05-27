# FFG-Scouting — Project Context

> **Read this first** when resuming the project in a new conversation. Cold-start brief: brand, stack, what's been built, current decisions, and what is intentionally NOT here. Pair with `README.md` for deployment specifics.

---

## 1 · What this is

Premium, dark-mode, bilingual (EN/ES) single-page landing for **FFG-Scouting** — a global athlete career advisory founded by Malcom Frago.

- **Brand:** FFG-Scouting (sometimes shortened to FFG)
- **Tagline:** *Beyond the game. Global athlete careers.*
- **Service category:** Global Athlete Career Advisory
- **Audience:** athletes, families, sporting directors, clubs
- **Goal:** pre-qualify leads and route them to the booking form or Instagram / WhatsApp

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
| 2 | `Ticker`          | —             | Infinite serif marquee — bilingual via `t.ticker`       |
| 3 | `WhoWeAre`        | `#who`        | Section 01 · 3 pillars: Advisory · Pathway · Method     |
| 4 | `Philosophy`      | `#philosophy` | Section 02 · 4 mantras from the deck                    |
| 5 | `WhoWeServe`      | `#serve`      | Section 03 · 4 audience cards                           |
| 6 | `Services`        | `#services`   | Section 04 · 4 service tiers — **prices intentionally removed** |
| 7 | `Staff`           | `#staff`      | Section 05 · Founder card + 2 advisor placeholders; modal w/ full Malcom profile |
| 8 | `Manifesto`       | `#manifesto`  | Section 06 · Word-by-word reveal of brand mantra        |
| 9 | `Contact`         | `#contact`    | Section 07 · Web3Forms booking form + WhatsApp ES + Instagram |
| 10 | `Footer`          | —             | Brand wordmark, contact, language toggle               |

`Navbar` is fixed; `ScrollProgress` paints a gold→cream→lime bar at top of viewport. `Process` section ("How We Work" / 4 steps) was **removed** — the user considered it redundant.

---

## 4 · Content sources

The PDF `Athlete_Path_Frago_Premium_Deck.pdf` (lives in user's Downloads, not in repo) is the canonical content source.

Tagline *"Beyond the game. Global athlete careers."* is the global tagline.

---

## 5 · Contact / channels

**Booking form (Section 07) → real email delivery via Web3Forms.**

- **Form provider:** [Web3Forms](https://web3forms.com/) — client-side POST to `https://api.web3forms.com/submit`
- **Access key** lives at the top of `components/Contact.tsx` (`W3F_KEY` constant)
- **Recipient:** `malcomfrago15@gmail.com` (configured in the Web3Forms dashboard, not in code)
- **Email subject:** `New Booking`
- **Body format:** `Name / Email / Role / [message]` — keys are the standard Web3Forms fields (`name`, `email`, `role`, `message`)
- Submission is fully invisible to the visitor — no email client opens. Loading / success / error states are translated via `t.form.*`

Direct channels still present in the right panel of the contact section:
- **WhatsApp Spain:** `+34 642 190 257` — `https://wa.me/34642190257?text=PATH`
- **Company Instagram:** `@athletepathfrago`
- ~~WhatsApp Costa Rica~~ — **removed by user request**
- **Founder Instagram:** `@_fragom11` (used inside the Staff modal + Footer "Founder IG" link)

---

## 6 · Hero — current design

- **Background:** pure CSS, defined in `app/globals.css → .hero-gold-bg`. Multiple radial gradients of gold/champagne over deep black + SVG gold-dust particles overlay + animated conic shimmer. **Sharp at any resolution; zero KB downloaded.**
- **Hero element:** the FFG logo image (`/images/ffg-logo.jpg`) with `mix-blend-screen` so its dark background fuses into the page; only the cream letters float.
- **Subtitle (below logo):** "Beyond the game." — serif italic, "the game." in gold.
- **No stat boxes.** They existed earlier (Age range / Continents / Promises) but the user removed them.
- **No "Season 25/26" badge** — the active tag now just says "Booking Open" / "Agenda abierta".

---

## 7 · Staff — founder modal mechanics

- Three cards: **Malcom Frago (clickable, full bio)** + 2 advisor placeholders (`advisor-2`, `advisor-3`) that do NOT open.
- Founder card layout: horizontal split — portrait `aspect-[4/5]` + bio.
- Founder image: `/images/malcom-founder.png` (white-shirt headshot). `object-cover object-center` over `bg-cream`, whole face/torso visible.
- Modal: ESC closes, body scroll locks, scroll-driven progress line (uses `useScroll({ container: ref })`).
- Bio is **multi-paragraph** — stored in `lib/i18n.ts → staff.malcom.intro` as a single string with `\n\n` separators; `Staff.tsx` splits and renders each paragraph as its own `<p>` inside a `space-y-3` wrapper.
- The text uses both "Malcom" (1 l) and "Malcolm" (2 l's) — that's how the user supplied it; do NOT auto-correct.
- ~~"The Player" / "The Advisor" dual-identity panel~~ — **removed by user request**.
- ~~"ACTIVE 25/26" label in modal header~~ — **removed**.

### Trajectory (inside the modal)

5 chapters, all sourced from `staff.malcom.chapters` in i18n.

- **No year labels are displayed** anymore (the `year` field still exists in the data — just not rendered).
- **No body/description paragraph** under each chapter — only the title + the italic `place · flag` line remain.
- Chapter image array lives in `Staff.tsx → MalcomModal` (the `images` const):

  | # | Chapter title | Place | Image file |
  |---|---|---|---|
  | 1 | The Forge / La Fragua | **Seattle Sounders FC** 🇺🇸 (was "Aspire Academy" 🇶🇦 — user renamed) | `sounders.jpg` |
  | 2 | The Street / La Calle | Saprissa Sub-23 🇨🇷 | `saprissa-clean.png` |
  | 3 | The System / El Sistema | United States 🇺🇸 | `usa-celebration.jpg` |
  | 4 | The Return / El Regreso | Costa Rica 🇨🇷 | `costa-rica-2.jpg` |
  | 5 | The Dual Mandate / El Mandato Dual | España 🇪🇸 | `spain-night.jpg` |

---

## 8 · Deployment — GitHub Pages (project pages, no custom domain yet)

**Live URL:** <https://frago10.github.io/FFG-Scouting/>
**Default branch:** `master`
**Pages source:** *Deploy from a branch* → `master` / `(root)`

The site is served from the **project pages path** `/FFG-Scouting/` because the custom domain `ffg-scouting.com` is not yet pointed at GitHub via DNS. That has two consequences in the code:

1. `next.config.mjs` sets `basePath: "/FFG-Scouting"` and `assetPrefix: "/FFG-Scouting"` — Next.js automatically prefixes its own URLs (CSS/JS chunks, fonts, `<Link>`, `next/image`).
2. **Raw `<img src>` and inline `background-image: url(...)` paths must be prefixed manually** — that's what `lib/asset.ts` does:

   ```ts
   import { asset } from "@/lib/asset";
   <img src={asset("/images/malcom-founder.png")} />
   // → /FFG-Scouting/images/malcom-founder.png on project pages
   ```

   `BASE_PATH` in `lib/asset.ts` must stay in sync with `next.config.mjs`.

3. **`public/CNAME` is currently deleted** (it would override the project-pages domain). Re-add it the day DNS for `ffg-scouting.com` is configured.

### Deploy flow

```powershell
npm run deploy          # next build → move out/* to repo root (no GitHub Action needed)
.\git_push.ps1          # add + commit + push origin master
                        # ↳ GH Pages auto-publishes within ~30s
```

`scripts/deploy.mjs` is the single source of truth for the build flow. Source folders (`app/`, `components/`, etc.) coexist at the repo root with the built artifacts (`index.html`, `_next/`, `images/`, etc.); GH Pages serves the static files and ignores the rest. **No GitHub Actions. No Vercel. No `/docs/` folder.**

### Switching to the custom domain (later)

1. Point `ffg-scouting.com` A records to `185.199.108.153 / 109 / 110 / 111`
2. Set `basePath = ""` (and `assetPrefix = ""`) in `next.config.mjs`
3. Set `BASE_PATH = ""` in `lib/asset.ts`
4. Recreate `public/CNAME` with `ffg-scouting.com` as its single line
5. `npm run deploy` + push

---

## 9 · i18n — full bilingual coverage

Everything visible in the UI reads from `lib/i18n.ts`. There are no hardcoded English strings left in the components. The dict has these top-level namespaces in **both** `en` and `es`:

```
brand · nav · hero · who · philosophy · serve · process · services · staff · manifesto · contact · footer · ui · ticker · form
```

Key namespaces added during the bilingual audit:

- **`ui`** — non-section UI chrome (advisory tag, founder/advisor labels, "click to expand", trajectory header, chapter prefix `CH.` / `CAP.`, end-of-profile, confidential stamp, `RECOMMENDED` badge, `WhoWeServe` segment labels `ATHLETE/FAMILY/GLOBAL/TRANSITION`, footer "Staff profiles" / "Founder IG")
- **`ticker`** — array of ticker phrases (8 items per language)
- **`form`** — booking form status messages: `required`, `sending`, `sent`, `error`, `network`

Note: the legacy `process` namespace is still in the dict even though the section was removed — leaving it in case the section is reintroduced. The `nav.process` link was removed from both `Navbar.tsx` and `Footer.tsx`.

Philosophy mantras are stored as `{en, es}` pairs per item (a small bilingual-display pattern from before). The component picks the field based on the current `lang`. A previous bug had Spanish text in the `en` field of mantra #2 — **fixed**.

---

## 10 · Recent decisions (chronological)

1. Rebranded to **FFG-Scouting** (final).
2. Pivoted landing from athlete-portfolio to company-first.
3. Moved Malcom's trajectory into the Staff modal.
4. Added bilingual EN/ES toggle with persistence + `layoutId` pill animation.
5. Hero: AVIF dropped (was low-res), replaced with pure-CSS gold-dust bg.
6. Hero stats removed; FFG logo replaced typographic "Beyond the game" as main element.
7. Services prices removed; title shortened to "Services."
8. Navbar restructured to 3-column grid for symmetry.
9. Switched away from GitHub Actions + Web3Forms (the OLD Web3Forms integration) + Vercel to the triarch-style simple flow: build to repo ROOT, push to master.
10. **GitHub Pages path fix (May 2026):** added `basePath = "/FFG-Scouting"` + `lib/asset.ts` helper because the custom domain DNS isn't pointed yet. Build artifacts (`_next/`, `images/`) now resolve correctly under the project-pages subpath.
11. **Section 04 (Process / How We Work) removed** — user called it redundant. Remaining sections renumbered 05→04, 06→05, 07→06, 08→07.
12. **Staff modal cleanup:** dual-identity panel (Player/Advisor) and "ACTIVE 25/26" header label removed. Bio rewritten to a 5-paragraph long-form intro (EN + ES) and rendered via `\n\n` split.
13. **Trajectory cleanup:** year labels and white body paragraphs removed from all 5 chapters. Chapter 1 (Aspire Academy 🇶🇦) renamed to "Seattle Sounders FC" 🇺🇸; new photos for all 5 chapters supplied by user.
14. **"25/26" season references stripped** site-wide (hero badge, contact "Open to engagements", modal header).
15. **Booking form re-wired to Web3Forms** so submissions email `malcomfrago15@gmail.com` directly (no `mailto:` client open). Subject hardcoded to `New Booking`. Access key in `Contact.tsx → W3F_KEY`.
16. **Full bilingual audit (i18n):** all hardcoded English UI strings moved into the dict. New `ui` / `ticker` / `form` namespaces added in both languages.
17. **WhatsApp Costa Rica (+506) removed** from Contact panel and Footer.

---

## 11 · File map for fast orientation

```
app/
  layout.tsx        # html shell, fonts, language provider, metadata
  page.tsx          # imports + section composition (no Process import anymore)
  globals.css       # tailwind + custom utilities (.hero-gold-bg, .grain, .stripes, .text-shimmer, .mask-radial)

components/
  Navbar.tsx        Hero.tsx        Ticker.tsx          WhoWeAre.tsx
  Philosophy.tsx    WhoWeServe.tsx  Services.tsx        Staff.tsx
  Manifesto.tsx     Contact.tsx     Footer.tsx
  LanguageToggle.tsx                ScrollProgress.tsx
  Process.tsx       # ← still in the folder but NOT imported anywhere (kept for potential reuse)

lib/
  i18n.ts           # EN/ES dictionary (single source of truth for ALL UI copy)
  LanguageContext.tsx
  asset.ts          # asset() helper — prefixes raw <img> paths with /FFG-Scouting

public/
  .nojekyll
  images/
    ffg-logo.jpg              # Hero
    malcom-founder.png        # Staff founder card + modal hero
    sounders.jpg              # Trajectory ch.1 (Seattle Sounders FC) — current
    saprissa-clean.png        # Trajectory ch.2 (Saprissa Sub-23) — current
    usa-celebration.jpg       # Trajectory ch.3 (United States / Greenville) — current
    costa-rica-2.jpg          # Trajectory ch.4 (Costa Rica) — current
    spain-night.jpg           # Trajectory ch.5 (España) — current
    # ─── legacy/unused (kept as reference, do not delete blindly) ───
    aspire.jpg saprissa-training.jpg saprissa-game.jpg
    costa-rica.jpg spain.jpg malcom-founder.jpg portrait.webp hero-bg.avif usa-greenville.jpg
  # NOTE: public/CNAME is intentionally deleted while the custom domain is not active

scripts/
  deploy.mjs        # next build → move out/* into repo root

# COMMITTED build artifacts at repo root (what GH Pages actually serves):
index.html  404.html  404/  index.txt  _next/  images/  .nojekyll
# (CNAME is NOT here right now — see §8)

setup_git.ps1       # first-time: git init + remote + initial commit
git_push.ps1        # every deploy: npm run deploy + add + commit + push

next.config.mjs     # static export config + basePath/assetPrefix = /FFG-Scouting
tailwind.config.ts  # palette + typography + animations
```

---

## 12 · Do / Don't

**DO**
- Edit copy in `lib/i18n.ts` only — components consume `useLang().t`.
- Keep both `en` and `es` trees in sync (every key, both languages). The TS type `Dict = typeof dict["en"]` forces parity at compile time.
- Use `asset("/images/foo.jpg")` for raw `<img src>` — Next handles its own URLs but not yours.
- Keep the Staff modal as the only place Malcom's career details live.
- Run `npm run deploy` before pushing — it rebuilds the root build artifacts.
- Verify with `npx tsc --noEmit && npm run deploy` before claiming done.

**DON'T**
- Reintroduce an `app/api/` route (static export forbids it).
- Add GitHub Actions, Vercel, or a backend. The form lives on **Web3Forms** — that's the only third-party in the stack.
- Use `next/image` (no optimizer on static export — stick to plain `<img>` + `asset()`).
- Put prices back into Services without explicit user approval.
- Touch `.hero-gold-bg` unless replacing it with an equally sharp asset.
- Re-add `public/CNAME` until the DNS for `ffg-scouting.com` is actually pointed — otherwise GH Pages will try to serve the custom domain and 404.
- Auto-correct the "Malcom" / "Malcolm" mix inside `staff.malcom.intro` — the user supplied that text deliberately.

---

## 13 · Open / optional ideas

- Move 2 advisor placeholder cards to real advisors once info is available.
- Press / media kit page.
- Self-hosted analytics (Plausible / Umami).
- Eventually point `ffg-scouting.com` DNS at GitHub Pages and follow the switch-back steps in §8.

---

*This file is the project's memory. Update it whenever a structural decision changes.*
