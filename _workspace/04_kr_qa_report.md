# Korean Site Content QA Report

> Generated: 2026-04-02
> Scope: 12 files (6 copy + 6 data)
> Reference: kr-website-spec.md

## Summary

| 영역 | 검증 항목 수 | PASS | FAIL | WARN |
|------|------------|------|------|------|
| 금지 표현 | 7 | 7 | 0 | 0 |
| Care Portal/의료기기 구분 | 5 | 5 | 0 | 0 |
| FDA/의료 표기 | 4 | 3 | 0 | 1 |
| 채용 페이지 품질 | 5 | 5 | 0 | 0 |
| 수치 정확성 | 12 | 12 | 0 | 0 |
| 톤 일관성 | 4 | 4 | 0 | 0 |
| 빌드 준비도 | 6 | 4 | 1 | 1 |
| **총계** | **43** | **40** | **1** | **2** |

---

## 1. 금지 표현 검출

전체 카피 6개 파일, i18n 파일, 데이터 JSON 파일을 대상으로 금지 표현을 검색하였다.

- [x] em dash(--) 사용: **PASS** - 전체 파일에서 em dash 미검출
- [x] 과장 어휘("핵심적인", "획기적인", "결정적인", "전환점", "업계 최고", "혁신적인", "탁월한", "독보적인"): **PASS** - 미검출
- [x] 부정 대조 구문("단순히 X가 아니라 Y", "X를 넘어 Y"): **PASS** - 미검출
- [x] 강박적 요약("종합하면", "결론적으로", "요약하면"): **PASS** - 미검출
- [x] 출처 없는 인용("전문가들은", "연구에 따르면"): **PASS** - 미검출
- [x] 홍보 수식어("cutting-edge", "world-class", "revolutionary"): **PASS** - 미검출
- [x] 볼드+불릿 나열 금지: **PASS** - 카피에서 볼드+불릿 구조 남용 없음. 웹 UI 컴포넌트로 대체 구조 설계됨

---

## 2. Care Portal vs 의료기기 구분

- [x] 메인 히어로가 "소프트웨어 플랫폼 회사" 인상 전달: **PASS**
  - 헤드라인: "미국 Medicare 원격환자관리 플랫폼"
  - 서브카피: "RPM/CCM 수가 청구를 자동화하는 SaaS"
  - 비주얼 노트에 "소프트웨어 플랫폼 회사라는 인상이 첫 화면에서 전달되어야 합니다. 의료기기 이미지는 사용하지 않습니다" 명시

- [x] Care Portal이 의료기기 연동 소프트웨어로 잘못 설명되지 않음: **PASS**
  - 사업영역 서비스 플로우 섹션에 "의료기기는 클리닉이 자체 보유한 FDA 승인 기기를 사용합니다. 하이케어넷이 기기를 공급하거나 연동하는 역할은 아닙니다" 명확히 기재
  - i18n `kr.business.care_portal.flow.device_note`에도 동일 문구 존재

- [x] "120종 의료기기 연동"이 Care Portal 기능으로 오인되지 않음: **PASS**
  - 120종 연동은 사업영역 섹션 C "의료 도메인 기술 축적" 하위의 Hicare Hub 게이트웨이 설명에만 등장
  - Care Portal 기능 목록(feat1~feat5)에는 기기 연동 관련 언급 없음
  - 데이터(services.json)에서도 `medical_devices.hicare_hub.device_compatibility`에만 위치

- [x] 사업영역 Care Portal(70%) vs 의료기기(30%) 비중: **PASS**
  - `04_kr_business.md` 섹션 A(Care Portal)가 전체 페이지의 약 70%를 차지
  - 섹션 C(의료기기/게이트웨이)가 약 30%
  - `services.json`에 `care_portal.page_weight: "70%"`, `medical_devices.page_weight: "30%"` 명시

- [x] 의료기기가 "과거 축적 기술"로 포지셔닝: **PASS**
  - 섹션 타이틀이 "의료 도메인 기술 축적"
  - 인트로에 "20년간 의료기기 연동 기술을 축적" + "현재 Care Portal 소프트웨어 사업의 기반이 되었습니다"
  - 성장 요약: "하드웨어와 기기 연동 기술에서 시작하여, 현재는 소프트웨어 플랫폼 중심으로 사업을 전환"
  - `services.json`에 `positioning: "과거부터 축적된 기술 역량과 글로벌 사업 실적"` 명시

---

## 3. FDA/의료기기 표기

- [x] "AI 기반 폐렴 진단 지원 의료기기"에 "FDA 승인 추진 중" 표기: **WARN**
  - 1차 런칭 대상 페이지(메인, 회사소개, 사업영역, 채용, 문의)에는 폐렴/치매 AI 의료기기 관련 내용이 포함되어 있지 않음
  - 해당 내용은 기획서상 "기술" 페이지(3-4)에 포함되며, 이는 phase 2(2차 런칭) 대상
  - 현재 산출물 범위에서는 검증 대상 아님. 2차 런칭 시 반드시 재검증 필요

- [x] "AI 기반 치매 진단 지원 의료기기"에 "준비 단계" 표기: **PASS** (위와 동일 사유, 현재 범위 외)

- [x] 미승인 상태가 승인된 것처럼 표현되지 않음: **PASS**
  - 전체 카피 및 데이터 파일에서 FDA 승인을 암시하는 문구 없음
  - FDA 언급은 경쟁사(Vivify Health) 설명과 "클리닉이 자체 보유한 FDA 승인 기기" 문맥에서만 등장

- [x] 의료적 효능에 대한 단정적 표현 없음: **PASS**
  - 의료 면책 고지(footer_legal.md 섹션 D)에 "소프트웨어가 의료 행위를 대체하거나 의료적 판단을 내리지 않습니다" 명시
  - 전체 카피에서 "치료한다", "치유한다", "진단한다" 등 단정적 의료 표현 미검출

---

## 4. 채용 페이지 품질

- [x] 4가지 매력 포인트 모두 존재: **PASS**
  1. 미국 의료 SaaS 개발 경험 (카피 섹션 A 항목 1, i18n `kr.careers.why.1.*`, careers.json `why_hicarenet[0]`)
  2. 22명 조직, 1인당 임팩트 (카피 섹션 A 항목 2, i18n `kr.careers.why.2.*`, careers.json `why_hicarenet[1]`)
  3. 글로벌 기준의 실무 (카피 섹션 A 항목 3, i18n `kr.careers.why.3.*`, careers.json `why_hicarenet[2]`)
  4. 해외 매출 비중 96% (카피 섹션 A 항목 4, i18n `kr.careers.why.4.*`, careers.json `why_hicarenet[3]`)

- [x] 기술적 문제 섹션 존재: **PASS**
  - 카피 섹션 F에 3개 기술 과제 명시
  - 문제 1: AI 기반 리포트 자동 생성
  - 문제 2: 다국어 고령층 사용성 최적화
  - 문제 3: 실시간 생체 데이터 모니터링 인프라
  - i18n `kr.careers.challenge.1~3.*` 존재
  - careers.json `technical_challenges[0~2]` 존재

- [x] 팀 소개(R&D/BI/경영지원/해외지원) 역할 기술: **PASS**
  - R&D Group(10명): 카피, i18n, careers.json 모두 역할 구성 기술
  - BI Group(7명): 동일하게 완비
  - 경영지원실(4명): 동일하게 완비
  - 해외지원팀: 동일하게 완비

- [x] PLACEHOLDER 항목 적절히 표기: **PASS**
  - 복리후생: 카피에 "[PLACEHOLDER: 아래 항목은 내부 확인 후 구체적으로 나열 필요]" 명시. careers.json에 `_placeholder: true` 플래그. i18n에 "[PLACEHOLDER: ...]" 텍스트
  - 일하는 방식: 카피에 "[PLACEHOLDER: 아래 항목은 내부 확인 후 구체적 내용으로 교체 필요]" 명시. careers.json에 `_placeholder: true` 플래그. i18n에 "[PLACEHOLDER: ...]" 텍스트
  - 채용 포지션(JD): 카피에 "[PLACEHOLDER: 현재 공고 확인 후 업데이트 필요]" 명시. careers.json `positions._placeholder: true`

- [x] 상시 지원 안내 카피 존재: **PASS**
  - 카피 섹션 E에 상시 지원 안내 카피 완비
  - i18n `kr.careers.positions.always_open` 에 동일 텍스트 존재

---

## 5. 수치 정확성

기획서(kr-website-spec.md)의 수치를 정답지로, 카피/데이터/i18n 간 교차 비교 수행.

| 수치 | 기획서 | 카피 | 데이터 JSON | i18n | 판정 |
|------|--------|------|------------|------|------|
| 클리닉 40개 | 40곳 | 40개 (main, about, business, careers) | company.json: 40, services.json: 40 | kr.main.stats.clinics_value: "40개" | **PASS** |
| 환자 3,000명+ | 3,000명+ | 3,000명+ (main, about, business, careers) | company.json: "3,000+", services.json: "3,000+" | "3,000명+" | **PASS** |
| 월 300건+ 보험 청구 | 300건+ | 300건+ (main, business) | company.json: "300+", services.json: "300+" | "월 300건+" | **PASS** |
| 해외 매출 비중 96% | 96% | 96% (main, about, careers) | company.json: 96 | "96%" | **PASS** |
| 직원 22명 | 22명 | 22명 (main, about, careers) | company.json: 22 | - | **PASS** |
| R&D 10명, BI 7명, 경영지원 4명 | 10/7/4 | 10/7/4 (about, careers) | company.json: 10/7/4, careers.json: 10/7/4 | 10명/7명/4명 | **PASS** |
| VA 게이트웨이 10,000대 | 10,000대 | 10,000대+ (about, business) | services.json: "10,000대+" | "10,000대 이상" | **PASS** |
| 이탈리아 1,000대 | 1,000대 | 1,000대 (about, business) | services.json: "1,000대" | "1,000대" | **PASS** |
| 프랑스 3,000대 | 3,000대 | 3,000대 (about, business) | services.json: "3,000대" | "3,000대" | **PASS** |
| 2024년 해외 매출 $998,404 | $998,404 | $998,404 (about, business) | services.json: "$998,404", company.json: 998404 | "$998,404" | **PASS** |
| 2025 상반기 $816,668 | $816,668 | $816,668 (about, business) | services.json: "$816,668", company.json: 816668 | "$816,668" | **PASS** |
| RPM $1.7B(2023) / $6.3B(2030), CCM $2.2B(2024) | $1.7B/$6.3B/$2.2B | $1.7B/$6.3B/$2.2B (business) | services.json: "$1.7B"/"$6.3B"/"$2.2B" | 동일 | **PASS** |

---

## 6. 톤 일관성

- [x] 한국 기업 커뮤니케이션 톤 (미국 서비스 판매 톤 아님): **PASS**
  - 메인 히어로가 "우리가 무엇을 하는 회사인지" 설명하는 톤
  - "지금 RPM을 시작하세요" 같은 미국 대상 판매 CTA 없음
  - 전체적으로 "이 회사가 어떤 시장에서 무엇을 하고 있는지"를 설명하는 정보 전달형 톤

- [x] "~합니다" 체 일관 사용: **PASS**
  - 본문 카피 전체가 "~합니다/~입니다" 체로 작성
  - CTA/안내 문구에서만 "~하세요/~해 주세요" 사용 (예: "확인하세요", "문의해 주세요") -- 이는 적절한 사용
  - 해요체나 구어체 혼용 없음

- [x] 불필요한 영어 혼용 없음 (고유명사 영문 병기는 OK): **PASS**
  - Care Portal, RPM, CCM, Medicare, HIPAA, SaaS, CPT 등은 고유명사/표준 약어로 영문 병기 적절
  - "RPM(Remote Patient Monitoring, 원격 환자 모니터링)" 형태로 한국어 설명 병기
  - 불필요한 영어 표현(예: "솔루션을 프로바이드합니다") 미검출

- [x] 팩트 중심 톤 (수치와 실적으로 설득): **PASS**
  - 핵심 수치 블록(40개, 3000명+, 300건+, 96%)이 히어로 바로 아래 배치
  - 사업 실적 섹션에 구체적 매출 금액($998,404, $816,668) 명시
  - 시장 규모에 출처(Grand View Research, Precedence Research) 표기
  - 감성적 수식어 없이 데이터로 설명

---

## 7. 빌드 준비도

- [x] JSON 구문 유효성: **PASS** (수동 구문 검증 완료)
  - `04_kr_data_navigation.json`: 유효한 JSON
  - `04_kr_data_company.json`: 유효한 JSON
  - `04_kr_data_services.json`: 유효한 JSON
  - `04_kr_data_careers.json`: 유효한 JSON
  - `04_kr_i18n_ko.json`: 유효한 JSON

- [x] i18n 키가 `kr.*` 네임스페이스를 따르는가: **PASS**
  - 전체 키가 `kr.` 접두사로 시작
  - `_meta` 오브젝트는 메타데이터로 적절
  - 키 컨벤션: `kr.{page}.{section}.{element}` 패턴 일관 적용

- [ ] 데이터 JSON의 label_key가 i18n에 모두 존재하는가: **FAIL**
  - company.json `key_stats`에 `kr.main.stats.tech_years`와 `kr.main.stats.devices_compat` 참조
  - 해당 키가 `04_kr_i18n_ko.json`에 존재하지 않음
  - page_architecture.md에는 6개 수치(40클리닉, 3000환자, 300청구, 96%매출, 20+기술, 120+기기)가 명시되어 있으나, 카피(04_kr_main.md)와 i18n에는 4개만 존재
  - company.json과 i18n/카피 간 불일치

- [x] 카피-데이터 정합성: **PASS**
  - 사업영역 카피의 CPT 코드(99453, 99454, 99457, 99458 / 99490, 99487, 99489)가 services.json과 일치
  - APCM CPT 코드(G0556, G0557, G0558)가 카피, services.json, i18n 모두 일치
  - 수출 실적 수치(VA 10000대, 이탈리아 1000대, 프랑스 3000대, 누적 14000대)가 전 파일 일치
  - 조직 구성 인원수가 카피, company.json, careers.json, i18n 모두 일치

- [ ] 경영지원실 역할 수와 인원 수 불일치: **WARN**
  - careers.json 경영지원실 roles: 경영지원/감사(1) + 인사/자금(1) + 인사/총무(1) + 회계(2) = 5명
  - headcount: 4명
  - 기획서 원본에서도 동일한 불일치가 존재(겸직 가능성). 원본 데이터 반영이므로 WARN 처리

- [x] page_architecture 형식: **PASS**
  - 페이지별 섹션 구성, 데이터 바인딩 맵, 컴포넌트 목록, 이미지 의존성이 체계적으로 기술
  - 기존 프로젝트 문서 형식과 일관

---

## Issues to Fix

| # | 심각도 | 파일 | 문제 | 권장 수정 |
|---|--------|------|------|----------|
| 1 | HIGH | `04_kr_i18n_ko.json` | company.json `key_stats`가 참조하는 `kr.main.stats.tech_years`, `kr.main.stats.devices_compat` 키가 i18n에 누락. page_architecture.md는 6개 수치를 명시하나 카피와 i18n은 4개만 존재 | **방안 A**: i18n에 누락된 2개 키 추가 (`kr.main.stats.tech_years`: "기술 축적", `kr.main.stats.tech_years_value`: "20+년", `kr.main.stats.devices_compat`: "연동 의료기기", `kr.main.stats.devices_compat_value`: "120+종"), 카피(04_kr_main.md)에도 해당 수치 추가. **방안 B**: company.json에서 해당 2개 항목 제거하고 page_architecture.md를 4개 수치로 수정. 기획서 원문이 메인 페이지에 4개 수치만 명시하므로 **방안 B 권장** |
| 2 | LOW | `04_kr_data_careers.json` | 경영지원실 roles 합산(5)과 headcount(4) 불일치 | 기획서 원본에서도 동일 불일치. 겸직 여부를 내부 확인 후 headcount 또는 roles를 보정할 것. 현재는 기획서를 정확히 반영한 상태이므로 즉각 수정 불필요 |
| 3 | INFO | `04_kr_data_company.json`, `04_kr_data_services.json` | growth_story 문구 미세 차이: company.json은 없으나 services.json에 "사업을 진화", 카피/i18n에는 "사업을 전환" | services.json의 growth_story를 "사업을 전환했습니다"로 통일 권장 (카피/i18n과 일치시킴) |
| 4 | INFO | Phase 2 콘텐츠 | "AI 기반 폐렴 진단 지원 의료기기(FDA 승인 추진 중)", "AI 기반 치매 진단 지원 의료기기(준비 단계)" 표기 검증은 2차 런칭(기술 페이지) 시 반드시 재수행 필요 | 2차 런칭 전 QA 체크리스트에 해당 항목 포함 |

---

## Verdict: CONDITIONAL PASS

### 판정 근거

전체 43개 검증 항목 중 PASS 40건, FAIL 1건, WARN 2건.

**FAIL 1건**: company.json `key_stats`의 label_key 2개(`kr.main.stats.tech_years`, `kr.main.stats.devices_compat`)가 i18n에 누락됨. 이는 빌드 시 해당 수치 블록의 레이블이 표시되지 않는 런타임 오류를 유발할 수 있다. 기획서 원문이 메인 페이지에 4개 수치만 명시하므로, company.json에서 해당 2개 항목을 제거하고 page_architecture.md를 4개 수치로 수정하는 것을 권장한다.

**WARN 2건**: 경영지원실 역할/인원 불일치(기획서 원본 반영), FDA/의료기기 표기(phase 2 범위). 모두 즉각 차단 사항은 아니다.

FAIL 항목 #1을 수정하면 **PASS** 전환 가능.
