# CLAUDE.md - Emerssive Solutions Website

This document provides guidance for AI assistants working with this codebase.

## Quick Start

```bash
npm run dev      # Start dev server (Turbopack) → http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Documentation Index

| Document | Purpose |
|----------|---------|
| [`docs/WEBSITE_CONTENT.md`](docs/WEBSITE_CONTENT.md) | All visible website text, testimonials, FAQs |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) | Colors, typography, visual patterns |
| [`docs/CODING_STYLE.md`](docs/CODING_STYLE.md) | Code conventions and patterns |
| [`docs/GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md) | Git practices and commit conventions |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Vercel deployment and CI/CD |
| [`.claude/rules.md`](.claude/rules.md) | Quick rules reference for AI agents |

---

## Project Overview

Marketing website for **Emerssive Solutions**, a software development company specializing in AI solutions and web/mobile development. Single-page landing site.

**Company:** Emerssive Solutions  
**Email:** contact@emerssive.com  
**Phone:** +923314739747  
**Booking:** https://calendar.app.google/U3z2GqSza9Fhch8e9

---

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 15.4.6 |
| React | 19.1.0 |
| TypeScript | 5.x |
| Tailwind CSS | 3.4.17 |

---

## Project Structure

```
emerssive-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   │   ├── page.tsx         # Home page (assembles all sections)
│   │   └── globals.css      # Tailwind + custom CSS
│   └── components/
│       ├── Navigation.tsx   # Header with scroll-aware hide
│       ├── Hero.tsx         # Landing section with rotating phrases
│       ├── Services.tsx     # Service offerings (GenAI, Web/Mobile)
│       ├── CaseStudies.tsx  # Client success stories
│       ├── CustomerLogos.tsx# Client logo grid
│       ├── Testimonials.tsx # Client quotes carousel
│       ├── FAQ.tsx          # Accordion FAQ section
│       ├── Footer.tsx       # Site footer with contact
│       └── StickyBottom.tsx # Fixed bottom CTA
├── public/assets/
│   ├── customers/           # Client logos (8 companies)
│   ├── testimonials/        # Testimonial headshots (4 people)
│   └── services/            # Service icons (SVG)
├── docs/                    # Documentation files
└── .claude/rules.md         # AI agent quick rules
```

---

## Key Code Conventions

### Components
- **Named exports only**: `export function Hero() { ... }`
- **'use client'** for interactive components (useState, useEffect)
- **Data inline**: Content defined as arrays within components

### Imports
```typescript
import { Hero } from '@/components/Hero'  // Use @/ alias
```

### Styling
- Tailwind CSS inline classes
- Theme colors: `primary`, `secondary`, `accent`, `text`
- Fonts: `font-roboto` (headings), `font-opensans` (body)

See [`docs/CODING_STYLE.md`](docs/CODING_STYLE.md) for complete patterns.

---

## Design System Summary

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#1A73E8` | Buttons, links, CTAs |
| Secondary | `#F5F5F5` | Backgrounds |
| Accent | `#FFA500` | Highlights, metrics |
| Text | `#333333` | Body text |

### Typography
- **Roboto** (400, 500, 700) - Headings
- **Open Sans** (400) - Body text

See [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) for complete system.

---

## Content Summary

### Services (2)
1. **Generative AI** - AI solutions and implementation
2. **Web/Mobile Development** - Full-stack development

### Case Studies (4)
| Company | Metric |
|---------|--------|
| Fluxx | 35% error reduction |
| Qodex.ai | 78K+ APIs secured |
| BookBiteAI | 30s reservation time |
| Frontline Education | 1.2M+ monthly visitors |

### Customers (8)
Wazer, PuffBar, Frontline Education, Lendica, Fluxx, QodexAI, InRule, AppSeed

### Testimonials (4)
Jerry Shu (Lendica), Adi Chirilov (AppSeed), Lindsey Holmes (Code3Apps), Justus Luttig (Authentic Ventures)

See [`docs/WEBSITE_CONTENT.md`](docs/WEBSITE_CONTENT.md) for all content.

---

## Common Tasks

### Update Content
1. Find component in `src/components/`
2. Edit the data array
3. Run `npm run lint && npm run build`

### Add New Section
1. Create `src/components/NewSection.tsx`
2. Add `'use client'` if interactive
3. Export as named function
4. Import in `src/app/page.tsx`

### Modify Theme
- Colors: `tailwind.config.ts` → `theme.extend.colors`
- Fonts: `tailwind.config.ts` → `theme.extend.fontFamily`

---

## Critical Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main page assembly |
| `src/app/layout.tsx` | SEO metadata, fonts |
| `tailwind.config.ts` | Theme customization |
| `src/app/globals.css` | Custom CSS utilities |

---

## Deployment

- **Platform:** Vercel
- **Trigger:** Push to `main` branch
- **Build:** `npm run build`

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for details.

---

## Before Making Changes

1. Read relevant docs (content, design, code style)
2. Check existing patterns in similar components
3. Run `npm run lint` before committing
4. Run `npm run build` to verify no errors

See [`.claude/rules.md`](.claude/rules.md) for quick reference.
