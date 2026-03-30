# HicareNet Design System Specification

## Color Palette

### Primary (Healthcare Blue)
| Token | Hex | Usage |
|-------|-----|-------|
| --color-primary-50 | #E8F4FD | Backgrounds, hover states |
| --color-primary-100 | #C5E4F9 | Light accents, borders |
| --color-primary-200 | #9DD2F5 | Secondary backgrounds |
| --color-primary-300 | #6EBCEF | Icons, illustrations |
| --color-primary-400 | #45A8E8 | Interactive elements |
| --color-primary-500 | #1A8FD8 | **Main brand color** - buttons, links, headings |
| --color-primary-600 | #1577B8 | Hover states on primary |
| --color-primary-700 | #105E95 | Active states |
| --color-primary-800 | #0B4470 | Dark accents |
| --color-primary-900 | #062F4C | Dark backgrounds, footer |

### Secondary (Health Green)
| Token | Hex | Usage |
|-------|-----|-------|
| --color-secondary-50 | #E6F9EF | Success backgrounds |
| --color-secondary-100 | #B8EECD | Light success |
| --color-secondary-200 | #86E2AB | Illustrations |
| --color-secondary-300 | #57D68D | Growth indicators |
| --color-secondary-400 | #3ACF7D | Stats, positive metrics |
| --color-secondary-500 | #2EBE74 | **Main accent** - success, CTA alt |
| --color-secondary-600 | #26A363 | Hover on secondary |
| --color-secondary-700 | #1E8751 | Active states |
| --color-secondary-800 | #166B3F | Dark accents |
| --color-secondary-900 | #0E4F2D | Dark success |

### Neutral (Clean Gray)
| Token | Hex | Usage |
|-------|-----|-------|
| --color-neutral-0 | #FFFFFF | Page background |
| --color-neutral-50 | #F7F9FC | Section alt background |
| --color-neutral-100 | #EEF1F6 | Card backgrounds |
| --color-neutral-200 | #D9DEE7 | Borders, dividers |
| --color-neutral-300 | #B5BDC9 | Disabled states |
| --color-neutral-400 | #8D97A5 | Placeholder text |
| --color-neutral-500 | #667085 | Secondary text |
| --color-neutral-600 | #4D5566 | Body text |
| --color-neutral-700 | #374151 | Heading text |
| --color-neutral-800 | #1D2433 | Primary text |
| --color-neutral-900 | #111827 | Darkest text |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| --color-success | #2EBE74 | Success states |
| --color-warning | #F5A623 | Warning states |
| --color-error | #E5484D | Error states |
| --color-info | #1A8FD8 | Info states |

### Surface Colors
| Token | Value | Usage |
|-------|-------|-------|
| --surface-primary | #FFFFFF | Main background |
| --surface-secondary | #F7F9FC | Alt section background |
| --surface-dark | #062F4C | Dark sections, footer |
| --surface-overlay | rgba(6,47,76,0.7) | Hero overlay |
| --text-on-dark | #FFFFFF | Text on dark surfaces |
| --text-on-primary | #FFFFFF | Text on primary buttons |

---

## Typography

### Font Families
```css
--font-en: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-ko: 'Noto Sans KR', 'Malgun Gothic', sans-serif;
--font-body: var(--font-en);  /* switches to --font-ko when html[lang="ko"] */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale (Major Third 1.25x)
| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| --text-xs | 12px / 0.75rem | 1.5 | 400 | Captions, labels |
| --text-sm | 14px / 0.875rem | 1.5 | 400 | Small text, metadata |
| --text-base | 16px / 1rem | 1.6 | 400 | Body text |
| --text-lg | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| --text-xl | 20px / 1.25rem | 1.5 | 500 | Card headings |
| --text-2xl | 24px / 1.5rem | 1.4 | 600 | Section subheadings |
| --text-3xl | 30px / 1.875rem | 1.3 | 600 | Section headings |
| --text-4xl | 36px / 2.25rem | 1.2 | 700 | Page headings |
| --text-5xl | 48px / 3rem | 1.15 | 700 | Hero subheading |
| --text-hero | 56px / 3.5rem | 1.1 | 700 | Hero headline (desktop) |

### Mobile Overrides
| Token | Desktop | Mobile |
|-------|---------|--------|
| --text-hero | 56px | 36px |
| --text-5xl | 48px | 32px |
| --text-4xl | 36px | 28px |
| --text-3xl | 30px | 24px |

---

## Spacing System

### Base Unit: 8px
| Token | Value | Usage |
|-------|-------|-------|
| --space-0 | 0 | Reset |
| --space-1 | 4px | Tight inline spacing |
| --space-2 | 8px | Icon gaps, tight padding |
| --space-3 | 16px | Component internal padding |
| --space-4 | 24px | Container padding, card padding |
| --space-5 | 32px | Card gap (desktop), section header gap |
| --space-6 | 48px | Section header gap (desktop) |
| --space-7 | 64px | Section padding (mobile) |
| --space-8 | 96px | Section padding (desktop) |
| --space-9 | 120px | Hero padding |

### Layout Dimensions
| Token | Value | Usage |
|-------|-------|-------|
| --container-max | 1200px | Content max width |
| --container-padding | 24px | Container side padding |
| --nav-height | 72px | Sticky navigation height |
| --card-radius | 12px | Card border radius |
| --button-radius | 8px | Button border radius |
| --input-radius | 8px | Form input border radius |
| --input-height | 48px | Form input height |

---

## Breakpoints (Mobile-First)

```css
/* Base: 0-767px (mobile) */
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* wide */ }
@media (min-width: 1440px) { /* ultra-wide */ }
```

### Grid System
| Breakpoint | Columns | Gap | Container |
|------------|---------|-----|-----------|
| Mobile | 1 (4 for small items) | 16px | 100% - 48px |
| Tablet | 2 | 24px | 100% - 48px |
| Desktop | 3 | 32px | 1200px |
| Wide | 4 | 32px | 1200px |

---

## Component Specifications

### Navigation (Sticky Header)
- Height: 72px
- Background: white with `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` on scroll
- Logo: left-aligned, max-height 40px
- Menu items: `--text-sm`, `--font-weight-500`, `--color-neutral-700`
- Active/hover: `--color-primary-500`
- Language toggle: EN/KO pill, right side
- CTA button: "Contact Us" primary small, right side
- Mobile: hamburger icon, full-screen slide-out overlay
- Mega-menu: desktop only, on hover, white background, 3-column max

### Hero Section
- Min-height: 70vh (desktop), 60vh (mobile)
- Background: full-bleed image with `<picture>` (WebP + PNG)
- Overlay: `--surface-overlay` gradient from bottom
- Headline: `--text-hero`, white, max-width 700px
- Subtext: `--text-lg`, white/alpha-80, max-width 600px
- CTA: 2 buttons (primary filled + outline white)
- Animation: headline fade-up 0ms → subtext 200ms → CTA 400ms → bg slow zoom 20s

### Cards
- Background: white
- Border-radius: `--card-radius` (12px)
- Padding: `--space-4` (24px)
- Shadow: `0 1px 3px rgba(0,0,0,0.06)`
- Hover: `0 8px 24px rgba(0,0,0,0.1)`, translateY(-4px), 300ms ease
- Featured card: `--color-primary-50` left border 4px
- Horizontal card: image left 40%, content right 60%

### Buttons
| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | --color-primary-500 | white | none | --color-primary-600 |
| Secondary | transparent | --color-primary-500 | 2px primary-500 | --color-primary-50 bg |
| Ghost | transparent | --color-neutral-700 | none | --color-neutral-100 bg |
| White outline | transparent | white | 2px white | white bg, primary text |

- Padding: 12px 24px (default), 8px 16px (small), 16px 32px (large)
- Border-radius: `--button-radius` (8px)
- Font: `--text-sm`, weight 600
- Transition: all 200ms ease

### Forms
- Input height: 48px
- Border: 1px `--color-neutral-200`
- Focus: 2px `--color-primary-500` ring, `--color-primary-50` background
- Label: `--text-sm`, weight 500, `--color-neutral-700`
- Error: `--color-error` border + message below
- Textarea: min-height 120px

### Footer
- Background: `--surface-dark` (#062F4C)
- 4-column layout (desktop), stacked (mobile)
- Text: `--text-on-dark` (white), alpha-70 for secondary
- Links: white, hover underline
- Bottom bar: copyright, privacy, terms, social icons
- Logo: white version

### Badges (Certifications)
- Layout: horizontal row, centered, with spacing
- Style: grayscale logos, color on hover
- Size: max-height 48px
- Text below: certification name, `--text-xs`

---

## Animation Library

### Scroll Animation Types (`data-animate`)
| Type | Default State | Animated State | Duration |
|------|--------------|----------------|----------|
| fade-up | opacity:0, translateY(30px) | opacity:1, translateY(0) | 600ms |
| fade-in | opacity:0 | opacity:1 | 600ms |
| slide-left | opacity:0, translateX(-50px) | opacity:1, translateX(0) | 600ms |
| slide-right | opacity:0, translateX(50px) | opacity:1, translateX(0) | 600ms |
| scale-in | opacity:0, scale(0.9) | opacity:1, scale(1) | 500ms |
| counter | value:0 | value:target | 2000ms |
| parallax | translateY(0) | translateY(var) on scroll | continuous |
| stagger | children opacity:0 | children fade-up with 100ms delay each | 600ms per |

### Implementation
- Trigger: IntersectionObserver, threshold 0.15
- One-shot: unobserve after first intersection
- CSS class: `.is-visible` added by JS
- Delay: `data-animate-delay="200"` (milliseconds)
- Reduced motion: immediate visibility, no transition

### Micro-animations
| Element | Effect | Duration | Trigger |
|---------|--------|----------|---------|
| Button | scale(1.02) + shadow | 200ms | hover |
| Card | translateY(-4px) + shadow | 300ms | hover |
| Nav link | underline width 0→100% | 200ms | hover |
| Hero bg | scale(1) → scale(1.05) | 20s | page load |
| Language toggle | background slide | 200ms | click |
| Accordion | height auto + rotate icon | 300ms | click |

---

## Shadows
| Token | Value | Usage |
|-------|-------|-------|
| --shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | Subtle elements |
| --shadow-base | 0 1px 3px rgba(0,0,0,0.06) | Cards default |
| --shadow-md | 0 4px 12px rgba(0,0,0,0.08) | Elevated elements |
| --shadow-lg | 0 8px 24px rgba(0,0,0,0.1) | Card hover, modals |
| --shadow-nav | 0 1px 3px rgba(0,0,0,0.08) | Sticky nav on scroll |

---

## Z-Index Scale
| Token | Value | Usage |
|-------|-------|-------|
| --z-base | 0 | Default |
| --z-above | 10 | Elevated cards |
| --z-nav | 100 | Sticky navigation |
| --z-dropdown | 200 | Mega-menu, dropdowns |
| --z-overlay | 300 | Mobile nav overlay |
| --z-modal | 400 | Modals |
| --z-toast | 500 | Toast notifications |
