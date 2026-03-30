---
name: hero
description: Generate hero banner sections with layout, copy, CTA, and background specifications
user_invocable: true
---

# /hero - Hero Banner Generator

Generate a hero banner section for a HicareNet website page.

## Usage
```
/hero [page-name]
/hero home
/hero solutions
/hero about
```

## Process

1. **Read** `design-system-spec.md` for hero specifications (colors, typography, spacing)
2. **Read** `page-architecture.md` for the target page's hero section definition
3. **Generate** the HTML structure:

```html
<section class="hero hero--{page}" id="hero">
  <picture class="hero__bg">
    <source srcset="/assets/images/hero/{page}-hero.webp" type="image/webp">
    <img src="/assets/images/hero/{page}-hero.jpg" alt="" aria-hidden="true" loading="eager">
  </picture>
  <div class="hero__overlay"></div>
  <div class="hero__content container">
    <h1 class="hero__headline" data-i18n="{page}.hero.headline" data-animate="fade-up">
      [Headline Text]
    </h1>
    <p class="hero__subtext" data-i18n="{page}.hero.subtext" data-animate="fade-up" data-animate-delay="200">
      [Subtext]
    </p>
    <div class="hero__cta" data-animate="fade-up" data-animate-delay="400">
      <a href="[primary-href]" class="btn btn--primary btn--lg" data-i18n="{page}.hero.cta_primary">[Primary CTA]</a>
      <a href="[secondary-href]" class="btn btn--outline-white btn--lg" data-i18n="{page}.hero.cta_secondary">[Secondary CTA]</a>
    </div>
  </div>
</section>
```

4. **Generate** corresponding CSS in `css/components/hero.css`
5. **Add** i18n keys to both en.json and ko.json
6. **Apply** hero-specific animation sequence (headline 0ms → subtext 200ms → CTA 400ms → bg zoom 20s)

## Hero Variants

| Page | Background Style | Headline Tone | CTA Strategy |
|------|-----------------|---------------|-------------|
| home | Full-bleed clinical/tech image, gradient overlay | Aspirational, outcome-focused | Explore + Demo |
| solutions | Gradient blue, abstract pattern | Capability-focused | Contact Us |
| about | Team/office photo, light overlay | Mission-driven | Join/Connect |
| resources | Minimal, solid color | Informational | Browse/Search |
| contact | Minimal, no image | Direct, welcoming | (no CTA in hero) |
| compliance | Dark blue solid, shield icon | Trust/security-focused | (no CTA in hero) |

## CSS Specifications
- Min-height: 70vh (desktop), 60vh (mobile)
- Overlay: linear-gradient(to top, rgba(6,47,76,0.8), rgba(6,47,76,0.3))
- Headline: var(--text-hero) / 56px desktop, 36px mobile, white, max-width 700px
- Subtext: var(--text-lg) / 18px, white/alpha-80, max-width 600px
- CTA gap: 16px between buttons
- Content vertical center with flexbox
- Background image: object-fit cover, animation scale(1)→scale(1.05) over 20s
