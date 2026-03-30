---
name: i18n
description: Manage English/Korean bilingual content with i18n key system
user_invocable: true
---

# /i18n - Internationalization Manager

Manage bilingual (English/Korean) content for the HicareNet website.

## Usage
```
/i18n add [key] [en-value] [ko-value]    # Add a translation pair
/i18n check                               # Check en/ko key parity
/i18n missing                             # Find missing translations
/i18n sync                                # Sync keys between en.json and ko.json
/i18n audit                               # Full i18n audit (keys vs HTML)
```

## Key Naming Convention
```
{page}.{section}.{element}
```

### Namespaces
| Prefix | Scope |
|--------|-------|
| common.* | Shared strings (nav, footer, buttons, labels) |
| home.* | Home page |
| solutions.* | Solutions page |
| about.* | About page |
| resources.* | Resources page |
| contact.* | Contact page |
| compliance.* | Compliance page |
| nav.* | Navigation labels |
| footer.* | Footer content |
| stats.* | Statistics labels |
| faq.* | FAQ content |

### Element Names
- `headline`, `subtext`, `description` - Text blocks
- `cta_primary`, `cta_secondary` - Call-to-action buttons
- `eyebrow` - Section eyebrow text
- `title` - Section or component title
- `label` - Form labels, stat labels
- `placeholder` - Form placeholders
- `alt` - Image alt text

## HTML Integration
```html
<!-- Text content -->
<h1 data-i18n="home.hero.headline">Default English Text</h1>

<!-- Attribute translation -->
<input placeholder="Email" data-i18n-placeholder="contact.form.email_placeholder">

<!-- Multiple attributes -->
<img alt="Team photo" data-i18n-alt="about.team.photo_alt">
```

## Language Switching Logic
1. Detect `navigator.language` on first visit
2. Check `localStorage.getItem('hicare-lang')`
3. Default to `en` if no match
4. On toggle: update `<html lang="">`, persist to localStorage, re-render all `data-i18n` elements

## Korean Translation Guidelines
- Medical terminology: Use commonly understood Korean forms, not pure medical jargon
- Formal tone: 존댓말 (formal speech level) for all user-facing text
- CTAs: Culturally appropriate action verbs (문의하기, 자세히 보기, 데모 신청)
- Numbers: Use same numerals, Korean unit words where appropriate
- Company name: "하이케어넷" in Korean context

## Parity Rules
- Every key in en.json MUST exist in ko.json (and vice versa)
- Incomplete Korean translations: prefix value with `[TODO:KO] ` + English fallback
- Key structure (nesting depth) must be identical
- No keys in HTML that don't exist in JSON files
