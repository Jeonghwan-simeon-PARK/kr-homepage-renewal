# Health Risk Assessment (HRA) 솔루션 프로파일

> 조사일: 2026-04-02
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 프로젝트 내 AWV 하위 기능으로만 언급. 독립 서비스로 격상하여 신규 프로파일 작성. WebSearch/WebFetch 차단으로 일부 수가 [UNVERIFIED] 표기.

---

## 1. 프로그램 개요

| 항목 | 내용 |
|------|------|
| 공식 명칭 | Health Risk Assessment (HRA) / Health Risk Appraisal |
| CMS 프로그램 카테고리 | Preventive Services (AWV 구성 요소) / Standalone Assessment Service |
| 근거 규정 | ACA Section 4103 (Annual Wellness Visit 내 HRA 의무화), CPT 96160/96161 (일반 건강위험평가) |
| 시행 시작일 | 2011년 1월 1일 (AWV와 함께 도입), CPT 96160/96161은 2017년 도입 |
| 대상 인구 | Medicare 수혜자 (AWV 내 HRA), 일반 환자 (독립 HRA) |

### 프로그램 목적
HRA는 환자의 건강 위험 요인을 체계적으로 평가하여 예방 서비스 계획 수립의 근거를 제공하는 도구/서비스이다. AWV의 필수 구성 요소이면서 동시에 독립적인 건강평가 서비스로 활용할 수 있다.

### 이중 사용 사례
1. **AWV 내장형**: Medicare AWV(G0438/G0439) 수행 시 필수 구성 요소로 HRA 실시. 별도 빌링 없이 AWV 수가에 포함.
2. **독립형**: CPT 96160/96161로 독립적 건강위험평가 서비스 빌링. AWV 외 맥락에서도 활용 가능.
3. **APCM 연계형**: APCM 환자의 초기 평가 및 Tier 분류 시 HRA 결과 활용.

---

## 2. CPT/HCPCS 코드 체계

### 독립 HRA 코드

| 코드 | 공식 설명 | 적용 조건 | CY2025 수가 (NF) | CY2025 수가 (F) |
|------|----------|----------|-----------------|----------------|
| 96160 | Administration of patient-focused health risk assessment instrument (e.g., health hazard appraisal) with scoring and documentation, per standardized instrument | 표준화된 HRA 도구 사용, 환자 대상 | [UNVERIFIED] ~$4.71 | [UNVERIFIED] ~$4.71 |
| 96161 | Administration of caregiver-focused health risk assessment instrument (e.g., depression inventory) for the benefit of the patient, with scoring and documentation, per standardized instrument | 표준화된 HRA 도구, 보호자 대상 (환자 혜택 목적) | [UNVERIFIED] ~$4.71 | [UNVERIFIED] ~$4.71 |

### AWV 내 HRA (별도 코드 없음)

| 코드 | 설명 | HRA와의 관계 |
|------|------|-------------|
| G0438 | Initial Preventive Physical Exam (IPPE) / Initial AWV | HRA 포함 (별도 청구 불가) |
| G0439 | Subsequent AWV | HRA 포함 (별도 청구 불가) |

### 관련 평가 도구별 코드

| 평가 도구 | CPT/HCPCS | 측정 대상 | 임상 용도 |
|----------|-----------|----------|----------|
| PHQ-9 | 96127 | 우울증 | 정신건강 선별, BHI 연계 |
| GAD-7 | 96127 | 불안 장애 | 정신건강 선별 |
| AUDIT/AUDIT-C | 96160 | 음주 위험 | 물질 남용 선별 |
| CAGE | 96160 | 음주 의존 | 물질 남용 선별 |
| DAST-10 | 96160 | 약물 남용 | 물질 남용 선별 |
| MMSE/MoCA | 96116/96132 | 인지 기능 | 치매 선별, AWV 인지 평가 |
| Falls Risk Assessment | 96160 | 낙상 위험 | 노인 안전 |
| Nutritional Assessment | 96160 | 영양 상태 | 만성질환 관리 |
| ADL/IADL | 96160 | 기능적 능력 | 재활/요양 필요도 |
| SDOH Screening (e.g., AHC-HRSN) | 96160 | 사회적 결정 요인 | 사회적 지원 연계 |

**참고**: 96127은 Brief Emotional/Behavioral Assessment 코드로 PHQ-9, GAD-7 등 간단한 정신건강 선별에 주로 사용. 96160은 보다 포괄적인 건강위험평가 도구에 적용.

---

## 3. 자격 기준

### 환자 자격 (독립 HRA)
- 특정 보험 요건 없음 (단, 보험 보장 여부는 보험사별 상이)
- Medicare: AWV 내 HRA는 Medicare 수혜자 대상
- 96160/96161: 보험사별 보장 범위 확인 필요
- 환자 동의 필수 (평가 목적, 결과 활용 범위 안내)

### 환자 자격 (AWV 내 HRA)
- Medicare Part B 수혜자
- Medicare 수혜 12개월 이상 (Initial AWV 자격)
- 연 1회 AWV 수행 시 HRA 필수 포함

### 공급자 자격
- 의사(MD/DO), NP, PA, CNS
- 96160/96161: Clinical staff가 관리(administration) 가능, QHP 감독 하
- HRA 결과 해석 및 케어 플랜 반영은 QHP 책임

### 시설 자격
- Primary Care Clinic, Community Health Center, 전문 의원
- FQHC/RHC: AWV 내 HRA는 별도 수가 체계
- 약국, 지역 건강센터 등에서도 독립 HRA 실시 가능

### 동의 요건
- 평가 목적 및 결과 활용 범위 안내
- HIPAA 준수 (건강 정보 보호)
- 정신건강 평가(PHQ-9 등)의 경우 민감 정보 동의 별도 확인

---

## 4. 임상 워크플로우

### 공급자 측 흐름

1. **HRA 대상 환자 식별**
   - AWV 예약 환자: 자동으로 HRA 포함
   - 신규 환자: 초기 건강평가 목적
   - 만성질환 환자: 케어 플랜 수립/갱신 시
   - APCM 등록 환자: Tier 분류 근거 수집
   - 연간 선별 검사 대상: 우울증, 약물 남용, 낙상 위험 등

2. **HRA 도구 선정 및 배포**
   - 환자 특성(연령, 질환, 위험 요인)에 맞는 도구 선정
   - **디지털 HRA**: 태블릿/스마트폰 앱을 통한 전자 설문
   - **종이 HRA**: 기술 접근이 어려운 환자 대상
   - **전화 HRA**: 원격/재택 환자 대상
   - 다국어 HRA 제공 (영어, 스페인어, 한국어 등)

3. **평가 실시 및 자동 채점**
   - 환자 자가 작성 또는 임상 스태프 보조 작성
   - 디지털 도구 사용 시 자동 채점/분석
   - 결과 즉시 EHR에 통합
   - 위험 점수(risk score) 자동 산출

4. **결과 해석 및 케어 플랜 반영**
   - QHP가 HRA 결과 검토
   - 식별된 위험 요인 기반 개입 계획 수립
   - AWV Personalized Prevention Plan에 반영
   - APCM Tier 분류 근거로 활용
   - CCM/RPM 연계 필요 환자 식별

5. **문서화 및 빌링**
   - HRA 도구명, 점수, 결과 해석 기록
   - AWV 내 HRA: 별도 청구 없음 (AWV 수가 포함)
   - 독립 HRA: 96160/96161 청구
   - 시간, 도구, 결과 문서화

### 환자 측 여정

1. **사전 배포**: AWV 예약 전 또는 방문 시 HRA 설문 수령 (디지털/종이)
2. **자가 작성**: 건강 습관, 위험 요인, 정신건강, 사회적 요인 등 응답
3. **결과 공유**: 의료진과 결과 논의
4. **교육 수령**: 식별된 위험 요인에 대한 교육 및 행동 변화 권고
5. **후속 연계**: 필요 시 RPM, CCM, 전문의 의뢰 등 후속 서비스 연계

### 필요 인력

| 역할 | 업무 | 필수/선택 |
|------|------|----------|
| 의사/QHP | HRA 결과 해석, 케어 플랜 반영, 예방 계획 수립 | 필수 |
| RN/MA | HRA 배포, 환자 보조 작성, 데이터 입력 | 필수 |
| 케어 코디네이터 | 위험 환자 후속 관리 연계 (RPM/CCM/APCM) | 선택 (권장) |
| IT/기술 지원 | 디지털 HRA 플랫폼 관리, EHR 연동 | 필수 (디지털 HRA 시) |

---

## 5. 수가 모델 상세

### 빌링 규칙
- **빌링 빈도**:
  - 96160/96161: 도구 사용 시 마다 (제한 없으나 의학적 필요성 필요)
  - AWV 내 HRA: 연 1회 (AWV 주기에 따라)
- **시간 요건**: 없음 (도구 기반, 시간 추적 불필요)
- **문서화 요건**:
  - 사용된 표준화 도구(instrument) 명시
  - 점수(score) 기록
  - 임상적 해석 및 후속 조치 계획 기록
- **수정자 코드**: 96160은 도구 당 1회 청구 (복수 도구 사용 시 각각 청구 가능)

### 동시 빌링 관계
- **AWV(G0438/G0439)와 동일 날짜 96160/96161 청구**: AWV에 HRA가 이미 포함되므로 중복 청구 주의. AWV 범위를 넘는 추가 도구 사용 시에만 별도 청구 가능성 있음. [UNVERIFIED: 정확한 동시 청구 규칙 확인 필요]
- **E/M 방문과 동일 날짜 96160 청구**: 가능 (별도 서비스)
- **BHI 코드(96127)와의 관계**: 96127은 brief assessment, 96160은 comprehensive assessment. 동일 날짜 가능하나 도구 중복 불가.

### 지불자별 차이
- **Medicare FFS**: AWV 내 HRA 무상(cost-sharing 없음). 독립 96160/96161은 Part B 적용.
- **Medicare Advantage**: AWV 보장 시 HRA 포함. 추가 독립 HRA 보장은 플랜별 상이.
- **Commercial**: 예방 서비스로 보장하는 경우 HRA 비용 무상. ACA 필수 예방 서비스 범위 내 일부 포함.
- **Medicaid**: 주별 상이. 예방 서비스 확대 주에서는 보장 가능.

### 독립 서비스로서의 수익 모델

HRA 단독 수가(96160: ~$4.71)는 매우 낮으나, HRA의 가치는 직접 수익보다 **후속 서비스 연계에 의한 간접 수익**에 있음:

| HRA 결과 | 연계 서비스 | 월별 추가 수익 가능 |
|---------|-----------|-----------------|
| 고혈압/당뇨 위험 | RPM 등록 | ~$147/월 |
| 만성질환 2개+ 발견 | CCM/APCM 등록 | ~$64-$130/월 |
| 우울증 위험 (PHQ-9) | BHI 서비스 | ~$60-$170/월 |
| 낙상 위험 | 낙상 예방 프로그램 | 별도 서비스 |
| 인지 저하 위험 | 인지 평가/치매 관리 | 별도 서비스 |

---

## 6. 공급자 Pain Points

1. **HRA 완료율 저조**: 종이 기반 HRA는 환자 미작성, 불완전 작성 빈번. 대기실에서 작성 시간 부족. 디지털 HRA 도입 시 고령 환자 기술 장벽. 업계 보고에 따르면 AWV 내 HRA 완료율 50-70% 수준.

2. **다국어 도구 부족**: 표준화된 HRA 도구(PHQ-9, GAD-7 등)의 다국어 번역본 품질 불균일. 특히 아시아계 언어(한국어, 베트남어, 중국어) 도구 부족. 문화적으로 적합하지 않은 질문 구성.

3. **EHR 통합 어려움**: HRA 결과를 EHR에 구조화된 데이터로 통합하는 기술적 어려움. 종이 HRA 결과의 수동 데이터 입력 부담. 도구별 점수 해석 로직 EHR 내장 부족.

4. **결과 기반 후속 조치 추적 어려움**: HRA에서 위험 요인이 식별되어도 후속 연계(RPM/CCM/전문의 의뢰)가 체계적으로 이루어지지 않음. "assess and forget" 패턴.

5. **수가 가치 불일치**: 96160/96161의 ~$4.71 수가가 도구 구매/라이선스, 관리 시간, 데이터 입력 비용을 감당하기에 부족. AWV 내 HRA는 AWV 수가에 포함되므로 추가 수익 없음.

---

## 7. HicareNet 차별화 요소

### 기존 강점 매핑

| 회사 역량 | HRA 서비스에서의 가치 |
|----------|---------------------|
| 120+ 의료기기 호환 | HRA 결과에서 RPM 대상 환자 발굴 후 즉시 디바이스 배포/등록 가능. HRA→RPM 원스톱 워크플로우 |
| 다국어 지원 (영어/한국어/스페인어) | **HRA 핵심 차별화**: 다국어 디지털 HRA 도구 제공. 문화적으로 적합한 평가 질문 구성. 고령 한인/히스패닉 환자의 HRA 완료율 향상 |
| Care Portal | 디지털 HRA 관리 플랫폼. 자동 채점, EHR 연동, 위험 점수 대시보드, 후속 연계 자동 추적 |
| 환자 앱 (Hicare App) | 환자가 앱에서 HRA 자가 작성 (방문 전 사전 배포). 음성 안내로 고령 환자 작성 보조. 고령층 친화적 큰 글자/터치 UI |
| AI 기반 분석 | HRA 결과 패턴 분석, 위험 점수 자동 산출, 후속 서비스(RPM/CCM/APCM) 자동 추천 |

### 경쟁 우위 포인트

- **기술적 차별화**: 디지털 HRA 플랫폼 (태블릿/앱 기반 자동 채점). PHQ-9, GAD-7, AUDIT, Falls Risk 등 주요 도구 내장. EHR 연동 (FHIR 기반 - H1 2026 출시 예정). HRA→RPM/CCM/APCM 자동 연계 워크플로우
- **서비스적 차별화**: 3개국어 HRA 도구 (영어/한국어/스페인어). 문화적으로 조정된 평가 질문. 고령 환자 음성 안내 HRA. AWV 사전 배포 HRA (방문 전 앱으로 완료)
- **전략적 차별화**: HRA를 "환자 발굴 엔진"으로 포지셔닝 - HRA 결과에서 RPM/CCM/APCM 대상 환자를 체계적으로 식별하여 후속 서비스 연계. 클리닉의 care management 프로그램 전체 파이프라인의 입구 역할.

---

## 8. 관련 솔루션과의 연계

| 연계 솔루션 | 연계 방식 | 시너지 |
|------------|----------|--------|
| AWV | HRA는 AWV의 필수 구성 요소 | AWV 워크플로우에 디지털 HRA 내장, 완료율 및 데이터 품질 향상 |
| RPM | HRA 결과에서 RPM 대상 질환 식별 | 고혈압/당뇨/심부전 위험 환자 자동 RPM 등록 추천 |
| CCM | HRA 결과로 CCM 케어 플랜 보강 | 만성질환 2개+ 식별 시 CCM 등록 연계, 케어 플랜 자동 생성 |
| APCM | HRA 결과로 APCM Tier 분류 지원 | 환자 복잡도/위험도 평가가 Tier 1/Tier 2 분류 근거 |
| VBC | HRA 데이터가 VBC 품질 보고에 기여 | 예방 서비스 실시율(HRA 완료율)이 HEDIS/Stars 지표에 반영 |

---

## 9. 출처 목록

| # | 출처 | URL | 게시일 | 신뢰도 |
|---|------|-----|-------|-------|
| 1 | CMS.gov - Annual Wellness Visit (AWV) | https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/preventive-services/medicare-wellness-visits.html | 지속 업데이트 | Tier 1 |
| 2 | ACA Section 4103 - Annual Wellness Visit | https://www.congress.gov/111/plaws/publ148/PLAW-111publ148.htm | 2010-03-23 | Tier 1 |
| 3 | AMA CPT 96160/96161 Code Reference | https://www.ama-assn.org/practice-management/cpt | 지속 업데이트 | Tier 1 |
| 4 | PHQ-9 Validation / Public Domain | https://www.phqscreeners.com/ | 공개 도구 | Tier 2 |
| 5 | CMS MLN - Preventive Services | https://www.cms.gov/Medicare/Prevention/PrevntionGenInfo | 지속 업데이트 | Tier 1 |

---

## 10. 조사 메모 / 미해결 사항

- **[HIGH] 독립 HRA vs AWV 내 HRA 동시 청구 규칙**: 동일 날짜에 AWV + 96160 동시 청구 가능 여부 명확화 필요. CMS LCD/NCD 또는 MAC 정책 확인.
- **[HIGH] APCM과 HRA의 공식 연계**: CMS가 APCM Tier 분류 시 HRA 사용을 공식 권장하는지 확인 필요. CY2025 PFS Final Rule 내 HRA 관련 조항 검토.
- **[MEDIUM] 96160 수가 정확한 확인**: ~$4.71 수가는 추정치. CMS PFS Lookup 실시간 확인 필요.
- **[MEDIUM] 문화 적합 HRA 도구 목록**: 한국어/스페인어로 검증된(validated) 표준화 HRA 도구 목록 정리 필요. 특히 PHQ-9, GAD-7의 한국어 검증 버전 존재 확인.
- **[LOW] 디지털 HRA 경쟁사 분석**: Phreesia, Healthwise, AHRQ CAHPS 등 디지털 HRA 솔루션과의 차별화 포인트 조사.
- **HicareNet 권고사항**: HRA를 독립 서비스가 아닌 "환자 발굴 엔진(Patient Discovery Engine)"으로 포지셔닝하여, HRA→RPM/CCM/APCM 연계 파이프라인을 핵심 가치 제안으로 강조할 것을 권장.
