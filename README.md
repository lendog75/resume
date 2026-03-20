# Lenny Reed — Portfolio

Personal portfolio and resume site built with Next.js 15 (App Router), Tailwind CSS v4, and TypeScript. All content is driven by a single JSON file — no CMS, no database.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 — App Router |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Language | TypeScript |
| Dark/Light Mode | `next-themes` |
| Content | `data/data.json` |
| Theming | `data/theme.json` → CSS vars injected server-side |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve production build locally |
| `npm run lint` | ESLint |

---

## Folder Structure

```
├── data/
│   ├── data.json          # All content — edit this
│   ├── theme.json         # Colors, fonts, radius, animation timing
│   └── data.bkp.json      # Backup
├── public/
│   ├── resume.pdf         # PDF resume
│   └── images/            # Photos and project screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout: fonts, ThemeProvider, CSS var injection
│   │   ├── page.tsx       # Home: async Server Component
│   │   ├── globals.css    # Tailwind v4 @theme + base styles
│   │   └── api/contact/   # POST /api/contact (currently logs only)
│   ├── components/
│   │   ├── layout/        # LeftPanel, Footer
│   │   ├── sections/      # About, Projects, Skills, Experience, Contact
│   │   ├── ui/            # Button, ProjectCard, SkillBar, ContactForm, etc.
│   │   └── providers/     # ThemeProvider, DataProvider
│   ├── hooks/             # useScrollSpy, useTheme
│   └── lib/
│       ├── types.ts       # All TypeScript interfaces
│       ├── loadData.ts    # Server-only data loader
│       ├── loadTheme.ts   # Server-only theme loader
│       └── utils.ts       # cn() helper
```

---

## Content — `data/data.json`

### `config`
Global display flags. Toggle sections on/off without touching code.

```json
"config": {
  "hideExpDescriptions": true,
  "hideExpBullets": true,
  "hideImpact": false
}
```

### `meta`
Site metadata and resume file paths. Either or both resume fields can be set — only non-empty values render download buttons.

```json
"meta": {
  "siteTitle": "...",
  "description": "...",
  "url": "https://lennyreed.com",
  "resumePdf": "/resume.pdf",
  "resumeWord": "Lenny Reed Resume.docx"
}
```

### `personal`
Used in the left panel, About, and Contact sections.

| Field | Type | Notes |
|---|---|---|
| `name` | string | |
| `tagline` | string | Large left-panel headline |
| `subTagline` | string | Subtitle below tagline |
| `location` | string | |
| `email` | string | |
| `availableForWork` | boolean | |
| `profileImage` | string | Path under `/public` |
| `bio` | string[] | About section paragraphs |
| `social` | object | `github`, `linkedin`, `twitter` |

### `projects`

| Field | Type | Notes |
|---|---|---|
| `id` | string | |
| `title` | string | |
| `company` | string? | Shown with building icon |
| `year` | string? | Watermark on featured cards |
| `description` | string | |
| `image` | string | Path under `/public` |
| `tags` | string[] | |
| `featured` | boolean | Featured = large card; false = compact list |
| `links.github` | string \| null | |
| `links.live` | string \| null | |

### `skills`

```json
"skills": {
  "categories": [
    {
      "name": "Frontend",
      "skills": [
        { "name": "React", "level": 97, "featured": true }
      ]
    }
  ]
}
```

`level` is 0–100 and drives the animated skill bar width. `featured: true` skills appear in the About section tech list.

### `experience`

| Field | Type | Notes |
|---|---|---|
| `company` | string | |
| `url` | string? | Makes company name a linked external URL |
| `role` | string | |
| `period` | string | |
| `location` | string | |
| `description` | string | Shown if `config.hideExpDescriptions` is false |
| `impact` | string? | Shown if `config.hideImpact` is false. Supports `\n\n` paragraph breaks |
| `bullets` | string[] | Shown if `config.hideExpBullets` is false |
| `tech` | string[] | Always shown as tags |

### `education`

`institution`, `degree`, `period?`, `gpa?`, `highlights[]`

### `contact`

`headline`, `subtext`, `ctaLabel`

---

## Theming — `data/theme.json`

Colors, fonts, border radius, and animation timing are defined here and injected as CSS custom properties at render time — no client JS needed for the initial paint.

- `colors` — dark mode values
- `lightColors` — light mode values (applied when `<html class="light">`)
- `fonts.sans` / `fonts.mono` — font families
- `radius.card` / `radius.button` — border radii
- `animation.*` — skill bar and entrance animation durations

To change the accent color site-wide, update `colors.accent` (and `lightColors.accent`).

---

## Remote Data

To load content from a remote URL instead of the local file:

```bash
# .env.local
DATA_SOURCE=https://raw.githubusercontent.com/you/repo/main/data/data.json
```

The fetch is cached for 1 hour. Configured in `src/lib/loadData.ts`.

---

## Contact

The contact section uses a `mailto:` link — clicking it opens the visitor's email client. No backend or API keys required.

To wire up a real form in the future, see the commented options in `src/app/api/contact/route.ts` (Resend or Formspree).

---

## Deployment

Connect the GitHub repo in the [Vercel dashboard](https://vercel.com/new) — auto-deploys on every push to `main`.

Optional environment variables:

| Variable | Description |
|---|---|
| `DATA_SOURCE` | Remote JSON URL (omit to use bundled `data/data.json`) |

The local `data/data.json` is bundled into the Next.js build, so deployment works with zero environment variables by default.
