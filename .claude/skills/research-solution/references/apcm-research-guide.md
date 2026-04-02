# APCM (Advanced Primary Care Management) 조사 가이드

## 배경

APCM은 CMS가 CY2025 Medicare Physician Fee Schedule (PFS) Final Rule에서 신설한 프로그램이다. 기존 CCM(Chronic Care Management) 코드를 대체/보완하는 새로운 1차 의료 관리 서비스로, 종합적 환자 관리를 수가로 보상한다.

이 프로젝트에서 APCM은 **완전히 누락**되어 있다 — services.json, navigation.json, i18n 파일, company-content-source.md 어디에도 언급이 없다. 따라서 가장 상세한 조사가 필요하다.

## 핵심 코드: G0556

- **코드**: G0556
- **프로그램**: Advanced Primary Care Management (APCM)
- **유형**: HCPCS Level II
- **CMS 분류**: Care Management Services

## 조사 필수 항목

### 1. 프로그램 구조
- APCM의 정확한 정의와 CMS의 프로그램 목적
- G0556 코드의 공식 설명 (descriptor)
- APCM에 포함된 서비스 범위 (care plan, chronic condition management, transitional care 등)
- APCM Tier 구조 (Tier 1 / Tier 2 차이, 환자 분류 기준)

### 2. 기존 코드와의 관계
- APCM vs CCM (99490, 99491, 99487, 99489): 중복 청구 가능 여부, 대체 관계
- APCM vs PCM (Principal Care Management, 99424-99427): 차이점
- APCM과 BHI (Behavioral Health Integration), TCM (Transitional Care Management)의 관계
- CCM에서 APCM으로의 전환 가이드라인

### 3. 자격 기준
- 환자 자격: Medicare 수혜자 요건, 만성질환 수 기준, 동의 요건
- 공급자 자격: 참여 가능한 공급자 유형, 인증 요건
- 시설 자격: 참여 가능한 시설 유형
- 등록/옵트인 절차

### 4. 수가 및 빌링
- G0556 지불 수가 (CY2025 기준)
- Tier별 수가 차이
- 빌링 빈도 (월별/분기별)
- 시간 기반 요건 여부
- 문서화 요건
- 동시 빌링 제한 (CCM, BHI 등과의 관계)

### 5. 시행 일정
- CY2025 PFS Final Rule 게시일
- APCM 프로그램 시행 시작일
- CMS의 단계적 시행 계획 (있는 경우)

## 권장 검색어

### 1차 검색 (CMS 공식 출처)
- `"Advanced Primary Care Management" CMS final rule`
- `G0556 HCPCS code CMS`
- `CY2025 physician fee schedule APCM`
- `"advanced primary care management" Medicare`

### 2차 검색 (해석/분석 자료)
- `APCM vs CCM billing differences`
- `APCM tier structure requirements`
- `advanced primary care management implementation guide`
- `G0556 reimbursement rate 2025`

### 3차 검색 (업계 대응)
- `APCM healthcare IT solution`
- `APCM software platform`
- `"advanced primary care management" technology`

## CMS 공식 문서 접근 경로

1. **CMS.gov Final Rules**: cms.gov에서 CY2025 PFS Final Rule 검색
2. **Federal Register**: federalregister.gov에서 "advanced primary care management" 검색
3. **CMS MLN (Medicare Learning Network)**: 교육 자료 검색
4. **CMS Innovation Center**: 관련 모델 프로그램 확인

## HicareNet 관점에서의 APCM 의미

HicareNet은 이미 RPM/CCM 플랫폼을 보유하고 있으므로, APCM은:
- CCM 고객에게 APCM 전환/병행 옵션을 제공할 수 있는 기회
- 기존 Care Portal이 APCM 워크플로우를 지원하도록 확장 가능
- 120+ 디바이스 호환성이 APCM의 종합적 환자 관리에 직결
- 다국어 지원이 APCM의 환자 참여(engagement) 요건 충족에 도움

이 관점들을 솔루션 프로파일의 "HicareNet 차별화 요소" 섹션에 포함한다.
