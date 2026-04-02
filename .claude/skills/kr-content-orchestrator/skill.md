---
name: kr-content-orchestrator
description: "한국법인 홈페이지(hicare.co.kr) 콘텐츠를 생성하는 오케스트레이터. kr-copy-writer, kr-data-integrator, content-qa 3개 에이전트를 팀으로 조율하여 한국 채용/IR/파트너 타겟의 기업 사이트 콘텐츠를 생성한다. '한국 사이트', '한국법인 홈페이지', '국내 홈페이지', 'KR site', '한국 콘텐츠', '채용 페이지', 'Korean site content' 요청 시 반드시 이 스킬을 사용할 것. 미국법인 콘텐츠에는 /content-orchestrator를 사용한다."
user_invocable: true
---

# /kr-content-orchestrator - 한국법인 홈페이지 콘텐츠 오케스트레이터

## 실행 모드: 에이전트 팀 (Pipeline + Fan-out)

한국법인 홈페이지(hicare.co.kr) 전체 콘텐츠를 생성한다. 타겟은 채용 지원자, 투자자, 파트너이다.

## 위치 (전체 파이프라인)

```
/research-orchestrator → /content-orchestrator  → /hicarenet-orchestrator
    (자료 수집)            (미국 사이트 콘텐츠)       (미국 사이트 빌드)

/research-orchestrator → /kr-content-orchestrator → (한국 사이트 빌드)
    (자료 수집)            (한국 사이트 콘텐츠)
```

리서치 산출물(`_workspace/01_*, 02_*`)은 양쪽에서 공유하되, 한국 사이트 산출물은 `_workspace/04_kr_*` 접두사로 분리한다.

## 사용법

```
/kr-content-orchestrator                    # 전체 콘텐츠 생성
/kr-content-orchestrator phase1             # 1차 런칭 필수 페이지만
/kr-content-orchestrator careers            # 채용 페이지만
/kr-content-orchestrator ir                 # IR/뉴스만
```

## 핵심 참조 문서

**반드시 읽어야 하는 문서:**
- `references/kr-website-spec.md` — 한국법인 기획서 (전체 페이지 명세, 톤, 금지 표현, 이미지)

이 기획서가 모든 콘텐츠의 정답지이다. 리서치 산출물은 보조 참고 자료일 뿐이다.

## Phase 1: 준비

### 1-1. 기획서 로드
`references/kr-website-spec.md`를 읽어 전체 페이지 구조와 제작 우선순위를 파악한다:

**1차 런칭 필수 (2-3주):**
- 메인 페이지
- 회사소개
- 사업영역
- 채용
- 문의/푸터
- 개인정보처리방침/이용약관

**2차 (런칭 후 2주):**
- 기술, 글로벌 실적, IR, 뉴스룸, FAQ

**3차 (운영 안정화 후):**
- 용어 사전, Medicare 교육, 다운로드 자료실, 기술 블로그

### 1-2. 리서치 산출물 확인
`_workspace/` 디렉토리에서 재활용 가능한 리서치 산출물을 확인한다:
- `_workspace/01_market_rpm_ccm.md` — 시장 규모 수치 (IR 페이지, 사업영역)
- `_workspace/01_market_apcm_regulation.md` — APCM 설명 (사업영역 로드맵)
- `_workspace/01_competitor_positioning_report.md` — 경쟁 환경 (사업영역)
- `data/company-content-source.md` — 회사 원본 데이터

리서치 산출물이 없어도 기획서(kr-website-spec.md)만으로 콘텐츠 생성이 가능하다. 기획서에 이미 주요 수치와 내용이 포함되어 있다.

## Phase 2: 팀 구성

```
TeamCreate(
  team_name: "kr-content-team",
  members: [
    {
      name: "kr-copy-writer",
      agent_type: "kr-copy-writer",
      model: "opus",
      prompt: "kr-copy-writer 에이전트 역할을 수행한다.
               반드시 .claude/skills/kr-content-orchestrator/references/kr-website-spec.md를 먼저 읽어라.
               이 기획서가 모든 콘텐츠의 정답지이다.
               보조 참고: _workspace/01_market_*.md, _workspace/01_competitor_*.md (있으면)
               회사 데이터: data/company-content-source.md
               금지 표현 목록을 반드시 숙지하라 (em dash 금지, 과장 어휘 금지 등).
               산출물: _workspace/04_kr_*.md"
    },
    {
      name: "kr-data-integrator",
      agent_type: "kr-data-integrator",
      model: "opus",
      prompt: "kr-data-integrator 에이전트 역할을 수행한다.
               .claude/skills/kr-content-orchestrator/references/kr-website-spec.md의 페이지 구조를 읽어라.
               kr-copy-writer의 카피가 완성되면 _workspace/04_kr_*.md를 읽어 데이터로 변환하라.
               한국 사이트 GNB: 회사소개 | 사업영역 | 기술 | 글로벌 실적 | 채용 | IR/뉴스
               산출물: _workspace/04_kr_data_*.json, _workspace/04_kr_i18n_ko.json, _workspace/04_kr_page_architecture.md"
    },
    {
      name: "content-qa",
      agent_type: "content-qa",
      model: "opus",
      prompt: "content-qa 에이전트로서 한국법인 콘텐츠를 검증한다.
               정답지: .claude/skills/kr-content-orchestrator/references/kr-website-spec.md
               검증 대상: _workspace/04_kr_*.md (카피), _workspace/04_kr_data_*.json (데이터)
               특별 검증 항목:
               1. 금지 표현 위반 여부 (em dash, 과장 어휘, 부정 대조 구문 등)
               2. Care Portal vs 의료기기 구분이 올바른지
               3. FDA/의료기기 표기 주의사항 준수
               4. 채용 페이지가 최우선 품질인지
               5. 미국 서비스 판매 톤이 아닌 한국 기업 커뮤니케이션 톤인지
               산출물: _workspace/04_kr_qa_report.md"
    }
  ]
)
```

### TaskCreate

```
TaskCreate(tasks: [
  // kr-copy-writer 태스크 - 1차 런칭 필수
  { title: "[1차] 메인 페이지 카피",
    description: "히어로(Care Portal 정체성), 핵심 수치 블록(40개 클리닉, 3000명, 300건, 96%), 타겟별 진입점 3개, 최근 뉴스",
    assignee: "kr-copy-writer" },
  { title: "[1차] 회사소개 카피",
    description: "회사 개요 3-4문단, 미션, 연혁 타임라인(2000년대~2025년), 조직 구성, 경영진 프로필",
    assignee: "kr-copy-writer" },
  { title: "[1차] 사업영역 카피",
    description: "Care Portal(70%): Medicare 배경 설명+해결 문제+기능+수익모델+실적. 서비스 확장 로드맵: APCM/AWV/HRA/VBC. 의료기기 사업(30%): VA/이탈리아/프랑스. 경쟁 환경 간략",
    assignee: "kr-copy-writer" },
  { title: "[1차][최우선] 채용 카피",
    description: "왜 하이케어넷인가 4가지, 팀 소개(R&D/BI/경영지원/해외지원), 일하는 방식[PLACEHOLDER], 복리후생[PLACEHOLDER], 채용 포지션, 기술적 문제",
    assignee: "kr-copy-writer" },
  { title: "[1차] 문의 + 푸터 + 법적 페이지",
    description: "구조화된 문의 폼(유형별), 푸터(회사정보+인증마크+링크), 개인정보처리방침, 이용약관, 의료 면책 고지",
    assignee: "kr-copy-writer" },

  // kr-copy-writer 태스크 - 2차
  { title: "[2차] 기술 페이지 카피",
    description: "플랫폼 아키텍처 개요, AI 기술(리포트 자동생성/이상징후 예측/폐렴진단[추진중]/치매진단[준비단계]), 보안 인증(HIPAA/ISO), 의료 도메인 축적 기술",
    assignee: "kr-copy-writer" },
  { title: "[2차] 글로벌 실적 카피",
    description: "세계 지도, Care Portal 실적(미국 40개/3000명), 의료기기 수출(VA 10000대/이탈리아/프랑스), 파트너십(AMC Health)",
    assignee: "kr-copy-writer" },
  { title: "[2차] IR/뉴스 + FAQ 카피",
    description: "IR: 회사 개요, 매출 추이, 시장 기회, 연락처. 뉴스룸: 초기 5건. FAQ: 투자자/채용/파트너 유형별",
    assignee: "kr-copy-writer" },

  // kr-data-integrator 태스크
  { title: "한국 사이트 네비게이션 + 기본 데이터",
    description: "GNB 구조 JSON, 회사 정보 JSON, 채용 데이터 JSON 생성. 기획서 기준.",
    assignee: "kr-data-integrator" },
  { title: "한국 사이트 i18n + 페이지 아키텍처",
    description: "kr.* 네임스페이스 i18n 생성, 페이지 아키텍처 문서 작성",
    assignee: "kr-data-integrator",
    depends_on: ["[1차] 메인 페이지 카피", "[1차] 회사소개 카피", "[1차] 사업영역 카피", "[1차][최우선] 채용 카피"] },

  // content-qa 태스크
  { title: "한국 사이트 콘텐츠 QA",
    description: "금지 표현, Care Portal/의료기기 구분, FDA 표기, 채용 품질, 톤 일관성 검증",
    assignee: "content-qa",
    depends_on: ["[1차] 메인 페이지 카피", "[1차] 회사소개 카피", "[1차] 사업영역 카피", "[1차][최우선] 채용 카피", "한국 사이트 i18n + 페이지 아키텍처"] },
  { title: "QA 보고서 작성",
    description: "검증 결과 정리. 금지 표현 위반, 구분 오류, 톤 불일치 등 FAIL 항목은 수정 요청",
    assignee: "content-qa",
    depends_on: ["한국 사이트 콘텐츠 QA"] }
])
```

## Phase 3: 콘텐츠 제작

**kr-copy-writer**와 **kr-data-integrator**가 병렬로 작업:
- kr-copy-writer: 기획서 → 페이지별 카피 (1차 5개 → 2차 3개)
- kr-data-integrator: 기획서 → 네비게이션/기본 데이터 (카피 도착 후 i18n 생성)

### 팀원 간 통신

| 발신자 | 수신자 | 시점 | 내용 |
|--------|--------|------|------|
| kr-copy-writer | kr-data-integrator | 페이지 카피 완성 시 | 데이터 연동 포인트 + 카피 경로 |
| kr-copy-writer | content-qa | 1차 전체 완성 시 | 검수 요청 |
| kr-data-integrator | content-qa | 데이터 완성 시 | 검수 요청 |
| content-qa | kr-copy-writer | 금지 표현 위반 시 | 구체적 수정 요청 |
| content-qa | kr-data-integrator | 데이터 오류 시 | 수정 요청 |

## Phase 4: QA 검증

content-qa의 한국 사이트 특화 검증 항목:

1. **금지 표현 위반**: em dash, 과장 어휘, 부정 대조 구문, 강박적 요약 검출
2. **Care Portal vs 의료기기 구분**: 메인 페이지 첫인상이 "소프트웨어"인지 확인
3. **FDA/의료 표기**: "FDA 승인 추진 중", "준비 단계" 올바른 표기 확인
4. **채용 페이지 품질**: 4가지 매력 포인트, 기술적 문제 섹션 충실도
5. **톤 일관성**: 미국 서비스 판매 톤이 아닌 한국 기업 커뮤니케이션 톤
6. **수치 정확성**: 기획서의 수치(40개 클리닉, 3000명 등)와 카피의 수치 일치

## Phase 5: 수정 및 전달

### 최종 보고

```markdown
## 한국법인 홈페이지 콘텐츠 완료 보고

### 1차 런칭 필수 산출물
| 파일 | 설명 | QA |
|------|------|-----|
| _workspace/04_kr_main.md | 메인 페이지 | PASS |
| _workspace/04_kr_about.md | 회사소개 | PASS |
| _workspace/04_kr_business.md | 사업영역 | PASS |
| _workspace/04_kr_careers.md | 채용 | PASS |
| _workspace/04_kr_contact.md | 문의 | PASS |
| _workspace/04_kr_footer_legal.md | 푸터/법적 | PASS |

### 데이터 산출물
| 파일 | 설명 |
|------|------|
| _workspace/04_kr_data_navigation.json | GNB 구조 |
| _workspace/04_kr_data_company.json | 회사 정보 |
| _workspace/04_kr_data_careers.json | 채용 데이터 |
| _workspace/04_kr_i18n_ko.json | 한국어 i18n |
| _workspace/04_kr_page_architecture.md | 페이지 아키텍처 |

### PLACEHOLDER 항목 (내부 확인 필요)
- 복리후생 상세 항목
- 일하는 방식 (개발 프로세스, 의사결정 구조)
- 현재 채용 포지션 JD
- 경영진 약력 상세 / 프로필 사진

### 필요 이미지 요약
| 유형 | 수량 | 조달 방법 |
|------|------|----------|
| Type A (실제 촬영) | X개 | 내부 촬영/제공 |
| Type B (디자인 제작) | X개 | 디자이너/Figma |
| Type C (스톡/AI) | X개 | Unsplash/Pexels |

### 미국 사이트 재활용 가능 자산
- [공유 자산 목록]
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 리서치 산출물 없음 | 기획서(kr-website-spec.md) + company-content-source.md만으로 진행 |
| 내부 확인 필요 항목 | [PLACEHOLDER] 표기. 빈 섹션으로 두지 않고 구조는 완성 |
| 금지 표현 위반 | content-qa 즉시 수정 요청. 최대 2회 피드백 |
| kr-copy-writer 실패 | 1회 재시도. 재실패 시 해당 페이지 건너뛰고 보고 |

## 테스트 시나리오

### 정상 흐름
1. `/kr-content-orchestrator phase1` 실행
2. Phase 1: 기획서 로드, 리서치 산출물 확인
3. Phase 2: 3명 팀 구성, 12개 태스크 등록
4. Phase 3: 1차 5페이지 카피 + 데이터 생성
5. Phase 4: QA → 금지 표현 0건, 구분 오류 0건
6. Phase 5: 1차 6개 카피 + 5개 데이터 + QA 보고서
7. 검증: 채용 페이지에 4가지 매력 포인트, 기술적 문제 포함. 메인 히어로가 "소프트웨어 플랫폼" 인상

### 에러 흐름
1. Phase 4에서 content-qa가 사업영역의 "혁신적인 기술" 표현 발견 → FAIL
2. content-qa → kr-copy-writer: "04_kr_business.md 섹션 A, '혁신적인 기술' → 금지 어휘. 팩트 기반으로 수정"
3. kr-copy-writer: "혁신적인 기술" → "20년간 축적된 원격 환자 관리 기술" 수정
4. 재검증 → PASS
