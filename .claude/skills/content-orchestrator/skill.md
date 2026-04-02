---
name: content-orchestrator
description: "리서치 브리프(_workspace/02_*)를 홈페이지 콘텐츠로 변환하는 브릿지 오케스트레이터. copy-writer, data-integrator, content-qa 3개 에이전트를 팀으로 조율하여 마케팅 카피(EN/KO), JSON 데이터, i18n 엔트리, 페이지 아키텍처 업데이트를 생성한다. '콘텐츠 생성', '콘텐츠 제작', '카피 생성', 'create content', 'generate content', '브릿지', '리서치 결과로 콘텐츠' 요청 시 반드시 이 스킬을 사용할 것. 리서치 수집에는 /research-orchestrator를, HTML 빌드에는 /hicarenet-orchestrator를 사용한다."
user_invocable: true
---

# /content-orchestrator - 브릿지 오케스트레이터

리서치 하네스 산출물(`_workspace/02_*`)을 빌드 하네스가 소비할 수 있는 콘텐츠 패키지(`_workspace/03_*`)로 변환한다.

## 위치

```
/research-orchestrator  →  /content-orchestrator  →  /hicarenet-orchestrator
    (자료 수집)              (콘텐츠 제작)              (HTML 빌드)
  _workspace/01_*          _workspace/02_*            _workspace/03_*
  _workspace/02_*          _workspace/03_*            src/, css/, js/
```

## 실행 모드: 에이전트 팀 (Pipeline + Fan-out)

```
Phase 1: 준비
Phase 2: 팀 구성
Phase 3: 카피 작성 + 데이터 통합 (Fan-out, 병렬)
Phase 4: QA 검증
Phase 5: 수정 및 전달
```

## 전제 조건

이 오케스트레이터는 `/research-orchestrator`가 완료된 후 실행한다. 다음 파일이 존재해야 한다:
- `_workspace/02_brief_*.md` (7개 콘텐츠 브리프)
- `_workspace/02_data_structure_recommendations.json`
- `_workspace/02_gap_analysis_report.md`

존재하지 않으면 사용자에게 `/research-orchestrator` 먼저 실행을 안내한다.

## Phase 1: 준비

### 1-1. 전제 조건 확인
```
_workspace/02_brief_rpm_content.md 존재 확인
_workspace/02_brief_apcm_content.md 존재 확인
_workspace/02_data_structure_recommendations.json 존재 확인
```
하나라도 없으면: "리서치 산출물이 없습니다. `/research-orchestrator`를 먼저 실행하세요."

### 1-2. 기존 콘텐츠 스냅샷
현재 프로젝트 콘텐츠를 스냅샷하여 copy-writer와 data-integrator의 참조 기준으로 제공:
- `data/i18n/en.json` 핵심 키 구조
- `data/i18n/ko.json` 핵심 키 구조
- `data/services.json` 스키마
- `data/navigation.json` 구조

## Phase 2: 팀 구성

```
TeamCreate(
  team_name: "content-team",
  members: [
    {
      name: "copy-writer",
      agent_type: "copy-writer",
      model: "opus",
      prompt: "copy-writer 에이전트 역할을 수행한다.
               _workspace/02_brief_*.md 7개 파일을 읽고 각 솔루션의 마케팅 카피를 EN/KO로 작성하라.
               _workspace/01_competitor_messaging_patterns.md를 읽어 차별화 포인트를 파악하라.
               기존 data/i18n/en.json, data/i18n/ko.json을 읽어 톤/용어 패턴을 학습하라.
               write-content 스킬의 references/copy-patterns.md를 참조하라.
               산출물: _workspace/03_copy_*.md (9개)"
    },
    {
      name: "data-integrator",
      agent_type: "data-integrator",
      model: "opus",
      prompt: "data-integrator 에이전트 역할을 수행한다.
               _workspace/02_data_structure_recommendations.json을 읽고 데이터 업데이트를 준비하라.
               _workspace/02_brief_*.md에서 CPT 코드, 서비스 정의를 추출하라.
               기존 data/services.json, data/navigation.json 스키마를 읽고 일관되게 작성하라.
               copy-writer의 카피가 완성되면 _workspace/03_copy_*.md를 읽어 i18n 엔트리를 생성하라.
               산출물: _workspace/03_data_*.json, _workspace/03_i18n_*.json, _workspace/03_page_architecture_update.md"
    },
    {
      name: "content-qa",
      agent_type: "content-qa",
      model: "opus",
      prompt: "content-qa 에이전트 역할을 수행한다.
               copy-writer와 data-integrator의 작업이 완료된 후 검증을 시작하라.
               _workspace/02_brief_*.md(정답지)와 _workspace/03_*(산출물)을 교차 비교하라.
               완전성, 정확성, 일관성, 패턴 준수, 빌드 준비도 5개 영역을 검증하라.
               FAIL 항목은 해당 에이전트에게 SendMessage로 수정 요청하라.
               최종 산출물: _workspace/03_qa_report.md"
    }
  ]
)
```

### TaskCreate

```
TaskCreate(tasks: [
  // copy-writer 태스크 (3개)
  { title: "솔루션별 마케팅 카피 작성",
    description: "7개 솔루션(RPM,CCM,APCM,HRA,AWV,VBC,FHIR)의 카피를 EN/KO로 작성. 각각 hero, description, CPT, stats, CTA, SEO 포함",
    assignee: "copy-writer" },
  { title: "홈페이지 히어로 + 공통 카피",
    description: "전체 서비스를 아우르는 홈 히어로 카피, 공통 CTA, 인증 배지, 통계 카운터 EN/KO 작성",
    assignee: "copy-writer" },
  { title: "카피 i18n 키 목록 전달",
    description: "완성된 카피의 i18n 키 목록을 data-integrator에게 SendMessage로 전달",
    assignee: "copy-writer",
    depends_on: ["솔루션별 마케팅 카피 작성", "홈페이지 히어로 + 공통 카피"] },

  // data-integrator 태스크 (3개)
  { title: "services.json + navigation.json 업데이트 준비",
    description: "APCM/HRA 신규 엔트리 + 기존 RPM/CCM/AWV/VBC 업데이트를 JSON으로 작성",
    assignee: "data-integrator" },
  { title: "i18n 엔트리 생성",
    description: "copy-writer 카피 기반으로 en.json/ko.json 추가/업데이트 키-값 쌍 생성",
    assignee: "data-integrator",
    depends_on: ["카피 i18n 키 목록 전달"] },
  { title: "페이지 아키텍처 업데이트",
    description: "page-architecture.md에 APCM/HRA 섹션 추가, 기존 솔루션 섹션 업데이트",
    assignee: "data-integrator" },

  // content-qa 태스크 (2개)
  { title: "콘텐츠 품질 검증",
    description: "카피 + 데이터 + i18n을 리서치 브리프 대비 교차 검증. 5개 영역 체크",
    assignee: "content-qa",
    depends_on: ["솔루션별 마케팅 카피 작성", "i18n 엔트리 생성", "services.json + navigation.json 업데이트 준비"] },
  { title: "QA 보고서 작성",
    description: "검증 결과를 PASS/FAIL/WARN로 정리. FAIL 항목은 수정 요청 발송",
    assignee: "content-qa",
    depends_on: ["콘텐츠 품질 검증"] }
])
```

## Phase 3: 콘텐츠 제작 (Fan-out)

**copy-writer**와 **data-integrator**가 병렬로 작업한다:
- copy-writer: 브리프 → 마케팅 카피 (EN/KO)
- data-integrator: 브리프 + 권고 → JSON 데이터 + 아키텍처

copy-writer가 카피를 완성하면 data-integrator에게 `SendMessage`로 i18n 키 목록을 전달한다. data-integrator는 이를 받아 i18n 엔트리를 생성한다.

### 팀원 간 통신

| 발신자 | 수신자 | 시점 | 내용 |
|--------|--------|------|------|
| copy-writer | data-integrator | 솔루션 카피 완성 시 | i18n 키 목록 + EN/KO 텍스트 |
| copy-writer | content-qa | 전체 카피 완성 시 | 검수 요청 |
| data-integrator | content-qa | 데이터 완성 시 | 검수 요청 |
| content-qa | copy-writer | FAIL 발견 시 | 수정 요청 (파일, 위치, 기대값) |
| content-qa | data-integrator | FAIL 발견 시 | 수정 요청 |

## Phase 4: QA 검증

content-qa가 모든 산출물을 교차 검증한다:

1. 브리프의 CPT 코드 → 카피에 포함 → services.json에 포함 → i18n에 관련 키 존재
2. 7개 솔루션 모두 카피 존재 (특히 APCM, HRA 신규 확인)
3. EN/KO i18n 키 파리티
4. JSON 구문 유효성
5. Vivify Health 패턴 준수

**FAIL 항목**: 해당 에이전트에게 `SendMessage`로 수정 요청. 최대 2회.
**재실패**: `[UNRESOLVED]`로 기록, 사용자 판단 위임.

## Phase 5: 수정 및 전달

### 5-1. 수정 루프
QA에서 FAIL이 나오면:
1. content-qa가 수정 요청 발송
2. copy-writer/data-integrator가 수정
3. content-qa가 재검증
4. 최대 2회 반복

### 5-2. 팀 종료
```
SendMessage(to: "all", message: "콘텐츠 제작 완료. 작업을 마무리해주세요.")
TeamDelete(team_name: "content-team")
```

### 5-3. 최종 보고

```markdown
## 콘텐츠 제작 완료 보고

### 산출물 목록
| 파일 | 설명 | QA |
|------|------|-----|
| _workspace/03_copy_apcm.md | APCM 마케팅 카피 [신규] | PASS |
| _workspace/03_copy_hra.md | HRA 마케팅 카피 [신규] | PASS |
| ... | ... | ... |
| _workspace/03_data_services_additions.json | APCM/HRA JSON 엔트리 | PASS |
| _workspace/03_i18n_en_additions.json | 신규 EN 키 | PASS |
| _workspace/03_i18n_ko_additions.json | 신규 KO 키 | PASS |
| _workspace/03_qa_report.md | QA 보고서 | - |

### 빌드 하네스 연결 가이드
이 산출물을 실제 프로젝트에 반영하려면:
1. `_workspace/03_data_services_additions.json` → `data/services.json`에 머지
2. `_workspace/03_data_navigation_update.json` → `data/navigation.json`에 머지
3. `_workspace/03_i18n_en_additions.json` → `data/i18n/en.json`에 머지
4. `_workspace/03_i18n_ko_additions.json` → `data/i18n/ko.json`에 머지
5. `_workspace/03_page_architecture_update.md` → page-architecture.md에 반영
6. `/hicarenet-orchestrator build` 실행하여 HTML 구현

### 미해결 사항
- [UNRESOLVED 항목 목록]
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 리서치 산출물 미존재 | 사용자에게 `/research-orchestrator` 먼저 실행 안내 |
| copy-writer 실패 | 1회 재시도. 재실패 시 해당 솔루션 카피 없이 진행, 보고서에 갭 명시 |
| data-integrator 실패 | 1회 재시도. 재실패 시 카피만 전달, JSON 수동 작업 안내 |
| QA FAIL 2회 초과 | [UNRESOLVED] 기록, 사용자 판단 위임 |
| 카피-데이터 불일치 | content-qa가 양쪽 모두 기록, 어느 쪽도 삭제하지 않음 |

## 테스트 시나리오

### 정상 흐름
1. `/content-orchestrator` 실행
2. Phase 1: 전제 조건 확인 OK, 기존 콘텐츠 스냅샷
3. Phase 2: 3명 팀 구성, 8개 태스크 등록
4. Phase 3: copy-writer 카피 9개 작성, data-integrator 데이터 7개 생성
5. Phase 4: content-qa 검증 → PASS (minor WARN 있으나 FAIL 없음)
6. Phase 5: 최종 보고, 빌드 가이드 제공
7. 검증: _workspace/03_*에 16개+ 파일, APCM/HRA 카피 신규 존재, QA PASS

### 에러 흐름
1. Phase 4에서 content-qa가 APCM 카피의 G0556 누락 발견 → FAIL
2. content-qa → copy-writer: "03_copy_apcm.md에 G0556 코드 누락. 브리프 02_brief_apcm_content.md 참조하여 CPT Codes 섹션 추가"
3. copy-writer 수정 → content-qa 재검증 → PASS
4. 최종 보고에 "수정 1회: APCM G0556 추가" 기록
