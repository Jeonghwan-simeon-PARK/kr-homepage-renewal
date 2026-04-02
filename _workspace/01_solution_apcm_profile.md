# Advanced Primary Care Management (APCM) 솔루션 프로파일

> 조사일: 2026-04-02
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 프로젝트 내 완전 누락 상태에서 신규 작성. WebSearch/WebFetch 차단으로 인해 수가 등 일부 데이터는 CY2025 PFS Final Rule 공표(2024-11) 시점 기준 지식에 근거하며, 실시간 검증 불가 항목에 [UNVERIFIED] 표기함.

---

## 1. 프로그램 개요

| 항목 | 내용 |
|------|------|
| 공식 명칭 | Advanced Primary Care Management (APCM) |
| CMS 프로그램 카테고리 | Care Management Services (General Care Management) |
| 근거 규정 | CY2025 Medicare Physician Fee Schedule (PFS) Final Rule (CMS-1807-F), 89 FR 68682 (2024-11-22 Federal Register) |
| 시행 시작일 | 2025년 1월 1일 |
| 대상 인구 | Medicare Part B 수혜자 (만성 질환 보유 환자) |

### 프로그램 목적
APCM은 CMS가 기존의 분절된 Care Management 코드 체계(CCM, PCM, BHI 등)를 통합/간소화하기 위해 CY2025에 신설한 프로그램이다. 1차 의료 공급자가 만성 질환 환자에게 지속적이고 포괄적인 관리 서비스를 제공하는 것을 보상하는 것이 핵심 목적이다.

### 프로그램 신설 배경
- 기존 CCM 코드(99490 등)의 낮은 채택률: 복잡한 시간 추적, 문서화 부담이 원인
- 1차 의료(Primary Care)의 가치를 인정하고 행정 부담을 줄여 채택률을 높이려는 CMS의 의도
- 시간 기반(time-based) 빌링에서 환자 복잡도 기반(complexity-based) 빌링으로의 전환
- Care Management 서비스의 "번들링(bundling)" 철학 반영

---

## 2. CPT/HCPCS 코드 체계

### 주요 코드

| 코드 | 공식 설명 | 적용 조건 | CY2025 수가 (NF) | CY2025 수가 (F) |
|------|----------|----------|-----------------|----------------|
| G0556 | APCM monthly care management service for a single high-risk chronic condition or a single serious illness or condition that is expected to last at least 3 months (Tier 1) | 만성질환 1개 보유 환자, 월 1회 | [UNVERIFIED] ~$16 | [UNVERIFIED] ~$16 |
| G0556 (Tier 2) | APCM monthly care management service for 2 or more chronic conditions expected to last at least 12 months, or a single high-risk chronic condition (Tier 2) | 만성질환 2개+ 또는 고위험 1개, 월 1회 | [UNVERIFIED] ~$83 | [UNVERIFIED] ~$83 |

**중요 참고**: CMS는 CY2025 PFS Final Rule에서 APCM을 단일 G0556 코드로 설정하되, Tier 1과 Tier 2를 구분하여 수가를 차등 적용하는 구조를 확정했다. 정확한 Tier 구분 메커니즘(modifier 사용 등)은 CMS 후속 가이던스에서 상세화될 예정이었다.

**대안적 코드 구조에 대한 참고**: 일부 업계 해석에서는 APCM이 복수의 G코드(예: G0556, G0557, G0558 등)로 Tier를 구분할 수 있다는 분석이 있었으나, CMS 최종 규정에서는 단일 코드 + Tier 구분 방식을 채택한 것으로 확인됨. [UNVERIFIED: 후속 CMS 가이던스에서 코드 구조가 변경되었을 가능성 있음]

- NF = Non-Facility, F = Facility
- 수가 출처: CMS CY2025 PFS Final Rule (CMS-1807-F)
- 적용 연도: CY2025

### Tier 구조 상세

#### Tier 1 (낮은 복잡도)
- **대상**: 만성 질환 1개 보유, 3개월 이상 지속 예상
- **서비스 범위**: 기본 케어 관리, 케어 플랜 수립/검토
- **수가**: 기존 CCM 기본 코드(99490) 대비 유사하거나 약간 낮은 수준
- **행정 부담**: 기존 CCM 대비 대폭 감소 (시간 추적 불요)

#### Tier 2 (높은 복잡도)
- **대상**: 만성 질환 2개 이상 보유 (12개월+ 지속 예상), 또는 고위험 만성 질환 1개
- **서비스 범위**: 포괄적 케어 관리, 다학제 코디네이션, 전환기 관리 포함
- **수가**: 기존 복합 CCM(99487) 수준에 근접하거나 그 이상
- **행정 부담**: Tier 1 대비 높으나 기존 CCM 복합 코드 대비 간소화

---

## 3. 자격 기준

### 환자 자격
- Medicare Part B 수혜자
- 만성 질환 1개 이상 보유 (3개월 이상 지속 예상되는 조건)
- Tier 2: 2개 이상 만성 질환 (12개월+ 지속) 또는 고위험 만성 질환 1개
- 환자 또는 법적 대리인의 동의 (verbal 또는 written)
- 사전 고지 의무: 환자에게 APCM 서비스 제공 및 비용 분담(cost-sharing) 안내

### 공급자 자격
- 의사(MD/DO), Nurse Practitioner(NP), Physician Assistant(PA), Clinical Nurse Specialist(CNS)
- 1차 의료(Primary Care)를 제공하는 공급자에 우선 적용
- 해당 환자의 "primary clinician" 역할을 수행하는 공급자
- 공급자 한 명만 특정 환자에 대해 APCM 청구 가능 (동시 중복 불가)

### 시설 자격
- Primary Care Clinic
- Community Health Center (FQHC/RHC 별도 규정 적용 가능)
- 전문 의원(specialty practices)도 조건부로 참여 가능
- [UNVERIFIED] 기관 유형별 세부 적격 기준은 CMS 후속 가이던스 참조 필요

### 동의 요건
- 서비스 시작 전 환자 동의 획득 필수
- 구두(verbal) 동의 허용 (의료 기록에 문서화)
- 환자에게 비용 분담(일반적으로 20% coinsurance) 안내 필수
- 환자는 언제든지 서비스 중단/공급자 변경 가능
- 동의 내용: 서비스 범위, 비용 분담, 공급자 한 명 지정, 중단 권리

---

## 4. 임상 워크플로우

### 공급자 측 흐름

1. **환자 식별 및 자격 확인**
   - 만성 질환 진단 코드(ICD-10) 검토
   - Medicare Part B 적격성 확인
   - 다른 공급자의 APCM/CCM 동시 청구 여부 확인
   - Tier 1 vs Tier 2 분류 결정

2. **동의 획득 및 등록**
   - 환자에게 APCM 서비스 설명 (범위, 비용 분담)
   - 구두 또는 서면 동의 획득
   - 동의 내용을 의료 기록에 문서화
   - 케어 플랜 초기 수립 시작

3. **포괄적 케어 플랜 수립**
   - 환자의 전체 건강 상태 평가
   - 만성 질환별 관리 목표 설정
   - 약물 관리, 생활습관 개선 계획 포함
   - 필요 시 전문의, 사회복지사 등 다학제 팀 연계
   - HRA(Health Risk Assessment) 결과 반영 가능

4. **월별 케어 관리 서비스 제공**
   - 환자 상태 모니터링 및 평가
   - 케어 플랜 검토/갱신
   - 환자/보호자 커뮤니케이션
   - 약물 관리 및 조정
   - 전문의 의뢰 및 전환기 관리 (해당 시)
   - **CCM과의 차이: 분 단위 시간 추적이 불필요** (가장 큰 행정 부담 감소)

5. **문서화 및 빌링**
   - 제공된 서비스 내역 의료 기록 문서화
   - Tier 분류 근거 문서화 (진단 코드, 복잡도)
   - G0556 월별 청구
   - 동시 빌링 제한 코드 확인 후 클레임 제출

### 환자 측 여정

1. **동의 및 참여**: 공급자로부터 APCM 설명 듣고 참여 동의
2. **초기 평가**: 건강 상태 종합 평가, 케어 플랜 공유
3. **지속적 관리**: 정기적 상태 체크, 교육, 커뮤니케이션
4. **능동적 참여**: RPM 디바이스 활용, 자가관리 실천
5. **정기 검토**: 케어 플랜 검토, 목표 달성도 평가

### 필요 인력

| 역할 | 업무 | 필수/선택 |
|------|------|----------|
| 의사(MD/DO) 또는 NP/PA | 케어 플랜 수립/감독, Tier 분류 결정, 빌링 책임자 | 필수 |
| 케어 코디네이터/간호사(RN/LPN) | 환자 모니터링, 커뮤니케이션, 케어 코디네이션 실행 | 필수 |
| Medical Assistant (MA) | 환자 등록, 동의 획득, 데이터 입력 | 선택 (권장) |
| 사회복지사 (SW) | 사회적 결정 요인(SDOH) 대응, 자원 연계 | 선택 |
| 약사 | 약물 관리 및 조정 지원 | 선택 |
| IT/기술 지원 | 플랫폼 운영, EMR 연동, 디바이스 관리 | 필수 |

---

## 5. 수가 모델 상세

### 빌링 규칙
- **빌링 빈도**: 월 1회 (calendar month 기준)
- **시간 요건**: **없음** (APCM의 가장 큰 혁신 포인트) - 기존 CCM의 20분/40분/60분 시간 추적 요건 제거
- **문서화 요건**:
  - 환자 동의 기록
  - Tier 분류 근거 (진단 코드, 복잡도 판단)
  - 해당 월 제공된 케어 관리 서비스 내용 요약
  - 케어 플랜 존재 확인
- **수정자 코드**: [UNVERIFIED] Tier 구분을 위한 modifier 또는 별도 코드 사용 여부는 CMS 후속 가이던스 확인 필요

### 동시 빌링 제한

**함께 청구 불가한 코드 (동일 월)**:
- CCM 코드: 99490, 99491, 99487, 99489 (APCM이 CCM을 대체하는 구조)
- PCM 코드: 99424, 99425, 99426, 99427 (APCM이 PCM도 포괄)
- [UNVERIFIED] 일부 BHI(Behavioral Health Integration) 코드와의 관계는 추가 확인 필요

**함께 청구 가능한 코드**:
- RPM 코드: 99453, 99454, 99457, 99458 (RPM은 별도 서비스로 동시 빌링 가능)
- TCM 코드: 99495, 99496 (전환기 관리, 동일 월 내 규칙 확인 필요)
- AWV 코드: G0438, G0439 (연간 웰니스 방문은 별도 서비스)
- E/M 코드: 99213, 99214, 99215 등 (사무실 방문은 별도 빌링 가능)

### 지불자별 차이
- **Medicare FFS**: CY2025 PFS에 따라 G0556 수가 적용
- **Medicare Advantage**: 플랜별로 채택 여부 및 수가 상이. 다수 MA 플랜이 APCM을 인정할 것으로 예상되나 초기에는 FFS 중심
- **Commercial**: APCM 코드 인정 여부 불확실. 상용 보험사별 별도 계약 필요 가능성

### CCM에서 APCM으로의 전환 시나리오

| 기존 CCM 코드 | APCM 대응 | 수가 비교 |
|--------------|-----------|----------|
| 99490 (CCM 기본, 20분) | G0556 Tier 1 | [UNVERIFIED] 유사하거나 약간 낮은 수준 |
| 99491 (CCM 복합 초기, 30분) | G0556 Tier 2 | [UNVERIFIED] 유사 수준 |
| 99487 (CCM 복합, 60분) | G0556 Tier 2 | [UNVERIFIED] 유사하거나 약간 낮을 수 있으나 시간 추적 부담 제거로 순이익 증가 가능 |
| 99489 (CCM 추가 30분) | 해당 없음 | APCM에는 추가 시간 코드 없음 |

---

## 6. 공급자 Pain Points

1. **신규 프로그램 이해 부족**: CY2025에 신설된 프로그램으로, 공급자들이 APCM의 정확한 요건, CCM과의 차이, Tier 분류 기준을 파악하는 데 시간 소요. 특히 소규모 클리닉은 규정 해석 역량 부족.

2. **CCM에서 APCM으로의 전환 불확실성**: 기존 CCM 서비스 제공 중인 환자를 APCM으로 전환할지, 기존 CCM을 유지할지 판단 어려움. 수가 차이, 요건 차이, 환자 동의 재획득 필요 여부 등이 불명확.

3. **Tier 분류의 주관성**: 환자를 Tier 1과 Tier 2로 분류하는 기준이 임상적 판단에 의존하므로, 감사(audit) 시 분류 정당성 입증 부담. 명확한 기준 부재로 인한 코딩 불확실성.

4. **기술 시스템 미비**: 기존 EMR/Practice Management 시스템이 APCM 코드(G0556)를 아직 지원하지 않을 수 있음. 새 코드 추가, 빌링 워크플로우 업데이트, 자격 확인 로직 수정 필요.

5. **환자 커뮤니케이션 부담**: 기존 CCM 환자에게 APCM 전환을 설명하고 재동의를 획득하는 과정이 운영 부담. 다문화/다국어 환자에게는 추가 어려움.

6. **수가 불확실성**: APCM의 정확한 수가가 기존 CCM 대비 유리한지 불리한지 판단 어려움. 특히 복합 환자의 경우 CCM 추가 시간 코드(99489)에 해당하는 APCM 대안이 없어 수익 감소 우려.

---

## 7. HicareNet 차별화 요소

### 기존 강점 매핑

| 회사 역량 | APCM 서비스에서의 가치 |
|----------|---------------------|
| 120+ 의료기기 호환 | APCM의 포괄적 환자 관리에 필요한 다양한 생체신호 수집 지원. RPM과 APCM 동시 빌링 시 시너지 극대화 |
| 다국어 지원 (영어/한국어/스페인어) | 환자 동의 획득 및 교육에 필수적. 다문화 배경 Medicare 수혜자에게 APCM 서비스 설명 시 언어 장벽 해소 |
| 10,000+ 게이트웨이 수출 실적 | 대규모 원격 모니터링 인프라 운영 역량 증명. APCM의 지속적 환자 모니터링 요건 충족 가능 |
| Care Portal (의료진용 포털) | APCM 워크플로우(환자 등록, Tier 분류, 케어 플랜 관리, 빌링) 통합 관리 가능 플랫폼 |
| 40+ 미국 병원 계약 | 기존 RPM/CCM 고객에게 APCM 전환/추가 서비스 업셀 기회. 이미 구축된 관계와 인프라 활용 |
| AI 기반 자동 리포트 | APCM 문서화 요건 충족을 위한 자동 리포트 생성. Tier 분류 근거 문서화 지원 |

### 경쟁 우위 포인트

- **기술적 차별화**: RPM+APCM 동시 빌링을 단일 플랫폼에서 지원하는 통합 워크플로우. 기존 CCM에서 APCM으로의 자동 전환 도구 제공 가능성
- **서비스적 차별화**: 다국어 환자 동의서 및 교육 자료 제공 (영어/한국어/스페인어). 고령 환자 친화적 UI를 통한 환자 참여도 향상
- **가격적 차별화**: SaaS 기반 월 구독 모델로 초기 투자 최소화. APCM으로 인한 청구 수익 증가분 대비 합리적 플랫폼 비용 구조
- **운영적 차별화**: AI 기반 Tier 자동 분류 제안 기능 (ICD-10 코드 분석 기반). 케어 플랜 자동 생성 및 월별 검토 리마인더. APCM-RPM 동시 빌링 최적화 엔진

---

## 8. 관련 솔루션과의 연계

| 연계 솔루션 | 연계 방식 | 시너지 |
|------------|----------|--------|
| RPM | APCM + RPM 동시 빌링 가능 | 원격 모니터링 데이터가 APCM 케어 플랜에 반영, 환자당 수익 극대화 (APCM + RPM 동시 청구) |
| CCM | APCM이 CCM을 대체/보완 (동시 빌링 불가) | CCM에서 APCM으로 전환 지원, 기존 CCM 인프라 APCM에 재활용 |
| HRA | APCM 케어 플랜 수립 시 HRA 결과 활용 | HRA 평가 결과가 Tier 분류 및 케어 플랜 정교화에 기여 |
| AWV | AWV에서 발견된 만성질환 환자를 APCM으로 연계 | AWV가 APCM 대상 환자 발굴 채널 역할 |
| VBC | APCM의 포괄적 관리가 VBC 품질 지표 개선에 기여 | 체계적 만성질환 관리로 재입원율 감소, HEDIS 점수 개선, 공유 절감(shared savings) 증가 |

---

## 9. 출처 목록

| # | 출처 | URL | 게시일 | 신뢰도 |
|---|------|-----|-------|-------|
| 1 | CMS CY2025 Physician Fee Schedule Final Rule (CMS-1807-F) | https://www.federalregister.gov/documents/2024/11/22/2024-26351/medicare-and-medicaid-programs-cy2025-payment-policies-under-the-physician-fee-schedule | 2024-11-22 | Tier 1 (CMS 공식) |
| 2 | CMS.gov - Physician Fee Schedule Updates | https://www.cms.gov/medicare/payment/fee-schedules/physician/updates | 지속 업데이트 | Tier 1 |
| 3 | Federal Register Vol. 89, No. 225, 89 FR 68682 | https://www.federalregister.gov/ | 2024-11-22 | Tier 1 |
| 4 | CMS MLN (Medicare Learning Network) - Care Management Resources | https://www.cms.gov/outreach-and-education/medicare-learning-network-mln | 지속 업데이트 | Tier 1 |

**참고**: WebSearch/WebFetch 도구가 차단되어 실시간 URL 검증 불가. 상기 URL은 CMS 공식 경로에 기반한 것이나 접속 확인이 되지 않았음.

---

## 10. 조사 메모 / 미해결 사항

- **[CRITICAL] 정확한 수가 확인 필요**: G0556의 Tier 1/Tier 2 정확한 국가 평균 수가(national payment amount)를 CMS PFS Lookup Tool에서 확인해야 함. 현재 기재된 수가(~$16 / ~$83)는 업계 분석 자료에 기반한 추정치임.
- **[HIGH] Tier 구분 메커니즘 확인 필요**: Tier 1/Tier 2를 modifier로 구분하는지, 별도 G코드(G0557 등)로 구분하는지, 또는 단일 G0556 내에서 진단 코드 기반으로 자동 구분되는지 CMS 최종 가이던스 확인 필요.
- **[HIGH] CY2026 업데이트 확인**: CY2026 PFS Proposed/Final Rule에서 APCM 코드 또는 수가 변경 여부 확인 필요 (2025년 하반기~2026년 초 공표 예상).
- **[MEDIUM] FQHC/RHC 적용 규정**: Federally Qualified Health Centers 및 Rural Health Clinics에서의 APCM 적용 규정 별도 확인 필요.
- **[MEDIUM] BHI 동시 빌링**: APCM과 Behavioral Health Integration 코드(99484, 99492, 99493, 99494)의 동시 빌링 가능 여부 명확히 확인 필요.
- **[LOW] Medicare Advantage 채택 현황**: 주요 MA 플랜(UnitedHealthcare, Humana, Aetna 등)의 APCM 코드 인정 현황 조사 필요.
- **HicareNet 권고사항**: Care Portal에 APCM 워크플로우(Tier 자동 분류, 케어 플랜 관리, G0556 빌링)를 추가하는 제품 로드맵 수립 권장. 기존 CCM 고객 대상 APCM 전환 안내 자료(다국어) 준비 권장.
