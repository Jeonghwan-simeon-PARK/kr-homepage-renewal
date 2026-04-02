# Remote Patient Monitoring (RPM) 솔루션 프로파일

> 조사일: 2026-04-02
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 기존 services.json/company-content-source.md 데이터 존재. 최신 규정 변경, CY2025 수가, 경쟁 차별화 요소 보강. WebSearch/WebFetch 차단으로 일부 수가 데이터 [UNVERIFIED] 표기.

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

| 코드 | 공식 설명 | 적용 조건 | CY2025 수가 (NF) | CY2025 수가 (F) |
|------|----------|----------|-----------------|----------------|
| 99453 | Remote monitoring of physiologic parameter(s), initial set-up and patient education on use of equipment | 환자 1인당 1회, 디바이스 설정 및 교육 | [UNVERIFIED] ~$19.32 | [UNVERIFIED] ~$19.32 |
| 99454 | Remote monitoring of physiologic parameter(s), device(s) supply with daily recording(s) or programmed alert(s) transmission, each 30 days | 30일당 1회, 16일 이상 데이터 전송 필수 | [UNVERIFIED] ~$55.72 | [UNVERIFIED] ~$55.72 |
| 99457 | Remote physiologic monitoring treatment management services, clinical staff/physician/other QHP time in a calendar month requiring interactive communication with the patient/caregiver during the month; first 20 minutes | 월 1회, 최소 20분 이상 interactive communication | [UNVERIFIED] ~$50.18 | [UNVERIFIED] ~$29.64 |
| 99458 | Remote physiologic monitoring treatment management services, each additional 20 minutes | 월 최대 1회 추가, 추가 20분 이상 | [UNVERIFIED] ~$41.17 | [UNVERIFIED] ~$28.47 |

- NF = Non-Facility, F = Facility
- 수가 출처: CMS CY2025 PFS (추정치, 실시간 검증 불가)
- 적용 연도: CY2025
- **참고**: 99453/99454는 Practice Expense(PE) 기반으로 NF/F 차이 없음. 99457/99458은 Work RVU 포함으로 NF/F 차이 있음.

### 관련 코드

| 코드 | 설명 | 비고 |
|------|------|------|
| 99091 | Collection and interpretation of physiologic data, 30+ min/month | RPM 이전 코드, 99457과 동일 월 동시 청구 불가 |
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

3. **지속적 모니터링 (CPT 99454)**
   - 환자의 일일 생체 데이터 자동 수집/전송
   - **16일/30일 규칙**: 30일 중 최소 16일 데이터 전송 필수
   - 이상 수치 자동 알림 (threshold-based alert)
   - 데이터 대시보드 모니터링 (Care Portal)
   - 추세 분석 및 패턴 인식

4. **치료 관리 및 개입 (CPT 99457/99458)**
   - **Interactive Communication 필수**: 환자/보호자와 실시간 양방향 소통 (전화, 영상, 채팅)
   - 이상 수치 발견 시 임상 개입 (약물 조정, 전문의 의뢰 등)
   - 케어 플랜 검토 및 조정
   - 환자 교육 및 자가관리 지원
   - **20분 시간 추적 필수**: 99457은 첫 20분, 99458은 추가 20분

5. **문서화 및 빌링**
   - 제공 시간 기록 (분 단위)
   - Interactive communication 내용 문서화
   - 디바이스 데이터 전송일 수 확인 (16일 충족 여부)
   - 월별 클레임 제출 (99454 + 99457 + 선택적 99458)

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
  - 99454: 30일당 1회
  - 99457: calendar month 당 1회
  - 99458: calendar month 당 1회 (99457 청구 시에만 추가 가능)
- **시간 요건**:
  - 99453: 시간 요건 없음 (설정/교육 완료 시)
  - 99454: 16일/30일 데이터 전송 요건
  - 99457: 최소 20분 interactive communication
  - 99458: 추가 20분 (총 40분 이상 시)
- **문서화 요건**:
  - 환자 동의서
  - 의학적 필요성(medical necessity) 문서화
  - 디바이스 유형, 모니터링 파라미터 기록
  - 데이터 전송 일수 기록
  - Interactive communication 시간, 내용, 참여자 기록
- **수정자 코드**: 없음 (표준 적용)

### 월별 환자당 최대 수익 (NF 기준)

| 구성 | 코드 | 수가(추정) |
|------|------|-----------|
| 디바이스 공급 | 99454 | ~$55.72 |
| 치료 관리 (첫 20분) | 99457 | ~$50.18 |
| 추가 치료 관리 (20분) | 99458 | ~$41.17 |
| **월 합계** | | **~$147.07** |

[UNVERIFIED] 상기 수가는 CY2025 추정치. 실제 수가는 지역별 GPCI 조정에 따라 상이.

### 연간 환자당 수익 추정
- 초기 설정(99453): ~$19.32 (1회)
- 월별 최대(99454+99457+99458): ~$147.07 x 12개월 = ~$1,764.84
- **연간 최대**: ~$1,784.16 [UNVERIFIED]

### 동시 빌링 제한
- **99091과 동시 청구 불가** (동일 월)
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

1. **16일/30일 데이터 전송 규칙 충족 어려움**: 환자 순응도(compliance)가 낮을 경우 16일 전송 요건 미충족으로 99454 청구 불가. 고령 환자의 기술 숙련도 부족이 주요 원인. 업계 보고에 따르면 환자 30-40%가 16일 기준 미충족.

2. **Interactive Communication 시간 추적**: 99457/99458의 20분 시간 추적이 행정적 부담. 여러 채널(전화, 앱, 문자)에 분산된 소통 시간 통합 기록 어려움. 시간 부풀리기(upcoding) 우려로 인한 감사 리스크.

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
| 2 | CMS MLN - Remote Patient Monitoring | https://www.cms.gov/outreach-and-education/medicare-learning-network-mln | 지속 업데이트 | Tier 1 |
| 3 | AMA CPT Code Lookup | https://www.ama-assn.org/practice-management/cpt | 지속 업데이트 | Tier 1 |
| 4 | CMS.gov PFS Lookup Tool | https://www.cms.gov/medicare/payment/fee-schedules/physician/lookup | CY2025 | Tier 1 |
| 5 | HicareNet company-content-source.md | 프로젝트 내부 | 2025 | 내부 자료 |

---

## 10. 조사 메모 / 미해결 사항

- **[HIGH] CY2025/2026 정확한 수가 확인 필요**: CMS PFS Lookup Tool에서 99453/99454/99457/99458 국가 평균 수가 실시간 확인 필요. 현재 기재된 수가는 CY2024 기반 추정치 조정.
- **[MEDIUM] CY2025 RPM 규정 변경 사항**: CY2025 PFS에서 RPM 관련 supervision 요건, 동의 요건 등 세부 변경 사항 확인 필요.
- **[MEDIUM] RTM (Remote Therapeutic Monitoring) 관계**: RPM과 RTM(98975-98981)의 차이 및 HicareNet의 RTM 지원 가능성 검토.
- **[LOW] 주별 Medicaid RPM 보장 현황**: HicareNet 확장 전략(텍사스, 플로리다, 뉴욕)과 관련하여 해당 주의 Medicaid RPM 보장 현황 확인 필요.
- **기존 데이터 갭**: company-content-source.md에 RPM 수가 상세가 부족 (CPT 코드만 언급, 개별 코드 수가 미기재). 16일/30일 규칙 등 빌링 요건 미언급.
