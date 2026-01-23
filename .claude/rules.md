# Claude Rules - Emerssive Website

Quick reference for AI agents working on this codebase.

---

## Before Making Changes

1. **Read the relevant docs first:**
   - Content changes → `docs/WEBSITE_CONTENT.md`
   - Styling changes → `docs/DESIGN_SYSTEM.md`
   - Code patterns → `docs/CODING_STYLE.md`

2. **Check existing patterns** in similar components before writing new code

3. **Run lint before committing:**
   ```bash
   npm run lint
   ```

---

## Critical Files

| Purpose | File |
|---------|------|
| Page assembly | `src/app/page.tsx` |
| SEO/Metadata | `src/app/layout.tsx` |
| Theme colors | `tailwind.config.ts` |
| Custom CSS | `src/app/globals.css` |
| All components | `src/components/*.tsx` |

---

## Code Rules

### Must Do
- Use named exports: `export function Component()`
- Use `'use client'` for interactive components
- Use `@/` import alias for src paths
- Use `next/image` for all images
- Use existing Tailwind theme colors (`primary`, `secondary`, `accent`, `text`)

### Must Not
- Don't use default exports for components
- Don't use relative imports from deep paths
- Don't use `<img>` tags (use next/image)
- Don't add new colors without updating tailwind.config.ts
- Don't leave console.log in production code

---

## Content Updates

### To update text content:
1. Find the component in `src/components/`
2. Locate the data array (e.g., `const services = [...]`)
3. Edit the text directly
4. Run `npm run lint` and `npm run build`

### Content locations:
| Section | Component |
|---------|-----------|
| Hero | `Hero.tsx` |
| Services | `Services.tsx` |
| Case Studies | `CaseStudies.tsx` |
| Customer Logos | `CustomerLogos.tsx` |
| Testimonials | `Testimonials.tsx` |
| FAQ | `FAQ.tsx` |
| Footer | `Footer.tsx` |

---

## Design Constraints

### Colors (use these, don't create new ones)
- Primary: `primary`, `primary-light`, `primary-dark`
- Secondary: `secondary`, `secondary-light`, `secondary-dark`
- Accent: `accent`, `accent-light`, `accent-dark`
- Text: `text`, `text-light`, `text-dark`

### Fonts
- Headings: `font-roboto`
- Body: `font-opensans`

### Spacing
- Section padding: `py-20`
- Container: `max-w-7xl mx-auto`
- Grid gap: `gap-8`

### Buttons
- Primary: gradient from-primary to-primary-dark, rounded-full
- Secondary: border border-gray-300, rounded-full

---

## Testing Changes

```bash
# Lint check
npm run lint

# Build check
npm run build

# Local preview
npm run dev
# Open http://localhost:3000
```

---

## Company Info Reference

- **Company:** Emerssive Solutions
- **Email:** contact@emerssive.com
- **Phone:** +923314739747
- **Location:** 124L, Johar Town, Lahore. 54700
- **Booking:** https://calendar.app.google/U3z2GqSza9Fhch8e9
- **LinkedIn:** https://pk.linkedin.com/company/emerssive
- **Facebook:** https://www.facebook.com/emerssive

---

## Adding New Sections

1. Create `src/components/NewSection.tsx`
2. Use existing component as template
3. Add `'use client'` if interactive
4. Export as named function
5. Import in `src/app/page.tsx`
6. Add to page JSX in correct position

---

## Quick Answers

**Where are images stored?**
`public/assets/` (customers/, testimonials/, services/)

**How to add a new customer logo?**
1. Add PNG to `public/assets/customers/`
2. Update array in `CustomerLogos.tsx`

**How to add a testimonial?**
Update the `testimonials` array in `Testimonials.tsx`

**How to change colors?**
Edit `tailwind.config.ts` under `theme.extend.colors`

**How to add a new page?**
Create `src/app/new-page/page.tsx` (Next.js App Router)
