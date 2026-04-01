# HicareNet Homepage Renewal

## Project Overview
Static website for **Hicare.net** (US subsidiary of Hicare, Korean healthcare IT company).
Built with vanilla HTML, CSS, JavaScript and JSON data. No frameworks, no build tools.

**Target Audience**: US healthcare providers (hospitals, clinics, ACOs, SNFs)
**Services**: RPM, CCM, AWV, Value Based Care
**Certifications**: ISO 27001, ISO 27701, HIPAA Compliance
**Upcoming**: FHIR-based EMR integration (H1 2026)

## Reference Sites
- **Content direction**: www.vivifyhealth.com (audience-first navigation, outcome-focused messaging)
- **UX direction**: esg.hanwhaocean.com (clean card layouts, scroll animations, parallax)

## Directory Structure
```
src/           HTML pages (index, solutions, about, resources, contact, compliance)
css/           Stylesheets (design-system/ components/ pages/ animations/ main.css)
js/            JavaScript modules (core/ components/ animations/ data/ i18n/ main.js)
data/          JSON data files + data/i18n/ for EN/KO translations
assets/        images/ icons/ fonts/
design/        .pen design files (Pencil MCP only)
.claude/       Agents, skills, settings
```

## Development Rules

### HTML
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `data-i18n` attribute for translatable text content
- `data-i18n-placeholder` for translatable attributes
- `data-animate` attribute for scroll animations (fade-up, fade-in, slide-left, slide-right, scale-in, counter, parallax, stagger)
- `data-source` / `data-template` for JSON data binding
- WCAG 2.1 AA compliance (aria labels, focus management, skip links, alt text)
- All pages include: skip-to-content link, language toggle, sticky nav, footer

### CSS
- Mobile-first responsive: base(0-767) → tablet(768) → desktop(1024) → wide(1280) → ultra(1440)
- CSS custom properties defined in `css/design-system/tokens.css`
- GPU-accelerated animations only (transform + opacity)
- `prefers-reduced-motion` respected in all animations
- Section padding: 96px desktop / 64px mobile
- Container: max-width 1200px, padding 24px
- Import order in main.css: reset → tokens → utilities → components → pages → animations

### JavaScript
- Vanilla ES6 modules, no frameworks
- IntersectionObserver for scroll-triggered animations
- Progressive enhancement (core content works without JS)
- JSON data loaded via fetch(), rendered with template-engine.js
- i18n: detect navigator.language, persist in localStorage, default to English
- No inline scripts in HTML

### JSON Data
- i18n key pattern: `{page}.{section}.{element}` (e.g., `home.hero.headline`)
- en.json and ko.json must have 1:1 key parity
- No presentation data in JSON (no colors, CSS classes, HTML)
- All dynamic content sourced from data/ directory

### Content Guidelines (Vivify Health patterns)
- Outcome-focused language ("Reduce readmissions" not "Real-time dashboards")
- Audience-first navigation ("Who we help" before products)
- Compliance woven into value propositions, not separate features
- Concrete numbers (40+ hospitals, 3,000+ patients, 20+ years, 120+ devices)
- CTA segmented by user type (provider/patient/current client)

## Agent Team

| Agent | Role |
|-------|------|
| content-strategist | Healthcare B2B marketing copy, SEO, CTA strategy |
| visual-designer | Design system, hero banners, visual concepts (Pencil MCP) |
| frontend-builder | HTML/CSS/JS implementation, semantic markup, responsive |
| ux-animator | Scroll animations, parallax, transitions (Hanwha Ocean style) |
| data-architect | JSON data structures, i18n key system |
| qa-validator | Accessibility, performance, i18n completeness, link integrity |

## Available Skills
- `/hero` - Generate hero banner (layout, copy, CTA, background)
- `/section` - Create page section layout (card-grid, split, stats, badges, CTA, FAQ, timeline)
- `/animate` - Add scroll-based animations via data-animate attributes
- `/content` - Generate healthcare B2B marketing copy
- `/data` - Create/manage JSON data files
- `/i18n` - Manage EN/KO bilingual content
- `/audit` - Run accessibility, performance, i18n, link integrity audits

## Design System Quick Reference
- **Primary Blue**: #1A8FD8 (50: #E8F4FD → 900: #062F4C)
- **Secondary Green**: #2EBE74
- **Fonts**: Inter (EN) + Noto Sans KR (KO)
- **Base unit**: 8px spacing
- **Card radius**: 12px
- **Animation duration**: 300-600ms, ease-out
- **Breakpoints**: 768 / 1024 / 1280 / 1440
