---
name: research-orchestrator
description: "HicareNet 홈페이지 자료 수집을 위한 리서치 에이전트 팀 오케스트레이터. 4개 전문 리서치 에이전트(solution-researcher, competitor-analyst, market-researcher, content-brief-synthesizer)를 팀으로 구성하여 RPM/CCM/APCM/HRA/AWV/VBC 솔루션 조사, 경쟁사 분석, 시장 데이터 수집을 병렬 수행하고 콘텐츠 브리프로 통합한다. '자료 수집', '리서치 시작', '리서치 오케스트레이터', 'research materials', 'collect materials', 'start research', '홈페이지 자료' 요청 시 반드시 이 스킬을 사용할 것. 기존 hicarenet-orchestrator(빌드용)와 별도로 작동하는 리서치 전용 오케스트레이터."
user_invocable: true
---

# /research-orchestrator - 리서치 에이전트 팀 오케스트레이터

## 실행 모드: 에이전트 팀 (Fan-out/Fan-in)

3개 리서치 에이전트가 병렬로 자료를 수집하고, 1개 종합 에이전트가 결과를 통합한다. 팀원 간 `SendMessage`로 발견 사항을 실시간 공유한다.

## 사용법

```
/research-orchestrator                     # 전체 리서치 (6개 솔루션 + 경쟁사 + 시장)
/research-orchestrator solutions           # 솔루션 도메인 조사만
/research-orchestrator competitors         # 경쟁사 분석만
/research-orchestrator market              # 시장 데이터만
/research-orchestrator apcm               # APCM 집중 조사
```

## Phase 1: 준비

### 1-1. 리서치 범위 분석
사용자 입력에서 조사 범위를 파악한다:
- 전체 리서치 (기본값) vs 특정 영역 집중
- 특별 우선순위 (APCM 등)
- 시간/깊이 제약

### 1-2. 기존 데이터 스냅샷
프로젝트 루트 기준으로 `_workspace/` 디렉토리를 생성하고 기존 데이터를 스냅샷한다:

```
mkdir -p _workspace/00_input
```

아래 파일을 읽어 스냅샷을 생성한다:
- `data/services.json` → `_workspace/00_input/existing_services_snapshot.json`에 현재 서비스 목록 요약
- `data/i18n/en.json` → 솔루션 관련 키 존재 여부 요약
- `data/navigation.json` → 현재 네비게이션 구조 요약
- `data/company-content-source.md` → 핵심 통계/역량 요약

### 1-3. 리서치 스코프 문서 생성
`_workspace/00_input/research_scope.md`에 다음을 기록:
- 조사 범위 (전체/부분)
- 각 솔루션별 현재 상태 (존재/부분/누락)
- 우선순위 배정 (APCM=최우선, HRA=높음, 나머지=보강)
- 팀원별 담당 영역

## Phase 2: 팀 구성

### 2-1. TeamCreate

```
TeamCreate(
  team_name: "research-team",
  members: [
    {
      name: "solution-researcher",
      agent_type: "solution-researcher",
      model: "opus",
      prompt: "solution-researcher 에이전트 역할을 수행한다.
               _workspace/00_input/research_scope.md를 읽어 조사 범위를 파악하라.
               기존 데이터: data/company-content-source.md, data/services.json를 먼저 읽어 갭을 파악하라.
               APCM 조사 시 반드시 research-solution 스킬의 references/apcm-research-guide.md를 읽어라.
               각 솔루션 프로파일은 references/solution-profile-template.md 템플릿을 따른다.
               산출물: _workspace/01_solution_{솔루션코드}_profile.md (6개)"
    },
    {
      name: "competitor-analyst",
      agent_type: "competitor-analyst",
      model: "opus",
      prompt: "competitor-analyst 에이전트 역할을 수행한다.
               _workspace/00_input/research_scope.md를 읽어 조사 범위를 파악하라.
               research-competitor 스킬의 references/competitor-list.md에서 분석 대상을 확인하라.
               references/analysis-template.md 형식으로 분석 결과를 작성하라.
               특히 각 경쟁사의 APCM 지원 여부를 반드시 확인하라.
               산출물: _workspace/01_competitor_*.md (4개)"
    },
    {
      name: "market-researcher",
      agent_type: "market-researcher",
      model: "opus",
      prompt: "market-researcher 에이전트 역할을 수행한다.
               _workspace/00_input/research_scope.md를 읽어 조사 범위를 파악하라.
               research-market 스킬의 references/existing-data-inventory.md를 먼저 읽어 기존 데이터와 중복을 방지하라.
               references/source-priority.md의 출처 신뢰도 계층을 따라 데이터 품질을 표기하라.
               APCM CMS 프로그램 세부사항을 우선 조사하라.
               산출물: _workspace/01_market_*.md (5개)"
    },
    {
      name: "content-brief-synthesizer",
      agent_type: "content-brief-synthesizer",
      model: "opus",
      prompt: "content-brief-synthesizer 에이전트 역할을 수행한다.
               다른 3개 리서치 에이전트의 작업이 완료될 때까지 대기한다.
               완료 후 _workspace/01_*.md 파일 전체를 읽고, 기존 프로젝트 데이터와 교차 비교한다.
               7개 콘텐츠 브리프, 데이터 구조 변경 권고, 갭 분석 보고서, 리서치 요약을 생성한다.
               산출물: _workspace/02_*.md, _workspace/02_*.json"
    }
  ]
)
```

### 2-2. TaskCreate

```
TaskCreate(tasks: [
  // solution-researcher 태스크 (6개)
  { title: "RPM 솔루션 프로파일",
    description: "RPM 심층 조사: CPT 99453/99454/99457/99458 최신 수가, 임상 워크플로우, 공급자 pain points",
    assignee: "solution-researcher" },
  { title: "CCM 솔루션 프로파일",
    description: "CCM 심층 조사: CPT 99490/99491/99487/99489 최신 수가, 다국어 케어 코디네이션 각도",
    assignee: "solution-researcher" },
  { title: "[CRITICAL] APCM 솔루션 프로파일",
    description: "APCM 완전 신규 조사: G0556, CY2025 PFS, Tier 구조, CCM과의 관계, 자격기준, 빌링 워크플로우. apcm-research-guide.md 필수 참조",
    assignee: "solution-researcher" },
  { title: "HRA 솔루션 프로파일",
    description: "HRA를 AWV 하위에서 독립 서비스로 격상. 디지털 HRA, 평가 도구, AWV/APCM 연계, 단독 사용 사례",
    assignee: "solution-researcher" },
  { title: "AWV 솔루션 프로파일",
    description: "AWV 심층 조사: G0438/G0439, IPPE, 예방 계획, Medicare 수혜자 대상, HRA 통합",
    assignee: "solution-researcher" },
  { title: "VBC 솔루션 프로파일",
    description: "VBC 심층 조사: 품질 지표(HEDIS/Stars), ACO 모델, 공유 절감, 기술 요건",
    assignee: "solution-researcher" },

  // competitor-analyst 태스크 (4개)
  { title: "경쟁사 웹사이트 분석",
    description: "10-15개 경쟁사 분석: Vivify/Optum, CareSimple, HRS, ThoroughCare, HealthSnap, TimeDoc, ChronicCareIQ, Signallamp 등. competitor-list.md 참조",
    assignee: "competitor-analyst" },
  { title: "경쟁사 서비스/기능 비교 매트릭스",
    description: "행=경쟁사, 열=RPM/CCM/APCM/HRA/AWV/VBC/FHIR/다국어/가격. analysis-template.md의 매트릭스 형식 따름",
    assignee: "competitor-analyst" },
  { title: "경쟁사 메시징 패턴 분석",
    description: "업계 공통 콘텐츠 전략 패턴: 아웃컴 중심 vs 기능 중심, CTA 패턴, 신뢰 구축 전략",
    assignee: "competitor-analyst" },
  { title: "경쟁 포지셔닝 보고서",
    description: "HicareNet의 차별화 요소(다국어, 120+ 디바이스, 게이트웨이)와 갭 식별",
    assignee: "competitor-analyst" },

  // market-researcher 태스크 (5개)
  { title: "RPM/CCM 시장 데이터",
    description: "시장 규모(TAM), CAGR, 채택률, 성장 동인. 기존 데이터 보강. existing-data-inventory.md 확인 후 조사",
    assignee: "market-researcher" },
  { title: "APCM 규정/시장 조사",
    description: "CMS CY2025 PFS Final Rule APCM 조항, G0556 시행 세부사항, 예상 영향, 공급자 대응 동향",
    assignee: "market-researcher" },
  { title: "VBC/지불모델 전환 동향",
    description: "VBC 채택률, ACO 참여 현황, HEDIS/Stars 동향, 지불 모델 전환 추이",
    assignee: "market-researcher" },
  { title: "FHIR/상호운용성 동향",
    description: "FHIR R4 채택, ONC 규정, TEFCA, 21st Century Cures Act, 상호운용성 시장 규모",
    assignee: "market-researcher" },
  { title: "임상 근거/ROI 수집",
    description: "RPM/CCM 재입원 감소율, 비용 절감, 환자 만족도, ROI 벤치마크. PubMed 동료 검토 우선",
    assignee: "market-researcher" },

  // content-brief-synthesizer 태스크 (4개, 의존성 있음)
  { title: "솔루션별 콘텐츠 브리프 7개",
    description: "RPM/CCM/APCM/HRA/AWV/VBC/FHIR 각각의 콘텐츠 브리프 작성. 01_* 파일 전체 + 기존 데이터 교차 참조",
    assignee: "content-brief-synthesizer",
    depends_on: ["RPM 솔루션 프로파일", "CCM 솔루션 프로파일", "[CRITICAL] APCM 솔루션 프로파일",
                 "HRA 솔루션 프로파일", "AWV 솔루션 프로파일", "VBC 솔루션 프로파일",
                 "경쟁사 서비스/기능 비교 매트릭스", "RPM/CCM 시장 데이터", "APCM 규정/시장 조사"] },
  { title: "데이터 구조 변경 권고",
    description: "services.json, navigation.json, en.json/ko.json에 필요한 변경 사항 구조화",
    assignee: "content-brief-synthesizer",
    depends_on: ["솔루션별 콘텐츠 브리프 7개"] },
  { title: "갭 분석 보고서",
    description: "현재 프로젝트 데이터 vs 리서치 결과 비교. 콘텐츠/데이터/구조 갭 식별",
    assignee: "content-brief-synthesizer",
    depends_on: ["솔루션별 콘텐츠 브리프 7개"] },
  { title: "리서치 요약",
    description: "전체 리서치 결과 요약 (이해관계자 리뷰용)",
    assignee: "content-brief-synthesizer",
    depends_on: ["갭 분석 보고서", "데이터 구조 변경 권고"] }
])
```

## Phase 3: 병렬 리서치 (Fan-out)

3개 리서치 에이전트가 동시에 작업한다. content-brief-synthesizer는 의존 태스크 완료 대기.

### 팀원 간 통신 규칙

| 발신자 | 수신자 | 시점 | 내용 |
|--------|--------|------|------|
| solution-researcher | competitor-analyst | 솔루션 프로파일 완성 시 | CMS 코드 목록 공유 |
| solution-researcher | market-researcher | APCM 조사 중 | 규정 세부사항 추가 요청 |
| competitor-analyst | solution-researcher | 주목할 발견 시 | 경쟁사 기능 인사이트 |
| market-researcher | solution-researcher | 데이터 확보 시 | 채택률, 시장 규모 |
| market-researcher | competitor-analyst | 데이터 확보 시 | 업계 순위, 시장 점유율 |
| 3개 리서처 모두 | content-brief-synthesizer | 작업 완료 시 | 완료 신호 |

### 리더 모니터링
- `TaskGet`으로 진행 상황 확인
- 에이전트 idle 시 `SendMessage`로 상태 확인
- APCM 조사가 난항이면 대안 검색 경로 제시

## Phase 4: 통합 (Fan-in)

### 4-1. content-brief-synthesizer 활성화
Phase 3의 리서치 태스크들이 완료되면 content-brief-synthesizer가 작업 시작:

1. `_workspace/01_*.md` 파일 전체 읽기 (15개)
2. 기존 프로젝트 데이터 읽기 (services.json, en.json, ko.json, navigation.json, company-content-source.md)
3. 교차 검증 및 불일치 식별
4. 7개 콘텐츠 브리프 생성 → `_workspace/02_brief_*.md`
5. 데이터 구조 권고 생성 → `_workspace/02_data_structure_recommendations.json`
6. 갭 분석 보고서 생성 → `_workspace/02_gap_analysis_report.md`
7. 리서치 요약 생성 → `_workspace/02_research_summary.md`

### 4-2. 리더 검증
모든 Phase 4 산출물을 읽고:
- APCM 브리프에 G0556, 자격기준, Tier 구조, 빌링 워크플로우가 포함되었는지 확인
- HRA 브리프가 독립 서비스로 격상되었는지 확인
- 데이터 구조 권고에 services.json, navigation.json 변경 사항이 구체적인지 확인
- 갭 분석이 현재 상태와 목표 상태를 명확히 비교하는지 확인

부족한 부분이 있으면 `SendMessage`로 보충 요청.

## Phase 5: 정리 및 전달

### 5-1. 팀 종료
```
SendMessage(to: "all", message: "리서치 완료. 작업을 마무리해주세요.")
TeamDelete(team_name: "research-team")
```

### 5-2. _workspace/ 보존
중간 산출물은 삭제하지 않는다. 감사 추적과 빌드 하네스 입력으로 활용한다.

### 5-3. 최종 보고서 출력
사용자에게 다음을 보고한다:

```markdown
## 리서치 완료 보고

### 산출물 목록
| 파일 | 설명 | 상태 |
|------|------|------|
| _workspace/01_solution_apcm_profile.md | APCM 솔루션 프로파일 [신규] | ✅/⚠️ |
| ... | ... | ... |
| _workspace/02_research_summary.md | 전체 리서치 요약 | ✅/⚠️ |

### 핵심 발견
- APCM: [핵심 내용 요약]
- 경쟁사: [주요 인사이트]
- 시장: [주요 수치]

### 빌드 하네스 연결
- content-strategist → 02_brief_*.md 참조
- data-architect → 02_data_structure_recommendations.json 참조
- hicarenet-orchestrator → 02_gap_analysis_report.md 참조

### 미완료/주의 사항
- [불완전한 조사 영역]
- [미검증 데이터]
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 리서치 에이전트 1개 실패 | SendMessage로 상태 확인. 1회 재시도. 재실패 시 해당 결과 없이 진행, 최종 보고서에 갭 명시 |
| APCM 데이터 부족 | solution-researcher에게 CMS.gov Final Rule 직접 검색 지시. market-researcher에게 Federal Register 검색 지시. 부족 시 `[INCOMPLETE]` 표기 |
| 경쟁사 웹사이트 차단 | competitor-analyst에게 WebSearch 캐시 활용 지시. `[PARTIAL]` 표기 |
| 데이터 상충 | content-brief-synthesizer가 양쪽 모두 출처 병기. 삭제 금지 |
| 과반(2+) 실패 | 사용자에게 알림. 부분 결과 제시. 지시 대기 |
| 타임아웃 | 완성된 결과만 수집. content-brief-synthesizer가 부분 데이터로 작업. `[INCOMPLETE]` 표기 |

## 테스트 시나리오

### 정상 흐름
1. `/research-orchestrator` 실행
2. Phase 1: _workspace/00_input/ 생성, 스코프 문서 작성 (2분)
3. Phase 2: 4명 팀 구성, 19개 태스크 등록 (1분)
4. Phase 3: 3개 리서처 병렬 작업, SendMessage로 발견 공유 (15-20분)
5. Phase 4: synthesizer 통합, 10개 산출물 생성 (5-10분)
6. Phase 5: 팀 정리, 최종 보고 (1분)
7. 검증: _workspace/에 25개+ 파일, APCM 프로파일에 G0556 포함, 갭 분석에 6개 솔루션 모두 비교

### 에러 흐름
1. Phase 3에서 competitor-analyst가 주요 경쟁사 사이트 차단으로 지연
2. 리더가 idle 감지, SendMessage로 WebSearch 캐시 활용 지시
3. competitor-analyst가 [PARTIAL] 표기로 부분 결과 생성
4. Phase 4에서 synthesizer가 부분 데이터로 브리프 작성, 갭 보고서에 "[경쟁사 X: 직접 접근 불가, 검색 결과 기반 분석]" 명시
5. 최종 보고에 미완료 사항 포함
