# 리서치 스코프 문서

**생성일**: 2026-04-02
**범위**: 전체 리서치 (6개 솔루션 + 경쟁사 + 시장)

---

## 1. 조사 범위

### 솔루션 도메인 (6개)
| 솔루션 | 현재 상태 | 우선순위 | 조사 방향 |
|--------|----------|---------|----------|
| RPM | 존재 (services.json + i18n 완비) | 보강 | 최신 수가, 시장 동향 보강 |
| CCM | 존재 (services.json + i18n 완비) | 보강 | 다국어 케어 코디네이션 각도 보강 |
| APCM | **완전 누락** | **최우선 (CRITICAL)** | 신규 완전 조사: G0556, CY2025 PFS, Tier 구조, 자격기준, 빌링 워크플로우 |
| HRA | AWV 하위 기능으로만 언급 | 높음 (HIGH) | 독립 서비스로 격상, 디지털 HRA 도구, AWV/APCM 연계 |
| AWV | 존재 (services.json + i18n 완비) | 보강 | IPPE, 예방 계획, HRA 통합 보강 |
| VBC | 존재 (services.json + i18n 완비) | 보강 | 품질 지표(HEDIS/Stars), ACO 모델 보강 |

### 경쟁사 분석
- 10-15개 주요 경쟁사 웹사이트/서비스 분석
- 서비스/기능 비교 매트릭스 (특히 APCM 지원 여부)
- 메시징 패턴 분석
- HicareNet 차별화 포지셔닝

### 시장 데이터
- RPM/CCM 시장 규모, CAGR, 채택률
- APCM CMS CY2025 PFS 규정
- VBC/지불모델 전환 동향
- FHIR/상호운용성 동향
- 임상 근거/ROI 벤치마크

---

## 2. 기존 데이터 현황

### services.json (4개 서비스 등록)
- RPM: CPT 99453/99454/99457/99458
- CCM: CPT 99490/99491/99487/99489
- AWV: G0438/G0439
- VBC: CPT 코드 없음

### navigation.json (5개 메뉴)
- Solutions: rpm, ccm, awv, vbc, fhir
- APCM, HRA 네비게이션 없음

### i18n/en.json
- home, solutions, about, resources, compliance, contact 섹션 존재
- solutions.rpm/ccm/awv/vbc 완비
- solutions.apcm, solutions.hra 키 없음

### company-content-source.md 핵심 통계
- 20년+ 기술 축적
- 120종+ 의료기기 연동
- 40개 병원, 3,000명+ 환자
- VA 게이트웨이 10,000대+ 수출
- RPM 시장: $1.7B(2023) → $6.3B(2030), CAGR 18.4%
- CCM 시장: $2.2B(2024) → $18.8B(2034), CAGR 11.7%

---

## 3. 팀원별 담당 영역

### solution-researcher
- RPM/CCM/APCM/HRA/AWV/VBC 6개 솔루션 프로파일
- APCM 최우선: apcm-research-guide.md 참조 필수
- solution-profile-template.md 형식 따름

### competitor-analyst
- 10-15개 경쟁사 분석 (competitor-list.md 참조)
- 서비스/기능 비교 매트릭스 (analysis-template.md 형식)
- 메시징 패턴 + 포지셔닝 보고서
- 각 경쟁사 APCM 지원 여부 필수 확인

### market-researcher
- RPM/CCM 시장 데이터 보강 (existing-data-inventory.md로 중복 방지)
- APCM CMS CY2025 규정 우선 조사
- VBC/FHIR 동향 + 임상 근거/ROI
- source-priority.md의 출처 신뢰도 계층 따름

### content-brief-synthesizer (Phase 4)
- 위 3개 리서처 결과 통합
- 7개 콘텐츠 브리프 (RPM/CCM/APCM/HRA/AWV/VBC/FHIR)
- 데이터 구조 변경 권고
- 갭 분석 보고서
- 리서치 요약

---

## 4. 산출물 파일 규칙

| 접두사 | 산출자 | 설명 |
|--------|--------|------|
| 01_solution_*.md | solution-researcher | 솔루션 프로파일 |
| 01_competitor_*.md | competitor-analyst | 경쟁사 분석 |
| 01_market_*.md | market-researcher | 시장 데이터 |
| 02_brief_*.md | content-brief-synthesizer | 콘텐츠 브리프 |
| 02_data_structure_recommendations.json | content-brief-synthesizer | 데이터 구조 권고 |
| 02_gap_analysis_report.md | content-brief-synthesizer | 갭 분석 |
| 02_research_summary.md | content-brief-synthesizer | 리서치 요약 |

모든 파일은 `_workspace/` 디렉토리에 저장한다.
