# v6 한국법인 사이트 i18n 전수 검사 보고서

**검사일**: 2026-04-02
**검사 대상**: v6/ 디렉토리 내 11개 HTML 파일
**검사 목적**: EN 버튼 클릭 시 모든 한국어 텍스트가 영어로 전환되는지 검증

---

## 요약

| 항목 | 수치 |
|------|------|
| 검사 대상 HTML 파일 | 11개 |
| data-i18n 속성 있는 요소 | 339개 |
| data-i18n 없는 하드코딩 한국어 텍스트 | **589개** |
| i18n 적용률 | **37%** (339 / 928) |
| ko.json 키 수 | 660개 (kr. prefix 포함) |
| en.json 키 수 | 660개 (1:1 동일) |
| en.json에 한국어 남은 키 | 4개 (모두 kr. prefix 의도적) |
| aria-label 한국어 (data-i18n-aria 없음) | 98개 |
| alt 한국어 (data-i18n-alt 없음) | 22개 |

### 결론

**EN 전환 시 약 63%의 텍스트가 한국어로 남는다.** 현재 i18n은 일부 제목/설명에만 적용되어 있고, GNB, 모바일 메뉴, Footer, 본문 상당수, aria-label, alt 텍스트에는 적용되지 않았다.

---

## Phase 1: JSON 키 매칭 검증

### ko.json vs en.json 키 비교

- ko.json 키: 660개
- en.json 키: 660개
- **ko에만 있는 키: 0개** (PASS)
- **en에만 있는 키: 0개** (PASS)
- **en.json에서 한국어 텍스트가 남은 값: 4개** (모두 의도적)
  - `kr.contact.direct.address`: 서울특별시 송파구 위례성대로22길 28, 5층
  - `kr.footer.address`: 서울특별시 송파구 위례성대로22길 28, 5층
  - `kr.common.skip_to_content`: 본문 바로가기
  - `kr.careers.hero.headline`: 한국에서 미국 의료 SaaS를

### HTML에서 사용된 data-i18n 키 중 JSON에 없는 것

**없음 (PASS)** - 모든 data-i18n 키가 ko.json, en.json 양쪽에 존재한다.

---

## Phase 2: 파일별 data-i18n 누락 상세

### 공통 패턴 (모든 11개 파일에 반복)

아래 항목은 11개 HTML 파일 모두에서 동일하게 data-i18n 없이 하드코딩되어 있다.

#### GNB (Header) - 파일당 ~10개

| 요소 | 텍스트 | 권장 키 |
|------|--------|---------|
| `<span>` (로고 옆) | 하이케어넷 | `common.company_name` |
| `<a>` (데스크톱 nav.contact) | 문의하기 | `nav.contact` (data-i18n 있으나 `<span>mail</span>` 뒤의 텍스트 노드) |
| `<a>` (모바일 메뉴) | 회사소개 | `nav.about` |
| `<a>` (모바일 메뉴) | 사업영역 | `nav.business` |
| `<a>` (모바일 메뉴) | 기술 | `nav.technology` |
| `<a>` (모바일 메뉴) | 글로벌 실적 | `nav.global` |
| `<a>` (모바일 메뉴) | 채용 | `nav.careers` |
| `<a>` (모바일 메뉴) | IR/뉴스 | `nav.ir` |
| `<a>` (모바일 문의) | 문의하기 | `nav.contact` |

**문제**: 데스크톱 메뉴에는 data-i18n이 있으나, 모바일 메뉴(`#mobile-menu`)에는 data-i18n이 없다. 따라서 모바일에서 EN 전환 시 메뉴가 한국어로 남는다.

#### Footer - 파일당 ~18개

| 요소 | 텍스트 | 권장 키 |
|------|--------|---------|
| `<span>` | 하이케어넷 주식회사 | `footer.company_name` (kr. variant) |
| `<p>` | 대표이사: 김홍진, 원종윤 | `footer.ceo` |
| `<p>` | 주소: 서울특별시 송파구... | `footer.address` (kr. variant) |
| `<p>` | 전화: 02-3400-7247 | `footer.phone` |
| `<p>` | 이메일: contact@hicare.co.kr | `footer.email` |
| `<h4>` | 바로가기 | `footer.quicklinks_title` (신규 키 필요) |
| `<a>` footer nav | 회사소개 | `nav.about` |
| `<a>` footer nav | 사업영역 | `nav.business` |
| `<a>` footer nav | 기술 | `nav.technology` |
| `<a>` footer nav | 글로벌 실적 | `nav.global` |
| `<a>` footer nav | 채용 | `nav.careers` |
| `<a>` footer nav | IR/뉴스 | `nav.ir` |
| `<h4>` | 법적 고지 | `footer.legal_title` (신규 키 필요) |
| `<a>` | 개인정보처리방침 | `footer.privacy` |
| `<a>` | 이용약관 | `footer.terms` |
| `<a>` | 미국 사이트 (hicare.net) | `footer.us_site` |
| `<p>` disclaimer | (data-i18n 있음) | PASS |

#### aria-label - 파일당 ~6개

| 요소 | aria-label 텍스트 | 권장 처리 |
|------|-------------------|-----------|
| `<nav>` | 주요 네비게이션 | data-i18n-aria 추가 |
| `<a>` 로고 | 하이케어넷 홈 | data-i18n-aria 추가 |
| `<button>` KO | 한국어로 전환 | data-i18n-aria 추가 |
| `<button>` 모바일 토글 | 메뉴 열기 | data-i18n-aria 추가 |
| `<button>` 맨 위로 | 맨 위로 이동 | data-i18n-aria 추가 |

#### alt 속성 - 파일당 2개

| 요소 | alt 텍스트 | 권장 처리 |
|------|-----------|-----------|
| `<img>` GNB 로고 | 하이케어넷 로고 | data-i18n-alt 추가 |
| `<img>` Footer 로고 | 하이케어넷 로고 | data-i18n-alt 추가 |

---

### v6/index.html (44개 미적용)

#### data-i18n 누락 (GNB/Footer 제외 고유 콘텐츠)

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 94 | `<p>` (About Us 부제) | About Us | (영어이므로 해당없음) |
| 108 | `<h1>` inner text | 미국 Medicare 원격환자관리 플랫폼 | `home.hero.headline` (data-i18n 있음, 하지만 innerHTML에 텍스트 노드가 남음) |
| 111-112 | `<p>` inner text | 미국 클리닉의 RPM/CCM... | `home.hero.subtext` (data-i18n 있음, innerHTML) |
| 116 | `<a>` CTA | 사업영역 알아보기 | `home.hero.cta_primary` (data-i18n 있지만 `<span>` icon 포함 - textContent 교체 시 icon 소멸 가능) |
| 120 | `<a>` CTA | 합류하기 | `home.hero.cta_secondary` (data-i18n 있음) |
| 123 | `<a>` CTA | IR 자료 보기 | `home.hero.cta_ir` (data-i18n 있음) |
| 169 | `<a>` | 사업영역 바로가기 | `home.entry.business.cta` (data-i18n **없음**) |
| 182 | `<a>` | 채용 페이지 바로가기 | `home.entry.careers.cta` (data-i18n **없음**) |
| 195 | `<a>` | IR 페이지 바로가기 | `home.entry.ir.cta` (data-i18n **없음**) |
| 211 | `<time>` | 2025년 | `home.news.year_2025` (신규 키 필요) |
| 212 | `<h3>` | 미국 40개 클리닉 계약 달성 | `home.news.item1` (신규 키 필요) |
| 215 | `<time>` | 2025년 | (위와 동일) |
| 216 | `<h3>` | AMC Health MoU 체결 | `home.news.item2` (신규 키 필요) |
| 219 | `<time>` | 2025년 | (위와 동일) |
| 220 | `<h3>` | NIPA 미주 ICT 비즈니스 파트너십 참가 | `home.news.item3` (신규 키 필요) |
| 225 | `<a>` | 전체 뉴스 보기 | `home.news.more` (data-i18n **없음**) |
| 98 | `<section>` aria-label | 히어로 | data-i18n-aria 필요 |
| 131 | `<section>` aria-label | 핵심 수치 | data-i18n-aria 필요 |
| 155 | `<section>` aria-label | 타겟별 진입점 | data-i18n-aria 필요 |
| 204 | `<section>` aria-label | 최근 소식 | data-i18n-aria 필요 |

**참고**: L108, L111, L116, L120, L123에는 data-i18n이 있으나, 요소 안에 `<span>` (아이콘)이 포함된 경우 `textContent` 교체 시 아이콘이 사라질 수 있다. `data-i18n-html` 사용 또는 아이콘을 별도 요소로 분리 필요.

---

### v6/about.html (64개 미적용)

#### GNB/Footer 제외 고유 콘텐츠 누락

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 94 | `<p>` 부제 | About Us | 영어 (EN 전환 시 문제없음) |
| 104 | `<p>` | 하이케어넷은... | `about.overview.p1` (data-i18n 있으나 inner text) |
| 139 | `<p>` 연도 | 2000년대 | `about.history.year_2000s` (신규 키) |
| 140 | `<p>` | 인성정보 헬스케어 사업부... | `about.history.2000s` (data-i18n **없음**) |
| 145 | `<p>` 연도 | VA 보훈부 사업 | `about.history.va_label` (신규 키) |
| 146 | `<p>` | 미국 퇴역군인 대상... | `about.history.va` (data-i18n **없음**) |
| 151 | `<p>` | 이탈리아 수출 | `about.history.italy_label` (신규 키) |
| 152 | `<p>` | CEGLIE MESSAPICA... | `about.history.italy` (data-i18n **없음**) |
| 157 | `<p>` | 프랑스 수출 | `about.history.france_label` (신규 키) |
| 158 | `<p>` | 약국 체인 내... | `about.history.france` (data-i18n **없음**) |
| 163 | `<p>` | 2020년 | `about.history.year_2020` (신규 키) |
| 164 | `<p>` | 인성정보 헬스케어 사업부 물적분할... | `about.history.2020` (data-i18n **없음**) |
| 169 | `<p>` | 2021년 | `about.history.year_2021` (신규 키) |
| 170 | `<p>` | 미국 현지 법인 설립... | `about.history.2021` (data-i18n **없음**) |
| 175 | `<p>` | 2023년 4월 | `about.history.year_2023` (신규 키) |
| 176 | `<p>` | 미국 RPM/CCM... | `about.history.2023` (data-i18n **없음**) |
| 181 | `<p>` | 2024년 | `about.history.year_2024` (신규 키) |
| 182 | `<p>` | 37개 병원... | `about.history.2024` (data-i18n **없음**) |
| 187 | `<p>` | 2025년 | `about.history.year_2025` (신규 키) |
| 188 | `<p>` | 40개 병원... | `about.history.2025` (data-i18n **없음**) |
| 198 | `<p>` | 총 22명, R&D 인력 비중 45% | `about.organization.subtitle` (신규 키) |
| 203 | `<span>` | R&D 인력 비중 | `about.organization.rd_label` (신규 키) |
| 219 | `<h3>` | R&D Group | (영문, 그대로 OK) |
| 220 | `<p>` | 10명 | `about.organization.rnd.count` (신규 키) |
| 223 | `<p>` | Care Portal과 환자용 앱의... | `about.organization.rnd.description` (data-i18n **없음**) |
| 232 | `<h3>` | BI Group | (영문 OK) |
| 233 | `<p>` | 7명 | `about.organization.bi.count` (신규 키) |
| 236 | `<p>` | 미국 시장 영업... | `about.organization.bi.description` (data-i18n **없음**) |
| 245 | `<h3>` | 경영지원실 | `about.organization.mgmt.name` (data-i18n **없음**) |
| 246 | `<p>` | 4명 | `about.organization.mgmt.count` (신규 키) |
| 249 | `<p>` | 조직 운영 전반을 지원합니다. | `about.organization.mgmt.description` (data-i18n **없음**) |
| 258 | `<h3>` | 해외지원팀 | `about.organization.overseas.name` (data-i18n **없음**) |
| 262 | `<p>` | 미국 현지 법인... | `about.organization.overseas.description` (data-i18n **없음**) |
| 278 | `<p>` | 프로필 사진 준비 중 | `about.leadership.photo_placeholder` (신규 키) |
| 282 | `<h3>` | 김홍진 | `about.leadership.kim.name` (data-i18n **없음**) |
| 283 | `<p>` | 각자대표 | `about.leadership.kim.title` (data-i18n **없음**) |
| 284 | `<p>` | [PLACEHOLDER: 약력 상세 필요] | `about.leadership.kim.bio` (data-i18n **없음**) |
| 293 | `<p>` | 프로필 사진 준비 중 | (동일) |
| 297 | `<h3>` | 원종윤 | `about.leadership.won.name` (data-i18n **없음**) |
| 298 | `<p>` | 각자대표 | `about.leadership.won.title` (data-i18n **없음**) |
| 299 | `<p>` | [PLACEHOLDER: 약력 상세 필요] | `about.leadership.won.bio` (data-i18n **없음**) |

---

### v6/business.html (101개 미적용)

이 페이지는 가장 심각하다. 14개만 data-i18n이 적용되어 있고, 본문 대부분(~80개)이 하드코딩이다.

#### GNB/Footer 제외 고유 콘텐츠 누락 (주요 항목)

| 줄번호 | 요소 | 텍스트 (요약) | 권장 키 |
|--------|------|--------------|---------|
| 93 | `<h1>` | 사업영역 | `business.title` (data-i18n **없음**) |
| 112-114 | `<h3>` | Medicare와 원격환자관리 | `business.careportal.medicare.title` (data-i18n 있으나 아이콘과 혼재) |
| 117-119 | `<p>` (3개) | Medicare 배경 설명 전문 | `business.medicare.p1`, `.p2`, `.p3` (data-i18n **없음**) |
| 127 | `<p>` | RPM/CCM 수가를 청구하려면... | `business.careportal.problem.description` (data-i18n **없음**) |
| 136 | `<h4>` | 환자 관리 워크플로우 | `business.careportal.problem1.title` (data-i18n **없음**) |
| 137 | `<p>` | 환자 등록, 생체 데이터... | `business.careportal.problem1.desc` (data-i18n **없음**) |
| 143 | `<h4>` | 문서화 자동화 | `business.careportal.problem2.title` (data-i18n **없음**) |
| 144 | `<p>` | RPM/CCM 수가 청구에... | `business.careportal.problem2.desc` (data-i18n **없음**) |
| 150 | `<h4>` | 수가 청구 연계 | `business.careportal.problem3.title` (data-i18n **없음**) |
| 151 | `<p>` | RPM CPT 코드... | `business.careportal.problem3.desc` (data-i18n **없음**) |
| 158 | `<h3>` | 서비스 플로우 | `business.careportal.flow.title` (신규 키) |
| 165-211 | 서비스 플로우 다이어그램 | 하이케어넷, Care Portal 제공, 클리닉, 환자, CMS 등 | 각각 `business.careportal.flow.*` 키 필요 |
| 215 | `<p>` | CMS 설명 | `business.careportal.flow.cms_note` (data-i18n **없음**) |
| 221 | `<h3>` | Care Portal 주요 기능 | `business.careportal.features.title` (신규 키) |
| 228-265 | 기능 목록 5개 | 의료진용 대시보드 외 4개 | `business.care_portal.feat1`~`feat5` 키 있지만 data-i18n 미적용 |
| 273 | `<h3>` | 수익 모델 | `business.care_portal.revenue.title` (data-i18n **없음**) |
| 276-278 | `<p>` | 수익 모델 설명 | `business.care_portal.revenue.description` (data-i18n **없음**) |
| 284-304 | 실적 통계 | 클리닉 계약, 환자 등록, 매출 등 | 모두 data-i18n **없음** |
| 317-318 | 확장 로드맵 | 제목 + 설명 | data-i18n **없음** |
| 347-371 | APCM/AWV/HRA/VBC 설명 | 4개 확장 서비스 | 모두 data-i18n **없음** |
| 382-425 | 의료 도메인 기술 축적 | 전체 섹션 | 모두 data-i18n **없음** |
| 435-473 | 경쟁환경/차별점/시장규모 | 전체 섹션 | 모두 data-i18n **없음** |

---

### v6/careers.html (79개 미적용)

careers.html은 `kr.` prefix 키를 사용하여 일부 콘텐츠에 data-i18n이 적용되어 있으나, 여전히 상당수 누락.

#### GNB/Footer 제외 고유 콘텐츠 누락 (주요 항목)

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 109 | `<p>` 배지 | 채용 | `nav.careers` |
| 120 | `<a>` CTA | 채용 공고 보기 | `kr.careers.hero.cta` (신규 키) |
| 158 | `<span>` | 클리닉 | `kr.careers.stat.clinics_label` (신규 키) |
| 162 | `<span>` | 환자 | `kr.careers.stat.patients_label` (신규 키) |
| 166 | `<span>` | R&D 인원 | `kr.careers.stat.rnd_label` (신규 키) |
| 204 | `<span>` | 해외 매출 비중 (2024) | `kr.careers.overseas_label` (신규 키) |
| 225 | `<span>` 탭 | 10명 | `kr.careers.tab.rnd_count` (신규 키) |
| 229 | `<span>` 탭 | 7명 | `kr.careers.tab.bi_count` (신규 키) |
| 232 | `<button>` 탭 | 경영지원실 | `kr.careers.tab.mgmt` (신규 키) |
| 233 | `<span>` 탭 | 4명 | `kr.careers.tab.mgmt_count` (신규 키) |
| 236 | `<button>` 탭 | 해외지원팀 | `kr.careers.tab.overseas` (신규 키) |
| 251-367 | 팀 조직도 상세 | 개발총괄, 백엔드, 프론트엔드 등 | 각각 신규 키 필요 |
| 444-445 | `<p>` | 일하는 방식 정보가 준비 중입니다 / 면접에서... | `kr.careers.workstyle.preparing` (신규 키) |
| 458-459 | `<p>` | 복리후생 정보가 준비 중입니다 | `kr.careers.benefits.preparing` (신규 키) |
| 475-476 | `<p>` | 현재 공개 채용 공고가 준비 중입니다 | `kr.careers.positions.preparing` (신규 키) |
| 485 | `<h3>` | 상시 지원 | `kr.careers.apply.title` (신규 키) |
| 492-530 | 폼 필드 | 이름, 이메일, 관심 직군, 자기소개 등 | 각각 신규 키 필요 |
| 537-538 | 성공 메시지 | 지원이 접수되었습니다 | `kr.careers.apply.success` (신규 키) |
| 546 | `<a>` | 원티드에서 보기 (준비 중) | `kr.careers.external.wanted` (신규 키) |
| 550 | `<a>` | 로켓펀치에서 보기 (준비 중) | `kr.careers.external.rocketpunch` (신규 키) |

---

### v6/contact.html (32개 미적용)

contact.html은 폼 필드에 data-i18n이 잘 적용되어 있으나, 일부 추가 콘텐츠 누락.

#### GNB/Footer 제외 고유 콘텐츠 누락

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 171 | `<label>` | 개인정보 수집/이용에 동의합니다. * | `contact.form.privacy_consent` (data-i18n **없음**) |
| 177 | `<button>` | 문의 보내기 | `contact.form.submit` (data-i18n **없음**) |
| 184 | `<p>` | 문의가 접수되었습니다. | `contact.form.success` (data-i18n **없음**) |
| 188 | `<a>` | 홈으로 돌아가기 | `contact.form.back_home` (신규 키) |
| 199 | `<h2>` | 오시는 길 | `contact.map.title` (신규 키) |
| 207 | `<p>` | 지도 로딩 중 | `contact.map.loading` (신규 키) |
| 232 | `<p>` | 전화 | `contact.direct.phone_label` (신규 키) |
| 241 | `<p>` | 이메일 | `contact.direct.email_label` (신규 키) |
| 250 | `<p>` | 주소 | `contact.direct.address_label` (신규 키) |

---

### v6/privacy.html (66개 미적용)

개인정보처리방침은 법적 문서이며, 거의 전체가 하드코딩이다. 9개 data-i18n만 적용 (GNB/Footer 헤더 일부).

#### 본문 전체가 data-i18n 미적용

| 줄 범위 | 내용 |
|---------|------|
| 93 | 페이지 제목: 개인정보처리방침 |
| 103-210 | 제1조~제9조 전문 (약 40개 텍스트 요소) |

**권장**: `data-i18n-html`을 사용하여 각 조항 블록 단위로 번역 적용. 또는 `privacy.article1.title`, `privacy.article1.body` 등 구조화된 키 생성.

---

### v6/terms.html (58개 미적용)

이용약관 역시 법적 문서로, 거의 전체가 하드코딩이다.

#### 본문 전체가 data-i18n 미적용

| 줄 범위 | 내용 |
|---------|------|
| 93 | 페이지 제목: 이용약관 |
| 105-188 | 제1조~제9조 전문 (약 30개 텍스트 요소) |

**권장**: privacy.html과 동일한 방식으로 처리.

---

### v6/technology.html (33개 미적용)

technology.html은 data-i18n 적용률이 가장 높은 편(46개 적용)이나, 일부 콘텐츠와 전체 GNB/Footer 누락.

#### GNB/Footer 제외 고유 콘텐츠 누락

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 107 | `<h1>` inner text | Care Portal을 만드는 기술 | (data-i18n 있으나 확인 필요) |
| 110 | `<p>` inner text | 클라우드 SaaS 플랫폼... | (data-i18n 있으나 확인 필요) |
| 122 | `<p>` | Care Portal은 클라우드 기반... | (data-i18n 있으나 확인 필요) |
| 232 | `<span>` 배지 | FDA 추진 중 | `tech.fda_badge` (신규 키) |
| 244 | `<span>` 배지 | 준비 단계 | `tech.preparing_badge` (신규 키) |
| 307 | `<p>` | 하이케어넷의 기술은... | (data-i18n 있으나 확인 필요) |
| 326 | `<span>` alt placeholder | 의료기기 연동 기술 이미지 | `tech.device_image_alt` (신규 키) |

---

### v6/global.html (37개 미적용)

global.html은 data-i18n이 45개 적용되어 있으나, 여전히 일부 누락.

#### GNB/Footer 제외 고유 콘텐츠 누락

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 107 | `<h1>` inner | 글로벌 시장에서 검증된 기술 | (data-i18n 있으나 확인) |
| 110 | `<p>` inner | 미국, 이탈리아, 프랑스, 태국... | (data-i18n 있으나 확인) |
| 128 | `<p>` placeholder | 세계 지도 인포그래픽 | `global.map.placeholder` (신규 키) |
| 192 | `<span>` | 월 0+ | (카운터 접미어 번역 필요) |
| 200 | `<p>` | 2023년 4월 미국... 서비스 시작 | (data-i18n 있으나 확인) |
| 225 | `<p>` | 2025년 상반기 매출이... 고성장세 | `global.portal.revenue_commentary` (신규 키) |
| 259 | `<h4>` | VA 보훈부 | (data-i18n 있으나 확인) |
| 261 | `<p>` | 10,000대+ | `global.export.va.count` (신규 키) |
| 272 | `<p>` | 1,000대 | `global.export.italy.count` (신규 키) |
| 281 | `<h4>` | 약국 체인 | (data-i18n 있으나 확인) |
| 283 | `<p>` | 3,000대 | `global.export.france.count` (신규 키) |

---

### v6/ir.html (47개 미적용)

IR 페이지는 data-i18n이 67개 적용되어 가장 높은 적용률이나, 차트 레이블/수치 관련 누락이 있다.

#### GNB/Footer 제외 고유 콘텐츠 누락

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 106 | `<h1>` inner | IR / 뉴스룸 | (data-i18n 있으나 확인) |
| 120 | `<span>` 탭 | 뉴스룸 | (data-i18n 있으나 확인 - 탭 내부 텍스트) |
| 187 | `<p>` | 993 백만 원 | `ir.revenue.2022.amount` (신규 키) |
| 194 | `<p>` | 해외 매출 비중: 95.93% | `ir.revenue.2022.detail` (신규 키) |
| 201 | `<p>` | 21 백만 원 | `ir.revenue.2023.amount` (신규 키) |
| 208-209 | `<p>` | 해외 매출 비중: 3.05% / 사업 구조 전환기 | `ir.revenue.2023.detail` (신규 키) |
| 216 | `<p>` | 169 백만 원 | `ir.revenue.2024.amount` (신규 키) |
| 223-224 | `<p>` | 해외 매출 비중: 96.68% / 해외 매출: $998,404 | `ir.revenue.2024.detail` (신규 키) |
| 230-231 | `<p>` | 2025 (상반기) / 해외 매출 $816,668 | `ir.revenue.2025h1.detail` (신규 키) |
| 238 | `<p>` | 6개월 만에 전년 대비 82% 달성 | `ir.revenue.2025h1.commentary` (신규 키) |
| 244-246 | 범례 | 해외 매출, 국내 매출, 2025년 상반기 | 각 신규 키 필요 |
| 278 | `<span>` | 2030년 전망 | `ir.market.rpm.projection_label` (신규 키) |
| 294 | `<span>` | 2024년 규모 | `ir.market.ccm.current_label` (신규 키) |
| 306-307 | `<p>` | 7,100만 명 / 2025년 추산 | `ir.market.medicare.count` (신규 키) |
| 348 | `<a>` | IR Deck PDF 다운로드 (준비 중) | `ir.materials.download` (신규 키) |

---

### v6/faq.html (28개 미적용)

faq.html은 FAQ 본문에 data-i18n이 잘 적용되어 있으나, GNB/Footer와 일부 요소 누락.

#### GNB/Footer 제외 고유 콘텐츠 누락

| 줄번호 | 요소 | 텍스트 | 권장 키 |
|--------|------|--------|---------|
| 106 | `<h1>` inner | 자주 묻는 질문 | (data-i18n 있으나 확인) |
| 250 | `<a>` CTA | 문의하기 | `faq.cta.button` (신규 키) |

---

## Phase 3: 구조적 문제 및 권장 사항

### 문제 1: 모바일 메뉴 전체 누락 (심각도: HIGH)

모든 11개 파일에서 `#mobile-menu` 내부 링크에 data-i18n이 없다. 데스크톱 메뉴에는 적용되어 있으므로, 데스크톱에서 EN 전환은 되지만 모바일에서는 한국어가 그대로 남는다.

**해결**: 모바일 메뉴 `<a>` 요소에도 동일한 `data-i18n` 속성 추가.

### 문제 2: Footer 전체 누락 (심각도: HIGH)

모든 11개 파일의 Footer 영역(회사 정보, 네비게이션, 법적 고지)에 data-i18n이 없다. disclaimer만 적용.

**해결**: Footer의 모든 텍스트 요소에 data-i18n 추가. 기존 `footer.*` 키 활용.

### 문제 3: textContent 교체 시 자식 요소 소멸 (심각도: MEDIUM)

일부 요소(예: CTA 버튼)에 `<span class="material-symbols-outlined">` 아이콘이 포함되어 있는데, `textContent = value`로 번역하면 아이콘이 사라진다.

**해결**:
- 방법 A: 아이콘을 별도 형제 요소로 분리하고, 텍스트만 `<span data-i18n="...">` 으로 감싸기
- 방법 B: `data-i18n-html` 사용하여 innerHTML로 교체 (아이콘 포함)
- 방법 C: JS에서 자식 텍스트 노드만 교체하도록 applyTranslations() 수정

### 문제 4: aria-label 번역 미지원 (심각도: MEDIUM)

98개의 aria-label이 한국어로 하드코딩되어 있으나, `data-i18n-aria` 처리 로직이 main.js에 없다.

**해결**: 
1. `applyTranslations()` 함수에 `data-i18n-aria` 지원 추가
2. HTML에 `data-i18n-aria="키"` 속성 추가
3. ko.json/en.json에 해당 키 추가

### 문제 5: alt 텍스트 번역 미지원 (심각도: LOW)

22개의 img alt가 "하이케어넷 로고"로 하드코딩.

**해결**: `data-i18n-alt` 지원 추가 및 적용.

### 문제 6: meta description / title 번역 미지원 (심각도: LOW)

`<title>`과 `<meta name="description">`은 data-i18n으로 처리하기 어렵다. 현재 모두 한국어.

**해결**: JS에서 `document.title`과 `document.querySelector('meta[name=description]').content`를 동적으로 교체.

### 문제 7: privacy.html / terms.html 법적 문서 (심각도: MEDIUM)

법적 문서 전문이 한국어로 하드코딩. 영어 법적 문서는 별도 작성 필요.

**해결**: `data-i18n-html` 사용하여 조항별 블록 번역. en.json에 영어 법적 문구 추가.

---

## 신규 키 필요 목록 (JSON에 추가해야 할 키)

현재 ko.json/en.json에 존재하지 않는 키 중, 새로 추가가 필요한 것들:

| 카테고리 | 키 | 한국어 값 |
|----------|---|-----------|
| Footer | `footer.quicklinks_title` | 바로가기 |
| Footer | `footer.legal_title` | 법적 고지 |
| Index | `home.news.year_2025` | 2025년 |
| Index | `home.news.item1` | 미국 40개 클리닉 계약 달성 |
| Index | `home.news.item2` | AMC Health MoU 체결 |
| Index | `home.news.item3` | NIPA 미주 ICT 비즈니스 파트너십 참가 |
| About | `about.history.year_*` | 2000년대, 2020년, 2021년 등 |
| About | `about.history.*_label` | VA 보훈부 사업, 이탈리아 수출 등 |
| About | `about.organization.subtitle` | 총 22명, R&D 인력 비중 45% |
| About | `about.leadership.photo_placeholder` | 프로필 사진 준비 중 |
| Business | `business.careportal.flow.title` | 서비스 플로우 |
| Business | `business.careportal.flow.step*` | 하이케어넷, 클리닉, 환자, CMS |
| Business | `business.careportal.features.title` | Care Portal 주요 기능 |
| Careers | `kr.careers.hero.cta` | 채용 공고 보기 |
| Careers | `kr.careers.stat.*_label` | 클리닉, 환자, R&D 인원 |
| Careers | `kr.careers.tab.*` | 경영지원실, 해외지원팀, 인원수 |
| Careers | `kr.careers.roles.*` | 개발총괄, 백엔드, 프론트엔드 등 |
| Careers | `kr.careers.apply.*` | 폼 필드, 성공 메시지 등 |
| Contact | `contact.map.title` | 오시는 길 |
| Contact | `contact.direct.*_label` | 전화, 이메일, 주소 |
| IR | `ir.revenue.*.amount` | 993 백만 원 등 |
| IR | `ir.revenue.*.detail` | 해외 매출 비중 등 |
| Privacy | `privacy.article*.title` | 제1조~제9조 제목 |
| Privacy | `privacy.article*.body` | 각 조항 본문 |
| Terms | `terms.article*.title` | 제1조~제9조 제목 |
| Terms | `terms.article*.body` | 각 조항 본문 |
| 접근성 | `a11y.nav.main` | 주요 네비게이션 |
| 접근성 | `a11y.nav.home` | 하이케어넷 홈 |
| 접근성 | `a11y.btn.menu_open` | 메뉴 열기 |
| 접근성 | `a11y.btn.back_to_top` | 맨 위로 이동 |
| 접근성 | `a11y.logo_alt` | 하이케어넷 로고 |

---

## 작업 우선순위 권장

### P0 (즉시 수정 - EN 전환 시 사용자 가시 한국어)

1. **모바일 메뉴** 모든 `<a>` 에 data-i18n 추가 (11개 파일 x 7-8개 = ~88개)
2. **Footer** 전체 data-i18n 추가 (11개 파일 x ~18개 = ~198개)
3. **business.html 본문** 전체 data-i18n 추가 (~80개)
4. **about.html 연혁/조직/경영진** data-i18n 추가 (~40개)
5. **index.html 뉴스/CTA 링크** data-i18n 추가 (~10개)

### P1 (다음 단계)

6. **careers.html** 폼, 탭, 조직도 상세 data-i18n 추가 (~50개)
7. **ir.html** 차트 레이블/수치 data-i18n 추가 (~20개)
8. **contact.html** 추가 요소 data-i18n (~10개)
9. **privacy.html / terms.html** 법적 문서 번역 (~100개)

### P2 (품질 개선)

10. main.js에 `data-i18n-aria`, `data-i18n-alt` 지원 로직 추가
11. HTML 전체에 aria/alt data-i18n 속성 추가 (~120개)
12. CTA 버튼의 아이콘 + 텍스트 혼재 문제 해결
13. `<title>` / `<meta description>` 동적 번역 지원

---

## 파일별 통계 요약

| 파일 | data-i18n 있음 | 하드코딩 한국어 | 적용률 |
|------|----------------|----------------|--------|
| index.html | 27 | 44 | 38% |
| about.html | 19 | 64 | 23% |
| business.html | 14 | 101 | **12%** |
| careers.html | 41 | 79 | 34% |
| contact.html | 29 | 32 | 48% |
| privacy.html | 9 | 66 | **12%** |
| terms.html | 9 | 58 | **13%** |
| technology.html | 46 | 33 | 58% |
| global.html | 45 | 37 | 55% |
| ir.html | 67 | 47 | 59% |
| faq.html | 33 | 28 | 54% |
| **전체** | **339** | **589** | **37%** |

---

*이 보고서는 v6/ 디렉토리의 11개 HTML 파일, ko.json, en.json, main.js를 대상으로 한 정적 분석 결과입니다.*
