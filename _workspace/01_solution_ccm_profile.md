# Chronic Care Management (CCM) 솔루션 프로파일

> 조사일: 2026-04-02
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 기존 services.json 데이터 존재. 다국어 케어 코디네이션, APCM과의 관계, CY2025 수가 보강. WebSearch/WebFetch 차단으로 일부 수가 [UNVERIFIED] 표기.

---

## 1. 프로그램 개요

| 항목 | 내용 |
|------|------|
| 공식 명칭 | Chronic Care Management (CCM) |
| CMS 프로그램 카테고리 | Care Management Services |
| 근거 규정 | CY2015 PFS Final Rule (CMS-1612-FC)에서 최초 도입, 42 CFR 414.67 |
| 시행 시작일 | 2015년 1월 1일 (Medicare 보장 시작) |
| 대상 인구 | Medicare Part B 수혜자, 만성 질환 2개 이상 보유 환자 |

### 프로그램 목적
CCM은 만성 질환 2개 이상을 가진 Medicare 환자에게 비대면(non-face-to-face) 케어 관리 서비스를 제공하는 것을 Medicare가 보상하는 프로그램이다. 진료실 방문 사이의 지속적인 관리를 통해 건강 결과를 개선하고 불필요한 응급실 방문/입원을 예방한다.

### CY2025 현황: APCM과의 관계
- CMS CY2025 PFS에서 APCM(G0556) 신설로 CCM의 미래가 변화 전환기
- APCM은 CCM의 시간 추적 요건을 제거한 간소화 버전
- **CCM과 APCM은 동일 환자에 대해 동일 월 동시 청구 불가**
- 공급자는 환자별로 CCM 또는 APCM 중 선택 가능
- 장기적으로 APCM이 CCM을 대체할 것으로 예상되나, 과도기에는 두 프로그램 병행

---

## 2. CPT/HCPCS 코드 체계

| 코드 | 공식 설명 | 적용 조건 | CY2025 수가 (NF) | CY2025 수가 (F) |
|------|----------|----------|-----------------|----------------|
| 99490 | Chronic care management services, at least 20 minutes of clinical staff time directed by a physician or other QHP, per calendar month | 월 20분+ 임상 스태프 시간, 만성질환 2개+ | [UNVERIFIED] ~$64.02 | [UNVERIFIED] ~$40.69 |
| 99491 | Chronic care management services provided personally by a physician or other QHP, at least 30 minutes per calendar month | 월 30분+ 의사/QHP 직접 제공 시간 | [UNVERIFIED] ~$87.67 | [UNVERIFIED] ~$67.26 |
| 99487 | Complex chronic care management services, at least 60 minutes of clinical staff time directed by a physician or other QHP, per calendar month | 월 60분+ 복합 관리, 의학적 의사결정 포함 | [UNVERIFIED] ~$130.41 | [UNVERIFIED] ~$92.63 |
| 99489 | Each additional 30 minutes of clinical staff time directed by a physician or other QHP, per calendar month (list separately in addition to code for primary procedure) | 99487에 추가, 30분+ 추가 시간 | [UNVERIFIED] ~$63.43 | [UNVERIFIED] ~$47.77 |

- NF = Non-Facility, F = Facility
- 수가 출처: CMS CY2025 PFS (추정치)
- 적용 연도: CY2025

### 코드별 시간 요건 상세

| 코드 | 시간 요건 | 서비스 제공자 | 복잡도 |
|------|----------|------------|--------|
| 99490 | 20분+ / 월 | Clinical staff (QHP 감독) | 기본 |
| 99491 | 30분+ / 월 | QHP 직접 | 기본 (의사 직접) |
| 99487 | 60분+ / 월 | Clinical staff (QHP 감독) | 복합 |
| 99489 | 추가 30분+ / 월 | Clinical staff (QHP 감독) | 복합 추가 |

---

## 3. 자격 기준

### 환자 자격
- Medicare Part B 수혜자
- **만성 질환 2개 이상** 보유 (each expected to last at least 12 months or until death)
- 해당 질환이 사망 위험, 급성 악화, 기능적 저하의 상당한 위험을 초래
- 포괄적 케어 플랜 수립 필요
- 환자 동의 필수 (서비스 제공 전)

### 공급자 자격
- 의사(MD/DO), NP, PA, CNS
- 99490/99487/99489: Clinical staff가 QHP의 general supervision 하에 제공 가능
- 99491: QHP가 직접 제공해야 함
- 환자의 primary care physician/practitioner가 제공하는 것이 권장되나, 전문의도 가능

### 시설 자격
- Primary Care Clinic, Specialty Practice
- Hospital Outpatient Department
- FQHC/RHC: 별도 수가 체계 (G0511)
- SNF: 적용 가능 (조건부)

### 동의 요건
- 서면(written) 또는 구두(verbal) 동의
- 동의 기록 필수 (날짜, 방법, 내용)
- 안내 사항: 서비스 범위, 비용 분담(20% coinsurance), 공급자 한 명 지정, 중단 권리
- 연 1회 이상 동의 갱신 권장

---

## 4. 임상 워크플로우

### 공급자 측 흐름

1. **환자 식별 및 자격 확인**
   - 만성질환 2개+ 보유 확인 (ICD-10 코드 기반)
   - Medicare Part B 적격성 확인
   - 다른 공급자의 CCM/APCM 동시 청구 여부 확인
   - 환자 동의 획득 및 기록

2. **포괄적 케어 플랜 수립**
   - 환자의 전체 건강 상태 종합 평가
   - 문제 목록(problem list), 약물 목록(medication list) 정리
   - 만성질환별 관리 목표 및 개입 전략 수립
   - 전문의 연계, 사회적 지원, 환자 교육 계획
   - 케어 플랜은 EHR에 전자적으로 저장 (e-care plan)

3. **월별 비대면 케어 관리 서비스**
   - 전화, 보안 메시징, 원격 모니터링 등 비대면 채널 활용
   - 약물 관리 및 순응도 확인
   - 환자/보호자 교육 및 자가관리 지원
   - 전문의 의뢰/코디네이션
   - 커뮤니티 자원 연계 (SDOH 대응)
   - **시간 추적 필수**: 분 단위로 제공 시간 기록 (20분/30분/60분 임계값)

4. **케어 플랜 검토 및 갱신**
   - 최소 연 1회 케어 플랜 종합 검토
   - 환자 상태 변화 시 즉시 갱신
   - 새로운 진단, 약물 변경, 입원/퇴원 시 업데이트

5. **문서화 및 빌링**
   - 제공된 서비스 내용, 소요 시간 상세 기록
   - 시간 임계값 충족 확인
   - 적절한 코드 선택 (99490 vs 99491 vs 99487+99489)
   - 월별 클레임 제출

### 환자 측 여정

1. **동의 및 등록**: CCM 서비스 설명 듣고 참여 동의
2. **초기 평가**: 건강 상태 종합 평가, 케어 플랜 수립 참여
3. **지속적 관리**: 월 1회 이상 의료팀과 소통 (전화, 앱 등)
4. **약물 관리**: 처방 순응도 관리, 부작용 보고
5. **자가관리**: 교육받은 자가관리 실천, 건강 데이터 기록
6. **정기 검토**: 케어 플랜 검토 참여, 목표 달성도 확인

### 필요 인력

| 역할 | 업무 | 필수/선택 |
|------|------|----------|
| 의사(MD/DO) 또는 QHP | 케어 플랜 수립/감독, 99491 직접 제공, 전체 빌링 책임 | 필수 |
| 케어 코디네이터(RN) | 월별 환자 소통, 케어 코디네이션 실행, 시간 추적 | 필수 |
| LPN/CMA | 전화 관리, 데이터 입력, 약속 조정 | 선택 (권장) |
| 사회복지사 | SDOH 대응, 커뮤니티 자원 연계 | 선택 |
| 약사 | 약물 관리, 상호작용 검토 | 선택 |
| 빌링 스태프 | 시간 검증, 코드 선택, 클레임 제출 | 필수 |

---

## 5. 수가 모델 상세

### 빌링 규칙
- **빌링 빈도**: calendar month 당 1회
- **시간 요건**:
  - 99490: 월 20분 이상 (clinical staff)
  - 99491: 월 30분 이상 (QHP 직접)
  - 99487: 월 60분 이상 (clinical staff)
  - 99489: 99487 이후 추가 30분 (add-on code)
- **문서화 요건**:
  - 환자 동의서
  - 전자 케어 플랜 (EHR 저장)
  - 서비스 제공 시간 기록 (분 단위)
  - 서비스 내용 상세 기록
  - 24/7 접근성 제공 기록 (환자가 24시간 의료팀에 연락 가능)
- **수정자 코드**:
  - 99489는 add-on code (99487과 함께만 청구)
  - 새 환자 첫 달에는 initiating visit 필요 (E/M 또는 AWV와 동일 날짜)

### 월별 환자당 수익 시나리오

| 시나리오 | 코드 조합 | 월 수가(NF 추정) |
|---------|----------|----------------|
| 기본 (20분) | 99490 | ~$64.02 |
| 의사 직접 (30분) | 99491 | ~$87.67 |
| 복합 (60분) | 99487 | ~$130.41 |
| 복합+추가 (90분) | 99487 + 99489 | ~$193.84 |

[UNVERIFIED] 상기 수가는 CY2025 추정치.

### 동시 빌링 제한
- **APCM(G0556)과 동일 월 동시 청구 불가**
- RPM(99453/99454/99457/99458)과는 동시 청구 가능
- BHI(99484, 99492-99494)와 동시 청구 가능
- PCM(99424-99427)과는 동일 월 동시 청구 불가
- TCM(99495/99496)과는 동일 월 동시 청구 불가 (전환기 관리 30일 내)
- 동일 환자에 대해 한 명의 공급자만 CCM 청구 가능

### 지불자별 차이
- **Medicare FFS**: PFS 수가 적용. 가장 높은 채택률.
- **Medicare Advantage**: 대부분 MA 플랜에서 인정. 수가는 계약별 상이.
- **Commercial**: 주요 상업 보험사 대부분 CCM 코드 인정. 그러나 보험사별 사전 승인 요건, 적격 환자 기준 차이.
- **Medicaid**: 주별로 상이. 일부 주에서는 Medicaid Managed Care를 통해 CCM 유사 서비스 보장.

---

## 6. 공급자 Pain Points

1. **시간 추적의 행정 부담**: CCM의 가장 큰 불만. 20분/30분/60분 시간 임계값을 분 단위로 추적하는 것이 비효율적이고 스태프 피로 유발. 이것이 CCM 채택률이 기대 이하인 주요 원인 중 하나. (CMS도 이를 인식하여 APCM에서 시간 추적 제거)

2. **24/7 접근성 요건**: Medicare는 CCM 환자에게 24시간 의료팀 접근성 제공을 요구. 소규모 클리닉에게는 야간/주말 커버리지 제공이 현실적으로 어려움. 콜센터 외주 비용 부담.

3. **환자 동의 획득 어려움**: 환자에게 CCM 설명 시 비용 분담(20% coinsurance) 안내가 필수이므로, 비용에 민감한 환자들이 동의를 꺼림. Medicare Supplement(Medigap) 유무에 따라 환자 부담 상이.

4. **다문화 환자 커뮤니케이션**: 비영어권 환자(히스패닉, 한인, 아시아계 등)에게 CCM 서비스 설명, 동의 획득, 지속적 케어 코디네이션이 언어 장벽으로 어려움. 통역 서비스 비용 및 가용성 문제.

5. **케어 플랜 관리 복잡성**: 포괄적 전자 케어 플랜 수립/유지/갱신이 시간 소모적. 다학제 팀 코디네이션(전문의, 약사, 사회복지사) 조율 부담.

6. **수익 대비 비용**: 99490 기준 월 ~$64의 수가로 20분+ 서비스 제공, 문서화, 빌링까지 수행하면 인건비 대비 마진이 빠듯. 규모의 경제 없이는 수익성 확보 어려움.

---

## 7. HicareNet 차별화 요소

### 기존 강점 매핑

| 회사 역량 | CCM 서비스에서의 가치 |
|----------|---------------------|
| 120+ 의료기기 호환 | RPM과 CCM 동시 제공 시, 디바이스 데이터가 CCM 케어 코디네이션에 활용. 환자 상태 데이터 기반 의사결정 지원 |
| 다국어 지원 (영어/한국어/스페인어) | **CCM 핵심 차별화**: 다문화 환자 대상 동의 획득, 교육, 월별 소통을 모국어로 제공. 캘리포니아 한인/히스패닉 커뮤니티 타겟 |
| 10,000+ 게이트웨이 수출 | 기술 안정성 및 대규모 운영 역량 증명 |
| Care Portal | AI 자동 리포트로 시간 추적 부담 경감. 케어 플랜 전자 관리, 전문의 의뢰 추적, 빌링 자동화 |
| 40+ 미국 병원 계약 | CCM 운영 실적 검증. 월 300건+ 수가 청구로 빌링 프로세스 안정성 입증 |
| 양방향 커뮤니케이션 | CCM의 환자-의료팀 소통 요건에 부합. 앱, 전화, 영상 통합 소통 채널 |

### 경쟁 우위 포인트 - 다국어 케어 코디네이션 (CCM 특화)

- **기술적 차별화**: 다국어 케어 플랜 자동 번역/생성. 환자 앱에서 모국어 건강 교육 콘텐츠 제공. AI 기반 시간 추적 자동화 (서비스 시간 자동 기록, 임계값 도달 알림)
- **서비스적 차별화**: 한국어/스페인어 동의서 템플릿 제공. 다국어 콜센터/케어 코디네이션 팀 구성 지원. 문화적으로 적합한 환자 교육 자료 (식이, 운동, 약물 복용 등)
- **가격적 차별화**: RPM+CCM 번들 패키지로 환자당 비용 절감. AI 자동화로 인력 비용 최소화
- **시장적 차별화**: 캘리포니아 한인 클리닉(40개 병원의 상당수) 대상 CCM 전문 솔루션. 히스패닉 인구 밀집 지역 확장 시 스페인어 CCM 역량이 핵심 경쟁력

### APCM 전환 지원 역량

HicareNet이 기존 CCM 고객에게 제공할 수 있는 APCM 전환 가치:
- 기존 CCM 환자 데이터를 APCM Tier 1/Tier 2로 자동 분류하는 도구
- CCM에서 APCM 전환 시 환자 재동의 프로세스 지원 (다국어)
- CCM과 APCM 수가 비교 시뮬레이션 도구
- 전환기 CCM/APCM 병행 운영 대시보드

---

## 8. 관련 솔루션과의 연계

| 연계 솔루션 | 연계 방식 | 시너지 |
|------------|----------|--------|
| RPM | CCM + RPM 동시 빌링 가능 | 모니터링(RPM) + 관리(CCM) 통합으로 환자당 수익 극대화, 건강 결과 개선 |
| APCM | CCM의 대체/보완 (동시 빌링 불가) | APCM 전환 시 시간 추적 부담 제거. 환자별 CCM vs APCM 최적 선택 지원 |
| AWV | AWV에서 CCM 대상 환자 발굴 | 연간 웰니스 방문 시 만성질환 2개+ 확인 후 CCM 등록 연계 |
| HRA | HRA 결과로 CCM 케어 플랜 보강 | 건강위험평가 결과가 CCM 케어 플랜의 문제 목록 및 개입 전략에 반영 |
| VBC | CCM이 VBC 품질 지표에 직접 기여 | 체계적 만성질환 관리로 HEDIS 지표 개선, ACO 성과 향상 |

---

## 9. 출처 목록

| # | 출처 | URL | 게시일 | 신뢰도 |
|---|------|-----|-------|-------|
| 1 | CMS CY2025 PFS Final Rule (CMS-1807-F) | https://www.federalregister.gov/documents/2024/11/22/2024-26351/ | 2024-11-22 | Tier 1 |
| 2 | CMS.gov - Chronic Care Management Services | https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/chroniccaremanagement.pdf | 지속 업데이트 | Tier 1 |
| 3 | 42 CFR 414.67 - Care Management Services | https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-414/subpart-B/section-414.67 | 법규 | Tier 1 |
| 4 | AMA CPT Code Reference | https://www.ama-assn.org/practice-management/cpt | 지속 업데이트 | Tier 1 |
| 5 | HicareNet company-content-source.md | 프로젝트 내부 | 2025 | 내부 자료 |

---

## 10. 조사 메모 / 미해결 사항

- **[HIGH] CY2025 정확한 수가 확인 필요**: 99490/99491/99487/99489의 CY2025 확정 수가 실시간 확인 필요.
- **[HIGH] APCM 전환 가이드라인 상세화**: CMS의 CCM→APCM 전환 공식 가이드라인 확인 필요. 전환 시 환자 동의 재획득 요건, 전환 시점 규칙 등.
- **[MEDIUM] CCM 채택률 데이터**: 미국 전체 Medicare 환자 중 CCM 서비스 이용률, 공급자 참여율 최신 데이터 확인 (APCM 도입 효과 비교 기준).
- **[MEDIUM] CY2025 CCM 코드 폐지 여부**: CMS가 향후 CCM 코드를 단계적으로 폐지하고 APCM으로 완전 전환할 계획인지 확인 필요.
- **기존 데이터 갭**: company-content-source.md에 CCM 상세 정보 부족 (코드만 언급, 자격 기준/빌링 요건/워크플로우 미기재). 다국어 CCM의 구체적 운영 사례(한인 클리닉 등) 미기재.
