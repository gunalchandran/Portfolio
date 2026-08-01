# Transmission — Premium Developer Portfolio

A cinematic, interactive personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, GSAP, tsParticles, and Lenis smooth scrolling.

Five sections, five original names (no "Home / About / Projects / Skills / Contact"):

| Section        | Purpose                          |
|----------------|-----------------------------------|
| **Transmission** | Hero / introduction             |
| **Trajectory**   | Your journey — interactive timeline |
| **Constructs**   | Project showcase with filtering |
| **Arsenal**      | Technical expertise — bars, radial charts, certs |
| **Frequency**    | Contact experience               |

---

## 1. Install & run

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

---

## 2. Personalize it

Everything you'd want to change lives in `src/data/`:

- **`src/data/profile.js`** — name, role, tagline, summary, email, phone,
  location, resume link, and social URLs.
- **`src/data/timeline.js`** — your Trajectory entries (education, jobs,
  milestones, aspirations).
- **`src/data/projects.js`** — your Constructs. Add/remove entries, categories
  auto-populate the filter bar.
- **`src/data/skills.js`** — your Arsenal: skill levels (0–100), certifications,
  achievements.

### Images & files to add

Drop these into `public/` (the site renders gracefully with them missing, but
looks best with them in place):

- `public/avatar.jpg` — your hero portrait (portrait orientation works best).
- `public/resume.pdf` — your résumé, linked from the "Download résumé" button.
- `public/projects/*.jpg` — one image per project, referenced by `image` in
  `src/data/projects.js`.

### Colors & type

Design tokens live in `tailwind.config.js` under `theme.extend.colors` (the
`void`, `signal`, `flare`, and `paper` palettes) and `theme.extend.fontFamily`.
Fonts are loaded via Google Fonts in `index.html` — swap the `<link>` tag and
the Tailwind config together if you change typefaces.

### Contact form

The form in `src/sections/Frequency.jsx` validates input and shows a success
state, but doesn't send email on its own. Wire it to a backend of your choice:

- [Formspree](https://formspree.io) or [Resend](https://resend.com) (simplest)
- Your own serverless function

Add the endpoint to `.env` (copy `.env.example` first) and swap the
`setTimeout` in `handleSubmit` for a real `fetch` call.

---

## 3. Project structure

```
src/
  animations/     Shared Framer Motion variants
  components/     Reusable UI (Navbar, Loader, ParticleField, buttons…)
  context/        Theme (dark/light) context
  data/           All personalizable content
  hooks/          useLenis (smooth scroll), useActiveSection (nav highlight)
  sections/       The five page sections
  App.jsx
  main.jsx
  index.css
```

---

## 4. Deploy to Vercel

**Option A — Git import (recommended)**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel: **New Project → Import Git Repository**.
3. Framework preset auto-detects as **Vite** — no extra config needed
   (`vercel.json` is already included).
4. Deploy.

**Option B — CLI**
```bash
npm install -g vercel
vercel
```

The included `vercel.json` sets the build command, output directory
(`dist`), and a catch-all rewrite so client-side routing works on refresh.

---

## 5. Notes on performance & accessibility

- Particle density in `src/components/ParticleField.jsx` automatically scales
  down on smaller viewports.
- `prefers-reduced-motion` is respected globally (see `src/index.css` and
  `useLenis.js`) — Lenis smoothing and CSS animations both back off.
- All interactive elements have visible focus rings and `aria-label`s.
- Images use `loading="lazy"` and fail gracefully if a path is missing.
- Route your real images through an optimized format (WebP/AVIF) before
  deploying for the best Lighthouse score.

---

## 6. Tech stack reference

| Library | Role |
|---|---|
| React + Vite | App shell & dev server |
| Tailwind CSS | Styling & design tokens |
| Framer Motion | Component-level animation, page transitions |
| GSAP | Hero character-reveal sequence |
| tsParticles | Interactive background field |
| Lenis | Smooth scrolling |
| react-type-animation | Hero typing effect |
| react-intersection-observer | Scroll-triggered reveals |
| react-router-dom | Routing shell (single page by default, ready to extend) |
| lucide-react / react-icons | Iconography |

Built for an Awwwards-caliber first impression — go make it yours.
