# HicareNet Page Architecture

## Site Map

```
index.html          Home (primary landing)
solutions.html      RPM, CCM, AWV, VBC, FHIR solutions
about.html          Company story, team, certifications
resources.html      Blog, case studies, guides, FAQ
contact.html        Contact form, office locations
compliance.html     HIPAA, ISO 27001, ISO 27701 detail
```

## Navigation Structure

### Primary Nav (Desktop Mega-Menu)
```
[Logo]  Solutions  About  Resources  Compliance  [EN|KO]  [Contact Us]
           │          │        │          │
           ├─ RPM     ├─ Our   ├─ Blog   ├─ HIPAA
           ├─ CCM     │  Story ├─ Case   ├─ ISO 27001
           ├─ AWV     ├─ Team  │  Studies├─ ISO 27701
           ├─ VBC     ├─ Certs ├─ Guides ├─ Data Security
           └─ FHIR    └─ US Ops└─ FAQ
```

### Mobile Nav (Full-Screen Slide-Out)
Same hierarchy, accordion-style expansion for sub-items.

---

## Page Sections Detail

### Home (index.html)

#### 1. Hero
- **Type**: Full-bleed with gradient overlay
- **Background**: Healthcare environment image (clinical/tech feel)
- **Headline**: "Transforming Patient Care Through Technology"
- **Subtext**: "Comprehensive RPM, CCM, AWV & Value-Based Care solutions trusted by 200+ clinics across the United States"
- **CTA Primary**: "Explore Solutions" → solutions.html
- **CTA Secondary**: "Schedule a Demo" → contact.html#demo
- **Animation**: fade-up headline → subtext → CTA, bg slow zoom

#### 2. Solutions Overview
- **Type**: Card Grid (4 columns desktop, 2 tablet, 1 mobile)
- **Cards**: RPM, CCM, AWV, Value-Based Care
- **Each card**: Icon + title + 2-line description + "Learn More" link
- **Animation**: stagger (100ms delay between cards)
- **Link**: Each → solutions.html#{slug}

#### 3. Why Hicare (Differentiators)
- **Type**: 3x Split Content (alternating image/text)
- **Section 1**: "Integrated Device & Software Platform" - image left, text right
- **Section 2**: "Multilingual Patient Engagement" - text left, image right
- **Section 3**: "20+ Years of Healthcare Innovation" - image left, text right
- **Animation**: slide-left / slide-right alternating

#### 4. Impact Numbers
- **Type**: Stats Counter (4 items, single row desktop)
- **Stats**:
  - 200+ / Contracted Clinics
  - 15,000+ / Active Patients
  - 20+ / Years Experience
  - 7 / Languages Supported
- **Animation**: counter (scroll-triggered, 2s duration)
- **Background**: --surface-secondary

#### 5. FHIR Integration Teaser
- **Type**: CTA Banner
- **Headline**: "Coming Soon: Seamless EMR Integration with FHIR"
- **Subtext**: "Connect your existing EHR system with our platform through industry-standard FHIR protocols"
- **CTA**: "Learn More" → solutions.html#fhir
- **Background**: --color-primary-50

#### 6. Compliance Badges
- **Type**: Badge Row (centered)
- **Items**: HIPAA Compliant, ISO 27001, ISO 27701
- **Style**: Grayscale logos, color on hover
- **Link**: Each → compliance.html#{slug}

#### 7. Testimonials
- **Type**: Horizontal Scrollable Card Carousel
- **Cards**: Provider name, organization, quote, photo
- **Navigation**: Left/right arrows + dot indicators
- **Auto-play**: 5s interval, pause on hover

#### 8. Final CTA
- **Type**: CTA Banner (dark background)
- **Headline**: "Ready to Transform Your Patient Care?"
- **Subtext**: "Join 200+ clinics already using Hicare's solutions"
- **CTA Primary**: "Schedule a Demo" → contact.html#demo
- **CTA Secondary**: "Contact Sales" → contact.html
- **Background**: --surface-dark

---

### Solutions (solutions.html)

#### 1. Hero
- **Headline**: "Comprehensive Healthcare Solutions"
- **Subtext**: "From Remote Patient Monitoring to Value-Based Care, we provide the tools your practice needs"
- **CTA**: "Contact Us" → contact.html

#### 2. RPM Section (#rpm)
- **Type**: Split Content (image left, text right)
- **Title**: "Remote Patient Monitoring (RPM)"
- **Key Points**:
  - FDA-compliant monitoring devices
  - Real-time vital sign tracking
  - Automated alerts and thresholds
  - CPT Codes: 99453, 99454, 99457, 99458
- **CTA**: "Learn More About RPM" → contact.html?interest=rpm

#### 3. CCM Section (#ccm)
- **Type**: Split Content (text left, image right)
- **Title**: "Chronic Care Management (CCM)"
- **Key Points**:
  - Multilingual care coordination (7 languages)
  - Personalized care plans
  - Monthly patient engagement
  - CPT Codes: 99490, 99491, 99487, 99489
- **CTA**: "Learn More About CCM"

#### 4. AWV Section (#awv)
- **Type**: Split Content (image left, text right)
- **Title**: "Annual Wellness Visits (AWV)"
- **Key Points**:
  - Automated Health Risk Assessments (HRA)
  - Personalized prevention plans
  - Medicare compliance support
  - CPT Codes: G0438, G0439
- **CTA**: "Learn More About AWV"

#### 5. VBC Section (#vbc)
- **Type**: Split Content (text left, image right)
- **Title**: "Value-Based Care"
- **Key Points**:
  - Quality measure dashboards
  - HEDIS/Stars rating optimization
  - Care gap identification
  - Outcomes-based reporting
- **CTA**: "Learn More About VBC"

#### 6. FHIR Integration (#fhir)
- **Type**: Timeline
- **Title**: "FHIR-Based EMR Integration"
- **Timeline nodes**:
  - Q1 2026: Development & certification
  - Q2 2026: Pilot program launch
  - H2 2026: General availability
- **Subtext**: "Industry-standard HL7 FHIR R4 protocols for seamless interoperability"

#### 7. Implementation Timeline
- **Type**: Timeline (horizontal)
- **Title**: "Get Started in as Little as 8 Weeks"
- **Nodes**: Discovery (Week 1-2) → Configuration (Week 3-4) → Training (Week 5-6) → Go-Live (Week 7-8)

#### 8. CTA
- **Type**: CTA Banner
- **Segmented**: Provider type selector → tailored message
- **CTA**: "Request a Consultation"

---

### About (about.html)

#### 1. Hero
- **Headline**: "Building the Future of Connected Healthcare"
- **Subtext**: "From Seoul to California, we're on a mission to make quality healthcare accessible to everyone"

#### 2. Company Story
- **Type**: Split Content
- **Narrative**: Founded as InSung Information → evolved into HicareNet (2020) → US operations expansion → growing to 200+ clinics
- **Key milestones**: timeline-style highlights

#### 3. US Operations
- **Type**: Card Grid (2 columns)
- **Locations**:
  - Irvine, CA (Headquarters) - address, phone
  - San Jose, CA (Engineering) - address, phone

#### 4. By the Numbers
- **Type**: Stats Counter
- **Same stats as home but with additional**: 50+ device types supported, 99.9% uptime

#### 5. Leadership Team
- **Type**: Card Grid (3-4 columns)
- **Cards**: Photo, name, title, brief bio
- **Animation**: stagger

#### 6. Certifications
- **Type**: Card Grid (3 columns)
- **Cards**: HIPAA, ISO 27001, ISO 27701 with description + renewal date
- **Link**: Each → compliance.html#{slug}

#### 7. CTA
- **Headline**: "Join Our Growing Network"
- **CTA**: "Get in Touch" → contact.html

---

### Resources (resources.html)

#### 1. Hero (minimal)
- **Headline**: "Resources & Insights"
- **Subtext**: "Stay informed with the latest in remote patient monitoring and value-based care"

#### 2. Featured Post
- **Type**: Horizontal Card (large)
- **Fields**: Featured image, category tag, title, excerpt, date, read time

#### 3. Blog Posts
- **Type**: Filterable Card Grid
- **Filters**: All, RPM, CCM, AWV, VBC, Industry News, Compliance
- **Cards**: Image, category, title, excerpt, date
- **Pagination**: Load more button

#### 4. Case Studies
- **Type**: Card Grid (2 columns)
- **Cards**: Logo, title, metrics highlight, "Read Case Study" link

#### 5. Guides & Whitepapers
- **Type**: Card Grid (3 columns)
- **Cards**: Thumbnail, title, type tag (Guide/Whitepaper), download CTA

#### 6. FAQ
- **Type**: Accordion
- **Categories**: General, RPM, Billing, Technical, Compliance
- **Each**: Question (clickable) → expandable answer

#### 7. Newsletter CTA
- **Type**: CTA Banner
- **Headline**: "Stay Updated"
- **Form**: Email input + subscribe button

---

### Contact (contact.html)

#### 1. Hero (minimal, no CTA)
- **Headline**: "Get in Touch"
- **Subtext**: "We're here to help you transform your patient care"

#### 2. Contact Form + Quick Info
- **Layout**: 60% form, 40% quick info (desktop), stacked (mobile)
- **Form Fields**:
  - Full Name (required)
  - Email (required)
  - Phone
  - Organization
  - Provider Type (dropdown: Hospital, Clinic, ACO, SNF, Other)
  - Interest (checkboxes: RPM, CCM, AWV, VBC, FHIR, Other)
  - Message (textarea)
  - Submit: "Send Message"
- **Quick Info**:
  - Phone: main number
  - Email: info@hicare.net
  - Hours: Mon-Fri 8am-6pm PT

#### 3. Office Locations
- **Type**: Card Grid (2 columns)
- **Cards**: City, full address, phone, email
- **Optional**: embedded map or static map image

#### 4. Support Hours
- **Type**: Simple text section
- **Content**: Weekday/weekend hours, emergency contact info

---

### Compliance (compliance.html)

#### 1. Hero
- **Background**: Dark blue (--surface-dark)
- **Headline**: "Security & Compliance"
- **Subtext**: "Your data protection is our highest priority"
- **Icon**: Shield icon accent

#### 2. HIPAA Section
- **Type**: Split Content
- **Title**: "HIPAA Compliance"
- **Content**: PHI protection practices, BAA availability, staff training, incident response
- **Badge**: HIPAA compliant seal

#### 3. ISO 27001 Section
- **Type**: Split Content
- **Title**: "ISO 27001 Certified"
- **Content**: Information security management system, annual audit, risk assessment, continuous improvement
- **Badge**: ISO 27001 seal + last audit date

#### 4. ISO 27701 Section
- **Type**: Split Content
- **Title**: "ISO 27701 Certified"
- **Content**: Privacy information management, GDPR alignment, data subject rights, privacy impact assessments
- **Badge**: ISO 27701 seal + last audit date

#### 5. Data Security Practices
- **Type**: Card Grid (3 columns)
- **Cards**:
  - Encryption (AES-256 at rest, TLS 1.3 in transit)
  - Access Control (RBAC, MFA, audit logs)
  - Infrastructure (AWS HIPAA-eligible, SOC 2)
  - Monitoring (24/7, SIEM, intrusion detection)
  - Backup (automated, geo-redundant, tested recovery)
  - Incident Response (documented plan, 24h notification)

#### 6. Compliance FAQ
- **Type**: Accordion
- **Questions**: BAA process, audit reports, data residency, breach notification, subprocessor list

#### 7. CTA
- **Headline**: "Need Our Compliance Documentation?"
- **CTA**: "Request Compliance Report" → contact.html?interest=compliance

---

## Shared Components (All Pages)

### Header
- Skip-to-content link (hidden, visible on focus)
- Sticky navigation (72px height)
- Logo (links to index.html)
- Primary nav links
- Language toggle (EN/KO)
- "Contact Us" CTA button
- Mobile: hamburger menu

### Footer
- 4-column layout:
  - Column 1: Logo + company description + social links
  - Column 2: Solutions (RPM, CCM, AWV, VBC, FHIR)
  - Column 3: Company (About, Team, Certifications, Careers)
  - Column 4: Resources (Blog, Case Studies, FAQ, Contact)
- Bottom bar: Copyright 2026 HicareNet | Privacy Policy | Terms of Service
- Background: --surface-dark

### Back to Top Button
- Appears after scrolling 500px
- Fixed bottom-right, 48x48px circle
- Smooth scroll to top
- fade-in/fade-out on scroll threshold
