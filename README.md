# FFG-Scouting — Global Athlete Career Advisory

> Beyond the game. Global athlete careers.

The company landing for **FFG-Scouting** — built as a sales tool for athletes, families and sporting directors.

Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**. EN/ES toggle, dark-mode premium aesthetic, server-side form delivery.

---

## 1. Local development

```bash
npm install
cp .env.example .env.local           # then fill in WEB3FORMS_ACCESS_KEY
npm run dev
```

Open <http://localhost:3000>.

---

## 2. Email delivery (contact form → jeanpaulfrago10@gmail.com)

The booking form posts to `app/api/contact/route.ts`, which forwards to
[Web3Forms](https://web3forms.com) — a free, no-signup-needed email relay.
Submissions are delivered as a formatted email to whatever inbox you
registered the access key under.

**One-time setup:**

1. Go to <https://web3forms.com> → **Create your Access Key**
2. Enter the receiving email: **jeanpaulfrago10@gmail.com**
3. Confirm the verification email Web3Forms sends you
4. Copy the access key string
5. Paste it into:
   - `.env.local` (for local dev) → `WEB3FORMS_ACCESS_KEY=...`
   - **Vercel → Project → Settings → Environment Variables** (for prod)

That's it. The form sender sees an inline success state; you receive a
formatted email with `Name / Email / Role / Message` plus a `replyto`
header so you can reply directly from Gmail.

To change the recipient later: log into web3forms.com → update the email.
No code change required.

---

## 3. Free hosting — Vercel (recommended)

Vercel is the maker of Next.js. Free tier is always-on, globally cached,
auto-deploys from GitHub. Production-grade.

### Option A · One-click via Git (easiest)

1. Create a GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "FFG-Scouting site"
   gh repo create ffg-scouting --public --source=. --push
   # or: create a repo manually on github.com and push
   ```
2. Go to <https://vercel.com/new>, log in with GitHub.
3. **Import** the `ffg-scouting` repo. Vercel detects Next.js automatically.
4. Before clicking *Deploy*, expand **Environment Variables** and add:
   - Key: `WEB3FORMS_ACCESS_KEY`
   - Value: *(your Web3Forms access key)*
5. Click **Deploy**.

After ~60 seconds you'll get a public URL like
`https://ffg-scouting.vercel.app`. Any push to `main` re-deploys automatically.

### Option B · CLI

```bash
npm i -g vercel
vercel               # follow prompts, link the project
vercel env add WEB3FORMS_ACCESS_KEY   # paste the key when asked
vercel --prod        # deploy to production
```

### Custom domain (optional, free)

In Vercel → Project → **Domains** → add your domain (e.g.
`ffg-scouting.com`). Vercel walks you through DNS records. SSL is free
and automatic.

---

## 4. Alternative free hosts

If you ever want to leave Vercel, this is a standard Next.js app and runs
on any of these:

- **Netlify** — `netlify deploy`, similar workflow.
- **Cloudflare Pages** — connect GitHub, pick "Next.js".
- **Render** — free web service, slightly slower cold-starts.

For all of them, set `WEB3FORMS_ACCESS_KEY` in their dashboard env vars.

---

## 5. Project structure

```
app/
  layout.tsx              # Fonts, metadata, language provider
  page.tsx                # Section composition (top → bottom)
  globals.css             # Tokens, grain, shimmer, scrollbar
  api/
    contact/route.ts      # POST → Web3Forms → email
components/
  Navbar.tsx              # 3-col grid, sticky glass
  ScrollProgress.tsx
  Hero.tsx                # Cinematic parallax + boots
  Ticker.tsx
  WhoWeAre.tsx            # 3 pillars
  Philosophy.tsx          # 4 mantras
  WhoWeServe.tsx          # 4 audience cards
  Process.tsx             # 4-step pathway with scroll line
  Services.tsx            # Pricing tiers
  Staff.tsx               # Cards + Malcom full modal
  Manifesto.tsx
  Contact.tsx             # Form (server-action) + WhatsApp + IG
  Footer.tsx
  LanguageToggle.tsx
lib/
  i18n.ts                 # EN/ES dictionary
  LanguageContext.tsx
public/
  images/                 # Real Malcom photos + logo
```

---

## 6. Editing content

| What you want to change           | File                            |
| --------------------------------- | ------------------------------- |
| Hero copy & stats                 | `lib/i18n.ts` → `hero`          |
| Philosophy mantras                | `lib/i18n.ts` → `philosophy`    |
| Service prices                    | `lib/i18n.ts` → `services`      |
| Staff member bios / new advisors  | `lib/i18n.ts` → `staff.members` |
| Malcom's trajectory chapters      | `lib/i18n.ts` → `staff.malcom`  |
| Contact emails / phones           | `components/Contact.tsx` + `Footer.tsx` |
| Colors & fonts                    | `tailwind.config.ts`            |

All copy lives in `lib/i18n.ts` with `en` and `es` mirror trees. Change
both for proper bilingual coverage.

---

## 7. Build / lint

```bash
npm run build      # production build
npm run start      # serve the build locally
npm run lint       # next lint
```

---

Built with care · FFG-Scouting · MMXXVI
