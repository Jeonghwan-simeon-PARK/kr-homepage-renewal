# FHIR Integration Content Brief

## Executive Summary

FHIR-based EMR integration is planned for H1 2026 and is currently in the "Coming Soon" state on the website. While most competitors already offer FHIR integration, HicareNet's late entry can be positioned as an advantage: "FHIR-native from the start" rather than legacy adaptation. The FHIR page should address the growing regulatory mandate (21st Century Cures Act, Information Blocking rules, USCDI v3) while positioning HicareNet's unique combination of 120+ device data + multilingual care as a differentiated FHIR implementation. FHIR is a table-stakes requirement, not a differentiator -- but the CONTENT around FHIR (regulatory education, compliance guidance) is an SEO and thought leadership opportunity.

---

## Target Audience

| Segment | Primary Concern |
|---------|-----------------|
| IT Administrators/CIO | EHR integration complexity, FHIR API compatibility, data standards |
| Compliance Officers | 21st Century Cures Act, Information Blocking, USCDI compliance |
| Practice Managers | Workflow impact, data availability, implementation timeline |
| EHR Vendor Partners | API standards, integration certification, testing |

---

## Regulatory Foundation

### 21st Century Cures Act Compliance

| Requirement | Status | HicareNet Impact |
|------------|--------|-----------------|
| FHIR R4 API support (ONC certification) | Required | Must implement |
| Information Blocking prohibition | Active (since 2021) | Must ensure data flows freely |
| USCDI v3 data standard | Required (HTI-1 Rule) | Must support latest data classes |
| SMART on FHIR app launch | Required for ONC certification | Should implement |
| CDS Hooks support | Emerging requirement | Optional but valuable |

### TEFCA (Trusted Exchange Framework)

| Item | Detail |
|------|--------|
| Purpose | National health information exchange framework |
| Status | QHIN certification in progress |
| Relevance | Long-term strategy for nationwide data exchange |
| HicareNet Timeline | Not immediate priority; mid-term consideration |

---

## Market Data

| Metric | Value | Quality Tag |
|--------|-------|-------------|
| EHR systems supporting FHIR R4 (ONC certified) | ~96%+ | [VERIFIED] |
| Hospitals using FHIR R4 | ~85-90% | [ESTIMATED] |
| Physician offices using FHIR R4 | ~70-75% | [ESTIMATED] |
| Active FHIR data exchange utilization | ~40-50% | [ESTIMATED] |
| Global interoperability market (2023) | $3.5-4.5B | [REPORTED - Tier 3] |
| Global interoperability market (2030) | $8-12B | [PROJECTED] |
| CAGR | ~14-17% | [REPORTED] |

### EHR Market Share (integration priority)

| EHR Vendor | Hospital Market Share | FHIR Status |
|-----------|---------------------|-------------|
| Epic | ~36% | Full FHIR R4 + SMART |
| Oracle Health (Cerner) | ~25% | Full FHIR R4 + SMART |
| MEDITECH | ~16% | FHIR R4 supported |
| athenahealth | ~7% (outpatient) | FHIR R4 supported |
| eClinicalWorks | ~8% (outpatient) | FHIR R4 supported |

---

## Competitive Landscape

| Competitor | FHIR Status | Differentiation |
|-----------|------------|-----------------|
| Vivify/Optum | Full FHIR | Optum ecosystem integration |
| CareSimple | Full FHIR | "Open architecture" positioning |
| HRS | Full FHIR | Multi-EHR integration experience |
| ThoroughCare | Full FHIR | Broad EHR partner list |
| Rimidi | **Advanced** | SMART on FHIR pioneer |
| HicareNet | **Planned H1 2026** | Late entrant |

### HicareNet FHIR Strategy
- FHIR itself is NOT a differentiator (everyone has/will have it)
- **Differentiation comes from WHAT flows through FHIR**: 120+ device data + multilingual care data + AI reports
- Position as "FHIR-native" (built from scratch with FHIR R4, not retrofitted from HL7v2)
- Competitive advantage: RPM device data auto-populated into EHR via FHIR

---

## HicareNet Positioning

### Current State
- navigation.json: FHIR listed in Solutions menu
- en.json: Detailed FHIR roadmap (Q1 2026 development, Q2 2026 pilot, H2 2026 GA)
- services.json: NO FHIR entry (it is not a billable service)
- **Gap**: Current content is roadmap-only; needs more regulatory context, EHR partner specifics, and value proposition beyond "we will support FHIR"

### Recommended Messaging

**Primary**: "Seamless EHR Integration: 120+ Device Data Flowing to Your EHR via FHIR R4"
**Secondary**: "21st Century Cures Act Compliant: No Information Blocking, Full Data Access"
**Tertiary**: "Works with Epic, Oracle Health, MEDITECH, and All Major EHR Systems"

---

## Content Recommendations

### Hero / Headline Suggestions
1. "Your RPM Data, Inside Your EHR. Seamlessly via FHIR R4."
2. "FHIR-Native Integration: 120+ Devices Connected to Any EHR."
3. "From Medical Device to Medical Record. Automatically."
4. "EHR Integration That Works With Your System, Not Against It."

### Core Value Propositions
1. **120+ device data flows directly into your EHR** via FHIR R4 APIs -- no manual data entry, no workflow disruption
2. **Works with all major EHR systems** -- Epic, Oracle Health, MEDITECH, athenahealth, eClinicalWorks
3. **21st Century Cures Act compliant** -- meets Information Blocking requirements, USCDI v3 standard
4. **Bidirectional data exchange** -- RPM data goes to EHR; patient demographics and diagnoses come to HicareNet
5. **SMART on FHIR ready** -- access HicareNet RPM/CCM data directly within your EHR workflow

### CTA Strategy
- **Primary**: "Join Our FHIR Pilot Program" (active recruitment for H1 2026)
- **Secondary**: "Get Notified When FHIR Integration Launches"
- **Tertiary**: "Download Our Interoperability Roadmap"

### SEO Keywords

| Priority | Keyword | Competition |
|----------|---------|-------------|
| Primary | RPM EHR integration | Medium |
| Primary | FHIR RPM platform | Low |
| Primary | remote patient monitoring EHR | Medium |
| Secondary | FHIR R4 device integration | Low |
| Secondary | 21st Century Cures Act RPM | Low |
| Secondary | SMART on FHIR healthcare app | Medium |
| Tertiary | information blocking RPM | Very Low |
| Tertiary | USCDI RPM data | Very Low |

### i18n Considerations
- FHIR is a technical standard; Korean content should focus on business benefits rather than technical details
- ko.json: "Your hospital's EMR and our RPM data, seamlessly connected" rather than FHIR protocol details
- Target audience for Korean content is clinic owner/manager, not IT staff

---

## i18n Key Suggestions

```
solutions.fhir.hero_headline
solutions.fhir.hero_subtext
solutions.fhir.what_is.title
solutions.fhir.what_is.desc
solutions.fhir.benefits.title
solutions.fhir.benefits.bidirectional
solutions.fhir.benefits.no_manual_entry
solutions.fhir.benefits.cures_act
solutions.fhir.ehr_partners.title
solutions.fhir.ehr_partners.epic
solutions.fhir.ehr_partners.oracle
solutions.fhir.ehr_partners.meditech
solutions.fhir.ehr_partners.athena
solutions.fhir.roadmap.title
solutions.fhir.roadmap.q1_2026
solutions.fhir.roadmap.q2_2026
solutions.fhir.roadmap.h2_2026
solutions.fhir.compliance.title
solutions.fhir.compliance.cures_act
solutions.fhir.compliance.info_blocking
solutions.fhir.compliance.uscdi
solutions.fhir.cta_pilot
solutions.fhir.cta_notify
```

---

## Page Structure Recommendation

```
[Hero] "Your RPM Data, Inside Your EHR" + "Join Pilot Program" CTA
  |
[Why FHIR Matters] Simple explanation for non-technical audience
  |
[How It Works] Visual: Device → HicareNet → FHIR API → EHR (bidirectional arrows)
  |
[EHR Compatibility] Logo grid of supported EHR systems
  |
[Key Benefits] No manual entry, bidirectional sync, CDS integration
  |
[Regulatory Compliance] 21st Century Cures Act, USCDI v3, Information Blocking
  |
[Roadmap Timeline] Q1 2026 → Q2 2026 → H2 2026 (already exists in en.json)
  |
[CTA] "Join Pilot Program" + "Get Notified"
```

---

## Related Solution Cross-Links

| Related Solution | Link Context |
|-----------------|-------------|
| RPM | "120+ RPM device readings flow automatically to your EHR via FHIR" |
| CCM | "Care plans and patient data sync bidirectionally with your EHR" |
| APCM | "APCM tier classification data integrates with EHR records" |
| VBC | "FHIR enables seamless quality measure reporting for VBC programs" |
| AWV | "AWV and HRA data integrate with your EHR's preventive care records" |
