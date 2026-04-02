# 한국 사이트 디자인 조정 사항

기존 디자인 시스템(design-system-spec.md)을 기반으로, 한국법인 사이트에 맞게 조정하는 항목.

## 타이포그래피 변경

### 주 서체: Noto Sans KR (한국어 사이트)

```css
--font-primary: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
--font-secondary: 'Inter', sans-serif;  /* 영문 병기, 수치 표시용 */
```

기존 (미국 사이트):
```css
--font-primary: 'Inter', sans-serif;       /* EN 주 서체 */
--font-secondary: 'Noto Sans KR', sans-serif;  /* KO 보조 */
```

### 한국어 타이포그래피 스케일

한국어는 영어보다 시각적으로 밀도가 높으므로 자간(letter-spacing)과 행간(line-height)을 넉넉하게:

| 요소 | 크기 | 행간 | 자간 | 굵기 |
|------|------|------|------|------|
| 히어로 H1 | 48px (모바일 32px) | 1.3 | -0.02em | 700 |
| 섹션 H2 | 36px (모바일 28px) | 1.35 | -0.01em | 700 |
| 소제목 H3 | 24px (모바일 20px) | 1.4 | 0 | 600 |
| 본문 | 16px | 1.75 | 0.02em | 400 |
| 본문 작은 | 14px | 1.7 | 0.02em | 400 |
| 캡션 | 12px | 1.6 | 0.03em | 400 |

행간 1.75 (본문)는 한국어 가독성을 위해 기존 1.6보다 넉넉하게 설정.

## 색상: 변경 없음

기존 Healthcare Blue (#1A8FD8) + Health Green (#2EBE74) + Neutral 팔레트 그대로 사용. 브랜드 일관성 유지.

## 레이아웃: 변경 없음

기존 8px 그리드, 브레이크포인트(768/1024/1280/1440) 동일.

## 한국 사이트 전용 컴포넌트

### 1. 연혁 타임라인 (.timeline)
- 좌우 교차 레이아웃 (데스크톱), 단일 컬럼 (모바일)
- 연도 마커 + 이벤트 카드
- 스크롤 시 순차 등장 애니메이션
- 참고: 기획서 3-2(C) 연혁 데이터

### 2. 조직도 (.org-chart)
- 트리 구조: 대표이사 → 그룹(R&D, BI, 경영지원, 해외지원) → 개인
- R&D 비중 45% 강조 시각화
- 반응형: 데스크톱 수평 트리, 모바일 수직 리스트

### 3. 서비스 플로우 (.service-flow)
- 하이케어넷(Care Portal) → 클리닉 → 환자 → CMS 관계도
- 수평 플로우 (데스크톱), 수직 플로우 (모바일)
- 화살표 + 아이콘 + 라벨

### 4. 확장 로드맵 (.roadmap-circle)
- 동심원 구조: 안쪽 RPM/CCM(현재), 바깥쪽 APCM/AWV/HRA/VBC(확장)
- Care Portal이 중앙
- 호버 시 각 서비스 간략 설명 표시

### 5. 글로벌 지도 (.global-map)
- 세계 지도 SVG + 핀 마커 (미국, 이탈리아, 프랑스, 태국)
- 핀 클릭/호버 시 실적 카드 표시
- 반응형: 모바일에서는 리스트 형태로 폴백

### 6. 매출 차트 (.revenue-chart)
- 연도별 국내/해외 매출 막대 차트
- CSS-only 또는 간단한 Canvas (외부 라이브러리 없이)
- 2023년 해외 매출 급감 → 사업 구조 전환 맥락 주석 표시

### 7. 채용 매력 포인트 (.careers-highlights)
- 4개 카드 그리드
- 아이콘 + 숫자 + 제목 + 설명
- 호버 시 카드 미세 확대

### 8. IR 탭 (.ir-tabs)
- IR / 뉴스룸 2개 탭
- 탭 전환 시 콘텐츠 교체 (JS)
- 뉴스룸은 시간순 역순, 카드 리스트

### 9. 문의 폼 (.contact-form)
- 문의 유형 선택: 투자/IR, 채용, 파트너십, 기타
- 유형별 폼 필드 변경 (조건부 표시)
- 제출 시 유형별 이메일 라우팅 (프론트에서 action URL 분기)

### 10. 플레이스홀더 (.placeholder)
- [PLACEHOLDER] 항목과 [IMG-XX] 이미지용
- 회색 배경 + 점선 테두리 + 중앙 텍스트
- 시각적으로 "여기에 실제 콘텐츠가 들어갈 자리"임을 명확히 표시

```css
.placeholder {
  background: var(--color-neutral-50);
  border: 2px dashed var(--color-neutral-300);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-neutral-400);
  font-size: 14px;
  min-height: 200px;
}
```

## 기술 스택 결정

v5 패턴을 따른다:
- **CSS**: Tailwind CSS via CDN (v5와 동일)
- **서체**: Noto Sans KR (Google Fonts CDN) + Material Symbols
- **JS**: Vanilla ES6, 프레임워크 없음
- **데이터**: JSON 파일 기반, fetch로 로드

## 미국 사이트와 공유 가능한 자산

| 자산 | 공유 방법 |
|------|----------|
| 인증서 PDF (HIPAA, ISO) | 기존 assets/certs/ 참조 |
| 디자인 토큰 (색상) | 동일 값 사용 |
| 애니메이션 시스템 | scroll-observer.js 재사용 |
| Material Symbols | 동일 CDN |
| reset.css, utilities.css | 복사 후 사용 |
