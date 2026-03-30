# HicareNet Homepage Renewal (kr-homepage-renewal)

하이케어넷 한국 법인 홈페이지 리뉴얼 프로젝트

## Overview

하이케어넷(HicareNet)은 20년 이상의 의료기기 기술력을 보유한 헬스케어 IT 기업입니다.
HX-461의 미국 FDA 510(K) Class 2 인증 경험, Hicare Hub를 통한 100종 이상의 의료기기 연동,
미국 VA(재향군인회) 프로젝트 수출 실적을 바탕으로 RPM/CCM 솔루션을 개발 및 공급하고 있습니다.

이 프로젝트는 하이케어넷의 기술 역량을 돋보이게 하는 방향으로 홈페이지를 리뉴얼합니다.

## Tech Stack

- **HTML5** - Semantic markup, WCAG 2.1 AA accessibility
- **CSS3** - Custom properties (design tokens), mobile-first responsive, CSS animations
- **JavaScript (ES6 Modules)** - Vanilla JS, no frameworks
- **JSON** - Data-driven content, i18n translations

No build tools, no bundlers, no dependencies.

## Project Structure

```text
src/                 HTML pages (6 pages)
css/
  design-system/     tokens.css, reset.css, utilities.css
  components/        nav, hero, buttons, cards, forms, footer
  pages/             page-specific styles
  animations/        scroll-reveal animations
js/
  core/              app initialization
  components/        navigation, faq, form handler, blog filter
  animations/        scroll-observer (IntersectionObserver)
  i18n/              EN/KO language switching
data/
  i18n/              en.json, ko.json (475+ keys each)
  *.json             navigation, services, stats, team, etc.
assets/              images, icons, fonts
```

## Pages

| Page       | File                  | Description                                                |
| ---------- | --------------------- | ---------------------------------------------------------- |
| Home       | `src/index.html`      | Hero, Technology Platform, Solutions, Stats, FHIR          |
| Solutions  | `src/solutions.html`  | RPM, CCM, AWV, VBC, FHIR timeline, Implementation         |
| About      | `src/about.html`      | Company story, Stats, Leadership team, Certifications      |
| Resources  | `src/resources.html`  | Blog, FAQ accordion, Newsletter                            |
| Contact    | `src/contact.html`    | Contact form, Support hours                                |
| Compliance | `src/compliance.html` | FDA 510(K), HIPAA, ISO 27001, ISO 27701, Security          |

## Key Features

- **i18n (EN/KO)** - Real-time language switching via toggle, 475+ translation keys
- **Scroll Animations** - IntersectionObserver-based, 8 animation types, `prefers-reduced-motion` respected
- **Responsive** - Mobile-first, breakpoints at 768/1024/1280/1440px
- **Accessibility** - Skip links, ARIA labels, keyboard navigation, focus management
- **Design System** - CSS custom properties, consistent spacing (8px base), Healthcare Blue palette

## Development

### Local Server

```bash
npx http-server . -p 3000 --cors -c-1
```

Open <http://localhost:3000/src/index.html>

### Design System

- **Primary Blue**: `#1A8FD8`
- **Secondary Green**: `#2EBE74`
- **Fonts**: Inter (EN) + Noto Sans KR (KO)
- **Spacing**: 8px base unit
- **Breakpoints**: 768 / 1024 / 1280 / 1440px

## Naming Convention

- Company: **HicareNet** (EN) / **하이케어넷** (KO)
- Product: **Hicare** (EN) / **하이케어** (KO)
- Device: **HX-461**

## Harness (Claude Code)

This project includes a development harness for Claude Code:

- **6 Agents**: content-strategist, visual-designer, frontend-builder, ux-animator, data-architect, qa-validator
- **8 Commands**: `/hero`, `/section`, `/animate`, `/content`, `/data`, `/i18n`, `/audit`, `/hicarenet-orchestrator`
- **Reference Docs**: Design system spec, Page architecture

## License

Proprietary - HicareNet, Inc.
