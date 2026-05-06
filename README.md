# REPLACEME — Marketing Website

> **Catch cloud cost waste before it ships.**
> Automated cost regression detection for LLM applications.

Live: [nroan117.github.io/replaceme-website](https://nroan117.github.io/replaceme-website/)

---

## What This Is

This is the marketing homepage for **REPLACEME**, a cloud cost optimization tool that detects LLM cost regressions in CI/CD before they reach production. Built with [Docusaurus v3](https://docusaurus.io/) (TypeScript, dark theme), deployed to GitHub Pages via GitHub Actions.

---

## Project Structure

```
replaceme-website/
├── src/
│   ├── components/             # All homepage section components
│   │   ├── Hero/               # Above-the-fold: headline, CTAs, terminal demo
│   │   ├── TrustBar/           # Scrolling marquee of trust signals
│   │   ├── Approach/           # 3-step how-it-works cards
│   │   ├── ProductTabs/        # Tabbed feature section with code examples
│   │   ├── Stats/              # Social proof strip (bold metrics)
│   │   ├── PersonaTabs/        # Audience targeting tabs (FinOps / Platform / Dev)
│   │   ├── CTAStrip/           # Bottom call-to-action section
│   │   ├── SiteFooter/         # 4-column footer with links and copyright
│   │   └── HomepageBottom/     # Composition wrapper: Stats + PersonaTabs + CTAStrip + Footer
│   ├── pages/
│   │   ├── index.tsx           # Homepage — wires all sections together
│   │   ├── pricing.tsx         # Pricing page (placeholder)
│   │   └── contact.tsx         # Contact / Book a Demo page (placeholder)
│   └── css/
│       └── custom.css          # Global theme overrides (colors, dark mode)
├── docs/                       # Documentation pages (getting started, rules reference, etc.)
├── blog/                       # Blog posts
├── static/                     # Static assets (images, favicon, OG card)
├── docusaurus.config.ts        # Site config: title, navbar, baseUrl, plugins
├── sidebars.ts                 # Docs sidebar structure
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions: build + deploy to gh-pages on push to main
```

Each component lives in its own folder with two files:
- `index.tsx` — component logic and markup (TypeScript + React)
- `styles.module.css` — scoped CSS (Docusaurus CSS Modules)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Docusaurus v3](https://docusaurus.io/) (classic preset, TypeScript) |
| Styling | CSS Modules + Infima (Docusaurus default) |
| Language | TypeScript (strict) |
| Deployment | GitHub Pages via GitHub Actions |
| Theme | Dark (`#0f172a` background, `#2563EB` blue accent) |

---

## Local Development

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run start

# Build for production
npm run build

# Preview production build locally
npm run serve
```

The dev server runs at `http://localhost:3000/replaceme-website/`.

---

## Deployment

Deploys automatically via GitHub Actions on every push to `main`:

1. Runs `npm run build` → outputs to `build/`
2. Pushes `build/` to the `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

To deploy manually:
```bash
GIT_USER=nroan117 npm run deploy
```

---

## Design System

| Token | Hex | Usage |
|---|---|---|
| Blue accent | `#2563EB` | Primary CTAs, links, highlights |
| Dark background | `#0f172a` | Page / section backgrounds |
| Footer background | `#020617` | Footer |
| Card background | `#1e293b` | Cards, tab panels |
| Text primary | `#f8fafc` | Headings |
| Text secondary | `#94a3b8` | Body copy, labels |

---

## Homepage Sections

The homepage (`src/pages/index.tsx`) renders 8 sections in order:

| # | Component | Purpose |
|---|---|---|
| 1 | `Hero` | Headline, subheadline, CTAs, terminal scan demo |
| 2 | `TrustBar` | Scrolling "trusted by" marquee |
| 3 | `Approach` | Connect → Scan → Fix workflow cards |
| 4 | `ProductTabs` | Cost Scanning / CI/CD / Reports / Rule Engine |
| 5 | `Stats` | 135+ rules · 3,600+ repos · 16k+ findings |
| 6 | `PersonaTabs` | FinOps Directors / Platform Engineers / Developers |
| 7 | `CTAStrip` | Bottom conversion CTA |
| 8 | `SiteFooter` | 4-column footer |

---

## Content Placeholders

The following still contain placeholder copy and need updating once the product name and brand are finalized:
- All instances of `REPLACEME` throughout components
- Trust bar logos (currently generic descriptions, no real logos)
- Stats numbers (135+ rules and 3,600+ repos are real; others are estimates)
- Footer links (many point to pages not yet built)
- `docs/` folder (default Docusaurus starter content)

---

## Related Docs

| File | Purpose |
|---|---|
| `workspace/cost-website/ROADMAP.md` | Milestone tracker |
| `workspace/cost-website/LOG.md` | Build history and session log |
| `workspace/cost-website/RESOURCES.md` | Component map, design tokens, known issues |
| `workspace/cost-website/PROMPTFOO_BREAKDOWN.md` | Full design reference spec (promptfoo.dev deconstruction) |
