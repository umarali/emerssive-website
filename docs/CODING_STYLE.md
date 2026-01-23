# Coding Style Guide

Code conventions and patterns used in the Emerssive website codebase.

---

## Component Patterns

### Named Exports (Required)
Always use named exports for components, never default exports:

```typescript
// ✅ Correct
export function Hero() {
  return <section>...</section>
}

// ❌ Wrong
export default function Hero() { ... }
```

**Exception:** `layout.tsx` uses default export (Next.js requirement).

### Client Components
Add `'use client'` directive for components with interactivity:

```typescript
'use client'

import { useState, useEffect } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState(false)
  // ...
}
```

**Components using 'use client':**
- Navigation (scroll detection, mobile menu)
- Hero (rotating phrases)
- CustomerLogos (hover states)
- Testimonials (carousel)
- FAQ (accordion)
- StickyBottom (visibility)
- About (animations)

**Server components (no directive):**
- Contact
- Services (simple render)
- CaseStudies (simple render)

### Data Structure Pattern
Define content as typed arrays within components:

```typescript
export function Services() {
  const services = [
    {
      id: 1,
      title: 'Generative AI',
      description: '...',
      image: '/assets/services/gen_ai_service.svg'
    },
    // ...
  ]

  return (
    <section>
      {services.map((service) => (
        <div key={service.id}>...</div>
      ))}
    </section>
  )
}
```

---

## File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `CaseStudies.tsx` |
| Pages/Layouts | lowercase | `page.tsx`, `layout.tsx` |
| Styles | lowercase | `globals.css` |
| Config | camelCase or lowercase | `tailwind.config.ts` |
| Directories | lowercase | `components/`, `assets/` |

---

## Import Conventions

### Path Alias
Use `@/` alias for src imports (configured in tsconfig.json):

```typescript
// ✅ Correct
import { Hero } from '@/components/Hero'

// ❌ Avoid relative paths from deep nesting
import { Hero } from '../../../components/Hero'
```

### Import Order
1. React/Next.js built-ins
2. Third-party libraries
3. Local components/utilities
4. Types

```typescript
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SomeUtility } from '@/utils/helpers'
import { SomeComponent } from '@/components/SomeComponent'
```

### Named Imports for Components
```typescript
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
```

---

## State Management

### Local State Only
This codebase uses React's built-in state. No external stores (Redux, Zustand).

```typescript
// Simple state
const [isVisible, setIsVisible] = useState(false)
const [currentIndex, setCurrentIndex] = useState(0)

// Collection state
const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())

// Toggle pattern
const toggleItem = (index: number) => {
  setOpenIndexes((prev) => {
    const next = new Set(prev)
    if (next.has(index)) {
      next.delete(index)
    } else {
      next.add(index)
    }
    return next
  })
}
```

### useEffect Patterns

**Initialization + Cleanup:**
```typescript
useEffect(() => {
  setIsVisible(true)
  
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }, 2500)
  
  return () => clearInterval(interval)
}, [])
```

**Scroll Detection:**
```typescript
useEffect(() => {
  let lastScrollY = window.scrollY

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100)
    lastScrollY = currentScrollY
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

---

## TypeScript Usage

### Strict Mode
TypeScript strict mode is enabled. Always provide types.

### Type Annotations
```typescript
// State with generics
const [items, setItems] = useState<string[]>([])
const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())

// Event handlers
const handleClick = (index: number) => { ... }

// Props (when needed)
interface CardProps {
  title: string
  description: string
  image: string
}
```

### Inline Object Types
For component-local data, type inline:
```typescript
const testimonials: {
  name: string
  role: string
  company: string
  image: string
  quote: string
}[] = [...]
```

---

## Tailwind Class Organization

### Order Convention
1. Layout (display, position, grid/flex)
2. Sizing (width, height, padding, margin)
3. Typography (font, text, leading)
4. Colors (bg, text, border colors)
5. Effects (shadow, opacity, blur)
6. Transitions/Animations
7. Responsive variants
8. State variants (hover, focus)

```html
<div class="
  flex items-center justify-center
  w-full max-w-4xl mx-auto px-6 py-4
  text-lg font-semibold
  bg-white text-gray-900 border border-gray-200
  shadow-md rounded-xl
  transition-all duration-300
  sm:px-8 lg:py-6
  hover:shadow-lg hover:-translate-y-1
">
```

### Multi-line for Complex Classes
Break long class strings across lines for readability:

```tsx
<button
  className={`
    inline-flex items-center justify-center
    bg-gradient-to-r from-primary to-primary-dark
    text-secondary-light
    px-6 py-3 rounded-full
    text-sm font-semibold
    hover:shadow-xl transition-all duration-300
    hover:-translate-y-0.5 hover:scale-[1.02]
  `}
>
```

### Conditional Classes
Use template literals for conditional styling:

```tsx
<div
  className={`
    transition-all duration-700
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
  `}
>
```

---

## Component Structure

### Standard Section Component
```typescript
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function SectionName() {
  // 1. State declarations
  const [isVisible, setIsVisible] = useState(false)

  // 2. Data definitions
  const items = [
    { id: 1, title: '...', description: '...' }
  ]

  // 3. Effects
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // 4. Event handlers
  const handleClick = (id: number) => { ... }

  // 5. Render
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2>Section Title</h2>
          <p>Section description</p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id}>
              {/* Item content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Image Handling

### Always Use next/image
```typescript
import Image from 'next/image'

<Image
  src="/assets/logo.png"
  alt="Emerssive Logo"
  width={160}
  height={80}
  className="object-contain"
/>
```

### Dynamic Images
```typescript
{items.map((item) => (
  <Image
    key={item.id}
    src={item.image}
    alt={item.title}
    width={200}
    height={200}
    className="..."
  />
))}
```

---

## Accessibility Patterns

### Interactive Elements
```tsx
// Accordion with ARIA
<button
  onClick={() => toggleFAQ(index)}
  aria-expanded={openIndexes.has(index)}
  className="..."
>
  <span>{faq.question}</span>
  <svg aria-hidden="true">...</svg>
</button>
```

### Semantic HTML
- Use `<section>` for page sections
- Use `<nav>` for navigation
- Use `<main>` for primary content
- Use proper heading hierarchy (h1 → h2 → h3)

---

## Common Gotchas

1. **Missing 'use client'**: If using useState/useEffect, add the directive
2. **Default exports**: Always use named exports for components
3. **Relative imports**: Use `@/` alias instead
4. **Image optimization**: Always use next/image, never `<img>`
5. **Key prop**: Always provide unique keys in .map()
6. **Type safety**: Provide type annotations, especially for state
