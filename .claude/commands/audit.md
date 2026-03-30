# /audit - Quality Audit System

Run comprehensive quality audits on the HicareNet website.

## Usage
```
/audit all                  # Run all audit domains
/audit a11y                 # Accessibility audit only
/audit performance          # Performance audit only
/audit i18n                 # i18n completeness audit only
/audit links                # Link integrity audit only
/audit browser              # Cross-browser testing (requires Playwright)
/audit [page-name]          # Audit a specific page
```

## Audit Domains

### 1. Accessibility (a11y) - WCAG 2.1 AA
**Automated checks:**
- Skip-to-content link present and functional
- All `<img>` have `alt` attributes
- Color contrast ≥ 4.5:1 (text), ≥ 3:1 (large text)
- Heading hierarchy sequential (h1→h2→h3, no skips)
- Form inputs have associated `<label>` elements
- ARIA labels on icon-only buttons
- `lang` attribute on `<html>`
- Focus-visible styles on all interactive elements
- `prefers-reduced-motion` respected

**Playwright checks (if available):**
- Tab through all interactive elements
- Verify focus indicator visibility
- Test keyboard-only navigation flow

### 2. Performance
**File-based checks:**
- Image format (WebP with fallback preferred)
- Image dimensions (flag >2000px wide)
- `loading="lazy"` on below-fold images
- No render-blocking scripts (check for `type="module"` or `defer`)
- `font-display: swap` in font declarations
- CSS animation properties (only transform/opacity)
- Total file count and estimated page weight

### 3. i18n Completeness
**Cross-reference checks:**
- en.json ↔ ko.json key parity (identical structure)
- HTML `data-i18n` attributes ↔ JSON keys (no orphans, no missing)
- HTML `data-i18n-placeholder` ↔ JSON keys
- Count of `[TODO:KO]` prefixed values (incomplete translations)
- Language toggle coverage

### 4. Link Integrity
**Static analysis:**
- Internal `href` → file exists in src/
- Anchor `#id` → matching id in target page
- `navigation.json` hrefs → valid pages
- Image `src` → valid file paths
- Footer links → valid destinations
- CTA destinations → valid pages

### 5. Cross-Browser (Playwright required)
**Visual regression:**
- Screenshots at 1440px, 1024px, 768px, 375px
- Compare layout across Chromium, Firefox, WebKit
- Console error check
- Scroll animation trigger verification

## Report Format
```markdown
# Audit Report - [scope]
**Date**: [timestamp]

## Summary
| Domain | Checks | Pass | Fail | Warn |
|--------|--------|------|------|------|
| a11y | X | X | X | X |
| performance | X | X | X | X |
| i18n | X | X | X | X |
| links | X | X | X | X |

## Details
### [Domain]
| # | Check | Status | File:Line | Details | Fix |
|---|-------|--------|-----------|---------|-----|
| 1 | [check] | PASS/FAIL/WARN | [location] | [detail] | [suggestion] |
```

## Process
1. Determine audit scope (all or specific domain/page)
2. Run static analysis checks (Grep, Glob, Read)
3. Run Playwright checks if available and requested
4. Compile report with PASS/FAIL/WARN per check
5. Include file:line references and fix suggestions for failures
6. Save report to `_workspace/04_qa/audit_report.md`
