# Content QA Report

> Generated: 2026-04-02
> QA Agent: content-qa
> Scope: 17 files (9 copy + 8 data/i18n/architecture)
> Briefs verified against: 7 solution briefs + gap analysis + data structure recommendations

---

## Summary

| 영역 | 검증 항목 수 | PASS | FAIL | WARN |
|------|------------|------|------|------|
| 완전성 (Completeness) | 14 | 14 | 0 | 0 |
| 정확성 (Accuracy) | 7 | 5 | 0 | 2 |
| 일관성 (Consistency) | 4 | 3 | 0 | 1 |
| 패턴 준수 (Pattern Compliance) | 5 | 5 | 0 | 0 |
| 빌드 준비도 (Build Readiness) | 9 | 8 | 0 | 1 |
| **총계** | **39** | **35** | **0** | **4** |

---

## 1. Completeness Check

- [x] RPM 카피 완전: **PASS** -- Hero, Description, CPT(99453/54/57/58), Stats(4개), CTA, SEO, i18n Key Map 모두 존재
- [x] CCM 카피 완전: **PASS** -- Hero, Description, CPT(99490/91/87/89), Stats(4개), APCM Transition 섹션, CTA, SEO 모두 존재
- [x] APCM 카피 완전: **PASS** -- 신규 완전 작성됨. Hero, Description, CPT(G0556/G0557), Tier 구조, CCM vs APCM 비교, Stats(4개), CTA, SEO, i18n Key Map 모두 존재
- [x] HRA 카피 완전: **PASS** -- 신규 완전 작성됨. Hero, Description, CPT(96160/96161), Revenue Pipeline, Assessment Tools, Stats(3개), CTA, SEO 모두 존재
- [x] AWV 카피 완전: **PASS** -- Hero, Description, CPT(G0438/G0439/G0402 포함 IPPE 추가), Required Components(8개), Stats(4개), CTA, SEO 모두 존재
- [x] VBC 카피 완전: **PASS** -- Hero, Description, Quality Measure Map, VBC Models(MIPS/MSSP/ACO REACH/Stars), Dual Revenue, Stats(4개), CTA, SEO 모두 존재. CPT 코드는 해당 없음(프레임워크)으로 올바르게 처리됨
- [x] FHIR 카피 완전: **PASS** -- Hero, Description, Roadmap Timeline, EHR Compatibility(5개 벤더), Stats(3개), CTA("Join Pilot"), SEO 모두 존재
- [x] 홈 히어로 카피: **PASS** -- Primary Hero + 3 Variants(A/B/C), Solutions Preview(7개 카드), Stats Counter(5개), Trust Bar, APCM Spotlight Banner, Bottom CTA, SEO 모두 존재
- [x] 공통 카피: **PASS** -- Primary CTA("Book a Demo"), Secondary CTAs(7개 서비스별), Trust Badges(HIPAA/ISO27001/ISO27701), Stats Counter, Navigation Labels, Footer CTA, Microcopy, Differentiator Statements(5개), Cross-Solution Revenue Table 모두 존재
- [x] APCM services entry: **PASS** -- `03_data_services_additions.json`에 완전한 APCM 엔트리 존재 (id: "apcm", slug, icon, color, badge:"new", cpt_codes:["G0556","G0557"], features 4개, outcomes 3개, billing_detail 포함)
- [x] HRA services entry: **PASS** -- `03_data_services_additions.json`에 완전한 HRA 엔트리 존재 (id: "hra", slug, icon, color, cpt_codes:["96160","96161"], features 4개, outcomes 3개, parent_service:"awv" 포함)
- [x] Navigation APCM 추가: **PASS** -- `03_data_navigation_update.json`에 APCM 메뉴 아이템 존재 (id:"apcm", badge:"new", CCM 다음 위치)
- [x] Navigation "Who We Help": **PASS** -- audiences 섹션 추가됨 (small-clinics, community-health, fqhc, va-government)
- [x] Navigation CTA 변경: **PASS** -- contact 항목이 `label_key: "nav.cta_demo"`, `is_cta: true`로 변경됨

---

## 2. Accuracy Check

### CPT 코드 체인 검증 (Brief -> Copy -> services.json -> i18n)

- [x] RPM CPT 코드 체인: **PASS**
  - Brief: 99453, 99454, 99457, 99458
  - Copy (`03_copy_rpm.md`): 99453, 99454, 99457, 99458 -- 일치
  - Services updates (`03_data_services_updates.json`): codes 배열에 99453/99454/99457/99458 -- 일치
  - i18n EN (`03_i18n_en_additions.json`): solutions.rpm.billing.code_99453/54/57/58 키 존재 -- 일치
  - i18n KO (`03_i18n_ko_additions.json`): 동일 키 존재 -- 일치
  - 기존 services.json cpt_codes: ["99453","99454","99457","99458"] -- 일치

- [x] CCM CPT 코드 체인: **PASS**
  - Brief: 99490, 99491, 99487, 99489
  - Copy (`03_copy_ccm.md`): 99490, 99491, 99487, 99489 -- 일치
  - Services updates: codes 배열에 전부 존재 -- 일치
  - i18n EN/KO: solutions.ccm.billing.code_99490/91/87/89 키 존재 -- 일치
  - 기존 services.json cpt_codes: ["99490","99491","99487","99489"] -- 일치

- [x] APCM CPT G0556/G0557: **PASS**
  - Brief: G0556 (Tier 1), G0557 (Tier 2) -- 이중 코드 구조 사용 권고
  - Copy (`03_copy_apcm.md`): G0556, G0557 -- 일치
  - Services additions: cpt_codes: ["G0556","G0557"] -- 일치
  - i18n EN: solutions.apcm.billing.code_g0556/g0557 관련 내용은 tier1/tier2 섹션에 포함 -- 일치
  - i18n KO: 동일 구조 -- 일치

- [x] AWV CPT G0438/G0439/G0402: **PASS**
  - Brief: G0438, G0439, G0402 (IPPE 추가 필요)
  - Copy (`03_copy_awv.md`): G0438, G0439, G0402 모두 포함 -- 일치
  - Services updates: cpt_codes 변경: ["G0438","G0439","G0402"] -- 일치
  - i18n EN/KO: solutions.awv.billing.code_g0438/g0439/g0402 키 존재 -- 일치

- [x] HRA CPT 96160/96161: **PASS**
  - Brief: 96160 (patient-focused), 96161 (caregiver-focused)
  - Copy (`03_copy_hra.md`): 96160, 96161 -- 일치
  - Services additions: cpt_codes: ["96160","96161"] -- 일치
  - i18n EN/KO: solutions.hra.billing.code_96160/code_96161 키 존재 -- 일치

### 통계 수치 및 검증 상태

- [x] 통계 수치 검증 상태 일치: **WARN**
  - RPM: 38% readmission reduction -- `[VERIFIED - TIM-HF2, Lancet 2018]` 브리프 일치, 카피에 정확히 반영됨
  - RPM: 72% vs 45% BP control -- `[VERIFIED - Margolis JAMA 2013]` 브리프 일치, 카피 반영됨
  - CCM: ~90% chronic spending -- `[VERIFIED - CDC]` 브리프 일치, 카피 반영됨
  - VBC: $20B+ MSSP savings -- `[VERIFIED - CMS]` 브리프 일치, 카피 반영됨
  - VBC: 500+ ACOs, ~11M beneficiaries -- `[VERIFIED - CMS]` 브리프 일치, 카피 반영됨
  - AWV: 65M+ beneficiaries -- `[VERIFIED]` 브리프 일치
  - FHIR: 96%+ ONC-certified FHIR R4 -- `[VERIFIED]` 브리프 일치
  - **WARN**: APCM outcome2 `"Earn $70-135 per patient per month"` -- 이 수치는 브리프에서 `[UNVERIFIED]/[ESTIMATED]`로 표기되어 있으나, i18n EN additions에서 `outcome2: "Earn $70-135 per patient per month with simplified billing"`로 단정적 표현이 사용됨. 브리프 권고대로 "verify with CMS" 문구가 별도 billing.note에는 있으나, outcome 문장 자체에는 없음

- [x] [UNVERIFIED] 데이터 처리: **WARN**
  - 개별 CPT 요율($19.32, $55.72 등)은 카피에 직접 표기하지 않고 billing_detail의 `estimated: true` 플래그와 `[ESTIMATED]` 노트로 처리 -- 올바름
  - APCM Tier 1/2 요율은 `[ESTIMATED] ~$70-83/month` 형태로 표기 -- 올바름
  - CCM 월간 시나리오 `[ESTIMATED] $64 to $194` 형태 -- 올바름
  - RPM 월간 최대 `[ESTIMATED] Up to ~$147/patient/month` -- 올바름
  - **WARN**: AWV 요율($118-175)이 카피 lead 문장에 `"direct reimbursement of $118-175 per visit"`로 사실처럼 표기됨. 브리프에서 해당 수치는 `[UNVERIFIED]`로 태그됨. `billing.note`에 estimate 면책 없음. 이는 경미한 문제로, billing.note에 이미 "ACA preventive service" 언급이 있지만, 요율 자체의 UNVERIFIED 상태가 명시적으로 표시되지 않음

---

## 3. Consistency Check

### i18n EN/KO 파리티

- [x] i18n EN/KO additions 파리티: **PASS**
  - `03_i18n_en_additions.json` 총 키: 95개 (meta 기준)
  - `03_i18n_ko_additions.json` 총 키: 95개 (meta 기준)
  - 최상위 구조: nav, home, solutions -- 양쪽 동일
  - solutions.apcm: EN 31개 리프 키, KO 31개 리프 키 -- 일치
  - solutions.hra: EN 28개 리프 키, KO 28개 리프 키 -- 일치
  - solutions.rpm (billing/related/cta_section): EN 14개, KO 14개 -- 일치
  - solutions.ccm (billing/apcm_transition/related/cta_section): EN 14개, KO 14개 -- 일치
  - solutions.awv (billing/components/pipeline/recall/related/cta_section): EN 20개, KO 20개 -- 일치
  - solutions.vbc (what_is/dual_revenue/models/quality/equity/related/cta_section): EN 20개, KO 20개 -- 일치
  - nav 섹션: 양쪽 동일 구조
  - home 섹션: 양쪽 동일 구조
  - 누락 키: 없음

- [x] i18n EN/KO updates 파리티: **PASS**
  - `03_i18n_en_updates.json`: home.hero(4키), home.solutions(10키), home.cta(3키), solutions.hero(3키), solutions.rpm(12키), solutions.ccm(12키), solutions.awv(12키), solutions.vbc(12키), solutions.cta(3키)
  - `03_i18n_ko_updates.json`: 동일 구조와 동일 키 수
  - 누락 키: 없음

### services.json 스키마 일관성

- [x] services additions 스키마 일관성: **WARN**
  - 기존 services.json 스키마: `{id, slug, icon, color, title_key, description_key, cpt_codes, features[{text_key}], outcomes[{text_key}], cta_key, cta_href}`
  - APCM 신규 엔트리: 기존 필드 모두 포함 + **추가 필드**: `badge`, `related_services`, `simultaneous_billing`, `cannot_bill_with`, `billing_detail`
  - HRA 신규 엔트리: 기존 필드 모두 포함 + **추가 필드**: `parent_service`, `related_services`, `positioning_note`
  - services_updates의 기존 서비스(RPM/CCM/AWV/VBC)에도 `related_services`, `simultaneous_billing`, `billing_detail` 등 추가 필드 부여
  - **판정**: 기존 필수 필드(id, slug, icon, color, title_key, description_key, cpt_codes, features, outcomes, cta_key, cta_href)는 모두 존재하여 하위 호환성 유지. 추가 필드는 확장이므로 기존 코드가 깨지지 않음. 다만, `badge` 필드가 APCM에만 있고 기존 엔트리에는 없으므로 렌더링 로직에서 optional 처리 필요 -- WARN (minor)

### 톤/용어 일관성

- [x] 톤/용어 일관성: **PASS**
  - 모든 카피가 아웃컴 중심 + 전문적 톤 유지
  - "HicareNet"은 전체 카피에서 일관되게 사용
  - Korean 표현: "하이케어넷" 일관 사용
  - 의료 용어: CPT, HEDIS, MIPS, MSSP, Stars 등 축약어가 일관되게 사용
  - "120+ devices", "40+ hospitals", "3,000+ patients", "10,000+ VA units" 수치가 모든 파일에서 일관됨

---

## 4. Pattern Compliance

### Vivify Health 패턴

- [x] Outcome-focused hero headlines: **PASS**
  - RPM: "Reduce Readmissions. Increase Revenue. Monitor Patients Remotely." -- 아웃컴 동사(Reduce, Increase)로 시작
  - CCM: "Chronic Care Management in Every Language Your Patients Speak" -- 환자 중심 아웃컴
  - APCM: "APCM Is Here: Simpler Billing, Broader Patient Reach" -- 아웃컴/혜택 중심
  - HRA: "Turn Every Health Assessment into a Care Management Opportunity" -- 아웃컴 동사(Turn)
  - AWV: "Every Wellness Visit Is a Revenue Opportunity Waiting to Happen" -- 수익 기회 중심
  - VBC: "Earn Medicare Reimbursement Today While Building Quality Scores for Tomorrow" -- 아웃컴 동사(Earn, Building)
  - FHIR: "Your RPM Data, Inside Your EHR. Seamlessly via FHIR R4." -- 혜택 중심
  - Home: "Reduce Readmissions. Increase Revenue. Simplify Care Management." -- 아웃컴 동사 3연속
  - 기존 헤드라인("Healthcare Technology, Proven Globally" / "Advanced Remote Patient Monitoring")에서 완전히 전환됨

- [x] No marketing superlatives: **PASS**
  - 전체 카피 및 i18n JSON에서 "world-class", "cutting-edge", "blazingly", "revolutionary", "game-changing", "best-in-class", "unparalleled", "unprecedented", "groundbreaking", "state-of-the-art", "next-gen", "industry-leading" 검색 결과: 0건
  - "only" 사용: "the only CCM platform" / "the only care management platform" -- 사실 기반 주장(경쟁사 분석에서 검증된 다국어 유일성)으로 적절

- [x] CTA "Book a Demo" 통일: **PASS**
  - RPM, CCM, APCM, HRA, AWV, VBC, Home 모두 `cta_primary_en: "Book a Demo"` -- 일치
  - FHIR만 `"Join Our FHIR Pilot Program"` -- 브리프 CTA 전략에 따른 의도적 차별화 (Coming Soon 상태이므로 적절)
  - Navigation CTA: `nav.cta_demo: "Book a Demo"` -- 일치
  - 공통 카피 shared: "Book a Demo" 명시 -- 일치

- [x] CTA 행동+혜택 구조: **PASS**
  - RPM CTA heading: "See How RPM Reduces Readmissions and Increases Revenue" -- 행동(See) + 혜택(Reduces, Increases)
  - CCM: "Ready to Manage Chronic Conditions in Your Patients' Language?" -- 행동(Manage) + 혜택(Patients' Language)
  - APCM: "Ready to Simplify Your Care Management Billing?" -- 행동(Simplify) + 혜택(Billing)
  - HRA: "Start Identifying Your Highest-Value Patients Today" -- 행동(Start Identifying) + 혜택(Highest-Value Patients)
  - AWV: "Start Turning Wellness Visits into Care Management Revenue" -- 행동(Turning) + 혜택(Revenue)
  - VBC: "Start Building Your Value-Based Care Performance Today" -- 행동(Building) + 혜택(Performance)

- [x] Vivify Health 패턴 전반: **PASS**
  - 기능은 아웃컴을 달성하는 수단으로만 언급: "120+ devices" -> "no vendor lock-in", "multilingual" -> "serve diverse communities"
  - "Who We Help" 네비게이션 섹션 추가 (audience-first)
  - 솔루션 간 Cross-link 존재 (RPM->CCM->APCM->AWV->HRA->VBC)
  - Revenue pipeline 시각화 (AWV -> downstream enrollment)
  - Compliance가 value proposition에 통합됨 ("ISO dual certification" -> trust signal)

---

## 5. Build Readiness

### JSON 구문 검증

JSON 파일을 수동으로 구조 검증한 결과 (Bash 접근 불가로 자동화 검증 불가):

- [x] 03_data_services_additions.json 구문: **PASS** -- 유효한 JSON 구조. 중괄호/대괄호 정상 닫힘. 쉼표 오류 없음. 문자열 올바르게 따옴표 처리.
- [x] 03_data_services_updates.json 구문: **PASS** -- 유효한 JSON 구조. 4개 service update 객체 모두 정상 형식.
- [x] 03_data_navigation_update.json 구문: **PASS** -- 유효한 JSON 구조. changes 배열 및 resulting_nav_structure 모두 정상.
- [x] 03_i18n_en_additions.json 구문: **PASS** -- 유효한 JSON 구조. 중첩 객체 정상. 297줄 전체 검토 완료.
- [x] 03_i18n_ko_additions.json 구문: **PASS** -- 유효한 JSON 구조. 297줄 전체 검토 완료. 한국어 문자열 유니코드 정상.
- [x] 03_i18n_en_updates.json 구문: **PASS** -- 유효한 JSON 구조. 103줄 정상.
- [x] 03_i18n_ko_updates.json 구문: **PASS** -- 유효한 JSON 구조. 103줄 정상.

**참고**: Bash 실행 권한이 없어 `node -e "JSON.parse()"` 또는 `python -c "json.load()"` 자동 검증을 실행하지 못했습니다. 위 결과는 수동 구조 검토 기반입니다. 빌드 전 자동화 검증을 권고합니다.

### i18n 키 컨벤션

- [x] i18n 키 컨벤션: **PASS**
  - 기존 패턴: `{page}.{section}.{element}` (예: `home.hero.headline`, `solutions.rpm.feature1`, `nav.solutions.rpm`)
  - 신규 키:
    - APCM: `solutions.apcm.hero_headline`, `solutions.apcm.billing.note`, `solutions.apcm.tier1.title` -- 기존 패턴 준수
    - HRA: `solutions.hra.pipeline.title`, `solutions.hra.tools.phq9` -- 기존 패턴 준수
    - RPM billing: `solutions.rpm.billing.code_99453` -- 기존 `solutions.rpm.feature1` 패턴과 일관
    - Navigation: `nav.solutions.apcm`, `nav.audiences._label`, `nav.cta_demo` -- 기존 `nav.solutions.rpm` 패턴 준수
    - Home: `home.solutions.apcm_title`, `home.apcm_spotlight.badge` -- 기존 `home.solutions.rpm_title` 패턴 준수
  - `_label` 사용: 기존 en.json에서 `nav.solutions._label: "Solutions"` 패턴이 있으며, 신규 `nav.audiences._label: "Who We Help"` 동일 패턴 사용 -- 일관

### page-architecture 형식

- [x] page-architecture 형식: **WARN**
  - `03_page_architecture_update.md`는 11개 섹션으로 구성되며, 각 섹션에 Before/After 비교, 코드블록 내 구조도, data-animate/data-source 속성, i18n 키 매핑이 포함됨
  - 기존 프로젝트에 별도의 page-architecture 문서가 없으므로 형식 비교 대상이 없음
  - 문서 자체는 체계적이고 실행 가능한 수준이나, **FHIR 섹션 아키텍처가 누락**됨 (FHIR는 기존 "Coming Soon" 상태이므로 기존 페이지 구조를 유지한다는 암묵적 판단으로 보이나, 명시적 언급이 바람직함)

---

## Issues to Fix

| # | 심각도 | 파일 | 문제 | 권장 수정 |
|---|--------|------|------|----------|
| 1 | LOW | `03_i18n_en_additions.json` | APCM outcome2 `"Earn $70-135 per patient per month"` -- 브리프에서 해당 수치는 [ESTIMATED]/[UNVERIFIED]이나 outcome 문장 자체에 면책 문구가 없음. billing.note에만 "Verify with CMS" 존재 | outcome2를 `"Earn an estimated $70-135 per patient per month"` 또는 `"Target $70-135 per patient per month (verify rates with CMS)"`로 수정. KO 파일도 동일 수정 필요 |
| 2 | LOW | `03_i18n_ko_additions.json` | 위 #1의 KO 대응: `"간소화된 청구로 환자당 월 $70-135 수익 창출"` | `"간소화된 청구로 환자당 월 $70-135 예상 수익 (CMS 최신 수가 확인 필요)"`로 수정 |
| 3 | LOW | `03_copy_awv.md`, `03_i18n_en_updates.json` | AWV lead 문장 `"$118-175 per visit"` -- 브리프에서 이 수치는 [UNVERIFIED]이나 카피에서 면책 없이 사실로 기술됨 | `"approximately $118-175 per visit"` 또는 `"~$118-175 per visit (estimated)"` 표현 추가 권고 |
| 4 | LOW | `03_data_services_additions.json` | APCM billing_detail의 Tier 1 rate_nf: 76.50, Tier 2 rate_nf: 125.00 -- 브리프의 범위($70-83, $115-135)의 중간값으로 보이나, 특정 수치를 선택한 근거가 없으며 `estimated: true` 플래그로만 표기됨 | JSON 내 rate_nf 값에 `"rate_range": {"min": 70, "max": 83}` 형태 사용을 권고하거나, 단일값 사용 시 출처 주석 추가 |
| 5 | INFO | `03_page_architecture_update.md` | FHIR 페이지 아키텍처 변경 사항이 명시적으로 기술되지 않음 | FHIR 섹션에 대해 "기존 구조 유지" 또는 brief에 기술된 새 구조 반영 여부를 명시하는 한 줄 추가 권고 |
| 6 | INFO | `03_data_navigation_update.json` | `resulting_nav_structure`에서 solutions 부모의 label_key가 `"nav.solutions._label"`인데, 기존 navigation.json에서는 `"nav.solutions"`로 되어있음 (기존 en.json은 `nav.solutions._label`을 사용) | navigation.json 원본의 label_key 값을 기존 `"nav.solutions"` 에서 `"nav.solutions._label"`로 통일할 것인지 확인 필요. 기존 en.json의 키 구조(`nav.solutions._label: "Solutions"`)와 맞추려면 `_label`이 올바르지만, 기존 navigation.json과의 호환성 확인 필요 |

---

## Cross-Reference Verification Summary

### Brief -> Copy 교차 검증 핵심 항목

| 항목 | Brief 내용 | Copy 반영 | 판정 |
|------|-----------|----------|------|
| RPM 38% readmission [VERIFIED] | PMID: 30318264, Lancet 2018 | stat_1에 PMID 포함 | OK |
| RPM 72% BP control [VERIFIED] | PMID: 23780458, JAMA 2013 | stat_2에 PMID 포함 | OK |
| APCM 시간추적 불필요 [VERIFIED] | CY2025 PFS Final Rule | stat_2에 "0 minutes" + source 포함 | OK |
| APCM G0556/G0557 이중코드 | Brief 권고: dual-code structure | 카피와 JSON 모두 이중코드 사용 | OK |
| CCM 90% chronic spending [VERIFIED] | CDC | stat_1에 반영 | OK |
| VBC $20B+ MSSP [VERIFIED] | CMS | stat_2에 반영 | OK |
| FHIR H1 2026 타임라인 | 기존 en.json + Brief | 로드맵 3단계 반영 | OK |
| "Book a Demo" CTA (7/8 경쟁사) | GAP-C2 | 전체 카피에 반영 | OK |
| "Who We Help" 네비게이션 | GAP-H5, Vivify Health 패턴 | 네비게이션에 반영 | OK |
| AWV IPPE G0402 누락 | GAP-H4 | 카피와 JSON 모두에 추가됨 | OK |
| HRA 독립 서비스 승격 | GAP-H1 | services.json additions에 반영 | OK |
| CCM APCM 전환 내러티브 | GAP-M1 | CCM 카피에 전용 섹션 존재 | OK |

### i18n 키 Chain 검증 (services.json -> i18n)

| services.json 키 참조 | EN additions 존재 | KO additions 존재 | 판정 |
|-----------------------|------------------|------------------|------|
| solutions.apcm.title | O | O | OK |
| solutions.apcm.description | O | O | OK |
| solutions.apcm.feature1-4 | O (4개) | O (4개) | OK |
| solutions.apcm.outcome1-3 | O (3개) | O (3개) | OK |
| solutions.apcm.cta | O | O | OK |
| solutions.hra.title | O | O | OK |
| solutions.hra.description | O | O | OK |
| solutions.hra.feature1-4 | O (4개) | O (4개) | OK |
| solutions.hra.outcome1-3 | O (3개) | O (3개) | OK |
| solutions.hra.cta | O | O | OK |
| nav.solutions.apcm | O | O | OK |
| nav.solutions.awv_hra | O | O | OK |
| nav.cta_demo | O | O | OK |

---

## Verdict: CONDITIONAL PASS

### 근거

**PASS 기준 충족 (35/39 항목)**:
- 7개 솔루션 카피 모두 완전 작성 (APCM, HRA 신규 포함)
- CPT 코드 체인이 Brief -> Copy -> JSON -> i18n 4단계 모두 일치
- i18n EN/KO 파리티 100% (additions 95키, updates 동일 구조)
- Vivify Health 패턴(아웃컴 중심, 기능 나열 탈피) 완전 준수
- 마케팅 과장 표현 0건
- CTA "Book a Demo" 일관 적용
- JSON 파일 구문 수동 검증 통과
- 모든 GAP 분석 항목(C1~C3, H1~H8, M1~M7) 카피와 데이터에 반영됨

**CONDITIONAL 사유 (4 WARN 항목)**:
1. APCM/AWV의 [UNVERIFIED] 수치가 일부 outcome 문장에서 면책 없이 기술됨 (severity: LOW)
2. APCM billing_detail rate_nf 값이 단일값으로 선택되어 범위 표현과 불일치 (severity: LOW)
3. services.json 신규 엔트리에 추가 필드(`badge`, `billing_detail` 등)가 기존 스키마를 확장하여 렌더링 로직 업데이트 필요 (severity: LOW)
4. page-architecture에서 FHIR 섹션 변경 내용 미기술 (severity: INFO)

**최종 판정**: 위 4개 WARN 항목은 모두 LOW/INFO 심각도로, 빌드를 차단하는 수준이 아닙니다. Issues #1-#4의 수정을 권고하되, 수정 없이도 빌드 진행이 가능합니다. JSON 자동 구문 검증(node/python)은 빌드 파이프라인에서 반드시 수행해야 합니다.
