# Remote Patient Monitoring (RPM) 솔루션 프로파일

> 조사일: 2026-04-03 (CY2026 신규 코드 반영 업데이트)
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 기존 services.json/company-content-source.md 데이터 존재. CY2026 PFS Final Rule 신규 코드(99445, 99470) 반영. CY2025 수가 및 경쟁 차별화 요소 보강. WebSearch 기반 CY2026 수가 검증 완료.

---

## 1. 프로그램 개요

| 항목 | 내용 |
|------|------|
| 공식 명칭 | Remote Patient Monitoring (RPM) / Remote Physiologic Monitoring |
| CMS 프로그램 카테고리 | Chronic Care Remote Physiologic Monitoring Services |
| 근거 규정 | CY2019 PFS Final Rule (CMS-1693-F)에서 최초 도입, 이후 연간 PFS에서 업데이트 |
| 시행 시작일 | 2019년 1월 1일 (Medicare 보장 시작) |
| 대상 인구 | Medicare Part B 수혜자, 급성 또는 만성 질환으로 생리학적 데이터 원격 모니터링이 필요한 환자 |

### 프로그램 목적
RPM은 FDA 승인 의료기기를 통해 환자의 생체 데이터(혈압, 혈당, 체중, 산소포화도 등)를 원격으로 수집/전송하고, 의료진이 해당 데이터를 모니터링하여 만성질환 악화를 예방하고 적시 개입을 가능하게 하는 프로그램이다.

---

## 2. CPT/HCPCS 코드 체계

### CY2025 기존 코드

| 코드 | 공식 설명 | 적용 조건 | CY2025 수가 (NF) | CY2025 수가 (F) |
|------|----------|----------|-----------------|----------------|
| 99453 | Remote monitoring of physiologic parameter(s), initial set-up and patient education on use of equipment | 환자 1인당 1회, 디바이스 설정 및 교육 | [UNVERIFIED] ~$19.32 | [UNVERIFIED] ~$19.32 |
| 99454 | Remote monitoring of physiologic parameter(s), device(s) supply with daily recording(s) or programmed alert(s) transmission, each 30 days | 30일당 1회, **16일 이상** 데이터 전송 필수 | [UNVERIFIED] ~$55.72 | [UNVERIFIED] ~$55.72 |
| 99457 | Remote physiologic monitoring treatment management services, clinical staff/physician/other QHP time in a calendar month requiring interactive communication with the patient/caregiver during the month; first 20 minutes | 월 1회, **최소 20분** 이상 interactive communication | [UNVERIFIED] ~$50.18 | [UNVERIFIED] ~$29.64 |
| 99458 | Remote physiologic monitoring treatment management services, each additional 20 minutes | 월 최대 1회 추가, 추가 20분 이상 | [UNVERIFIED] ~$41.17 | [UNVERIFIED] ~$28.47 |

### 🆕 CY2026 신규 코드 (2026년 1월 1일 시행)

| 코드 | 공식 설명 | 적용 조건 | CY2026 수가 (NF) | 비고 |
|------|----------|----------|-----------------|------|
| **99445** | Remote monitoring of physiologic parameter(s), initial device(s) supply with daily recording(s) or programmed alert(s) transmission, **2-15 days** in a 30-day period | 30일당 1회, **2-15일** 데이터 전송 | [VERIFIED] ~$47-52 | ⚡ 99454와 택일 (동시 청구 불가) |
| **99470** | Remote physiologic monitoring treatment management services, clinical staff/physician/other QHP time in a calendar month requiring 1 real-time interactive communication; **first 10 minutes** | 월 1회, **10-19분** interactive communication | [VERIFIED] ~$26 | ⚡ 99457과 택일 (동시 청구 불가) |

### 코드 선택 로직 (CY2026~)

**디바이스 공급 코드 (99445 vs 99454)**:
- 월간 데이터 전송 2-15일 → **99445** 청구 (~$47-52)
- 월간 데이터 전송 16-30일 → **99454** 청구 (~$56)
- 동일 월 99445 + 99454 중복 청구 불가
- 두 코드 수가가 거의 동일 → 전송일 수 무관하게 수익 확보 가능

**치료 관리 코드 (99470 vs 99457)**:
- 월간 관리 시간 10-19분 → **99470** 청구 (~$26)
- 월간 관리 시간 20분+ → **99457** 청구 (~$50)
- 40분+ → 99457 + 99458 청구
- 동일 월 99470 + 99457 중복 청구 불가

### CY2026 신규 코드의 CMS 도입 배경

1. **"All-or-Nothing" 구조 해소**: 기존에는 16일/20분 최소 기준 미달 시 수익 $0 → 신규 코드로 부분 달성 시에도 청구 가능
2. **접근성 확대**: 매일 측정이 어려운 고령/농촌/디지털 리터러시 낮은 환자도 RPM 참여 가능
3. **단기 모니터링 지원**: 약물 조정(medication titration), 퇴원 후 전환기 모니터링 등 단기 집중 관찰 시나리오 커버
4. **FQHC/RHC 적용**: CMS가 99445의 FQHC/RHC 커버리지를 2026.1.1부터 소급 적용 확인

- NF = Non-Facility, F = Facility
- CY2025 수가 출처: CMS CY2025 PFS (추정치)
- CY2026 수가 출처: CMS CY2026 PFS Final Rule (WebSearch 검증 완료, 2026-04-03)
- **참고**: 99453/99454/99445는 Practice Expense(PE) 기반으로 NF/F 차이 없음. 99457/99458/99470은 Work RVU 포함으로 NF/F 차이 있음.

### 관련 코드

| 코드 | 설명 | 비고 |
|------|------|------|
| 99091 | Collection and interpretation of physiologic data, 30+ min/month | RPM 이전 레거시 코드. 99457/99458/99470과 동일 월 동시 청구 불가. 일부 빌링 시스템에서 여전히 생성됨 |
| 99473-99474 | Self-measured blood pressure monitoring | 혈압 자가 측정 관련 코드 |

---

## 3. 자격 기준

### 환자 자격
- Medicare Part B 수혜자
- 급성 또는 만성 질환 보유 (만성질환 2개+ 요건은 CCM에만 적용, RPM은 1개 질환도 가능)
- 의사/QHP가 RPM이 의학적으로 필요하다고 판단한 환자
- 환자 동의 필수 (서비스 제공 전)
- **중요**: CY2024부터 RPM은 기존 환자(established patient) 또는 신규 환자(new patient) 모두에게 적용 가능
- 16일/30일 데이터 전송 요건 충족 가능한 환자

### 공급자 자격
- 의사(MD/DO), NP, PA, CNS 등 Qualified Healthcare Professional(QHP)
- Clinical staff가 QHP의 직접 감독(direct supervision) 또는 일반 감독(general supervision) 하에 서비스 제공 가능
- 99453/99454: general supervision (임상 스태프가 디바이스 설정 가능)
- 99457/99458: general supervision (QHP의 일반적 감독 하에 임상 스태프가 interactive communication 수행 가능)

### 시설 자격
- Primary Care Clinic, Specialty Practice, Hospital Outpatient Department
- FQHC/RHC: 별도 수가 체계 적용
- SNF (Skilled Nursing Facility): 적용 가능 (단, Part A 입원 기간 중에는 별도 규정)

### 동의 요건
- 서비스 시작 전 환자/대리인 동의 필수
- 구두(verbal) 동의 허용, 의료 기록에 문서화
- 비용 분담(coinsurance/copay) 안내 포함
- 제3자 데이터 공유 동의 (해당 시)

---

## 4. 임상 워크플로우

### 공급자 측 흐름

1. **환자 식별 및 등록**
   - 만성질환 진단 확인 (고혈압, 당뇨, 심부전, COPD, 천식 등)
   - RPM 의학적 필요성 판단 및 문서화
   - Medicare 적격성 확인
   - 환자 동의 획득 및 기록
   - **CPT 99453 청구 시점**: 디바이스 설정 및 환자 교육 완료 시

2. **디바이스 배포 및 설정 (CPT 99453)**
   - FDA 승인 디바이스 선정 및 배포 (혈압계, 혈당계, 산소포화도, 체중계, 체온계)
   - 디바이스-앱-서버 연동 설정
   - 환자 교육: 측정 방법, 전송 방법, 트러블슈팅
   - HicareNet: 오토페어링 기능, 음성 안내로 교육 부담 감소

3. **지속적 모니터링 (CPT 99454 또는 99445)**
   - 환자의 일일 생체 데이터 자동 수집/전송
   - **CY2026 유연한 전송 규칙**:
     - 16-30일 전송 → **99454** 청구 (~$56)
     - 2-15일 전송 → **99445** 청구 (~$47-52) 🆕
   - 이상 수치 자동 알림 (threshold-based alert)
   - 데이터 대시보드 모니터링 (Care Portal)
   - 추세 분석 및 패턴 인식

4. **치료 관리 및 개입 (CPT 99457/99458 또는 99470)**
   - **Interactive Communication 필수**: 환자/보호자와 실시간 양방향 소통 (전화, 영상, 채팅)
   - 이상 수치 발견 시 임상 개입 (약물 조정, 전문의 의뢰 등)
   - 케어 플랜 검토 및 조정
   - 환자 교육 및 자가관리 지원
   - **CY2026 유연한 시간 추적**:
     - 10-19분 → **99470** 청구 (~$26) 🆕
     - 20분+ → **99457** 청구 (~$50)
     - 40분+ → 99457 + **99458** 청구 (~$91)

5. **문서화 및 빌링**
   - 제공 시간 기록 (분 단위)
   - Interactive communication 내용 문서화
   - 디바이스 데이터 전송일 수 확인
   - **자동 코드 선택**: Care Portal이 전송일 수/관리 시간을 추적하여 99445 vs 99454, 99470 vs 99457 최적 코드 자동 결정
   - 월별 클레임 제출 (99454/99445 + 99457/99470 + 선택적 99458)

### 환자 측 여정

1. **등록**: 의료진으로부터 RPM 설명, 동의서 작성
2. **디바이스 수령**: 디바이스 수령, 설정 교육 (오토페어링, 음성 안내)
3. **일일 측정**: 매일 정해진 시간에 생체 데이터 측정, 앱으로 자동 전송
4. **모니터링**: 의료진이 데이터 모니터링, 이상 시 연락
5. **소통**: 월 1회 이상 의료진과 양방향 소통 (상태 확인, 교육)
6. **자가관리**: 앱에서 측정 기록 그래프 확인, 자가관리 실천

### 필요 인력

| 역할 | 업무 | 필수/선택 |
|------|------|----------|
| 의사(MD/DO) 또는 QHP | RPM 처방, 케어 플랜 감독, 99457/99458 빌링 책임 | 필수 |
| RN/LPN (케어 코디네이터) | 일일 데이터 모니터링, 이상 알림 대응, interactive communication | 필수 |
| Medical Assistant (MA) | 디바이스 설정(99453), 환자 교육, 데이터 입력 | 필수 |
| IT/기술 지원 | 디바이스 관리, 앱 지원, 연동 문제 해결, MDM 서비스 | 필수 |
| 빌링 스태프 | 16일 규칙 확인, 시간 추적 검증, 클레임 제출 | 필수 |

---

## 5. 수가 모델 상세

### 빌링 규칙
- **빌링 빈도**:
  - 99453: 환자 1인당 평생 1회 (initial setup)
  - 99454: 30일당 1회 (16일+ 전송 시)
  - 99445: 30일당 1회 (2-15일 전송 시) 🆕 CY2026
  - 99457: calendar month 당 1회 (20분+ 시)
  - 99470: calendar month 당 1회 (10-19분 시) 🆕 CY2026
  - 99458: calendar month 당 1회 (99457 또는 99470 청구 시 추가 가능)
- **택일 규칙 (CY2026~)**:
  - 99445 ⚡ 99454: 동일 월 중복 청구 불가 (전송일 수 기준 택일)
  - 99470 ⚡ 99457: 동일 월 중복 청구 불가 (관리 시간 기준 택일)
- **시간 요건**:
  - 99453: 시간 요건 없음 (설정/교육 완료 시)
  - 99454: 16-30일/30일 데이터 전송 요건
  - 99445: 2-15일/30일 데이터 전송 요건 🆕
  - 99457: 최소 20분 interactive communication
  - 99470: 최소 10분 interactive communication (실시간 양방향 소통 1회 필수) 🆕
  - 99458: 추가 20분 (총 40분 이상 시)
- **문서화 요건**:
  - 환자 동의서
  - 의학적 필요성(medical necessity) 문서화
  - 디바이스 유형, 모니터링 파라미터 기록
  - 데이터 전송 일수 기록 (99445 vs 99454 코드 선택 근거)
  - Interactive communication 시간, 내용, 참여자 기록
  - 실시간 양방향 소통 기록 (문자/음성메일만으로는 불충분)
- **수정자 코드**: 없음 (표준 적용)

### 월별 환자당 수익 시나리오 (NF 기준)

**시나리오 A: 최대 수익 (Full Compliance)** — 16일+ 전송, 40분+ 관리

| 구성 | 코드 | 수가(추정) |
|------|------|-----------|
| 디바이스 공급 (16-30일) | 99454 | ~$55.72 |
| 치료 관리 (첫 20분) | 99457 | ~$50.18 |
| 추가 치료 관리 (20분) | 99458 | ~$41.17 |
| **월 합계** | | **~$147.07** |

**시나리오 B: 표준 수익 (Standard)** — 16일+ 전송, 20분+ 관리

| 구성 | 코드 | 수가(추정) |
|------|------|-----------|
| 디바이스 공급 (16-30일) | 99454 | ~$55.72 |
| 치료 관리 (첫 20분) | 99457 | ~$50.18 |
| **월 합계** | | **~$105.90** |

**🆕 시나리오 C: 단기 모니터링 수익 (CY2026 신규)** — 2-15일 전송, 10분+ 관리

| 구성 | 코드 | 수가(추정) |
|------|------|-----------|
| 디바이스 공급 (2-15일) | **99445** 🆕 | ~$47-52 |
| 치료 관리 (첫 10분) | **99470** 🆕 | ~$26 |
| **월 합계** | | **~$73-78** |

**🆕 시나리오 D: 혼합 수익 (CY2026 신규)** — 2-15일 전송, 20분+ 관리

| 구성 | 코드 | 수가(추정) |
|------|------|-----------|
| 디바이스 공급 (2-15일) | **99445** 🆕 | ~$47-52 |
| 치료 관리 (첫 20분) | 99457 | ~$50.18 |
| **월 합계** | | **~$97-102** |

> **핵심 변화**: CY2026 이전에는 시나리오 A/B만 가능했고, 16일/20분 미달 시 수익이 **$0**이었음. 신규 코드로 시나리오 C/D가 추가되어 부분 달성 시에도 $73-102/월 수익 확보 가능.

### 연간 환자당 수익 추정

- 초기 설정(99453): ~$19.32 (1회)
- 월별 최대(시나리오 A): ~$147.07 x 12개월 = ~$1,764.84
- **연간 최대**: ~$1,784.16 [UNVERIFIED]
- 🆕 월별 최소(시나리오 C): ~$73-78 x 12개월 = ~$876-936
- 🆕 **연간 최소(CY2026)**: ~$895-955 (기존에는 $0이었던 환자에서 발생)

### 동시 빌링 제한

- **99091과 동시 청구 불가** (동일 월, 99457/99458/99470 모두 해당)
- **99445 ⚡ 99454**: 동일 월 택일 (중복 청구 불가)
- **99470 ⚡ 99457**: 동일 월 택일 (중복 청구 불가)
- **APCM(G0556)과는 동시 청구 가능**
- CCM(99490 등)과 동시 청구 가능 (별도 서비스이므로)
- 동일 서비스 기간 내 다른 공급자 중복 청구 불가

### 지불자별 차이
- **Medicare FFS**: 상기 PFS 수가 적용
- **Medicare Advantage**: 다수 MA 플랜 인정, 수가는 계약에 따라 상이
- **Commercial**: 대부분 주요 상업 보험사에서 RPM 코드 인정. COVID-19 이후 채택 급증. 보험사별 사전 승인(prior authorization) 요건 확인 필요.
- **Medicaid**: 주(state)별로 적용 여부 상이. 다수 주에서 RPM 보장 확대 추세.

---

## 6. 공급자 Pain Points

1. **16일/30일 데이터 전송 규칙 충족 어려움**: 환자 순응도(compliance)가 낮을 경우 16일 전송 요건 미충족으로 99454 청구 불가. 고령 환자의 기술 숙련도 부족이 주요 원인. 업계 보고에 따르면 환자 30-40%가 16일 기준 미충족. **🆕 CY2026 완화**: 99445 신설로 2-15일 전송만으로도 청구 가능 (~$47-52). "All-or-Nothing" 문제 해소.

2. **Interactive Communication 시간 추적**: 99457/99458의 20분 시간 추적이 행정적 부담. 여러 채널(전화, 앱, 문자)에 분산된 소통 시간 통합 기록 어려움. 시간 부풀리기(upcoding) 우려로 인한 감사 리스크. **🆕 CY2026 완화**: 99470 신설로 10분 이상이면 청구 가능 (~$26). 단, 실시간 양방향 소통 1회 필수 (문자/음성메일 불가).

3. **디바이스 관리 및 물류**: 120+ 종 디바이스의 재고, 배포, 반환, 교체 관리. 블루투스 페어링 문제, 배터리 교체, 기기 오작동 시 기술 지원. 원격 지역 배송 비용 및 시간.

4. **환자 참여도 유지**: 초기 참여 후 시간 경과에 따른 환자 이탈. 고령 환자의 기술 장벽. 다국어 지원 부족으로 인한 비영어권 환자 참여 어려움.

5. **EMR 연동 복잡성**: RPM 데이터를 기존 EMR에 통합하는 기술적 어려움. 데이터 형식 불일치, 알림 과다(alert fatigue), 워크플로우 단절.

6. **수익성 불확실성**: 디바이스 비용, 인건비, 기술 플랫폼 비용 대비 수익 마진 불확실. 특히 소규모 클리닉은 초기 투자 부담 대비 수익 회수 기간 예측 어려움.

---

## 7. HicareNet 차별화 요소

### 기존 강점 매핑

| 회사 역량 | RPM 서비스에서의 가치 |
|----------|---------------------|
| 120+ 의료기기 호환 | 업계 최고 수준 디바이스 호환성. FDA 승인 혈압계, 혈당계, 산소포화도, 체중계, 체온계 등 완비. 오토페어링으로 설정 부담 최소화 |
| 다국어 지원 (영어/한국어/스페인어) | 환자 앱 다국어 UI, 음성 안내 다국어 지원. 캘리포니아 다문화 환자 대상 RPM 참여도 향상 핵심 역량 |
| 10,000+ 게이트웨이 수출 | VA 보훈부 대규모 프로젝트 실적으로 검증된 디바이스 안정성 및 대량 배포 역량 |
| Care Portal | 실시간 대시보드, 이상신호 알림, AI 리포트 자동 생성. 16일 전송 현황 추적, interactive communication 시간 기록 통합 |
| 40+ 미국 병원 계약 | 3,000+ 환자, 월 300건+ 보험 수가 청구 운영 실적. 빌링 성공률 검증 |
| AI 기반 분석 | 이상 징후 예측, 자동 리포트 생성으로 의료진 행정 부담 경감. 99457/99458 문서화 자동 지원 |

### 경쟁 우위 포인트

- **기술적 차별화**: 120+ 디바이스 오토페어링 - 경쟁사 대비 가장 넓은 디바이스 호환성. 고령층 친화적 음성 안내 측정 유도. Hub(게이트웨이) 기반 안정적 데이터 전송 (Wi-Fi/Cellular)
- **서비스적 차별화**: 3개국어 환자 앱 및 교육 자료. 고령 환자 대상 전화/음성 기반 지원. MDM(Mobile Device Management) 원격 기술 지원
- **가격적 차별화**: 디바이스 월 $15 렌탈 모델 (구매 불필요). 환자당 플랫폼 $500/월 (300명 기준). 초기 투자 최소화 SaaS 모델
- **실적 차별화**: VA 보훈부 10,000+ 게이트웨이 납품 실적. 이탈리아/프랑스 해외 운영 실적. 2023-2025 미국 서부 40개 병원 확장 트랙 레코드

---

## 8. 관련 솔루션과의 연계

| 연계 솔루션 | 연계 방식 | 시너지 |
|------------|----------|--------|
| CCM | RPM + CCM 동시 빌링 가능 | 만성질환 환자에게 RPM(모니터링) + CCM(케어 관리) 동시 제공, 환자당 수익 극대화 |
| APCM | RPM + APCM 동시 빌링 가능 | APCM이 CCM 대체 시에도 RPM은 별도 청구 가능. 통합 관리 효과 |
| AWV | AWV에서 RPM 대상 환자 발굴 | 연간 웰니스 방문 시 만성질환 확인 후 RPM 등록 연계 |
| HRA | HRA 결과로 RPM 대상 질환 식별 | 건강위험평가에서 고혈압, 당뇨 등 위험 인자 발견 시 RPM 연계 |
| VBC | RPM 데이터가 VBC 품질 지표에 기여 | 혈압/혈당 등 지속적 모니터링 데이터가 HEDIS/Stars 지표 개선 근거 |

---

## 9. 출처 목록

| # | 출처 | URL | 게시일 | 신뢰도 |
|---|------|-----|-------|-------|
| 1 | CMS CY2025 PFS Final Rule (CMS-1807-F) | https://www.federalregister.gov/documents/2024/11/22/2024-26351/ | 2024-11-22 | Tier 1 |
| 2 | CMS CY2026 PFS Final Rule | https://www.federalregister.gov/documents/2025/11/05/2025-19787/ | 2025-11-05 | Tier 1 |
| 3 | CMS MLN - Remote Patient Monitoring | https://www.cms.gov/outreach-and-education/medicare-learning-network-mln | 지속 업데이트 | Tier 1 |
| 4 | AMA CPT Code Lookup | https://www.ama-assn.org/practice-management/cpt | 지속 업데이트 | Tier 1 |
| 5 | CMS.gov PFS Lookup Tool | https://www.cms.gov/medicare/payment/fee-schedules/physician/lookup | CY2026 | Tier 1 |
| 6 | Prevounce - 2026 RPM CPT Codes | https://blog.prevounce.com/2026-remote-patient-monitoring-cpt-codes-whats-new-and-what-to-know | 2026 | Tier 2 |
| 7 | VivoCare - CMS 2026 Final Rule New RPM Codes | https://vivocaresolutions.com/blog/2026-pfs-new-rpm-codes-99445-99470/ | 2026 | Tier 2 |
| 8 | Tellihealth - 2026 RPM CPT Code Changes | https://tellihealth.com/resources/2026-rpm-cpt-code-updates | 2026 | Tier 2 |
| 9 | HicareNet company-content-source.md | 프로젝트 내부 | 2025 | 내부 자료 |
| 10 | HicareNet 빌링 리포트 CPT 코드 목록 | 내부 시스템 확인 (2026-04-03) | 2026 | 내부 자료 |

---

## 10. 조사 메모 / 미해결 사항

- ~~**[HIGH] CY2025/2026 정확한 수가 확인 필요**~~: ✅ CY2026 신규 코드(99445, 99470) 수가 WebSearch로 검증 완료 (2026-04-03). CY2025 기존 코드는 추정치 유지.
- **[RESOLVED] CY2026 신규 코드 반영**: ✅ 99445(디바이스 2-15일, ~$47-52)와 99470(치료관리 10분, ~$26) 추가 완료. 빌링 규칙, 수익 시나리오, 워크플로우 반영.
- **[MEDIUM] RTM (Remote Therapeutic Monitoring) 관계**: RPM과 RTM(98975-98981)의 차이 및 HicareNet의 RTM 지원 가능성 검토.
- **[LOW] 주별 Medicaid RPM 보장 현황**: HicareNet 확장 전략(텍사스, 플로리다, 뉴욕)과 관련하여 해당 주의 Medicaid RPM 보장 현황 확인 필요.
- **[LOW] 99091 레거시 코드 상세화**: 빌링 리포트에서 여전히 생성되는 99091에 대한 사용 시나리오 및 99457/99470과의 관계 상세 문서화 필요.
