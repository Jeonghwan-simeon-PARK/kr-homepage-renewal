---
name: kr-build-orchestrator
description: "한국법인 홈페이지(hicare.co.kr)를 v6/ 디렉토리에 HTML/CSS/JS로 빌드하는 오케스트레이터. 한국 콘텐츠(_workspace/04_kr_*)를 입력으로 받아 6개 빌드 에이전트가 실제 웹 페이지를 구현한다. '한국 사이트 빌드', '한국 홈페이지 빌드', 'v6 빌드', 'KR build', '한국 사이트 구현' 요청 시 반드시 이 스킬을 사용할 것. 콘텐츠 생성에는 /kr-content-orchestrator를, 미국 사이트 빌드에는 /hicarenet-orchestrator를 사용한다."
user_invocable: true
---

# /kr-build-orchestrator - 한국법인 홈페이지 빌드

## 실행 모드: 에이전트 팀 (Pipeline)

한국 콘텐츠(`_workspace/04_kr_*`)를 `v6/` 디렉토리에 HTML/CSS/JS로 빌드한다.

## 위치 (전체 파이프라인)

```
/kr-content-orchestrator  →  /kr-build-orchestrator  →  v6/
   (콘텐츠 생성)                (HTML 빌드)
  _workspace/04_kr_*          v6/index.html
                              v6/about.html
                              v6/business.html
                              ...
```

## 사용법

```
/kr-build-orchestrator                      # 전체 빌드
/kr-build-orchestrator [page]               # 특정 페이지만 (예: careers, main)
/kr-build-orchestrator phase1               # 1차 런칭 필수 페이지만
/kr-build-orchestrator qa                   # QA만 실행
```

## 빌드 대상: v6/ 디렉토리

### 한국 사이트 페이지 구조

```
v6/
├── index.html                 # 메인 페이지
├── about.html                 # 회사소개
├── business.html              # 사업영역
├── technology.html            # 기술
├── global.html                # 글로벌 실적
├── careers.html               # 채용
├── ir.html                    # IR/뉴스
├── faq.html                   # FAQ
├── contact.html               # 문의
├── privacy.html               # 개인정보처리방침
├── terms.html                 # 이용약관
├── css/
│   ├── design-system/
│   │   ├── reset.css
│   │   ├── tokens.css         # 디자인 토큰 (기존 디자인 시스템 기반)
│   │   └── utilities.css
│   ├── components/
│   │   ├── nav.css            # 한국 GNB
│   │   ├── hero.css
│   │   ├── cards.css
│   │   ├── timeline.css       # 연혁
│   │   ├── org-chart.css      # 조직도
│   │   ├── stats.css          # 수치 블록
│   │   ├── form.css           # 문의 폼
│   │   ├── tabs.css           # IR/뉴스 탭
│   │   ├── buttons.css
│   │   └── footer.css
│   ├── pages/
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── business.css
│   │   ├── technology.css
│   │   ├── global.css
│   │   ├── careers.css
│   │   ├── ir.css
│   │   └── contact.css
│   ├── animations/
│   │   └── scroll-reveal.css
│   └── main.css               # Import aggregator
├── js/
│   ├── main.js                # Entry point
│   ├── components/
│   │   ├── navigation.js      # 한국 GNB (모바일 햄버거 포함)
│   │   ├── timeline.js        # 연혁 인터랙션
│   │   ├── tabs.js            # IR/뉴스 탭 전환
│   │   ├── form-handler.js    # 문의 폼
│   │   └── counter.js         # 수치 카운터 애니메이션
│   └── animations/
│       └── scroll-observer.js # IntersectionObserver
├── data/
│   ├── navigation.json        # 한국 GNB 구조
│   ├── company.json           # 회사 정보
│   ├── services.json          # 사업영역 데이터
│   ├── careers.json           # 채용 데이터
│   ├── global.json            # 글로벌 실적
│   ├── news.json              # 뉴스룸
│   └── i18n/
│       └── ko.json            # 한국어 (주 언어, 단일 언어 사이트)
└── assets/
    ├── images/                # 이미지 (플레이스홀더 포함)
    ├── icons/                 # 아이콘
    └── certs/                 # 인증서 (기존 assets/certs/ 심볼릭 또는 복사)
```

### GNB (한국 사이트)

```
회사소개 | 사업영역 | 기술 | 글로벌 실적 | 채용 | IR/뉴스
```

미국 사이트 GNB (참고, 다름):
```
Solutions | About | Resources | Compliance | Contact
```

## 전제 조건

한국 콘텐츠가 존재해야 한다:
- `_workspace/04_kr_main.md` (최소 1차 페이지들)
- `_workspace/04_kr_data_navigation.json`
- `_workspace/04_kr_page_architecture.md`

없으면 `/kr-content-orchestrator`를 먼저 실행하라고 안내한다.

## 디자인 시스템

기존 디자인 시스템(design-system-spec.md)을 **기반으로** 하되, 한국 사이트에 맞게 조정한다:
- **색상**: 동일 (Healthcare Blue #1A8FD8, Green #2EBE74)
- **타이포그래피 변경**: Noto Sans KR이 주 서체 (한국어 사이트이므로). Inter는 보조(영문 병기용)
- **레이아웃**: 동일 8px 그리드, 동일 브레이크포인트
- **컴포넌트**: 한국 사이트 전용 컴포넌트 추가 (타임라인, 조직도, IR 탭 등)

상세 조정 사항은 `references/kr-design-adjustments.md` 참조.

## Phase 1: Foundation (병렬)

```
┌─ visual-designer: 한국 사이트 디자인 시스템 조정, 컴포넌트 목업
├─ content-strategist: _workspace/04_kr_* 콘텐츠 검토, 최종 카피 확정
└─ ux-animator: 애니메이션 시스템 (기존 v5와 동일, 재사용)
```

### visual-designer 지시

```
한국법인 홈페이지(v6/) 디자인을 준비한다.
기존 디자인 시스템(references/design-system-spec.md)을 기반으로 하되:
- 주 서체를 Noto Sans KR로 변경 (한국어 사이트)
- 한국 사이트 전용 컴포넌트: 연혁 타임라인, 조직도, 수치 블록, IR 탭
- 페이지 구조: references/kr-design-adjustments.md 참조
- 콘텐츠: _workspace/04_kr_page_architecture.md 참조
```

### content-strategist 지시

```
한국법인 콘텐츠(_workspace/04_kr_*.md)를 검토한다.
미국 서비스 판매 톤이 아닌 한국 기업 커뮤니케이션 톤인지 확인.
금지 표현 위반이 없는지 최종 확인.
[PLACEHOLDER] 항목을 목록으로 정리.
```

## Phase 2: Data Layer (Phase 1 content 의존)

```
└─ data-architect: _workspace/04_kr_data_*.json → v6/data/ 구조화
    ← 콘텐츠에서 최종 확정된 텍스트
```

### data-architect 지시

```
한국 사이트 데이터를 v6/data/에 구조화한다.
입력: _workspace/04_kr_data_*.json, _workspace/04_kr_i18n_ko.json
출력: v6/data/ 하위에 JSON 파일들
기존 data/ 구조(v5 참고)와 일관된 스키마를 따르되, 한국 GNB 구조에 맞춘다.
i18n은 ko.json 단일 파일 (한국어 전용 사이트).
```

## Phase 3: Implementation (Phase 1 design + Phase 2 data 의존)

```
└─ frontend-builder: 전체 HTML/CSS/JS 구현
    ← visual-designer 디자인 스펙
    ← ux-animator 애니메이션 모듈
    ← data-architect JSON 스키마
```

### frontend-builder 지시

```
한국법인 홈페이지를 v6/에 구현한다.
기술 스택: Tailwind CSS via CDN + Noto Sans KR + Material Symbols (v5 패턴 따름)
페이지: _workspace/04_kr_page_architecture.md 기준
콘텐츠: _workspace/04_kr_*.md 카피 텍스트
데이터: v6/data/*.json
GNB: 회사소개 | 사업영역 | 기술 | 글로벌 실적 | 채용 | IR/뉴스
모바일: 햄버거 메뉴, 모바일 퍼스트
접근성: WCAG 2.1 AA, skip link, aria-label
HTML 속성: data-animate, data-i18n (향후 다국어 확장 대비)
[PLACEHOLDER] 항목은 시각적으로 구분되는 플레이스홀더 UI 컴포넌트로 구현.
[IMG-XX] 이미지는 적절한 크기의 플레이스홀더 박스로 구현 (alt 텍스트에 설명 포함).
```

## Phase 4: Validation (Phase 3 의존)

```
└─ qa-validator: 전체 QA
    → 이슈를 담당 에이전트에게 리포트
```

### qa-validator 지시

```
v6/ 한국 사이트를 검증한다.
1. 접근성: skip link, aria-label, alt text, 키보드 네비게이션
2. 반응형: 768/1024/1280/1440 브레이크포인트 확인
3. 링크 무결성: 모든 내부 링크 유효성
4. 데이터 바인딩: data-i18n 키와 ko.json 매칭
5. 금지 표현: HTML 내 em dash, 과장 어휘 검색
6. GNB: 모든 페이지에서 동일한 네비게이션
7. 이미지 플레이스홀더: [IMG-XX] 표기가 있는 곳에 플레이스홀더 존재 확인
8. 성능: CSS/JS 최적화 상태 확인
```

## Phase 5: Fix & Polish (Phase 4 이슈 시)

```
┌─ 담당 에이전트별 수정
└─ qa-validator: 재검증
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 콘텐츠 미존재 | `/kr-content-orchestrator` 먼저 실행 안내 |
| 에이전트 실패 | 1회 재시도, 재실패 시 해당 페이지 건너뛰고 보고 |
| 디자인 시스템 충돌 | v6/ 전용 tokens.css 생성, 기존과 독립 |
| [PLACEHOLDER] 항목 | 시각적 플레이스홀더 UI로 구현, QA에서 목록 정리 |
| [IMG-XX] 이미지 부재 | 회색 박스 + alt 텍스트로 크기/위치 확보 |

## 테스트 시나리오

### 정상 흐름
1. `/kr-build-orchestrator` 실행
2. 전제 조건 확인: _workspace/04_kr_* 존재 OK
3. Phase 1: 디자인 조정 + 콘텐츠 확인 + 애니메이션 준비
4. Phase 2: v6/data/ JSON 파일 생성
5. Phase 3: v6/ 전체 HTML/CSS/JS 구현
6. Phase 4: QA → 접근성 PASS, 반응형 PASS, 링크 PASS
7. 결과: v6/ 디렉토리에 11개 HTML + CSS + JS + data

### 에러 흐름
1. Phase 4에서 qa-validator가 careers.html에서 em dash 발견
2. qa-validator → frontend-builder: "v6/careers.html L47 em dash(—) → 쉼표로 교체"
3. frontend-builder 수정 → 재검증 → PASS

## 최종 보고

```markdown
## 한국법인 홈페이지 빌드 완료

### 빌드 결과: v6/
| 페이지 | 파일 | 상태 |
|--------|------|------|
| 메인 | v6/index.html | ✅ |
| 회사소개 | v6/about.html | ✅ |
| 사업영역 | v6/business.html | ✅ |
| 기술 | v6/technology.html | ✅ |
| 글로벌 실적 | v6/global.html | ✅ |
| 채용 | v6/careers.html | ✅ |
| IR/뉴스 | v6/ir.html | ✅ |
| FAQ | v6/faq.html | ✅ |
| 문의 | v6/contact.html | ✅ |
| 개인정보처리방침 | v6/privacy.html | ✅ |
| 이용약관 | v6/terms.html | ✅ |

### QA 결과
| 영역 | 결과 |
|------|------|
| 접근성 | PASS |
| 반응형 | PASS |
| 링크 | PASS |
| 금지 표현 | PASS |
| 데이터 바인딩 | PASS |

### PLACEHOLDER 항목 (실제 데이터 필요)
- [ ] 경영진 프로필 사진 [IMG-05]
- [ ] 팀/사무실 사진 [IMG-22~24]
- [ ] Care Portal 스크린샷 [IMG-09]
- [ ] 복리후생 상세
- [ ] 일하는 방식 상세
- [ ] 현재 채용 포지션 JD

### 로컬 확인 방법
브라우저에서 열기: v6/index.html
```
