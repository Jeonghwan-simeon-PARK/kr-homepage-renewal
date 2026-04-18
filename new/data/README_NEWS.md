# 뉴스 & 팝업 운영 가이드

뉴스 상세 페이지와 사이트 팝업은 모두 **`new/data/news/{slug}.json`** 개별 파일로 관리합니다.

## 파일 구조

```
new/
├── data/
│   ├── news.json              ← 목록 인덱스 (빌드 스크립트가 자동 생성, 직접 편집 금지)
│   └── news/
│       ├── 2026-03-agm-6.json ← ✏️ 여기를 편집 (상세 원본 데이터)
│       ├── 2025-12-share-issuance.json
│       └── ...
├── news/                      ← 빌드 산출물 (스크립트가 생성, git에 포함)
│   ├── 2026-03-agm-6/
│   │   └── index.html         ← /new/news/2026-03-agm-6/ URL로 접근
│   └── ...
├── scripts/
│   └── build-news.mjs         ← JSON → HTML 변환 (Node.js)
└── templates/
    └── news-detail.html       ← 상세 페이지 공통 템플릿
```

## 운영 흐름 (가장 중요)

```bash
# 1. 새 뉴스 파일 추가
#    new/data/news/2026-06-new-partner.json  ← 아래 스키마대로 작성

# 2. 빌드 (인덱스 + 상세 페이지 자동 생성)
npm run build:news

# 3. 커밋 & 푸시
git add new/data/news/ new/news/ new/data/news.json
git commit -m "news: 신규 파트너십 공지 추가"
git push
```

개발 단계(GitHub Pages) 및 배포 단계(AWS S3+CloudFront) 모두 이 구조로 작동.

## JSON 스키마

```jsonc
{
  "id": "2026-03-agm-6",              // 고유 식별자 (파일명과 동일하게 권장)
  "slug": "2026-03-agm-6",             // URL slug. 영문/숫자/하이픈. 배포 후 변경 금지!
  "date": "2026-03-10",                // 게시일 (YYYY-MM-DD)
  "category": "disclosure",            // "disclosure" (공시) | "milestone" (사업성과)
  "tag_ko": "주주총회",                 // 뱃지 텍스트 (KO)
  "tag_en": "Shareholders",            // 뱃지 텍스트 (EN)
  "title_ko": "제6기 정기주주총회 소집공고",
  "title_en": "Notice of the 6th Annual General Meeting",
  "summary_ko": "목록·팝업 헤드라인에 보일 짧은 요약",
  "summary_en": "Short summary shown in list/popup header",
  "body_ko": "상세 페이지 본문.\n\n빈 줄 2개로 단락이 구분됩니다.\n줄바꿈 한 번은 <br>로 유지됩니다.",
  "body_en": "Detail page body (multi-paragraph allowed)",
  "source_url": "https://...",         // (선택) 외부 원문 링크. 상세 페이지 하단에 노출
  "popup": {
    "enabled": true,                   // true면 사이트 전역에 팝업
    "start_date": "2026-02-20",        // 팝업 시작 (포함)
    "end_date":   "2026-03-10",        // 팝업 종료 (포함)
    "dismissible": true,               // false면 '다시 보지 않기' 숨김
    "priority": 10                     // 같은 기간 여러 팝업 활성 시 높은 것 1개만 노출
  }
}
```

## 자주 하는 작업

### 1. 새 뉴스 추가 (팝업 없이)

`new/data/news/2026-06-example.json` 생성 후 `popup.enabled: false` 또는 `popup` 블록 생략.
이후 `npm run build:news`.

### 2. 공지를 팝업으로 띄우기 (주총 등)

`popup` 블록에 날짜 범위 지정:

```jsonc
"popup": {
  "enabled": true,
  "start_date": "2026-04-20",
  "end_date":   "2026-05-15",
  "dismissible": true,
  "priority": 10
}
```

- `category: "disclosure"`인 항목은 팝업 열릴 때 **본문(body)까지 처음부터 펼쳐진 상태**로 노출됩니다.
- `milestone`은 summary만 짧게 노출, "자세히 보기" 버튼 → 상세 페이지로 이동.
- `end_date`가 지나면 자동으로 더 이상 안 뜹니다.
- 방문자가 '다시 보지 않기' 누르면 `localStorage`에 기록되어 해당 브라우저에서 재노출 안 됨.

### 3. 팝업 즉시 내리기

- 방법 A — `popup.enabled: false` 변경 후 빌드
- 방법 B — `popup.end_date`를 어제 날짜로 변경 후 빌드

### 4. 뉴스 삭제

1. `new/data/news/{slug}.json` 파일 삭제
2. `new/news/{slug}/` 디렉토리 삭제 (또는 빌드 후 수동 정리)
3. `npm run build:news`
4. 커밋 & 푸시

## 필드 규칙

| 필드 | 필수 | 비고 |
|---|---|---|
| `id` / `slug` | ✅ | 영문/숫자/하이픈. 한 번 배포 후 **절대 바꾸지 말 것** (외부 링크·검색 인덱스·dismiss 기록이 모두 이 ID 기반) |
| `date` | ✅ | `YYYY-MM-DD` |
| `category` | ✅ | `disclosure` 또는 `milestone` — 팝업 기본 동작이 달라짐 |
| `title_ko` / `title_en` | ✅ | |
| `summary_ko` / `summary_en` | ✅ | 목록·팝업 헤드라인용 (1~3문장 권장) |
| `body_ko` / `body_en` | 권장 | 상세 페이지 본문. 없으면 summary가 대체 표시. `\n\n`로 단락 구분. 공고문 레이아웃 마커(아래) 사용 가능. |
| `source_url` | 선택 | 외부 원문 링크 (PDF, 구 홈페이지 공고 등) |
| `popup` | 선택 | 생략 시 팝업 안 뜸 |

## 공고문 레이아웃 마커 (body_ko / body_en)

본문 텍스트는 기본적으로 빈 줄 2개로 단락이 구분되고, 줄바꿈은 `<br>`로 유지됩니다. 선행 공백(들여쓰기)은 `&nbsp;`로 보존됩니다. 공고문 특유의 레이아웃이 필요할 때 다음 마커를 사용할 수 있습니다:

| 마커 | 효과 |
|---|---|
| `::DIVIDER::` | 구분선 `——— 아   래 ———` 삽입 |
| `::CENTER::텍스트` | 해당 줄만 가운데 정렬 (예: 날짜) |
| `::RIGHT::텍스트` | 해당 줄만 우측 정렬 |
| `::SIGNATURE-START::` ~ `::SIGNATURE-END::` | 사이 블록을 서명부 스타일(가운데 정렬, 여백 확대)로 감쌈. 회사명과 대표이사명 사이는 빈 줄로 구분 |

예시 (제6기 주총 소집공고):

```text
주주님의 건승과 댁내의 평안을 기원합니다.
당사는 상법 제363조에 의거하여 제6기 정기주주총회를 아래와 같이 개최하오니, 참석하여 주시기 바랍니다.

::DIVIDER::

1. 일 시 : 2026년 3월 25일(수) 오전 10시 30분

...본문...

::CENTER::2026년 3월 10일

::SIGNATURE-START::
하이케어넷 주식회사

각자대표이사 김 홍 진 (직인생략)
::SIGNATURE-END::
```

## URL 규칙

- 상세 페이지: `/new/news/{slug}/` (슬래시로 끝남)
- GitHub Pages: `https://{user}.github.io/{repo}/new/news/2026-03-agm-6/`
- AWS 배포: `https://www.hicare.co.kr/news/2026-03-agm-6/`
  - CloudFront Function으로 `/news/foo`도 `/news/foo/index.html`로 리라이트 처리 예정

## 테스트 팁

- 팝업을 다시 보려면: 브라우저 DevTools → Application → Local Storage → `hicare-popup-dismissed:{id}` 키 삭제
- 특정 페이지에서 팝업 차단: 해당 HTML의 `<body>`에 `data-no-popup` 속성 추가 (기본적으로 상세 페이지에는 이미 적용됨)
- 로컬에서 확인: `npx serve new` 후 `http://localhost:3000/news/2026-03-agm-6/` 접속

## 빌드 스크립트 동작

`node new/scripts/build-news.mjs`가 하는 일:
1. `new/data/news/*.json` 스캔
2. 각 파일 → `new/news/{slug}/index.html` 생성 (`new/templates/news-detail.html` 템플릿 사용)
3. 메타데이터(title, summary, tag, date, popup)만 뽑아 `new/data/news.json` 인덱스 재생성
4. 인덱스는 프런트엔드의 뉴스룸 목록·팝업 선택 로직이 읽음
