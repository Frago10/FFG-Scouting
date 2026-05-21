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

## 3. Deploy to GitHub Pages (free, always-on)

The repo ships with a GitHub Actions workflow that builds and publishes
the static export on every push to `main`.

### One-time setup

1. **Push the project to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "FFG-Scouting site"
   gh repo create ffg-scouting --public --source=. --push
   # or create the repo manually on github.com and `git push -u origin main`
   ```

2. **Enable Pages with GitHub Actions as the source:**
   - GitHub repo → **Settings → Pages**
   - **Build and deployment → Source:** *GitHub Actions*

3. **Add the Web3Forms access key as a repo secret:**
   - GitHub repo → **Settings → Secrets and variables → Actions**
   - **New repository secret**
     - Name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
     - Value: *(your key from web3forms.com)*

4. **Trigger the first deploy:**
   - Push any commit to `main`, or run the workflow manually from the
     *Actions* tab.

After ~60 seconds the site is live at:

```
https://<your-github-username>.github.io/<repo-name>/
```

The workflow automatically sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so
all asset paths resolve under that prefix.

### Custom domain (optional, free SSL)

1. Add a `CNAME` file in `public/` containing the domain (e.g.
   `ffg-scouting.com`).
2. **Settings → Pages → Custom domain** → enter the domain.
3. Configure DNS:
   - Apex: `A` records → `185.199.108.153 / 109.153 / 110.153 / 111.153`
   - Subdomain: `CNAME` → `<user>.github.io`
4. Once the domain is active, **clear** `NEXT_PUBLIC_BASE_PATH` (remove
   from `.env`, and edit `.github/workflows/deploy.yml` to drop the
   `NEXT_PUBLIC_BASE_PATH` env line) and re-deploy.

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
