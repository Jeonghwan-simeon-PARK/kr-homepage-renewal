# APCM (Advanced Primary Care Management) Content Brief

> **CRITICAL: This is a completely new service with ZERO existing content in the project.**

## Executive Summary

APCM is the highest-priority content gap in the HicareNet portfolio. Launched January 1, 2025 by CMS as a replacement/simplification of the fragmented CCM/PCM/BHI code system, APCM represents a structural shift in care management billing. Only ONE competitor (ThoroughCare) has published APCM-specific content, creating a significant first-mover opportunity for HicareNet. The APCM page must establish HicareNet as an authority on this new program while demonstrating readiness to support providers through the CCM-to-APCM transition.

**Data conflict note**: The solution-researcher profile describes APCM as a single G0556 code with Tier 1/Tier 2 differentiation. The market-researcher data describes two separate codes: G0556 (Tier 1) and G0557 (Tier 2). The market-researcher data appears more aligned with CMS final rule implementation. Both are noted as [UNVERIFIED] pending CMS confirmation. **Recommendation**: Use G0556/G0557 dual-code structure in content, with a note that providers should verify with CMS latest guidance.

---

## Target Audience

| Segment | Primary Concern |
|---------|-----------------|
| Existing CCM providers | Should I transition? Will revenue change? Re-consent needed? |
| New-to-care-management providers | What is APCM? How do I start? |
| Practice managers | Revenue impact of CCM vs APCM, simplified billing |
| Billers/Coders | New G-codes, tier classification, billing rules |

---

## CMS/Regulatory Foundation

| Item | Detail |
|------|--------|
| Program | Advanced Primary Care Management (APCM) |
| CMS Category | Care Management Services (General Care Management) |
| Authority | CY2025 PFS Final Rule (CMS-1807-F), 89 FR 68682 |
| Effective Date | January 1, 2025 |
| Key Innovation | Eliminates minute-by-minute time tracking (CCM's biggest pain point) |

### HCPCS Codes and Reimbursement

| Code | Tier | Patient Criteria | CY2025 Rate (NF) | Quality Tag |
|------|------|-----------------|-------------------|-------------|
| G0556 | Tier 1 | 1+ chronic condition (3+ months) | [UNVERIFIED] ~$70-83/month | [ESTIMATED] |
| G0557 | Tier 2 | 2+ chronic conditions (12+ months) or high-risk single condition | [UNVERIFIED] ~$115-135/month | [ESTIMATED] |

**Note**: Solution-researcher profile uses single G0556 with ~$16 (Tier 1) / ~$83 (Tier 2). Market-researcher uses G0556/G0557 with higher estimates. The discrepancy likely reflects evolving CMS guidance. The higher estimates from market-researcher appear more consistent with CMS's stated intent to increase reimbursement. Both sources are [UNVERIFIED].

### Key Billing Rules
- **NO time tracking required** -- the biggest innovation vs CCM
- Monthly billing (calendar month)
- Cannot bill simultaneously with CCM (99490/91/87/89) or PCM (99424-99427)
- CAN bill simultaneously with RPM (99453-99458), AWV (G0438/G0439), E/M codes
- Patient consent required (verbal or written)
- Tier classification based on condition count and complexity

### CCM to APCM Comparison

| Aspect | CCM | APCM |
|--------|-----|------|
| Codes | 4 codes (99490/91/87/89) | 2 codes (G0556/G0557) |
| Target patients | 2+ chronic conditions | 1+ chronic conditions (expanded!) |
| Time tracking | Minute-by-minute (20/30/60 min) | NOT required |
| Reimbursement | $62-140/month | $70-135/month |
| Administrative burden | HIGH | SIGNIFICANTLY REDUCED |
| Simultaneous with RPM | Yes | Yes |
| Simultaneous with CCM | N/A | NO (cannot bill both) |

---

## Clinical Workflow

1. **Patient Identification** -- ICD-10 review, Medicare Part B eligibility, Tier 1 vs Tier 2 classification
2. **Consent & Enrollment** -- Explain APCM service, obtain verbal/written consent, document in EHR
3. **Comprehensive Care Plan** -- Health assessment, condition-specific goals, medication management, specialist coordination, HRA results integration
4. **Monthly Care Management** -- Patient monitoring, care plan review, communication, medication adjustment, specialist referrals. **No minute-by-minute time tracking needed.**
5. **Documentation & Billing** -- Service summary, tier classification documentation, G0556/G0557 monthly claim

---

## Competitive Landscape

### APCM Market Status (as of April 2026)
- **ThoroughCare**: ONLY competitor with confirmed APCM support and dedicated content page
- **All other competitors**: Status unknown ("?" in feature matrix) -- likely in development
- **Market implication**: HicareNet has a narrow window to establish APCM authority before competitors catch up

### HicareNet APCM Differentiators
1. **Multilingual APCM** -- consent, education, care coordination in EN/KR/ES (no competitor offers this for APCM)
2. **RPM + APCM dual billing** -- single platform supporting simultaneous billing for maximum revenue
3. **AI-powered Tier classification** -- ICD-10 analysis for automatic Tier 1/2 recommendation
4. **CCM-to-APCM transition tools** -- existing CCM customer migration support
5. **Transparent pricing** -- known cost structure vs competitors' opaque pricing

### What ThoroughCare Has That HicareNet Needs
- Dedicated APCM landing page with G0556 workflow
- Tier structure explanation
- Eligibility criteria detail
- Integration with their broader care management suite

---

## Market Data

| Metric | Value | Quality Tag |
|--------|-------|-------------|
| APCM Tier 1 eligible population | ~61M Medicare beneficiaries | [PROJECTED] |
| APCM Tier 2 eligible population | ~37M | [PROJECTED] |
| Year 1 participation rate estimate | 5-10% | [PROJECTED] |
| Theoretical TAM | $30-50B/year | [PROJECTED] |
| Realistic Y1 market | $2-5B/year | [PROJECTED] |
| CCM adoption rate (baseline) | 5-8% | [ESTIMATED] |

**Key insight**: APCM expands the eligible population significantly (1+ condition vs CCM's 2+ requirement), creating a much larger addressable market.

---

## HicareNet Positioning

### Current State
- **services.json**: NO APCM entry
- **navigation.json**: NO APCM menu item
- **en.json / ko.json**: NO APCM keys
- **Competitor feature matrix**: HicareNet marked "X" for APCM support

### Recommended Messaging

**Primary Message Pillar**: "APCM-Ready: The Simplified Path to Care Management Revenue"
**Secondary Message Pillar**: "CCM to APCM: We'll Guide Your Transition"
**Tertiary Message Pillar**: "RPM + APCM: The New Revenue Combination"

---

## Content Recommendations

### Hero / Headline Suggestions
1. "APCM Is Here. No More Time Tracking. Start Billing Today."
2. "Advanced Primary Care Management: CMS's New Path to Care Revenue."
3. "From CCM to APCM: Simpler Billing, Better Outcomes."
4. "APCM + RPM: The 2025 Revenue Strategy for Primary Care."

### Core Value Propositions
1. **No more minute-by-minute time tracking** -- APCM eliminates CCM's biggest administrative burden
2. **Expanded patient eligibility** -- Tier 1 covers patients with just 1 chronic condition (vs CCM's 2+ requirement)
3. **Bill APCM + RPM simultaneously** -- maximize per-patient revenue on a single platform
4. **AI-powered Tier classification** -- automatic patient segmentation based on ICD-10 codes
5. **Multilingual support** -- serve diverse Medicare populations with native-language APCM care coordination

### CTA Strategy
- **Primary**: "Book a Demo to See APCM in Action"
- **Secondary**: "Download CCM vs APCM Decision Guide"
- **Tertiary**: "Compare Your CCM and APCM Revenue Potential"

### SEO Keywords

| Priority | Keyword | Competition |
|----------|---------|-------------|
| Primary | APCM software | Very Low (new market!) |
| Primary | APCM billing | Very Low |
| Primary | G0556 G0557 billing | Very Low |
| Primary | advanced primary care management | Low |
| Primary | CCM vs APCM | Low |
| Secondary | APCM eligible conditions | Very Low |
| Secondary | APCM tier classification | Very Low |
| Secondary | CCM to APCM transition | Very Low |
| Tertiary | CMS CY2025 care management changes | Low |

**SEO Opportunity**: APCM is a brand-new program with minimal web content. Early, high-quality content can dominate search rankings.

### i18n Considerations
- APCM is a new concept; Korean translations need clear explanatory context
- The CCM-to-APCM transition narrative must be accessible in Korean for Korean clinic administrators
- APCM consent in Korean/Spanish is a unique selling point

---

## i18n Key Suggestions

```
nav.solutions.apcm
solutions.apcm.eyebrow
solutions.apcm.title
solutions.apcm.description
solutions.apcm.hero_headline
solutions.apcm.hero_subtext
solutions.apcm.what_is.title
solutions.apcm.what_is.desc
solutions.apcm.tier1.title
solutions.apcm.tier1.desc
solutions.apcm.tier1.rate
solutions.apcm.tier2.title
solutions.apcm.tier2.desc
solutions.apcm.tier2.rate
solutions.apcm.vs_ccm.title
solutions.apcm.vs_ccm.desc
solutions.apcm.billing.title
solutions.apcm.billing.no_time_tracking
solutions.apcm.billing.simultaneous_rpm
solutions.apcm.workflow.step1-5
solutions.apcm.feature1-4
solutions.apcm.outcome1-3
solutions.apcm.cta
solutions.apcm.cta_guide
```

---

## Page Structure Recommendation

```
[Hero] "APCM Is Here" headline + NEW badge + "Book a Demo" CTA
  |
[What is APCM?] CMS program definition + CY2025 PFS context
  |
[Tier Structure] Visual Tier 1 vs Tier 2 comparison (conditions, rates)
  |
[CCM vs APCM] Side-by-side comparison table (time tracking, codes, rates)
  |
[How It Works] 5-step workflow (no time tracking emphasis)
  |
[Revenue Calculator] RPM + APCM combined revenue per patient
  |
[Key Features] Tier auto-classification, multilingual, AI documentation
  |
[Eligibility] Who qualifies for APCM Tier 1 vs Tier 2
  |
[Trust Signals] ISO, HIPAA, hospital count, "APCM-ready" badge
  |
[CTA] "Book a Demo" + "Download CCM vs APCM Guide"
```

---

## Related Solution Cross-Links

| Related Solution | Link Context |
|-----------------|-------------|
| CCM | "Already using CCM? Compare your options and consider APCM transition" |
| RPM | "Bill RPM + APCM simultaneously for maximum per-patient revenue" |
| HRA | "HRA results support APCM Tier classification and care plan development" |
| AWV | "AWV discovers APCM-eligible patients with chronic conditions" |
| VBC | "APCM's comprehensive care management directly improves VBC quality metrics" |

---

## Data Structure Requirements

### services.json -- NEW entry needed:
```json
{
  "id": "apcm",
  "slug": "advanced-primary-care-management",
  "icon": "shield-check",
  "color": "orange",
  "title_key": "solutions.apcm.title",
  "description_key": "solutions.apcm.description",
  "cpt_codes": ["G0556", "G0557"],
  "badge": "new",
  "features": [...],
  "outcomes": [...],
  "cta_key": "solutions.apcm.cta",
  "cta_href": "/src/contact.html?service=apcm"
}
```

### navigation.json -- NEW menu item needed under Solutions
