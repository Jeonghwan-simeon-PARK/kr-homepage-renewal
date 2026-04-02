# 한국법인 홈페이지 페이지 아키텍처 (1차 런칭)

## 1차 런칭 대상 페이지: 5개

| 페이지 | 경로 | 우선순위 |
|--------|------|----------|
| 메인 | /kr/index.html | 1 |
| 회사소개 | /kr/about.html | 2 |
| 사업영역 | /kr/business.html | 3 |
| 채용 | /kr/careers.html | 4 |
| 문의 | /kr/contact.html | 5 |

2차 런칭: 기술(/kr/technology.html), 글로벌 실적(/kr/global.html), IR/뉴스(/kr/ir.html)

---

## 공통 구조

### GNB (Global Navigation Bar)
- 데이터 소스: `04_kr_data_navigation.json` > gnb
- phase 2 항목: 메뉴에 표시하되 "준비 중" 뱃지 또는 비노출 (설정으로 제어)
- CTA 버튼: "문의하기" > /kr/contact.html
- 언어 토글: 한국어/영어 (미국 사이트 연결)
- 모바일: 햄버거 메뉴

### 푸터
- 데이터 소스: `04_kr_data_navigation.json` > footer
- 회사 기본 정보, 법적 링크, 인증 마크, 미국 사이트 링크
- i18n: `kr.footer.*`
- 의료 면책 고지 포함

---

## 페이지 1: 메인 (/kr/index.html)

### 목적
회사의 정체성을 즉시 전달하고, 각 타겟(채용/투자/파트너)이 원하는 페이지로 유도

### 섹션 구성

#### (A) 히어로 영역
- i18n: `kr.main.hero.headline`, `kr.main.hero.subheadline`
- CTA 3개: 사업영역/합류/IR
- 배경: Care Portal 대시보드 목업 또는 디지털 헬스케어 비주얼
- 컴포넌트: `hero-banner` (full-width, overlay text)
- 애니메이션: fade-up

#### (B) 핵심 수치 블록
- 데이터 소스: `04_kr_data_company.json` > key_stats
- i18n: `kr.main.stats.*`
- 컴포넌트: `stats-grid` (아이콘 + 카운터 숫자 + 레이블)
- 항목: 40곳 클리닉, 3,000+ 환자, 300+ 월 청구, 96% 해외매출, 20+ 기술축적, 120+ 기기
- 애니메이션: counter (숫자 카운트업), stagger

#### (C) 타겟별 진입점
- i18n: `kr.main.entry.*`
- 컴포넌트: `card-grid` (3열, 아이콘/제목/설명/CTA)
- 3개 카드: 사업영역 / 채용 / IR
- 링크: /kr/business.html, /kr/careers.html, /kr/ir.html (ir은 2차이므로 준비중 처리)

#### (D) 최근 뉴스
- 데이터 소스: 뉴스 데이터 (2차 런칭 전까지 정적 데이터 또는 placeholder)
- i18n: `kr.main.news.*`
- 컴포넌트: `news-list` (2~3건, 날짜/제목/발췌)
- 2차 런칭 전: 정적 뉴스 데이터를 JSON으로 관리

---

## 페이지 2: 회사소개 (/kr/about.html)

### 목적
모든 타겟이 공통으로 방문. 회사의 출발점, 현재 규모, 리더십을 보여줌

### 섹션 구성

#### (A) 회사 개요
- i18n: `kr.about.overview.*`
- 컴포넌트: `text-section` (3~4문단)
- 톤: "20년 기술 축적의 연장선에 있는 전문기업"

#### (B) 미션
- i18n: `kr.about.mission.*`
- 컴포넌트: `highlight-block` (배경색 + 강조 텍스트)

#### (C) 연혁 타임라인
- 데이터 소스: `04_kr_data_company.json` > history
- i18n: `kr.about.history.*`
- 컴포넌트: `timeline` (세로 타임라인, 연도 + 이벤트)
- 애니메이션: fade-up (각 항목 순차)

#### (D) 조직 구성
- 데이터 소스: `04_kr_data_company.json` > organization
- i18n: `kr.about.organization.*`
- 컴포넌트: `org-chart` (조직도 비주얼) + `stats-highlight` (R&D 45%)
- 부서별: 인원 수, 주요 역할 표시

#### (E) 경영진 프로필
- 데이터 소스: `04_kr_data_company.json` > leadership
- i18n: `kr.about.leadership.*`
- 컴포넌트: `profile-card` (사진 + 이름/직함 + 약력)
- 사진: placeholder (실제 사진 확보 필요)

---

## 페이지 3: 사업영역 (/kr/business.html)

### 목적
우리 회사가 어떤 시장에서 무엇을 하고 있고, 어디로 가려는지를 설명

### 섹션 구성

#### (A) Care Portal 소개 (비중 70%)

##### A-1. Medicare 제도 설명 (한국 방문자용)
- i18n: `kr.business.medicare.*`
- 컴포넌트: `info-box` (배경 블록 + 설명 텍스트)
- RPM/CCM 개념 설명

##### A-2. Care Portal이 해결하는 문제
- 데이터 소스: `04_kr_data_services.json` > care_portal.problems_solved
- i18n: `kr.business.care_portal.problem*`
- 컴포넌트: `feature-cards` (3열 카드, 아이콘 + 제목 + 설명)
- 3개: 워크플로우, 문서화, 수가 청구

##### A-3. 서비스 플로우 인포그래픽
- 데이터 소스: `04_kr_data_services.json` > care_portal.service_flow
- 컴포넌트: `flow-diagram` (하이케어넷 > 클리닉 > 환자 > CMS)
- 이미지: [IMG-08] 또는 CSS/SVG 다이어그램

##### A-4. 주요 기능
- 데이터 소스: `04_kr_data_services.json` > care_portal.features
- i18n: `kr.business.care_portal.feat*`
- 컴포넌트: `feature-list` (아이콘 + 제목 + 설명, 5개 항목)

##### A-5. 실적 수치
- 데이터 소스: `04_kr_data_services.json` > care_portal.performance
- 컴포넌트: `stats-bar` (인라인 수치 강조)
- 40개 클리닉, 3,000+ 환자, 300+ 월 청구

#### (B) 서비스 확장 로드맵
- 데이터 소스: `04_kr_data_services.json` > expansion_roadmap
- i18n: `kr.business.expansion.*`
- 컴포넌트: `roadmap-diagram` (동심원 비주얼: 내부 RPM/CCM, 외부 APCM/AWV/HRA/VBC)
- 이미지: [IMG-11] 또는 CSS 원형 다이어그램
- 각 항목: 이름, CPT 코드 (해당 시), 설명

#### (C) 의료기기/게이트웨이 사업 (비중 30%)
- 데이터 소스: `04_kr_data_services.json` > medical_devices
- i18n: `kr.business.devices.*`
- 컴포넌트: `split-section` (텍스트 + 이미지) + `export-grid` (국가별 실적 카드)
- 톤: "현재 주력이 아닌 과거 축적 기술 역량"
- 성장 스토리: 하드웨어 > 소프트웨어 전환

#### (D) 경쟁 환경
- 데이터 소스: `04_kr_data_services.json` > competitors, competitive_advantages, market_data
- i18n: `kr.business.market.*`, `kr.business.advantage*`
- 컴포넌트: `comparison-table` (간략) + `market-stats`

---

## 페이지 4: 채용 (/kr/careers.html)

### 목적
개발자 및 사업개발 인재 유치. 가장 많은 트래픽 예상 페이지.

### 섹션 구성

#### (A) 왜 하이케어넷인가
- 데이터 소스: `04_kr_data_careers.json` > why_hicarenet
- i18n: `kr.careers.why.*`
- 컴포넌트: `value-cards` (4개 카드, 아이콘 + 제목 + 설명)
- 애니메이션: stagger

#### (B) 팀 소개
- 데이터 소스: `04_kr_data_careers.json` > teams
- i18n: `kr.careers.team.*`
- 컴포넌트: `team-section` (팀별 접기/펼치기 또는 탭)
- 각 팀: 인원, 역할 구성, 간략 설명

#### (C) 기술적 도전 (기술 블로그 대체)
- 데이터 소스: `04_kr_data_careers.json` > technical_challenges
- i18n: `kr.careers.challenge.*`
- 컴포넌트: `challenge-cards` (3개, 아이콘 + 제목 + 설명)
- 개발자 유인 요소: "기술적으로 흥미로운 문제를 풀고 있다"

#### (D) 일하는 방식
- 데이터 소스: `04_kr_data_careers.json` > work_style
- 컴포넌트: `info-list` (아이콘 + 항목명 + 설명)
- _placeholder: 내부 확인 후 업데이트

#### (E) 복리후생
- 데이터 소스: `04_kr_data_careers.json` > benefits
- 컴포넌트: `benefits-grid` (아이콘 + 항목명)
- _placeholder: 내부 확인 후 구체적 항목 나열

#### (F) 우리가 풀고 있는 문제 (기술 블로그 대체)
- 데이터 소스: `04_kr_data_careers.json` > technical_challenges
- i18n: `kr.careers.challenge.*`
- 컴포넌트: `challenge-cards` (3개, 제목 + 상세 설명)
- 인트로 카피: `kr.careers.challenge.intro`
- 3개 문제: AI 리포트, 다국어 UX, 실시간 모니터링

#### (G) 채용 공고
- 데이터 소스: `04_kr_data_careers.json` > positions
- i18n: `kr.careers.positions.*`
- 컴포넌트: `job-listing` (접기/펼치기 목록) + `apply-form` (상시 지원)
- 상시 지원 폼: 이름, 이메일, 관심 직군(R&D/BI/경영지원), 이력서 첨부, 자기소개
- 외부 플랫폼 링크: 원티드, 로켓펀치
- 공고 없는 시기: "상시 지원 접수" 폼 표시

---

## 페이지 5: 문의 (/kr/contact.html)

### 목적
구조화된 문의 폼 제공. 유형별 담당자 자동 라우팅.

### 섹션 구성

#### (A) 문의 폼
- i18n: `kr.contact.*`
- 컴포넌트: `contact-form`
- 필드: 문의 유형(라디오/탭), 이름(필수), 소속(선택), 이메일(필수), 전화번호(선택), 문의 내용(필수), 개인정보 수집/이용 동의(필수 체크박스)
- 유형: 투자/IR, 채용, 파트너십/사업 협력, 기타
- 유형별 담당자 라우팅: 투자/IR > BI Group, 채용 > 경영지원실 인사, 파트너십 > BI Group, 기타 > 경영지원실
- 제출 후: 성공 메시지

#### (B) 회사 위치
- 컴포넌트: `map-embed` (카카오맵 또는 구글맵)
- 주소: 서울특별시 송파구 위례성대로22길 28, 5층

#### (C) 연락처 정보
- 컴포넌트: `contact-info` (주소, 이메일, 전화)
- i18n: `kr.contact.direct.*`
- 데이터 소스: `04_kr_data_company.json` > basic_info

---

## 법적 페이지 (1차 런칭 필수)

### 개인정보처리방침 (/kr/privacy.html)
- 한국 개인정보 보호법 준수
- 데이터 소스: `04_kr_footer_legal.md` 섹션 B
- 9개 조항 (처리 목적, 항목, 보유 기간, 제3자 제공, 파기, 정보주체 권리, 안전성 확보, 보호책임자, 변경)
- PLACEHOLDER: 개인정보 보호 책임자 정보, 시행일

### 이용약관 (/kr/terms.html)
- 데이터 소스: `04_kr_footer_legal.md` 섹션 C
- 9개 조항 (목적, 정의, 게시/변경, 서비스 제공, 이용자 의무, 지식재산권, 면책, 분쟁해결, 관할법원)
- PLACEHOLDER: 시행일

### 의료 면책 고지 (/kr/disclaimer.html 또는 푸터 내 표시)
- 데이터 소스: `04_kr_footer_legal.md` 섹션 D
- i18n: `kr.footer.disclaimer`
- 하이케어넷은 의료 서비스 직접 제공 기관이 아님을 명시

---

## 데이터 바인딩 맵

| JSON 데이터 파일 | 바인딩 페이지 |
|-----------------|--------------|
| 04_kr_data_navigation.json | 전 페이지 GNB + 푸터 |
| 04_kr_data_company.json > key_stats | 메인 (B) |
| 04_kr_data_company.json > history | 회사소개 (C) |
| 04_kr_data_company.json > organization | 회사소개 (D) |
| 04_kr_data_company.json > leadership | 회사소개 (E) |
| 04_kr_data_services.json > care_portal | 사업영역 (A) |
| 04_kr_data_services.json > expansion_roadmap | 사업영역 (B) |
| 04_kr_data_services.json > medical_devices | 사업영역 (C) |
| 04_kr_data_services.json > competitors + market_data | 사업영역 (D) |
| 04_kr_data_careers.json > why_hicarenet | 채용 (A) |
| 04_kr_data_careers.json > teams | 채용 (B) |
| 04_kr_data_careers.json > technical_challenges | 채용 (C) |
| 04_kr_data_careers.json > technical_challenges | 채용 (F) |
| 04_kr_data_careers.json > positions | 채용 (G) |
| 04_kr_data_careers.json > work_style | 채용 (D) |
| 04_kr_data_careers.json > benefits | 채용 (E) |
| 04_kr_i18n_ko.json | 전 페이지 텍스트 |
| 04_kr_footer_legal.md | 개인정보처리방침, 이용약관, 의료 면책 고지 |

---

## 필요 컴포넌트 목록

### 레이아웃
- `hero-banner`: 전체 너비 히어로 (배경 이미지 + 오버레이 + 텍스트 + CTA)
- `text-section`: 텍스트 블록 (제목 + 본문 문단)
- `split-section`: 2분할 (텍스트 + 이미지)
- `highlight-block`: 강조 블록 (배경색 + 텍스트)

### 데이터 표시
- `stats-grid`: 수치 그리드 (아이콘 + 카운터 + 레이블)
- `stats-bar`: 인라인 수치 강조
- `timeline`: 세로 타임라인
- `org-chart`: 조직도
- `profile-card`: 인물 프로필 카드

### 카드
- `card-grid`: N열 카드 그리드
- `feature-cards`: 기능 소개 카드
- `value-cards`: 가치 제안 카드
- `challenge-cards`: 기술 도전 카드

### 비즈니스
- `flow-diagram`: 서비스 플로우 다이어그램
- `roadmap-diagram`: 동심원 로드맵
- `comparison-table`: 비교 테이블
- `market-stats`: 시장 수치

### 채용
- `team-section`: 팀 소개 (탭 또는 아코디언)
- `job-listing`: 채용 공고 목록
- `benefits-grid`: 복리후생 그리드

### 공통
- `contact-form`: 문의 폼
- `map-embed`: 지도 임베드
- `contact-info`: 연락처 정보
- `news-list`: 뉴스 목록
- `info-box`: 정보 상자
- `info-list`: 정보 리스트

---

## 이미지 의존성 (1차 런칭 필수)

| ID | 설명 | 유형 | 사용 페이지 |
|----|------|------|------------|
| IMG-01 | Care Portal 대시보드 목업 | Type C (스톡/AI) | 메인 히어로 |
| IMG-03 | 아이콘 세트 (수치 블록) | Type B (디자인) | 메인 |
| IMG-04 | 조직도 인포그래픽 | Type B (디자인) | 회사소개 |
| IMG-06 | 연혁 타임라인 비주얼 | Type B (디자인) | 회사소개 |
| IMG-08 | 서비스 플로우 인포그래픽 | Type B (디자인) | 사업영역 |
| IMG-11 | 확장 로드맵 동심원 | Type B (디자인) | 사업영역 |
| IMG-22~24 | 팀/사무실 사진 | Type A (실제) | 채용 |

---

## 기술 참고사항

- 미국 사이트(hicare.net)와 디렉토리 분리: `/kr/` 경로 하위
- CSS: 미국 사이트 디자인 시스템 공유 가능 (tokens.css, components)
- JS: i18n 모듈은 `kr.*` 네임스페이스 로드 추가
- JSON fetch: `/data/kr/` 하위 또는 `_workspace/04_kr_data_*.json` 에서 빌드 시 복사
- 미국 사이트 `data-i18n` 패턴 동일 적용: `data-i18n="kr.main.hero.headline"`
