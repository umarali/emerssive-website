# Design System

Complete visual design reference for the Emerssive website. Follow these conventions for consistency.

---

## Brand Colors

### Primary Palette

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Primary** | `#1A73E8` | `primary` | Buttons, links, accents |
| Primary Light | `#4285F4` | `primary-light` | Hover states, highlights |
| Primary Dark | `#0D47A1` | `primary-dark` | Gradients, emphasis |

| **Secondary** | `#F5F5F5` | `secondary` | Backgrounds |
| Secondary Light | `#FFFFFF` | `secondary-light` | Cards, surfaces |
| Secondary Dark | `#E0E0E0` | `secondary-dark` | Borders, dividers |

| **Accent** | `#FFA500` | `accent` | Highlights, metrics, rotating text |
| Accent Light | `#FFB74D` | `accent-light` | Soft accents |
| Accent Dark | `#F57C00` | `accent-dark` | Emphasis |

| **Text** | `#333333` | `text` | Body text |
| Text Light | `#666666` | `text-light` | Secondary text |
| Text Dark | `#000000` | `text-dark` | Headings |

### Additional Colors

```
Gray-900: #111827 (Footer background)
Gray-50 to Gray-900: Tailwind defaults for neutral elements
```

### Testimonial Gradients
- Amber-400 → Orange-500
- Purple-400 → Purple-600
- Red-400 → Rose-500
- Blue-400 → Indigo-500

---

## Typography

### Font Families

| Font | Usage | Weights |
|------|-------|---------|
| **Roboto** | Headings (h1-h6) | 400, 500, 700 |
| **Open Sans** | Body text (p, span, div) | 400 |

### Font Sizes

| Class | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-title` | 36px | 1.2 | 700 | Main headings |
| `text-title-lg` | 48px | 1.1 | 700 | Page titles |
| `text-subtitle` | 24px | 1.3 | 400 | Section subtitles |
| `text-subtitle-lg` | 30px | 1.2 | 500 | Large subtitles |
| `text-heading` | 24px | 1.3 | 700 | Section headings |
| `text-heading-lg` | 30px | 1.2 | 700 | Large headings |
| `text-subheading` | 18px | 1.4 | 400 | Subheadings |
| `text-subheading-lg` | 22px | 1.3 | 500 | Large subheadings |
| `text-section-header` | 18px | 1.4 | 700 | Section headers |
| `text-section-header-lg` | 22px | 1.3 | 700 | Large section headers |
| `text-body` | 16px | 1.6 | 400 | Body text |
| `text-quote` | 18px | 1.5 | 400 | Testimonial quotes |
| `text-quote-lg` | 22px | 1.4 | 400 | Large quotes |
| `text-caption` | 12px | 1.5 | 400 | Small captions |
| `text-caption-lg` | 14px | 1.4 | 400 | Larger captions |

### Responsive Typography Pattern
```html
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold">
<p class="text-lg sm:text-lg lg:text-xl">
```

---

## Visual Effects

### Glass Effect
```css
.glass-effect {
  @apply backdrop-blur-md bg-secondary-light/80 border border-secondary-dark/20;
}
```
Used in: Navigation (on scroll), Mobile menu

### Gradient Text
```css
.gradient-text {
  @apply bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent;
}
```

### Gradient Background
```css
.gradient-bg {
  @apply bg-gradient-to-br from-secondary-light via-secondary to-secondary-dark;
}
```

### Hover Lift
```css
.hover-lift {
  @apply transition-all duration-300 hover:-translate-y-1 hover:shadow-lg;
}
```

### Animation Classes
```css
.animate-fade-in    /* 0.5s ease-in-out, opacity 0→1 */
.animate-slide-up   /* 0.5s ease-out, translateY 20px→0, opacity 0→1 */

.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-600 { animation-delay: 600ms; }
```

---

## Component Patterns

### Primary CTA Button
```html
<a class="inline-flex items-center justify-center 
          bg-gradient-to-r from-primary to-primary-dark 
          text-secondary-light 
          px-6 py-3 rounded-full 
          text-sm font-semibold 
          hover:shadow-xl transition-all duration-300 
          hover:-translate-y-0.5 hover:scale-[1.02]">
  Book a Free Consultation →
</a>
```

### Secondary Button
```html
<a class="inline-flex items-center justify-center 
          px-6 py-3 rounded-full 
          border border-gray-300 
          text-text text-sm 
          hover:bg-gray-50 transition-colors">
  See case studies
</a>
```

### Card Base
```html
<div class="bg-white rounded-xl shadow-sm hover:shadow-md 
            transition-all duration-300 overflow-hidden 
            border border-gray-100">
```

### Testimonial Card
```html
<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 overflow-hidden 
            border border-gray-100 h-full">
```

---

## Section Backgrounds

| Section | Background |
|---------|------------|
| Hero | `relative min-h-screen` + decorative blur orbs |
| Services | `bg-secondary-light` |
| Case Studies | `bg-secondary` |
| Customer Logos | `bg-white` |
| Testimonials | `bg-secondary` |
| FAQ | `bg-white` |
| Footer | `bg-gray-900 text-white` |

### Decorative Blur Orbs (Hero)
```html
<div class="absolute top-1/4 left-1/4 w-96 h-96 
            bg-primary/10 rounded-full blur-3xl opacity-30" />
<div class="absolute bottom-1/4 right-1/4 w-96 h-96 
            bg-accent/10 rounded-full blur-3xl opacity-30" />
```

---

## Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm:` | 640px | Tablets |
| `md:` | 768px | Medium devices |
| `lg:` | 1024px | Desktop |

### Common Responsive Patterns

**Grid Layouts:**
```html
<!-- Services, Case Studies -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<!-- Customer Logos -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

<!-- Footer -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
```

**Hero Layout:**
```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
  <div class="lg:col-span-2"><!-- Text content --></div>
  <div><!-- KPI card --></div>
</div>
```

**Navigation:**
- Mobile: Hamburger menu with glass-effect dropdown
- Desktop: Horizontal menu with CTA button

---

## Spacing System

| Usage | Value | Pixels |
|-------|-------|--------|
| Section vertical padding | `py-20` | 80px |
| Component gap | `gap-8` | 32px |
| Internal padding | `p-6` / `p-8` | 24px / 32px |
| Button padding | `px-6 py-3` | 24px / 12px |

### Container Widths
```html
<div class="max-w-4xl mx-auto">    <!-- Standard -->
<div class="max-w-7xl mx-auto">    <!-- Wide -->
```

---

## Image Assets

### Directory Structure
```
public/assets/
├── logo.png              # Primary logo
├── logo2.png             # Alternative logo (nav/footer)
├── Umar.png              # Team photo (sticky bottom)
├── customers/            # Client logos (PNG, transparent)
├── testimonials/         # Headshots (PNG)
└── services/             # Service icons (SVG)
```

### Image Naming Convention
- Customer logos: `{company}-removebg-preview.png`
- Testimonials: `{Name} - {Role} - {Company}.png`
- Services: `{service_name}_service.svg`

### Image Styling Patterns

**Customer Logos (grayscale with hover):**
```html
<div class="filter grayscale opacity-60 
            hover:filter-none hover:opacity-100 
            transition-all duration-300">
```

**Service Images:**
```html
<div class="relative p-12 bg-gray-100 
            group-hover:bg-gradient-to-br 
            group-hover:from-primary/20 group-hover:to-primary-dark/20 
            transition-all duration-500">
  <Image class="group-hover:scale-105 transition-transform duration-500" />
</div>
```

**Testimonial Photos:**
```html
<div class="w-32 h-32 rounded-full overflow-hidden 
            border-3 border-white shadow-lg">
```

---

## Transitions

| Type | Duration | Easing |
|------|----------|--------|
| Standard | `duration-300` | default |
| Color only | `duration-200` | default |
| Animations | `duration-500` | ease-out |

### Common Transition Classes
```html
transition-all duration-300      <!-- Standard -->
transition-colors duration-200   <!-- Color only -->
transition-transform duration-500 <!-- Scale/position -->
```

---

## Accessibility Notes

- Semantic HTML structure throughout
- ARIA attributes on interactive elements (FAQ accordion, testimonials)
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast meets WCAG standards
- Touch-friendly interactive elements (min 44px targets)
