# /section - Page Section Generator

Generate a page section with a specified layout pattern for the HicareNet website.

## Usage
```
/section [type] [page].[section-name]
/section card-grid home.solutions-overview
/section split solutions.rpm
/section stats home.impact-numbers
/section badges home.compliance
/section cta home.final-cta
/section faq resources.faq
/section timeline solutions.implementation
```

## Section Types

### 1. Card Grid
```html
<section class="section section--{bg}" id="{id}">
  <div class="container">
    <div class="section__header" data-animate="fade-up">
      <span class="section__eyebrow" data-i18n="{key}.eyebrow">[Eyebrow]</span>
      <h2 class="section__title" data-i18n="{key}.title">[Title]</h2>
      <p class="section__desc" data-i18n="{key}.description">[Description]</p>
    </div>
    <div class="card-grid card-grid--{cols}" data-animate="stagger">
      <!-- Cards rendered from JSON or static -->
    </div>
  </div>
</section>
```
- Columns: 4 (desktop), 2 (tablet), 1 (mobile)
- Gap: 32px / 24px / 16px

### 2. Split Content
```html
<section class="section" id="{id}">
  <div class="container">
    <div class="split split--{image-position}">
      <div class="split__media" data-animate="{slide-left|slide-right}">
        <img src="[image]" alt="[alt]" loading="lazy">
      </div>
      <div class="split__content" data-animate="{slide-right|slide-left}">
        <span class="section__eyebrow" data-i18n="{key}.eyebrow">[Eyebrow]</span>
        <h2 data-i18n="{key}.title">[Title]</h2>
        <p data-i18n="{key}.description">[Description]</p>
        <ul class="feature-list"><!-- key points --></ul>
        <a href="[href]" class="btn btn--primary" data-i18n="{key}.cta">[CTA]</a>
      </div>
    </div>
  </div>
</section>
```
- 50/50 split on desktop, stacked on mobile
- Image position alternates: left/right

### 3. Stats Counter
```html
<section class="section section--alt" id="{id}">
  <div class="container">
    <div class="stats-grid" data-source="stats.json">
      <div class="stat" data-animate="counter">
        <span class="stat__number" data-count-target="200">0</span>
        <span class="stat__suffix">+</span>
        <span class="stat__label" data-i18n="stats.clinics.label">Contracted Clinics</span>
      </div>
    </div>
  </div>
</section>
```
- 4 items in a row (desktop), 2x2 (tablet), 1 column (mobile)
- Numbers animate from 0 to target on scroll

### 4. Badge Row
```html
<section class="section section--badges" id="{id}">
  <div class="container">
    <div class="badge-row" data-animate="fade-up">
      <a href="/src/compliance.html#hipaa" class="badge">
        <img src="/assets/images/certifications/hipaa.svg" alt="HIPAA Compliant" loading="lazy">
        <span data-i18n="compliance.hipaa.name">HIPAA Compliant</span>
      </a>
    </div>
  </div>
</section>
```

### 5. CTA Banner
```html
<section class="section section--cta section--{dark|light}" id="{id}">
  <div class="container">
    <div class="cta-banner" data-animate="fade-up">
      <h2 data-i18n="{key}.headline">[Headline]</h2>
      <p data-i18n="{key}.subtext">[Subtext]</p>
      <div class="cta-banner__actions">
        <a href="[href]" class="btn btn--primary btn--lg" data-i18n="{key}.cta_primary">[Primary]</a>
        <a href="[href]" class="btn btn--outline-white btn--lg" data-i18n="{key}.cta_secondary">[Secondary]</a>
      </div>
    </div>
  </div>
</section>
```

### 6. FAQ Accordion
```html
<section class="section" id="{id}">
  <div class="container">
    <div class="section__header" data-animate="fade-up">
      <h2 data-i18n="{key}.title">[Title]</h2>
    </div>
    <div class="faq" data-source="faq.json">
      <div class="faq__category">
        <h3 data-i18n="faq.category.general">General</h3>
        <details class="faq__item">
          <summary data-i18n="faq.general.q1.question">[Question]</summary>
          <div class="faq__answer" data-i18n="faq.general.q1.answer">[Answer]</div>
        </details>
      </div>
    </div>
  </div>
</section>
```

### 7. Timeline
```html
<section class="section" id="{id}">
  <div class="container">
    <div class="section__header" data-animate="fade-up">
      <h2 data-i18n="{key}.title">[Title]</h2>
    </div>
    <div class="timeline" data-animate="stagger">
      <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__content">
          <h3 data-i18n="{key}.node1.title">[Node Title]</h3>
          <p data-i18n="{key}.node1.description">[Description]</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Common Section Spacing
- Section padding: var(--space-8) top/bottom (96px desktop, 64px mobile)
- Section header margin-bottom: var(--space-6) (48px desktop, 32px mobile)
- Background variants: default (white), --alt (#F7F9FC), --dark (#062F4C), --primary-light (#E8F4FD)
