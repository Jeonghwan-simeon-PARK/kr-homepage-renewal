# HRA (Health Risk Assessment) Content Brief

> **PRIORITY: Elevate from AWV sub-feature to independent service offering.**

## Executive Summary

HRA is currently buried as a sub-feature of AWV in the project data ("Automated Health Risk Assessments (HRA)" in AWV features). Research reveals HRA should be positioned as an independent service -- not for its direct revenue (96160 yields only ~$4.71), but as the **"Patient Discovery Engine"** that feeds RPM, CCM, and APCM enrollment pipelines. HicareNet's multilingual digital HRA capability is a unique differentiator, as standardized HRA tools in Korean and Spanish are scarce in the market. HRA is the entry point of the entire care management revenue funnel.

---

## Target Audience

| Segment | Primary Concern |
|---------|-----------------|
| Practice managers | AWV completion rates, patient enrollment pipeline, revenue maximization |
| Physicians/QHPs | Clinical assessment quality, risk identification, actionable results |
| Care coordinators | Workflow efficiency, paper vs digital, completion rates |
| Quality managers | HEDIS/Stars compliance, preventive service metrics |
| Korean/Hispanic clinics | Language barriers in assessments, cultural appropriateness |

---

## CMS/Regulatory Foundation

### Dual Use Cases

**1. AWV-Embedded HRA** (no separate billing)
- Required component of AWV (G0438/G0439)
- Included in AWV reimbursement
- No additional patient cost

**2. Standalone HRA** (independent billing)
| Code | Description | CY2025 Rate |
|------|------------|-------------|
| 96160 | Patient-focused health risk assessment instrument | [UNVERIFIED] ~$4.71 |
| 96161 | Caregiver-focused health risk assessment instrument | [UNVERIFIED] ~$4.71 |

**3. APCM-Linked HRA**
- HRA results support APCM Tier 1/Tier 2 classification
- No specific billing link, but clinical workflow integration

### Assessment Tools Landscape

| Tool | CPT Code | Purpose |
|------|----------|---------|
| PHQ-9 | 96127 | Depression screening |
| GAD-7 | 96127 | Anxiety screening |
| AUDIT/AUDIT-C | 96160 | Alcohol risk |
| MMSE/MoCA | 96116/96132 | Cognitive assessment |
| Falls Risk | 96160 | Fall prevention |
| SDOH Screening (AHC-HRSN) | 96160 | Social determinants |
| Nutritional Assessment | 96160 | Nutrition status |
| ADL/IADL | 96160 | Functional ability |

---

## Strategic Value: The Patient Discovery Engine

HRA's primary value is NOT direct revenue. It is the **gateway** that identifies patients for high-revenue services:

| HRA Finding | Linked Service | Monthly Revenue Potential |
|-------------|---------------|-------------------------|
| Hypertension/Diabetes risk | RPM enrollment | ~$147/month |
| 2+ chronic conditions | CCM/APCM enrollment | ~$64-135/month |
| Depression risk (PHQ-9) | BHI services | ~$60-170/month |
| Fall risk | Fall prevention program | Varies |
| Cognitive decline | Cognitive assessment/management | Varies |

**Marketing angle**: "One HRA can unlock $2,000+ in annual per-patient revenue through RPM and CCM/APCM enrollment."

---

## Competitive Landscape

| Competitor | HRA Support | Differentiator |
|-----------|------------|----------------|
| ThoroughCare | Yes (AWV-integrated) | Broad program coverage |
| Prevounce | **Strong** (digital HRA/AWV specialist) | Dedicated AWV/HRA platform |
| WellTrackONE | **Strong** (nurse-dispatched AWV service) | Full-service AWV with in-person nurses |
| ChronicCareIQ | Partial | AWV workflow with some HRA |
| HicareNet | Partial (AWV sub-feature) | Multilingual digital HRA potential |

### HicareNet HRA Differentiators
1. **Multilingual digital HRA (EN/KR/ES)** -- culturally adapted assessments in three languages
2. **HRA-to-RPM/CCM/APCM auto-linkage** -- automated service recommendation based on HRA results
3. **Pre-visit digital distribution** -- patients complete HRA via app before AWV visit
4. **Voice-guided HRA for elderly** -- audio assistance for patients with limited literacy
5. **AI-powered risk scoring** -- automatic risk stratification and care pathway recommendation

---

## Market Data

| Metric | Value | Quality Tag |
|--------|-------|-------------|
| AWV HRA completion rate | 50-70% | [ESTIMATED] |
| Medicare beneficiaries eligible for AWV | ~65M | [VERIFIED] |
| AWV annual completion rate | ~50% | [ESTIMATED] |
| APCM target population (HRA feeds into) | ~61M (Tier 1), ~37M (Tier 2) | [PROJECTED] |

---

## HicareNet Positioning

### Current State
- services.json: HRA is NOT a service. It appears as AWV feature1 ("Automated Health Risk Assessments (HRA)")
- navigation.json: No HRA menu item
- en.json: Only one mention in solutions.awv.feature1

### Recommended Positioning
HRA should be elevated to a visible service but NOT necessarily a standalone page. Options:
1. **Recommended**: Combined "AWV & HRA" page with HRA having its own prominent section
2. **Alternative**: Standalone HRA page emphasizing the "Patient Discovery Engine" narrative
3. **Minimum**: Significant expansion of HRA content within AWV page

---

## Content Recommendations

### Hero / Headline Suggestions
1. "Discover Every Patient Opportunity with Digital Health Risk Assessments."
2. "Multilingual HRA: The Gateway to RPM, CCM, and APCM Revenue."
3. "From Assessment to Action: Turn HRA Results into Care Plans."
4. "Complete Assessments. Identify Risks. Enroll Patients. Automatically."

### Core Value Propositions
1. **Turn every HRA into a revenue pipeline** -- automatically identify patients for RPM, CCM, and APCM based on assessment results
2. **Multilingual digital assessments** -- PHQ-9, GAD-7, Falls Risk, SDOH screening in English, Korean, and Spanish
3. **Boost AWV completion rates** -- pre-visit digital HRA via patient app reduces in-office time by 15-20 minutes
4. **Voice-guided assessments for elderly patients** -- audio instructions improve completion rates for low-literacy populations
5. **Automated risk scoring and care pathway recommendation** -- AI identifies high-risk patients for immediate enrollment

### CTA Strategy
- **Primary**: "Book a Demo"
- **Secondary**: "See How HRA Drives RPM/CCM Revenue" (educational content)

### SEO Keywords

| Priority | Keyword | Competition |
|----------|---------|-------------|
| Primary | digital health risk assessment | Medium |
| Primary | AWV HRA software | Low |
| Primary | Medicare HRA tool | Medium |
| Secondary | multilingual health assessment | Very Low |
| Secondary | Korean health risk assessment | Very Low |
| Secondary | HRA RPM patient enrollment | Very Low |
| Tertiary | PHQ-9 digital screening | Medium |
| Tertiary | pre-visit health assessment app | Low |

### i18n Considerations
- HRA tools must be culturally validated, not just translated. PHQ-9 has validated Korean versions.
- Korean elderly patients may find certain questions culturally sensitive (depression, alcohol use)
- Assessment language should be simple and accessible in all three languages
- Voice-guided HRA is especially important for Korean elderly with limited English literacy

---

## i18n Key Suggestions

```
solutions.hra.eyebrow
solutions.hra.title
solutions.hra.description
solutions.hra.pipeline.title
solutions.hra.pipeline.desc
solutions.hra.pipeline.rpm_link
solutions.hra.pipeline.ccm_link
solutions.hra.pipeline.apcm_link
solutions.hra.tools.phq9
solutions.hra.tools.gad7
solutions.hra.tools.falls
solutions.hra.tools.sdoh
solutions.hra.tools.nutrition
solutions.hra.multilingual.title
solutions.hra.multilingual.desc
solutions.hra.digital.title
solutions.hra.digital.privisit
solutions.hra.digital.voice_guided
solutions.hra.cta
```

---

## Page Structure Recommendation (within AWV & HRA combined page)

```
[AWV Hero Section]
  |
[AWV Content...]
  |
[HRA Section Divider] "Health Risk Assessment: Your Patient Discovery Engine"
  |
[How HRA Works] Pre-visit distribution → Digital completion → Auto-scoring → Risk identification → Service enrollment
  |
[Assessment Tools] PHQ-9, GAD-7, Falls Risk, SDOH, etc. with multilingual badges
  |
[HRA → Revenue Pipeline] Visual funnel: HRA finding → RPM/CCM/APCM enrollment → monthly revenue
  |
[Multilingual HRA] EN/KR/ES support detail
  |
[CTA] "Book a Demo"
```

---

## Related Solution Cross-Links

| Related Solution | Link Context |
|-----------------|-------------|
| AWV | "HRA is a required component of every Annual Wellness Visit" |
| RPM | "HRA identifies hypertension and diabetes patients for RPM enrollment" |
| CCM | "HRA discovers patients with 2+ chronic conditions for CCM" |
| APCM | "HRA results support APCM Tier classification" |
| VBC | "HRA completion rates contribute to HEDIS preventive service measures" |
