# 뉴스 & 팝업 운영 가이드

뉴스룸 표시 항목과 사이트 팝업은 모두 **`new/data/news.json`** 파일 하나로 관리합니다.

## 파일 위치

- 데이터: `new/data/news.json`
- 렌더 로직: `new/js/news.js`
- 팝업 스타일: `new/css/popup.css`

## 기본 구조

```jsonc
{
  "items": [
    {
      "id": "2026-03-agm-6",        // 고유 식별자 (URL slug, dismiss 키로도 쓰임)
      "date": "2026-03-10",         // 게시일 (YYYY-MM-DD)
      "category": "disclosure",     // disclosure | milestone
      "tag_ko": "주주총회",           // 뱃지 텍스트 (KO)
      "tag_en": "Shareholders",     // 뱃지 텍스트 (EN)
      "title_ko": "제6기 정기주주총회 소집공고",
      "title_en": "Notice of the 6th Annual General Meeting",
      "summary_ko": "뉴스룸 목록에 보일 짧은 요약",
      "summary_en": "Short summary shown in the newsroom list",
      "body_ko": "팝업 본문(상세) — 여러 줄 가능",
      "body_en": "Popup body (detailed) — multi-line allowed",
      "source_url": "https://...",  // (선택) 원문 링크. 있으면 '원문 보기' 버튼 노출
      "popup": {
        "enabled": true,            // true면 팝업으로도 노출
        "start_date": "2026-02-20", // 팝업 시작일 (포함)
        "end_date":   "2026-03-10", // 팝업 종료일 (포함)
        "dismissible": true,        // false면 '다시 보지 않기' 버튼 숨김
        "priority": 10              // 같은 기간에 여러 팝업이 enable이면 높은 값 1건만
      }
    }
  ]
}
```

## 자주 하는 작업

### 1. 새 뉴스 추가 (팝업 없이)

`items` 배열 맨 앞에 항목 하나를 추가하고 `popup.enabled: false`로 둡니다.
날짜 기준 자동 정렬되므로 위치는 중요하지 않습니다.

### 2. 새 공지를 팝업으로 띄우기

새 항목을 추가하면서 `popup` 블록을 채웁니다:

```jsonc
"popup": {
  "enabled": true,
  "start_date": "2026-04-20",
  "end_date":   "2026-05-15",
  "dismissible": true,
  "priority": 10
}
```

- `end_date`가 지나면 자동으로 더 이상 뜨지 않습니다 (JSON 수정 불필요).
- 방문자가 '다시 보지 않기'를 누르면 `localStorage`에 기록되어 해당 브라우저에서 재노출 안 됨.
- 여러 팝업이 동시에 활성화되면 `priority` 높은 것 **1개만** 노출.

### 3. 팝업 즉시 내리기

방법 A — `popup.enabled: false` 로 바꾸기 (뉴스룸에는 계속 남음)
방법 B — `popup.end_date`를 어제 날짜로 변경

### 4. 뉴스 삭제

해당 객체를 `items` 배열에서 제거하세요.

### 5. 배포

```bash
git add new/data/news.json
git commit -m "news: 제6기 주주총회 공고 추가"
git push
```

GitHub Pages가 1~2분 내에 반영합니다.

## 필드 규칙

| 필드 | 필수 | 설명 |
|---|---|---|
| `id` | ✅ | 고유 ID. 한 번 배포 후에는 바꾸지 마세요 (dismiss 기록이 ID 기준). |
| `date` | ✅ | `YYYY-MM-DD` 형식. 뉴스룸 연도 그룹화에 사용. |
| `category` | ✅ | `disclosure`(공시) 또는 `milestone`(사업성과) |
| `tag_ko` / `tag_en` | ✅ | 뱃지에 표시될 짧은 분류명 |
| `title_ko` / `title_en` | ✅ | 뉴스룸 목록과 팝업 제목 |
| `summary_ko` / `summary_en` | ✅ | 뉴스룸 목록에 보일 1~3문장 |
| `body_ko` / `body_en` | 권장 | 팝업 본문. 없으면 `summary`가 대신 표시됨. `\n`으로 줄바꿈 가능. |
| `source_url` | 선택 | 원문(PDF, 구 홈페이지 공고 등) 외부 링크 |
| `popup` | 선택 | 팝업 표시 여부/기간. 생략 시 팝업 안 뜸. |

## 테스트 팁

- 브라우저 DevTools → Application → Local Storage → 사이트 도메인 → `hicare-popup-dismissed:{id}` 키 삭제하면 팝업이 다시 보입니다.
- 특정 페이지에서 팝업만 막고 싶다면 해당 HTML `<body>`에 `data-no-popup` 속성을 추가하세요 (권장하지 않음).
