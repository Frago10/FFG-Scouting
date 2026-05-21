# FFG-Scouting — Global Athlete Career Advisory

> Beyond the game. Global athlete careers.

Company landing for **FFG-Scouting** — built as a sales tool for athletes, families and sporting directors.

**Stack:** Next.js 14 (App Router, static export) · TypeScript · Tailwind CSS · Framer Motion.
**Hosting:** GitHub Pages — *Deploy from a branch* → `master` / `/docs`.
**Production URL:** <https://ffg-scouting.com/>

No Vercel. No GitHub Actions. No third-party form services. Just a build script and `git push`.

---

## 1. Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

---

## 2. Deploy

Two commands. That's it.

```powershell
npm run deploy          # build the site → ./docs
.\git_push.ps1          # commit & push to origin/master
```

`git_push.ps1` actually runs `npm run deploy` for you, so the one-liner is:

```powershell
.\git_push.ps1 "deploy: services copy updated"
```

(Optional commit message argument — defaults to *"deploy: site update"*.)

GitHub Pages picks up the new `/docs` content automatically and `ffg-scouting.com` is updated in ~30 seconds.

### First-time repository setup

```powershell
.\setup_git.ps1
git push -u origin master
```

Then in GitHub:

1. **Settings → Pages → Build and deployment**
2. **Source:** *Deploy from a branch*
3. **Branch:** `master` · folder `/docs` · **Save**
4. **Custom domain:** `ffg-scouting.com` (the `public/CNAME` file pins it after every deploy)

---

## 3. How the deploy works

```
                next build
public/        ─────────────►   out/        ─── rename ──►   docs/
├── CNAME                        ├── index.html               ├── index.html
├── .nojekyll                    ├── CNAME                    ├── CNAME
└── images/                      ├── .nojekyll                ├── .nojekyll
                                 ├── _next/                   ├── _next/
                                 └── images/                  └── images/
                                                                  ▲
                                                                  │
                                          GitHub Pages serves ────┘
                                          ↳ ffg-scouting.com
```

`scripts/deploy.mjs` runs `next build` (which writes the static export to `out/`), then renames `out/` to `docs/`. The folder gets committed alongside the source code in `master`.

- **`public/CNAME`** pins the custom domain — without it, GH Pages drops the domain on every redeploy.
- **`public/.nojekyll`** stops GH Pages from skipping the `_next/` folder.
- Both files live in `public/` so Next.js copies them into the export automatically.

---

## 4. Contact form

The form does NOT post to any server or third-party service. On submit it builds a `mailto:` URL pre-filled with the visitor's input and opens the user's default email client, addressed to **jeanpaulfrago10@gmail.com**.

To change the recipient: edit `RECIPIENT_EMAIL` near the top of `components/Contact.tsx`.

Visitors without a default email client configured can still use the **WhatsApp** (ES / CR) and **Instagram** buttons on the same panel.

---

## 5. Project structure

```
app/
  layout.tsx              # Fonts, metadata, language provider
  page.tsx                # Section composition (top → bottom)
  globals.css             # Tokens, hero gold-dust bg, grain

components/
  Navbar.tsx              # 3-col grid sticky header
  ScrollProgress.tsx
  Hero.tsx                # CSS gold-dust bg + FFG logo + tagline
  Ticker.tsx
  WhoWeAre.tsx            # 3 pillars
  Philosophy.tsx          # 4 mantras
  WhoWeServe.tsx          # 4 audience cards
  Process.tsx             # 4-step pathway
  Services.tsx            # 4 service tiers (no prices)
  Staff.tsx               # Founder card + 2 advisor placeholders + full modal
  Manifesto.tsx
  Contact.tsx             # mailto: form + WhatsApp + Instagram
  Footer.tsx
  LanguageToggle.tsx

lib/
  i18n.ts                 # EN/ES dictionary
  LanguageContext.tsx

public/
  .nojekyll               # GH Pages: do not run Jekyll on _next/
  CNAME                   # custom-domain pin
  images/                 # All Malcom photos + logo + textures

scripts/
  deploy.mjs              # build → rename out/ to docs/

docs/                     # ← built site (committed; GH Pages serves this)

setup_git.ps1             # one-time: git init + remote + first commit
git_push.ps1              # every deploy: build + commit + push
```

---

## 6. Editing content

| What you want to change           | File                            |
| --------------------------------- | ------------------------------- |
| Hero copy & subtitle              | `lib/i18n.ts` → `hero`          |
| Philosophy mantras                | `lib/i18n.ts` → `philosophy`    |
| Services list (no prices)         | `lib/i18n.ts` → `services`      |
| Staff bios / new advisors         | `lib/i18n.ts` → `staff.members` |
| Malcom's trajectory chapters      | `lib/i18n.ts` → `staff.malcom`  |
| Email recipient for form          | `components/Contact.tsx` → `RECIPIENT_EMAIL` |
| WhatsApp / Instagram links        | `components/Contact.tsx` + `Footer.tsx` |
| Colors & fonts                    | `tailwind.config.ts`            |
| Hero gold-dust background         | `app/globals.css` → `.hero-gold-bg` |

All copy lives in `lib/i18n.ts` with `en` and `es` mirror trees. Update both for proper bilingual coverage.

---

## 7. Scripts

```bash
npm run dev        # local dev server
npm run build      # static export → ./out (no rename)
npm run deploy     # build + rename out/ → docs/
```

---

Built with care · FFG-Scouting · MMXXVI
