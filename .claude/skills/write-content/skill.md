---
name: write-content
description: "리서치 브리프를 기반으로 홈페이지 마케팅 카피를 EN/KO 양국어로 작성하는 스킬. 솔루션별 히어로, 서비스 설명, CTA, 통계, SEO 메타데이터를 Vivify Health 패턴(아웃컴 중심)으로 작성한다. '콘텐츠 작성', '카피 작성', '마케팅 카피', 'write copy', 'write content', '홈페이지 카피' 요청 시 반드시 이 스킬을 사용할 것. 코드 작성이나 리서치 수집에는 사용하지 않는다."
---

# /write-content - 리서치 브리프 → 홈페이지 마케팅 카피

## 개요

`_workspace/02_brief_*.md` 리서치 브리프를 읽고, 각 솔루션에 대한 홈페이지 마케팅 카피를 EN/KO 양국어로 작성한다. Vivify Health 패턴(Outcome over Feature)을 따르며, 기존 프로젝트의 톤/용어와 일관성을 유지한다.

## 전제 조건

이 스킬은 리서치 하네스(`/research-orchestrator`)가 완료된 후에 실행한다. `_workspace/02_brief_*.md` 파일이 존재해야 한다.

## 카피 작성 워크플로우

### 1단계: 입력 분석
- `_workspace/02_brief_*.md` 7개 파일을 모두 읽는다
- `_workspace/01_competitor_messaging_patterns.md`를 읽어 차별화 포인트를 파악한다
- 기존 `data/i18n/en.json`을 읽어 현재 톤과 용어 패턴을 학습한다
- 기존 `data/i18n/ko.json`을 읽어 한국어 톤 패턴을 학습한다

### 2단계: 솔루션별 카피 작성

각 솔루션에 대해 다음 섹션을 작성한다:

**Hero Section**
- headline (EN: 8-12 words, KO: 적응)
- subtext (EN: 15-25 words, KO: 적응)
- CTA primary + secondary

**Service Description**
- lead (1-2 문장, 아웃컴 중심)
- key_points (4-5개, "benefit → supporting feature" 패턴)
- CPT codes display (코드 + 간략 설명)

**Stats / Social Proof**
- 브리프의 `[VERIFIED]`/`[REPORTED]` 데이터만 사용
- 보수적 표현: "200+" 형태

**CTA Section**
- 구체적 행동 + 혜택 결합

**SEO Metadata**
- meta_title (50-60 chars)
- meta_description (150-160 chars)
- keywords (primary + secondary)

### 3단계: 공통 요소 작성
- 홈페이지 히어로 (전체 서비스를 아우르는 카피)
- 공유 CTA (demo 요청, 연락처)
- 인증 배지 텍스트 (HIPAA, ISO 27001, ISO 27701)
- 통계 카운터 (40+ hospitals, 3000+ patients 등)

### 4단계: KO 적응
- 직역이 아닌 한국 비즈니스 맥락 적응
- 한국어가 EN보다 30% 이상 길어지지 않도록 압축
- 한국 의료 IT 시장 용어 사용:
  - RPM → 원격환자모니터링
  - CCM → 만성질환관리
  - APCM → 고급1차진료관리 (또는 CMS 공식 한국어 용어 확인)
  - HRA → 건강위험평가
  - AWV → 연례건강검진
  - VBC → 가치기반의료

## 카피 패턴 가이드

### 좋은 예 (Outcome-focused)
```
EN: "Reduce 30-Day Readmissions with Proactive Remote Monitoring"
KO: "사전 원격 모니터링으로 30일 재입원율 감소"
```

### 나쁜 예 (Feature-focused)
```
EN: "Advanced RPM Platform with Real-Time Dashboard"
KO: "실시간 대시보드가 포함된 고급 RPM 플랫폼"
```

### CTA 패턴
```
좋은 예: "See How RPM Reduces Readmissions — Request a Demo"
나쁜 예: "Learn More"
```

### Value Proposition 패턴
```
좋은 예: "Support 120+ medical devices — integrate with your existing patient ecosystem without hardware changes"
나쁜 예: "We support 120+ medical devices"
```

## 출력 파일 목록

| 파일 | 내용 |
|------|------|
| `_workspace/03_copy_rpm.md` | RPM 솔루션 카피 (EN/KO) |
| `_workspace/03_copy_ccm.md` | CCM 솔루션 카피 |
| `_workspace/03_copy_apcm.md` | APCM 솔루션 카피 **[신규]** |
| `_workspace/03_copy_hra.md` | HRA 솔루션 카피 **[신규]** |
| `_workspace/03_copy_awv.md` | AWV 솔루션 카피 |
| `_workspace/03_copy_vbc.md` | VBC 솔루션 카피 |
| `_workspace/03_copy_fhir.md` | FHIR 솔루션 카피 |
| `_workspace/03_copy_home_hero.md` | 홈페이지 히어로 섹션 |
| `_workspace/03_copy_shared.md` | 공통 CTA, 인증, 통계 |

## 상세 가이드

카피 작성 시 참고할 상세 패턴은 `references/copy-patterns.md`를 참조한다.
