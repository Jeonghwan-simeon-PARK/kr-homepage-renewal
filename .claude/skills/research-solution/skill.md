---
name: research-solution
description: "6대 헬스케어 솔루션(RPM, CCM, APCM, HRA, AWV, VBC) 심층 조사 스킬. CMS 규정, CPT/HCPCS 코드, 임상 워크플로우, 보험 수가, 공급자 가치 제안을 체계적으로 조사하여 솔루션 프로파일을 생성한다. '솔루션 조사', 'APCM 조사', 'CPT 코드 조사', 'CMS 규정 조사', 'solution research', 'healthcare service research' 요청 시 반드시 이 스킬을 사용할 것. 단순 코딩이나 UI 작업에는 사용하지 않는다."
---

# /research-solution - 헬스케어 솔루션 도메인 심층 조사

## 개요

HicareNet이 제공하는 6대 헬스케어 솔루션 각각에 대해 체계적인 5단계 조사를 수행하여 구조화된 솔루션 프로파일을 산출한다. 이 프로파일은 홈페이지 콘텐츠 작성의 핵심 입력 자료가 된다.

## 대상 솔루션

| 솔루션 | 프로젝트 내 현황 | 조사 우선순위 |
|--------|----------------|-------------|
| APCM (Advanced Primary Care Management) | **완전 누락** | 최우선 |
| HRA (Health Risk Assessment) | AWV 하위 기능으로만 존재 | 높음 |
| RPM (Remote Patient Monitoring) | 기본 데이터 존재 | 보강 |
| CCM (Chronic Care Management) | 기본 데이터 존재 | 보강 |
| AWV (Annual Wellness Visit) | 기본 데이터 존재 | 보강 |
| VBC (Value-Based Care) | 기본 데이터 존재 | 보강 |

## 조사 워크플로우 (솔루션당)

### 단계 1: CMS/규정 프레임워크
WebSearch와 WebFetch로 조사:
- 프로그램의 공식 CMS 명칭과 카테고리
- 근거 규정 (CFR 조항, Final Rule 참조)
- 해당 CPT/HCPCS 코드 전체 목록
- 코드별 정의와 적용 조건
- 자격 기준 (환자, 공급자, 시설 유형)
- 빌링 요건 (시간 임계값, 동의 요건, 문서화 요건)

### 단계 2: 임상 워크플로우
- 공급자 측 단계별 흐름 (환자 등록 → 모니터링 → 개입 → 빌링)
- 환자 측 여정 (디바이스 수령 → 데이터 전송 → 피드백)
- 필요 인력 (의사, 간호사, 케어 코디네이터, 기술 지원)
- 기술 요구사항 (디바이스, 플랫폼, EMR 연동)

### 단계 3: 수가 모델
- 코드별 Medicare 지불 수가 (Facility/Non-facility)
- 수정자 코드 (modifier) 적용 규칙
- 시간 기반 빌링 규칙 (예: CCM 20분/40분/60분 임계값)
- 빌링 빈도 (월별, 연별 등)
- Medicare Advantage / Commercial payer 차이

### 단계 4: 공급자 Pain Points
- 규정 준수의 행정적 부담
- 인력 부족과 워크플로우 비효율
- 기술 통합의 어려움 (EMR 연동, 디바이스 관리)
- 환급 지연이나 거부 (denial) 문제
- 환자 참여(engagement) 유지의 어려움

### 단계 5: HicareNet 차별화 요소 매핑
기존 `data/company-content-source.md`를 읽고:
- 해당 솔루션에서 HicareNet의 기존 강점 식별
- 120+ 의료기기 호환성이 이 솔루션에서 어떤 가치를 가지는지
- 다국어 지원(7개 언어)이 이 솔루션의 환자 참여에 어떤 의미인지
- 10,000+ 게이트웨이 수출 실적이 기술 신뢰도에 어떻게 연결되는지

## APCM 특별 조사 지침

APCM은 프로젝트에서 완전히 누락되어 있으므로 가장 상세하게 조사해야 한다. 반드시 `references/apcm-research-guide.md`를 읽고 조사를 시작하라. 이 가이드에 G0556 코드, CY2025 PFS 참조, CCM과의 관계, 조사 검색어가 정리되어 있다.

## 출력 형식

각 솔루션 프로파일은 `references/solution-profile-template.md` 템플릿을 따른다. `_workspace/01_solution_{솔루션명}_profile.md` 경로에 저장한다.

## 품질 기준

- 모든 CPT/HCPCS 코드에 코드 번호, 공식 설명, 적용 조건을 포함한다
- 수가 정보에 적용 연도를 명시한다 (예: CY2025 Medicare PFS)
- 검증 불가능한 데이터에 `[UNVERIFIED]` 접두사를 붙인다
- 출처 URL과 게시 날짜를 반드시 포함한다
- HicareNet 차별화 요소는 기존 company-content-source.md에 근거한 사실만 기재한다
