---
name: research-market
description: "헬스케어 IT 시장 데이터, CMS 규정 변화, 임상 성과 근거, FHIR/상호운용성 동향을 체계적으로 수집하는 스킬. RPM/CCM/APCM/VBC 시장 규모, 성장 전망, 채택률, CMS 규정 업데이트(CY2025/2026 PFS), 임상 근거(재입원 감소율, ROI), FHIR 동향을 조사한다. '시장 조사', '시장 데이터', '규정 조사', '임상 근거', 'market research', 'market data', 'clinical evidence', 'regulatory research' 요청 시 반드시 이 스킬을 사용할 것. 코드 작성이나 UI 빌드에는 사용하지 않는다."
---

# /research-market - 헬스케어 IT 시장 데이터 및 규정 조사

## 개요

미국 헬스케어 IT 시장의 데이터, CMS 규정, 임상 근거, 기술 동향을 체계적으로 수집한다. 홈페이지에 인용할 수 있는 검증된 수치와, 콘텐츠 전략을 뒷받침하는 시장 인텔리전스를 산출한다.

## 조사 영역

### 1. 시장 규모 및 성장 (RPM/CCM/APCM/VBC)

각 시장에 대해:
- **현재 시장 규모** (TAM, 글로벌 및 미국)
- **CAGR** (연평균 성장률, 전망 기간 명시)
- **공급자 채택률** (미국 내 RPM/CCM 도입 병원 비율)
- **환자 등록 규모** (서비스별 등록 환자 수 추이)
- **주요 성장 동인** (규정 변화, 기술 발전, 코로나 이후 원격의료 확대 등)

검색 소스: Grand View Research, Fortune Business Insights, MarketsandMarkets, Allied Market Research 등 시장조사 기관의 공개 요약

**기존 데이터 확인**: `references/existing-data-inventory.md`를 먼저 읽고, 이미 프로젝트에 있는 시장 데이터와 중복되지 않도록 한다. 기존 데이터를 업데이트/보강하는 데 집중한다.

### 2. CMS 규정 변화 (CY2025/2026)

- **CY2025 PFS Final Rule**: RPM/CCM 코드 변경, APCM 신설, 수가 조정
- **CY2026 PFS Proposed Rule**: 예고된 변경 사항 (있는 경우)
- **원격의료 정책**: Medicare 원격의료 유연성 연장 여부, 장소 제한 변경
- **APCM 프로그램**: 출범 세부사항, 단계적 시행 계획, CMS 가이던스
- **기타 관련 규정**: MIPS/QPP 변경, ACO 프로그램 업데이트

검색 소스: CMS.gov, Federal Register, CMS MLN Matters, American Medical Association

### 3. 임상 근거 / 성과 데이터

홈페이지 마케팅 카피에 인용할 수 있는 검증된 성과 지표:
- **재입원 감소율**: RPM/CCM 프로그램 후 30일 재입원 감소 비율
- **비용 절감**: 환자당/기관당 연간 비용 절감 금액
- **환자 만족도**: NPS, 만족도 설문 결과
- **임상 성과**: 혈압 조절 개선율, HbA1c 감소, 약물 순응도 등
- **ROI 벤치마크**: RPM/CCM 프로그램의 투자 대비 수익

검색 소스: PubMed, CMS Innovation Center, AHRQ, PCORI, 주요 학회(AMA, ATA) 발표

각 데이터 포인트에 **연구 규모(N)**, **연구 기간**, **출판 연도**를 포함한다. 통제된 연구(RCT)와 관찰 연구를 구분한다.

### 4. FHIR/상호운용성 동향

HicareNet이 H1 2026에 FHIR 기반 EMR 연동을 준비 중이므로:
- **FHIR 채택 현황**: 미국 병원/EHR 벤더의 FHIR R4 지원율
- **ONC 규정**: 21st Century Cures Act, Information Blocking Rule 시행 현황
- **TEFCA**: Trusted Exchange Framework 진행 상황
- **상호운용성 시장 규모**: Healthcare interoperability 시장 전망
- **주요 EHR 벤더 동향**: Epic, Cerner (현 Oracle Health), athenahealth의 FHIR 지원

### 5. VBC 전환 동향

- **VBC 지불 모델 전환율**: 미국 의료비 중 VBC 비율 추이
- **ACO 참여 현황**: Medicare ACO 참여 기관 수, 절감 실적
- **품질 지표**: HEDIS, CMS Stars 프로그램 최신 동향
- **기술 요구**: VBC 성공을 위한 IT 인프라 요건

## 출력 파일

| 파일 | 내용 |
|------|------|
| `_workspace/01_market_rpm_ccm_data.md` | RPM/CCM 시장 규모, 성장률, 채택률 |
| `_workspace/01_market_apcm_regulatory.md` | APCM CMS 프로그램 상세, 규정 타임라인 |
| `_workspace/01_market_vbc_trends.md` | VBC 채택 동향, 지불 모델 전환 |
| `_workspace/01_market_fhir_interop.md` | FHIR 채택, ONC 규정, 상호운용성 시장 |
| `_workspace/01_market_clinical_evidence.md` | 임상 성과 데이터, ROI 벤치마크 |

## 데이터 품질 표기

모든 데이터 포인트에 다음 표기를 사용한다:

| 표기 | 의미 | 사용 조건 |
|------|------|----------|
| `[VERIFIED]` | Tier 1-2 출처 확인 | CMS, Federal Register, PubMed 등 |
| `[REPORTED]` | Tier 3 시장조사 기관 | Grand View Research 등의 공개 요약 |
| `[ESTIMATED]` | 복수 출처 추론 | 교차 검증으로 추정한 수치 |
| `[PROJECTED]` | 미래 전망 | 전망 연도 반드시 명기 |
| `[UNVERIFIED]` | 단일 Tier 4 출처 | 교차 확인 불가 |

출처 신뢰도 계층과 상세 기준은 `references/source-priority.md`를 참조한다.

## 홈페이지 인용 가능 기준

홈페이지 마케팅 카피에 직접 인용하려면:
- `[VERIFIED]` 또는 `[REPORTED]` 데이터만 사용 가능
- 출처와 연도를 병기할 수 있어야 함
- "200+", "3,000+" 등 보수적 표현 사용 (정확한 수치보다 하한값)
- `[ESTIMATED]`/`[PROJECTED]` 데이터는 "업계 전망에 따르면" 등 한정어와 함께만 사용
