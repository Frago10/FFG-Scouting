# FFG-Scouting — Global Athlete Career Advisory

> Beyond the game. Global athlete careers.

Company landing for **FFG-Scouting** — advisory site built as a sales tool for athletes, families and sporting directors.

**Stack:** Next.js 14 (App Router, **static export**) · TypeScript · Tailwind CSS · Framer Motion.
**Hosting:** GitHub Pages (free, always-on, CDN-backed).
**Form delivery:** Client-side → Web3Forms → jeanpaulfrago10@gmail.com.

---

## 1. Local development

```bash
npm install
cp .env.example .env.local        # fill in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

Open <http://localhost:3000>.

### Local preview of the production build

```bash
npm run build                     # produces ./out
npx serve out                     # serve the static export
```

---

## 2. Email delivery (form → jeanpaulfrago10@gmail.com)

The booking form posts **directly** to [Web3Forms](https://web3forms.com),
which delivers a formatted email to whichever inbox you registered the
access key under.

**One-time setup (~3 minutes):**

1. Go to <https://web3forms.com> → **Create your Access Key**
2. Enter the receiving email: **jeanpaulfrago10@gmail.com**
3. Confirm the verification email Web3Forms sends you
4. Copy the access key string
5. Paste it into:
   - `.env.local` (local dev) → `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...`
   - **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**
     - Name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
     - Value: *(paste your key)*

The CI workflow injects this secret at build time. The form sender sees
an inline success message; you receive a formatted email with `Name /
Email / Role / Message` plus a `replyto` header so you can reply
directly from Gmail.

Change the recipient later from web3forms.com → no code change required.

---

## 3. Deploy to GitHub Pages

This repo ships with a GitHub Actions workflow that builds and publishes
the static export on every push to `master` (also triggers on `main` for
portability).

### Current production setup

- **Repository default branch:** `master`
- **Custom domain:** `ffg-scouting.com` (served at the site root → no base path)
- **Pages source:** must be set to **GitHub Actions** (see step 2 below)

The `public/CNAME` file in the repo locks the custom domain to the site so
re-deploys never drop it.

### One-time setup (3 actions in GitHub UI)

1. **Switch the Pages source from "Deploy from a branch" to "GitHub Actions":**
   - Repo → **Settings → Pages**
   - **Build and deployment → Source:** select **GitHub Actions**
   - (This is the only manual step required to flip from a branch-served
     site to the workflow-built one.)

2. **Add the Web3Forms access key as a repo secret:**
   - Repo → **Settings → Secrets and variables → Actions** → **New repository secret**
     - Name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
     - Value: *(your key from web3forms.com — registered with `jeanpaulfrago10@gmail.com`)*

3. **Push to master** — or run the workflow manually from the *Actions* tab.
   After ~60 seconds the site is live at <https://ffg-scouting.com/>.

Every subsequent `git push` to `master` re-deploys automatically.

### If you move OFF the custom domain later

1. Delete `public/CNAME`.
2. In `.github/workflows/deploy.yml`, change the `NEXT_PUBLIC_BASE_PATH`
   line to:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
   ```
3. Re-deploy. The site will be live at `https://<user>.github.io/<repo-name>/`.

---

## 4. Project structure

```
.github/
  workflows/deploy.yml       # GH Pages auto-deploy
app/
  layout.tsx                 # Fonts, metadata, language provider
  page.tsx                   # Section composition (top → bottom)
  globals.css                # Tokens, hero gold-dust bg, grain
components/
  Navbar.tsx                 # 3-col grid, sticky glass
  ScrollProgress.tsx
  Hero.tsx                   # CSS gold-dust bg + FFG logo + tagline
  Ticker.tsx
  WhoWeAre.tsx               # 3 pillars
  Philosophy.tsx             # 4 mantras
  WhoWeServe.tsx             # 4 audience cards
  Process.tsx                # 4-step pathway
  Services.tsx               # 4 service tiers, no prices
  Staff.tsx                  # Cards + Malcom full modal
  Manifesto.tsx
  Contact.tsx                # Client-side Web3Forms form
  Footer.tsx
  LanguageToggle.tsx
lib/
  i18n.ts                    # EN/ES dictionary
  LanguageContext.tsx
  asset.ts                   # base-path-aware path helper
public/
  .nojekyll                  # required for GH Pages
  images/                    # Real Malcom photos + logo + textures
```

---

## 5. Editing content

| What you want to change           | File                            |
| --------------------------------- | ------------------------------- |
| Hero copy & subtitle              | `lib/i18n.ts` → `hero`          |
| Philosophy mantras                | `lib/i18n.ts` → `philosophy`    |
| Services list (no prices)         | `lib/i18n.ts` → `services`      |
| Staff member bios / new advisors  | `lib/i18n.ts` → `staff.members` |
| Malcom's trajectory chapters      | `lib/i18n.ts` → `staff.malcom`  |
| Contact phones / WhatsApp links   | `components/Contact.tsx`        |
| Colors & fonts                    | `tailwind.config.ts`            |
| Hero gold-dust background         | `app/globals.css` → `.hero-gold-bg` |

All copy lives in `lib/i18n.ts` with `en` and `es` mirror trees. Update
both for proper bilingual coverage.

---

## 6. Scripts

```bash
npm run dev        # local dev server
npm run build      # static export → ./out
npm run lint       # next lint
npx serve out      # preview the built export
```

---

## 7. Alternative hosting (Vercel, Netlify, Cloudflare Pages)

The project is a standard Next.js app and also runs on any of these.
For Vercel/Netlify/CF Pages you can remove `output: "export"` from
`next.config.mjs` if you want server features, or keep it for a static
deploy. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in their dashboard env vars.

---

Built with care · FFG-Scouting · MMXXVI
