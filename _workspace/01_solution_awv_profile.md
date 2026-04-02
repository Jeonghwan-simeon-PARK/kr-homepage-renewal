# Annual Wellness Visit (AWV) 솔루션 프로파일

> 조사일: 2026-04-02
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 기존 services.json 데이터 존재. IPPE, 예방 계획, HRA 통합 워크플로우 보강. WebSearch/WebFetch 차단으로 일부 수가 [UNVERIFIED] 표기.

---

## 1. 프로그램 개요

| 항목 | 내용 |
|------|------|
| 공식 명칭 | Annual Wellness Visit (AWV) / Medicare Annual Wellness Visit |
| CMS 프로그램 카테고리 | Medicare Preventive Services |
| 근거 규정 | Affordable Care Act (ACA) Section 4103, 42 CFR 410.15 |
| 시행 시작일 | 2011년 1월 1일 |
| 대상 인구 | Medicare Part B 수혜자 (Part B 가입 12개월 이상) |

### 프로그램 목적
AWV는 Medicare 수혜자에게 연 1회 종합적 예방 건강 서비스를 제공하는 방문으로, Health Risk Assessment(HRA), 개인화된 예방 계획(Personalized Prevention Plan of Services, PPPS) 수립, 건강 위험 요인 식별 및 인지 기능 평가를 포함한다. AWV는 일반 신체 검사(annual physical exam)와는 구별되는 예방 중심 서비스이다.

### AWV vs IPPE (Initial Preventive Physical Examination)
| 항목 | IPPE ("Welcome to Medicare" Visit) | AWV |
|------|-------------------------------------|-----|
| 코드 | G0402 | G0438 (Initial), G0439 (Subsequent) |
| 대상 | Medicare Part B 가입 첫 12개월 이내 | Part B 가입 12개월+ (IPPE 이후) |
| 빈도 | 평생 1회 | 연 1회 |
| 환자 비용 | 무상 (Part B deductible/coinsurance 면제) | 무상 |
| 목적 | 초기 건강 평가, 예방 서비스 안내 | 연간 건강 위험 평가, 예방 계획 갱신 |

---

## 2. CPT/HCPCS 코드 체계

| 코드 | 공식 설명 | 적용 조건 | CY2025 수가 (NF) | CY2025 수가 (F) |
|------|----------|----------|-----------------|----------------|
| G0438 | Annual wellness visit; includes a personalized prevention plan of services (PPPS); initial visit | Medicare Part B 12개월+ 수혜자, 첫 AWV | [UNVERIFIED] ~$175.07 | [UNVERIFIED] ~$118.23 |
| G0439 | Annual wellness visit; includes a personalized prevention plan of services (PPPS); subsequent visit | 이전 AWV 또는 IPPE 이후 12개월+ 경과 | [UNVERIFIED] ~$118.80 | [UNVERIFIED] ~$83.79 |
| G0402 | Initial preventive physical examination (IPPE); face-to-face visit, services limited to new beneficiary during the first 12 months of Medicare Part B enrollment | Medicare Part B 최초 12개월 이내, 평생 1회 | [UNVERIFIED] ~$173.65 | [UNVERIFIED] ~$117.85 |

- NF = Non-Facility, F = Facility
- 수가 출처: CMS CY2025 PFS (추정치)
- 적용 연도: CY2025
- **환자 비용 분담**: AWV(G0438/G0439)는 ACA에 따라 환자 비용 분담 없음 (deductible, coinsurance 면제). 단, AWV 범위를 넘는 추가 서비스 제공 시 해당 서비스에 대한 비용 분담 발생 가능.

### AWV 필수 구성 요소

| 구성 요소 | 설명 | G0438 (Initial) | G0439 (Subsequent) |
|----------|------|-----------------|-------------------|
| Health Risk Assessment (HRA) | 표준화된 건강위험평가 도구 | 필수 | 필수 |
| Medical/Family History | 과거 병력 및 가족력 수집/갱신 | 전체 수집 | 갱신 |
| List of Current Providers/Suppliers | 현재 의료 공급자 목록 | 수집 | 갱신 |
| Height, Weight, BMI, BP | 기본 신체 측정 | 필수 | 필수 |
| Cognitive Assessment | 인지 기능 평가 (관찰 또는 도구 기반) | 필수 | 필수 |
| Depression Screening | 우울증 선별 | 필수 | 필수 |
| Functional Ability/Safety Assessment | 기능적 능력 및 안전 평가 (낙상 위험 등) | 필수 | 필수 |
| Personalized Prevention Plan (PPPS) | 개인화된 예방 서비스 계획 | 수립 | 갱신 |
| Advance Care Planning Discussion | 사전 돌봄 계획 논의 (선택) | 선택 | 선택 |

---

## 3. 자격 기준

### 환자 자격
- Medicare Part B 수혜자
- **G0438 (Initial AWV)**: Part B 가입 12개월 이상 경과, IPPE(G0402) 수행 후 12개월 이상 경과
- **G0439 (Subsequent AWV)**: 이전 AWV(G0438 또는 G0439) 수행 후 12개월 이상 경과
- **G0402 (IPPE)**: Part B 최초 가입 12개월 이내, 평생 1회
- 동의 필수 (단, AWV는 환자 비용 부담이 없으므로 동의 장벽 낮음)

### 공급자 자격
- 의사(MD/DO), NP, PA, CNS
- Clinical staff가 QHP의 direct supervision 하에 일부 구성 요소(HRA 관리, 측정 등) 수행 가능
- PPPS 수립 및 인지 평가 해석은 QHP 직접 수행

### 시설 자격
- Primary Care Clinic
- Hospital Outpatient Department
- FQHC/RHC: 별도 수가 체계 적용
- SNF: 적용 가능

### 동의 요건
- AWV는 환자 비용 분담이 없어 동의 장벽 낮음
- 단, AWV 범위 외 추가 서비스(예: 혈액 검사, E/M 방문) 제공 시 해당 비용 안내 필수
- "AWV is free, but any additional services may have costs" 안내

---

## 4. 임상 워크플로우

### 공급자 측 흐름

1. **환자 식별 및 스케줄링**
   - Medicare 수혜자 중 AWV 미수행 환자 식별 (EHR 기반 리콜 시스템)
   - AWV 적격 시기 확인 (이전 AWV/IPPE 후 12개월 경과)
   - AWV 예약 스케줄링 (연중 분산)
   - **사전 HRA 배포**: 방문 전 디지털 HRA 발송 (앱/이메일/우편)

2. **사전 준비 (Pre-Visit)**
   - 환자에게 HRA 설문 사전 배포 (방문 전 작성 유도)
   - 의료 기록 검토: 과거 병력, 약물 목록, 면역 기록, 예방 서비스 이력
   - 필요한 선별 검사 목록 준비

3. **방문 당일 서비스 (Face-to-Face)**
   - **HRA 완료 확인/보완**: 사전 작성 HRA 검토 또는 현장 작성
   - **Medical/Family History**: 수집(Initial) 또는 갱신(Subsequent)
   - **신체 측정**: 키, 체중, BMI, 혈압
   - **인지 기능 평가**: 구조화된 관찰 또는 간이 도구(Mini-Cog, MMSE 등)
   - **우울증 선별**: PHQ-2 → PHQ-9 (양성 시)
   - **기능적 능력/안전 평가**: ADL, 낙상 위험, 가정 안전
   - **현재 공급자/약물 목록 갱신**
   - **PPPS 수립/갱신**: HRA 결과 기반 예방 서비스 스케줄 작성

4. **예방 계획 (PPPS) 수립**
   - 권장 예방 서비스 스케줄 (면역, 암 선별, 심혈관 위험 등)
   - 식별된 위험 요인 대응 계획
   - RPM/CCM/APCM 연계 필요 환자 식별 및 등록 안내
   - 생활습관 개선 권고 (식이, 운동, 금연 등)
   - 다음 AWV 스케줄 예약

5. **문서화 및 빌링**
   - 모든 필수 구성 요소 완료 확인 및 기록
   - G0438 또는 G0439 코드 선택
   - **Modifier 25**: AWV와 동일 날짜에 별도 E/M 서비스(significant, separately identifiable)를 제공한 경우 E/M 코드에 Modifier 25 추가
   - 클레임 제출 (환자 비용 분담 없음)

### 환자 측 여정

1. **리콜 안내**: 클리닉에서 AWV 예약 안내 수령 (전화, 문자, 우편)
2. **사전 HRA 작성**: 앱/이메일로 수신한 HRA 설문 사전 작성
3. **방문**: 클리닉 방문, 건강 평가, 인지/우울증 선별, PPPS 수령
4. **예방 서비스 스케줄**: 권장 예방 서비스(면역, 선별 검사 등) 일정 확인
5. **후속 연계**: 만성질환 발견 시 RPM/CCM/APCM 서비스 안내
6. **비용 없음**: AWV 자체는 환자 비용 부담 없음 (연간 1회)

### 필요 인력

| 역할 | 업무 | 필수/선택 |
|------|------|----------|
| 의사/QHP | PPPS 수립, 인지 평가, HRA 결과 해석, 빌링 책임 | 필수 |
| RN/MA | HRA 관리, 신체 측정, 데이터 입력, 사전 배포 | 필수 |
| Front Desk | AWV 스케줄링, 리콜 관리, 사전 HRA 발송 | 필수 |
| 케어 코디네이터 | AWV에서 식별된 만성질환 환자의 RPM/CCM/APCM 연계 | 선택 (권장) |

---

## 5. 수가 모델 상세

### 빌링 규칙
- **빌링 빈도**: 연 1회 (이전 AWV/IPPE 후 12개월 이상 경과)
- **시간 요건**: 없음 (구성 요소 완료 기반)
- **문서화 요건**:
  - HRA 완료 및 결과 기록
  - Medical/Family History 기록
  - 기본 측정치(Height, Weight, BMI, BP) 기록
  - 인지 평가 결과 기록
  - 우울증 선별 결과 기록
  - 기능적 능력/안전 평가 기록
  - PPPS 문서화 (예방 서비스 스케줄)
  - 현재 공급자/약물 목록
- **수정자 코드**:
  - **Modifier 25**: 동일 날짜 별도 E/M 서비스 시 E/M 코드에 추가
  - **Modifier 33**: ACA 예방 서비스 표시 (일부 보험사 요구)

### 동시 빌링 (동일 날짜)

**가능한 조합**:
- AWV + E/M (99213/99214/99215 with Modifier 25): 동일 날짜 별도 임상 문제 대응 시
- AWV + CCM initiating visit: AWV를 CCM 시작 방문으로 사용 가능
- AWV + APCM initiating: AWV를 APCM 시작점으로 사용 가능
- AWV + Advance Care Planning (99497/99498): 사전 돌봄 계획 서비스
- AWV + 기타 예방 서비스 (면역, 선별 검사 등)

**불가능한 조합**:
- G0438 + G0439 동일 연도 (Initial + Subsequent 동시 불가)
- G0402 + G0438 동일 날짜 (IPPE와 Initial AWV 동시 불가)
- 12개월 미경과 시 재청구 불가

### 지불자별 차이
- **Medicare FFS**: 환자 비용 분담 없음 (ACA 예방 서비스). PFS 수가 전액 Medicare 지급.
- **Medicare Advantage**: ACA에 따라 AWV 무상 보장 의무. 수가는 MA 계약에 따라 상이.
- **Commercial**: ACA 적용 보험은 예방 서비스 무상 보장. 비ACA 보험은 별도.
- **Medicaid**: 주별 상이. Medicare-Medicaid dual eligible 환자는 Medicare에서 AWV 보장.

### AWV의 전략적 수익 가치

AWV 자체 수가(~$118-$175) 외에, AWV는 **후속 서비스 연계의 관문(gateway)**으로서 더 큰 전략적 가치:

| AWV에서 식별 | 연계 서비스 | 추가 연간 수익 가능 |
|-------------|-----------|-----------------|
| 만성질환 1개+ | RPM 등록 | ~$1,764/년 |
| 만성질환 2개+ | CCM/APCM 등록 | ~$768-$1,565/년 |
| 정신건강 위험 | BHI 서비스 | ~$720-$2,040/년 |
| 인지 저하 의심 | 인지 평가/관리 | 별도 서비스 수익 |
| E/M 별도 문제 | 동일날 E/M 빌링 | ~$76-$148 (당일) |

---

## 6. 공급자 Pain Points

1. **AWV 완료율 저조**: Medicare 수혜자 중 AWV 연간 완료율은 약 50% 수준으로 추정. 환자 인식 부족("annual physical과 다른가?"), 스케줄링 어려움, 이동 불편(고령자).

2. **필수 구성 요소 완료 부담**: AWV의 7-8개 필수 구성 요소를 한 방문에 모두 완료하기 어려움. 특히 인지 평가, HRA, PPPS를 포함하면 방문 시간 45-60분 소요. 일반 15-20분 방문 슬롯에 맞지 않음.

3. **HRA 완료율 문제**: 사전 배포 HRA의 사전 완료율 낮음. 방문 당일 대기실 작성은 시간 소모. 고령 환자의 디지털 HRA 작성 어려움. 다국어 HRA 도구 부족.

4. **E/M 추가 빌링의 복잡성**: AWV와 동일 날짜 E/M 서비스 제공 시 Modifier 25 사용 규칙, "significant, separately identifiable" 기준의 주관성으로 인한 감사 리스크.

5. **리콜 관리 비효율**: AWV 적격 환자를 12개월 주기로 식별하고 리콜하는 시스템 부재. 수동 관리 시 인력 부담. EHR 리콜 기능 미흡.

6. **AWV에서 CCM/RPM 전환 미흡**: AWV에서 만성질환 환자를 식별하더라도 CCM/RPM/APCM 등록으로 연계하는 체계적 프로세스 부재. 기회 손실.

---

## 7. HicareNet 차별화 요소

### 기존 강점 매핑

| 회사 역량 | AWV 서비스에서의 가치 |
|----------|---------------------|
| 120+ 의료기기 호환 | AWV에서 RPM 대상 환자 발견 시 즉시 디바이스 배포 가능. AWV→RPM 원스톱 전환 |
| 다국어 지원 (영어/한국어/스페인어) | 다국어 HRA, 예방 계획(PPPS), 인지 평가 도구. 한인/히스패닉 고령 Medicare 수혜자 AWV 접근성 향상 |
| Care Portal | AWV 리콜 관리, 필수 구성 요소 체크리스트, 디지털 HRA 통합, PPPS 자동 생성, AWV→CCM/RPM/APCM 연계 워크플로우 |
| 환자 앱 | 사전 HRA 디지털 배포/작성, AWV 일정 리마인더, PPPS 공유, 예방 서비스 스케줄 알림 |
| AI 기반 분석 | AWV 데이터에서 만성질환 위험 자동 식별, RPM/CCM/APCM 후속 서비스 자동 추천 |

### 경쟁 우위 포인트

- **기술적 차별화**: 디지털 AWV 워크플로우 (사전 HRA → 방문 체크리스트 → PPPS 자동 생성). AWV 필수 구성 요소 완료율 추적 대시보드. AWV에서 발견된 환자의 RPM/CCM/APCM 자동 연계
- **서비스적 차별화**: 3개국어 AWV 지원 (HRA, PPPS, 인지 평가). 고령 한인/히스패닉 Medicare 수혜자 특화 AWV 프로그램. 사전 HRA 완료율 향상 도구 (음성 안내, 대화형 설문)
- **전략적 차별화**: AWV를 "Care Management Pipeline의 입구"로 포지셔닝. AWV 1회 수가(~$118-175)에서 연간 RPM+CCM/APCM 수익(~$2,500+)으로 확장하는 수익 모델 제시

---

## 8. 관련 솔루션과의 연계

| 연계 솔루션 | 연계 방식 | 시너지 |
|------------|----------|--------|
| HRA | AWV의 필수 구성 요소 | 디지털 HRA로 AWV 완료율/품질 향상, HRA 결과가 PPPS 자동 생성의 입력 |
| RPM | AWV에서 RPM 대상 환자 발굴 | 만성질환 확인 후 즉시 RPM 등록/디바이스 배포 연계 |
| CCM | AWV를 CCM initiating visit로 활용 | AWV 날짜에 CCM 시작, 만성질환 2개+ 환자 자동 CCM 연계 |
| APCM | AWV에서 APCM 대상 환자 발굴 | 만성질환 환자 발견 시 APCM Tier 1/2 등록 연계 |
| VBC | AWV 완료율이 VBC 품질 지표에 반영 | AWV는 Medicare Stars/HEDIS 예방 서비스 지표에 직접 기여 |

---

## 9. 출처 목록

| # | 출처 | URL | 게시일 | 신뢰도 |
|---|------|-----|-------|-------|
| 1 | CMS.gov - Annual Wellness Visit | https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/preventive-services/medicare-wellness-visits.html | 지속 업데이트 | Tier 1 |
| 2 | ACA Section 4103 | https://www.congress.gov/111/plaws/publ148/PLAW-111publ148.htm | 2010-03-23 | Tier 1 |
| 3 | CMS MLN - Preventive Services Quick Reference | https://www.cms.gov/Medicare/Prevention/PrevntionGenInfo | 지속 업데이트 | Tier 1 |
| 4 | 42 CFR 410.15 - Annual Wellness Visit | https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-410/subpart-B/section-410.15 | 법규 | Tier 1 |
| 5 | CMS CY2025 PFS Final Rule (CMS-1807-F) | https://www.federalregister.gov/documents/2024/11/22/2024-26351/ | 2024-11-22 | Tier 1 |

---

## 10. 조사 메모 / 미해결 사항

- **[HIGH] CY2025/2026 정확한 수가 확인**: G0438/G0439/G0402 국가 평균 수가 실시간 확인 필요.
- **[MEDIUM] AWV 완료율 최신 데이터**: Medicare 수혜자 중 AWV 연간 완료율 최신 통계 확인 (CMS data, NCQA 보고서 등).
- **[MEDIUM] Telehealth AWV**: COVID-19 이후 원격 AWV(telehealth-based) 허용 범위. CY2025/2026에서 원격 AWV가 지속 허용되는지 확인 필요.
- **[LOW] IPPE 활용도**: IPPE(G0402) 활용률이 낮은 것으로 알려져 있으며, 신규 Medicare 수혜자에 대한 IPPE 권유 전략 검토.
- **기존 데이터 갭**: services.json에 G0438/G0439만 기재. IPPE(G0402) 미포함. AWV 필수 구성 요소 상세 미기재. AWV→CCM/RPM 연계 워크플로우 미설명.
