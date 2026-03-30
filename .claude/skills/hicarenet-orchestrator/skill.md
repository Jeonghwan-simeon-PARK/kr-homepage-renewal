---
name: hicarenet-orchestrator
description: Master orchestrator for coordinating all agents in the HicareNet homepage build process
user_invocable: true
---

# /hicarenet-orchestrator - Build Orchestrator

Coordinate the full HicareNet website build across all 6 specialized agents.

## Usage
```
/hicarenet-orchestrator build          # Full site build
/hicarenet-orchestrator build [page]   # Build specific page
/hicarenet-orchestrator status         # Check build progress
/hicarenet-orchestrator qa             # Run full QA cycle
```

## Agent Team

| Agent | Role | Primary Skills |
|-------|------|---------------|
| content-strategist | Marketing copy, SEO | /content, /i18n |
| visual-designer | Design system, mockups | /hero, /section |
| frontend-builder | HTML/CSS/JS code | /hero, /section, /animate |
| ux-animator | Scroll animations | /animate |
| data-architect | JSON data, i18n | /data, /i18n |
| qa-validator | Testing, validation | /audit |

## Build Workflow

### Phase 1: Foundation (Parallel)
```
┌─ content-strategist: Generate all page content
├─ visual-designer: Create design system + component library
└─ ux-animator: Build animation system (CSS + JS)
```
No dependencies between these three - run in parallel.

### Phase 2: Data Layer (Depends on Phase 1 content)
```
└─ data-architect: Structure JSON files + i18n translations
    ← Receives content from content-strategist
```

### Phase 3: Implementation (Depends on Phase 1 design + Phase 2 data)
```
└─ frontend-builder: Build all HTML pages + integrate CSS/JS
    ← Receives design specs from visual-designer
    ← Receives animation modules from ux-animator
    ← Receives JSON schemas from data-architect
```

### Phase 4: Validation (Depends on Phase 3)
```
└─ qa-validator: Run full audit across all domains
    → Reports issues back to responsible agents
```

### Phase 5: Fix & Polish (If Phase 4 finds issues)
```
┌─ Targeted fixes by responsible agents
└─ qa-validator: Re-run failed checks
```

## Dependency Graph
```
content-strategist ──→ data-architect ──→ frontend-builder ──→ qa-validator
visual-designer   ──→ frontend-builder ──↗
ux-animator       ──→ frontend-builder ──↗
```

## Communication Protocol

### Handoff Signals
- content-strategist → data-architect: "Content for [page] finalized, i18n keys: [list]"
- visual-designer → frontend-builder: "Design specs for [component/page] ready at [path]"
- ux-animator → frontend-builder: "Animation system ready: css/animations/ + js/animations/"
- data-architect → frontend-builder: "JSON schemas finalized at data/"
- frontend-builder → qa-validator: "[page] implementation complete, ready for testing"

### Issue Reports
- qa-validator → [agent]: "FAIL: [check] at [file:line] - [description] - [suggested fix]"

## Reference Documents
- `references/design-system-spec.md` - Colors, typography, spacing, components, animations
- `references/page-architecture.md` - Page sections, content structure, navigation

## Error Handling
- **Single agent failure**: Restart agent with same prompt, or reassign task
- **Pencil MCP unavailable**: visual-designer falls back to markdown specs
- **Playwright MCP unavailable**: qa-validator falls back to static analysis
- **Majority failure**: Escalate to user with status report

## Per-Page Build Checklist
For each of the 6 pages:
- [ ] Content written and reviewed
- [ ] Design mockup or spec complete
- [ ] HTML structure with semantic markup
- [ ] CSS styles matching design system
- [ ] JavaScript interactions working
- [ ] JSON data populated
- [ ] i18n keys in both en.json and ko.json
- [ ] Animations applied and smooth
- [ ] Accessibility checks pass
- [ ] Responsive at all breakpoints
- [ ] Links verified
- [ ] SEO metadata set
