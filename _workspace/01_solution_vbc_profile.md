# Value-Based Care (VBC) 솔루션 프로파일

> 조사일: 2026-04-02
> 조사자: solution-researcher
> 상태: COMPLETE
> 비고: 기존 services.json 데이터 존재 (CPT 코드 없음). 품질 지표(HEDIS/Stars), ACO 모델, 공유 절감 메커니즘, 기술 요건 보강. WebSearch/WebFetch 차단으로 일부 데이터 [UNVERIFIED] 표기.

---

## 1. 프로그램 개요

| 항목 | 내용 |
|------|------|
| 공식 명칭 | Value-Based Care (VBC) / Value-Based Payment Models |
| CMS 프로그램 카테고리 | Alternative Payment Models (APMs), Quality Payment Program (QPP) |
| 근거 규정 | MACRA (Medicare Access and CHIP Reauthorization Act) 2015, ACA Section 3022 (MSSP), CMS Innovation Center Authority |
| 시행 시작일 | MSSP 2012년, QPP/MIPS 2017년, ACO REACH 2023년 |
| 대상 인구 | Medicare 수혜자 전체 (FFS, MA), 일부 Medicaid/Commercial |

### 프로그램 목적
VBC는 의료 서비스 제공량(volume)이 아닌 가치(value = quality/cost)에 기반하여 의료 공급자에게 보상하는 지불 모델의 총칭이다. 환자 건강 결과 개선, 의료비 절감, 환자 경험 향상이라는 "Triple Aim"을 추구한다. VBC는 단일 CPT 코드가 아닌, 조직/시스템 차원의 전략적 프레임워크이다.

### VBC 모델 스펙트럼

| 단계 | 모델 유형 | 위험 수준 | 예시 |
|------|----------|----------|------|
| 1 | Pay-for-Reporting | 없음 | MIPS (최소 참여) |
| 2 | Pay-for-Performance | 낮음 | MIPS (성과 기반 조정) |
| 3 | Shared Savings | 중간 | MSSP (One-sided) |
| 4 | Shared Savings + Risk | 중-높음 | MSSP (Two-sided), ACO REACH |
| 5 | Bundled Payments | 높음 | BPCI Advanced |
| 6 | Full Capitation | 최고 | Direct Contracting |

---

## 2. CPT/HCPCS 코드 체계

VBC는 특정 CPT 코드가 아닌 지불 모델 프레임워크이다. 그러나 VBC 성과에 기여하는 주요 서비스 코드는 다음과 같다:

### VBC 성과 기여 코드

| 서비스 | 코드 | VBC 기여 메커니즘 |
|--------|------|------------------|
| RPM | 99453/99454/99457/99458 | 만성질환 관리 개선 → 재입원 감소 → 비용 절감 |
| CCM | 99490/99491/99487/99489 | 체계적 만성질환 관리 → 응급실 방문 감소 → 품질 향상 |
| APCM | G0556 | 포괄적 1차 의료 관리 → 전반적 건강 결과 개선 |
| AWV | G0438/G0439 | 예방 서비스 실시 → 조기 발견 → Stars/HEDIS 지표 직접 기여 |
| BHI | 99484/99492-99494 | 정신건강 관리 → 전반적 의료비 절감 |
| TCM | 99495/99496 | 퇴원 후 전환기 관리 → 재입원 감소 |
| Advance Care Planning | 99497/99498 | 환자 의사 존중 → 불필요한 의료 이용 감소 |

### VBC 관련 보고/지표 코드

| 코드/체계 | 설명 |
|----------|------|
| MIPS Quality Measures | CMS가 지정한 품질 측정 항목 (200+ 개) |
| eCQMs (Electronic Clinical Quality Measures) | 전자적으로 보고되는 품질 측정 |
| HEDIS Measures | NCQA가 관리하는 건강 관리 품질 측정 (90+ 개) |
| CMS Star Ratings | Medicare Advantage 품질 등급 (1-5 Star) |

---

## 3. 자격 기준

### 조직 자격 (ACO/VBC 참여)

#### Medicare Shared Savings Program (MSSP)
- 최소 5,000명 Medicare FFS 수혜자에게 서비스 제공
- 최소 1명의 ACO professional (의사) 포함
- 3년 계약 기간 (CY2024부터 유연한 시작일 허용)
- CMS와 participation agreement 체결
- 품질 보고 인프라 구비

#### ACO REACH (Realizing Equity, Access, and Community Health)
- 기존 Direct Contracting Model 후속
- Medicare FFS 수혜자 대상
- Equity 요건 포함 (건강 형평성 계획 필수)
- 참여 유형: Standard, New Entrant, High Needs Population

#### MIPS (Merit-based Incentive Payment System)
- Medicare Part B 청구하는 대부분의 의사/NP/PA
- 소규모 면제: $90K 이하 청구 또는 200명 이하 환자
- 4개 카테고리: Quality, Cost, Improvement Activities, Promoting Interoperability
- 성과에 따라 Medicare 지불액 +/-9% 조정 (CY2025 기준)

### 공급자 자격
- 독립 의원(solo practice)부터 대형 건강 시스템까지 참여 가능
- ACO 참여: 조직 단위 (단독 의원이 ACO에 가입 또는 ACO 구성)
- MIPS: 개별 공급자 또는 그룹 단위 보고

### 기술 요건 (VBC 참여를 위한 인프라)
- EHR 시스템 (Certified EHR Technology, CEHRT)
- 데이터 분석 플랫폼 (population health management)
- 품질 측정 보고 시스템 (eCQM reporting)
- 환자 등록(attribution) 관리
- 비용 분석 도구

---

## 4. 임상 워크플로우

### VBC 운영 흐름 (조직 수준)

1. **인구 건강 관리 전략 수립**
   - Medicare 수혜자 패널(attributed population) 파악
   - 위험도 계층화 (risk stratification): 고위험, 중위험, 저위험
   - 고위험 환자 집중 관리 프로그램 설계 (RPM, CCM, APCM)
   - 예방 서비스 프로그램 설계 (AWV, HRA)

2. **품질 측정 및 보고 체계 구축**
   - 적용 가능한 MIPS/HEDIS/Stars 지표 식별
   - eCQM 보고를 위한 EHR 데이터 추출 체계
   - 품질 대시보드 구축 (실시간 성과 모니터링)
   - Gap-in-care 식별 및 폐쇄(close the gap) 워크플로우

3. **비용 관리 프로그램 실행**
   - 고비용 환자 식별 (ED frequent flyers, 재입원 고위험)
   - 케어 코디네이션 강화 (CCM/APCM)
   - 전환기 관리 (TCM) 프로그램
   - 불필요한 의료 이용 감소 (중복 검사, 불필요한 입원)
   - 약물 관리 최적화

4. **환자 참여 프로그램**
   - RPM을 통한 지속적 모니터링
   - 환자 교육 및 자가관리 지원
   - AWV를 통한 연간 예방 서비스
   - 다국어/문화적 적합 서비스

5. **성과 측정 및 개선**
   - 분기별/연간 품질 성과 분석
   - 벤치마크 대비 성과 비교
   - 공유 절감(shared savings) 계산 및 배분
   - 지속적 품질 개선(CQI) 활동

### 공급자 측 일상 워크플로우

1. **매일**: RPM 데이터 모니터링, 이상 알림 대응, CCM/APCM 환자 소통
2. **매주**: 고위험 환자 케이스 컨퍼런스, gap-in-care 리포트 검토
3. **매월**: 품질 지표 대시보드 검토, 비용 추세 분석, CCM/APCM 빌링
4. **매분기**: MIPS 품질 보고, ACO 성과 리포트, 전략 조정
5. **매년**: AWV 캠페인, ACO 성과 정산, 공유 절감 배분, 다음 연도 목표 설정

### 필요 인력

| 역할 | 업무 | 필수/선택 |
|------|------|----------|
| 의사/QHP | 임상 케어 제공, 품질 개선 리더십 | 필수 |
| 케어 코디네이터(RN) | 고위험 환자 관리, CCM/APCM/RPM 실행 | 필수 |
| Population Health Manager | 인구 건강 데이터 분석, 위험 계층화, gap-in-care 관리 | 필수 (중규모+) |
| Quality Manager | 품질 지표 추적, eCQM 보고, 감사 대응 | 필수 |
| Data Analyst | 비용/품질 데이터 분석, 벤치마킹, 예측 모델링 | 권장 |
| IT/기술 지원 | EHR 관리, 데이터 추출, 보고 시스템 운영 | 필수 |

---

## 5. 수가 모델 상세

### VBC 수가 메커니즘

VBC는 FFS 수가 위에 추가적인 인센티브/패널티를 부과하는 구조이다.

#### MIPS 지불 조정
| 성과 수준 | 지불 조정 범위 (CY2025 기준) |
|----------|--------------------------|
| 탁월 | 최대 +9% (exceptional performance bonus 포함 시 더 높음) |
| 양호 | +1% ~ +9% |
| 기준 (threshold) | 0% |
| 미달 | -1% ~ -9% |

[UNVERIFIED] CY2025 MIPS performance threshold: 75 포인트 (추정)

#### MSSP 공유 절감 (Shared Savings)

| Track | 절감 공유 비율 | 손실 분담 | 비고 |
|-------|-------------|----------|------|
| BASIC Level A | 40% | 없음 (one-sided) | 소규모/신규 ACO |
| BASIC Level B | 40% | 없음 | |
| BASIC Level C | 50% | 30% (two-sided) | |
| BASIC Level D | 50% | 30% | |
| BASIC Level E | 50% | 40% | |
| ENHANCED | 75% | 40-75% | 대규모 ACO |

**공유 절감 계산 방식**:
- CMS가 ACO의 attributed 환자에 대한 예상 비용(benchmark) 설정
- 실제 비용이 benchmark 이하이면 절감(savings) 발생
- 절감액의 40-75%를 ACO가 수령
- 최소 절감률(MSR: Minimum Savings Rate) 충족 필수 (일반적으로 2-3.9%)

#### ACO REACH 수가
- Professional capitation 또는 total cost of care capitation
- 직접 계약 기반 수가 (FFS 대비 변환)
- Equity 가산금(equity adjustment) 포함
- [UNVERIFIED] 상세 수가 구조는 CMS 최신 가이던스 확인 필요

### 주요 VBC 품질 지표

#### HEDIS (Healthcare Effectiveness Data and Information Set)

| 카테고리 | 주요 지표 | RPM/CCM/APCM 관련성 |
|---------|----------|-------------------|
| 당뇨 관리 | HbA1c 검사/조절, 안저 검사 | RPM 혈당 모니터링 직접 기여 |
| 고혈압 관리 | 혈압 조절 | RPM 혈압 모니터링 직접 기여 |
| 심혈관 질환 | Statin 사용, 심혈관 위험 관리 | CCM/APCM 약물 관리 기여 |
| 예방 서비스 | AWV 완료율, 면역, 암 선별 | AWV/HRA 직접 기여 |
| 정신건강 | 우울증 선별/관리, 약물 남용 | HRA(PHQ-9) 기여 |
| 약물 관리 | 약물 순응도, 다약제 관리 | CCM/APCM 약물 관리 기여 |
| 이용 관리 | 재입원율, 응급실 이용 | RPM/CCM 조기 개입으로 감소 |

#### CMS Star Ratings (Medicare Advantage)

| 카테고리 (배점) | 주요 측정 | HicareNet 솔루션 기여 |
|---------------|----------|---------------------|
| Staying Healthy (예방) | 건강 선별, AWV, 면역 | AWV, HRA |
| Managing Chronic Conditions | 당뇨 관리, 혈압 조절, 복약 순응도 | RPM, CCM, APCM |
| Member Experience | 환자 만족도(CAHPS) | 다국어 지원, 환자 친화적 앱 |
| Complaints & Appeals | 불만/항소 | 서비스 품질 |
| Health Plan Customer Service | 고객 서비스 품질 | N/A (보험사 측) |

### 지불자별 차이
- **Medicare FFS (MIPS)**: 개별 공급자 성과 기반 +-9% 조정
- **Medicare FFS (ACO/MSSP)**: 조직 단위 공유 절감/손실
- **Medicare Advantage**: Star Ratings 기반 보너스 지급 (Quality Bonus Payment)
- **Commercial**: 보험사별 VBC 계약 (shared savings, P4P, bundled payments)
- **Medicaid**: 주별 VBC 프로그램 (Medicaid Managed Care 중심)

---

## 6. 공급자 Pain Points

1. **데이터 분석 역량 부족**: VBC는 인구 건강 데이터 분석, 위험 계층화, 비용 예측을 요구하나, 소규모 클리닉은 데이터 분석 인프라/인력이 없음. EHR에서 품질 데이터 추출이 기술적으로 어려움.

2. **품질 지표 보고 복잡성**: MIPS 4개 카테고리, HEDIS 90+ 지표, Star Ratings 등 다양한 지표를 추적/보고하는 행정 부담. 지표 정의 변경(연도별), 보고 기한 관리.

3. **재정 위험(financial risk)에 대한 불안**: Two-sided risk ACO 참여 시 손실 분담 우려. 소규모 의원은 재정적 완충 능력 부족. 성과 벤치마크 대비 실제 비용의 불확실성.

4. **환자 배정(attribution) 불확실성**: CMS의 환자 배정 방법론에 따라 ACO에 배정되는 환자 목록이 변동. "누가 내 환자인가"의 불확실성으로 관리 계획 수립 어려움.

5. **단기 투자 vs 장기 수익**: VBC는 케어 코디네이션, IT 인프라, 인력에 선투자가 필요하나 공유 절감은 1-2년 후에야 정산. 현금 흐름 압박.

6. **FFS와 VBC의 이중 운영**: 대부분의 공급자가 FFS와 VBC를 병행 운영. 두 모델의 상충되는 인센티브(volume vs value) 관리 어려움.

---

## 7. HicareNet 차별화 요소

### 기존 강점 매핑

| 회사 역량 | VBC 서비스에서의 가치 |
|----------|---------------------|
| 120+ 의료기기 호환 | RPM 디바이스 데이터가 VBC 품질 지표(혈압 조절, 혈당 관리) 달성의 핵심 증거 |
| 다국어 지원 | 건강 형평성(health equity) 요건 충족에 기여. ACO REACH의 equity 요건, HEDIS의 다문화 접근성 지표 |
| Care Portal | 인구 건강 대시보드, 품질 지표 실시간 추적, gap-in-care 식별, 위험 계층화 지원 |
| RPM/CCM 통합 플랫폼 | VBC 핵심 전략(만성질환 관리, 재입원 감소)의 실행 도구. FFS 수가 + VBC 인센티브 이중 수익 |
| AI 기반 분석 | 고위험 환자 예측, 비용 추세 분석, 품질 지표 달성 예측, 개입 우선순위 결정 |
| 40+ 병원 계약 실적 | VBC 참여 준비도가 높은 클리닉 네트워크. ACO 구성 또는 기존 ACO 가입 지원 가능 |

### 경쟁 우위 포인트

- **기술적 차별화**: RPM/CCM/APCM 데이터가 자동으로 VBC 품질 지표에 매핑되는 통합 보고 플랫폼. 실시간 품질 대시보드 (MIPS score 시뮬레이션, HEDIS gap 추적). AI 기반 위험 계층화 및 개입 우선순위 추천
- **서비스적 차별화**: 소규모 클리닉을 위한 VBC 컨설팅/지원 (ACO 참여, MIPS 보고, 품질 개선). 다국어 환자 참여 프로그램이 건강 형평성 지표에 기여. RPM+CCM+AWV+APCM 번들로 VBC 성과 극대화
- **전략적 차별화**: "FFS+VBC 이중 수익 모델" 제시 - RPM/CCM/APCM FFS 수가로 즉시 수익 확보 + VBC 인센티브(공유 절감, MIPS 보너스)로 추가 수익. 한인/히스패닉 클리닉의 VBC 참여 지원이라는 니치 시장 전략

### HicareNet RPM/CCM 데이터가 VBC에 기여하는 구체적 메커니즘

| VBC 지표 | HicareNet 데이터 기여 | 기대 효과 |
|---------|---------------------|----------|
| 혈압 조절율 (Controlling High Blood Pressure) | RPM 혈압 모니터링 → 실시간 데이터 → 목표 혈압 달성 추적 | HEDIS/Stars 혈압 지표 향상 |
| HbA1c 조절 (Diabetes HbA1c Control) | RPM 혈당 모니터링 → 추세 분석 → 약물 조정 지원 | HEDIS 당뇨 관리 지표 향상 |
| 재입원 감소 (All-Cause Readmission) | RPM 조기 이상 감지 → CCM/APCM 개입 → 입원 예방 | ACO 비용 절감, MIPS Cost 카테고리 개선 |
| AWV 완료율 (Annual Wellness Visit) | 디지털 AWV 리콜 → HRA 사전 배포 → AWV 완료율 향상 | Stars/HEDIS 예방 서비스 지표 향상 |
| 우울증 선별 (Depression Screening) | HRA 내 PHQ-9 → 자동 채점 → 후속 관리 연계 | HEDIS 정신건강 지표 향상 |
| 약물 순응도 (Medication Adherence) | CCM/APCM 약물 관리 → 리필 추적 → 비순응 알림 | Stars 약물 순응도 지표 향상 |
| 환자 경험 (CAHPS) | 다국어 서비스, 고령층 친화 앱 → 환자 만족도 향상 | Stars 환자 경험 지표 향상 |

---

## 8. 관련 솔루션과의 연계

| 연계 솔루션 | 연계 방식 | 시너지 |
|------------|----------|--------|
| RPM | RPM 데이터가 VBC 핵심 품질 지표에 직접 기여 | 혈압/혈당 모니터링 데이터 → HEDIS/Stars 지표 달성, 재입원 감소 → 비용 절감 |
| CCM | CCM의 체계적 관리가 VBC 성과의 근간 | 만성질환 관리 → 건강 결과 개선 → 공유 절감 증가 |
| APCM | APCM의 포괄적 관리가 VBC 성과 기여 | CCM보다 낮은 행정 부담으로 유사한 VBC 기여 |
| AWV | AWV 완료율이 VBC 예방 서비스 지표에 직접 반영 | AWV 완료율 향상 → Stars/HEDIS 예방 지표 개선 |
| HRA | HRA 데이터가 위험 계층화 및 예방 서비스 지표에 기여 | 체계적 위험 평가 → gap-in-care 식별 → 품질 개선 |

---

## 9. 출처 목록

| # | 출처 | URL | 게시일 | 신뢰도 |
|---|------|-----|-------|-------|
| 1 | CMS.gov - Quality Payment Program (MIPS) | https://qpp.cms.gov/ | 지속 업데이트 | Tier 1 |
| 2 | CMS.gov - Medicare Shared Savings Program | https://www.cms.gov/medicare/payment/fee-for-service-providers/shared-savings-program | 지속 업데이트 | Tier 1 |
| 3 | CMS.gov - ACO REACH Model | https://www.cms.gov/priorities/innovation/innovation-models/aco-reach | 지속 업데이트 | Tier 1 |
| 4 | NCQA - HEDIS Measures | https://www.ncqa.org/hedis/ | 지속 업데이트 | Tier 2 |
| 5 | CMS Star Ratings | https://www.cms.gov/medicare/quality/star-ratings | 지속 업데이트 | Tier 1 |
| 6 | MACRA (Public Law 114-10) | https://www.congress.gov/114/plaws/publ10/PLAW-114publ10.htm | 2015-04-16 | Tier 1 |
| 7 | HicareNet company-content-source.md | 프로젝트 내부 | 2025 | 내부 자료 |

---

## 10. 조사 메모 / 미해결 사항

- **[HIGH] CY2025 MIPS performance threshold 확인**: 현재 75 포인트 추정, 실제 확인 필요.
- **[HIGH] ACO REACH 최신 현황**: ACO REACH 모델의 CY2025/2026 업데이트 사항, 참여 ACO 수, 성과 데이터 확인.
- **[MEDIUM] HEDIS 2025 업데이트**: NCQA의 HEDIS 2025 측정 항목 변경 사항 확인 (특히 digital measures 도입 현황).
- **[MEDIUM] 소규모 클리닉 VBC 참여 모델**: HicareNet의 주요 고객(40개 병원, 소규모 한인 클리닉)이 VBC에 참여할 수 있는 현실적 경로 검토. 독립 의원의 ACO 가입 방법, MIPS 소규모 면제 기준.
- **[MEDIUM] CMS Innovation Center 최신 모델**: Making Care Primary (MCP), States Advancing All-Payer Health Equity Approaches and Development (AHEAD) 등 신규 VBC 모델과 HicareNet의 관련성.
- **[LOW] Commercial VBC 계약 현황**: 주요 상업 보험사(UnitedHealthcare, Anthem, Aetna, Cigna)의 VBC 프로그램 및 참여 요건.
- **기존 데이터 갭**: services.json에 VBC CPT 코드 없음 (정상 - VBC는 CPT 코드 아님). company-content-source.md에 VBC 관련 구체적 언급 없음. HicareNet의 VBC 포지셔닝이 현재 불명확 - RPM/CCM 데이터가 VBC에 기여하는 메커니즘을 홈페이지에 명시할 필요.
- **HicareNet 권고사항**: VBC 페이지를 "독립 서비스"보다는 "RPM+CCM+APCM+AWV가 VBC 성과에 어떻게 기여하는가"라는 통합 스토리로 구성할 것을 권장. "FFS 수가 + VBC 인센티브 = 이중 수익"이라는 가치 제안이 소규모 클리닉에 가장 효과적.
