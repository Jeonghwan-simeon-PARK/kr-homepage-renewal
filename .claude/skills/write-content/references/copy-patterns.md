# 카피 작성 패턴 상세 가이드

## 솔루션별 메시징 각도

### RPM (Remote Patient Monitoring)
- **핵심 아웃컴**: 재입원 감소, 조기 개입, 환자 참여 향상
- **차별화**: 120+ 디바이스 호환, 7개 언어, 게이트웨이 하드웨어
- **타겟 pain point**: 디바이스 파편화, 환자 비순응, 인력 부족
- **톤**: 기술 신뢰도 + 운영 효율성

### CCM (Chronic Care Management)
- **핵심 아웃컴**: 만성질환 환자 삶의 질 개선, 의료비 절감
- **차별화**: 다국어 케어 코디네이션, Care Portal 통합
- **타겟 pain point**: 케어 코디네이션 부담, 빌링 복잡성, 환자 커뮤니케이션
- **톤**: 환자 중심 + 효율적 운영

### APCM (Advanced Primary Care Management)
- **핵심 아웃컴**: 종합적 1차 진료 관리, CCM 대비 확장된 커버리지
- **차별화**: CCM→APCM 전환 지원, 기존 플랫폼 활용
- **타겟 pain point**: 새 프로그램 도입 부담, CCM과의 관계 혼란
- **톤**: 안내적 + 선도적 (새 프로그램이므로 교육적 요소 포함)
- **특별 고려**: APCM이 아직 생소하므로, "what is APCM" 설명을 자연스럽게 포함

### HRA (Health Risk Assessment)
- **핵심 아웃컴**: 건강 위험 조기 식별, 예방 계획 수립
- **차별화**: 디지털 HRA 도구, AWV/APCM 통합
- **타겟 pain point**: 수동 평가의 시간 소요, 데이터 활용 부족
- **톤**: 예방적 + 데이터 기반

### AWV (Annual Wellness Visit)
- **핵심 아웃컴**: Medicare 예방 서비스 수가 확보, 환자-공급자 관계 강화
- **차별화**: 자동화된 HRA, 워크플로우 효율화
- **타겟 pain point**: AWV 실시율 저조, 문서화 부담
- **톤**: Medicare 전문성 + 효율화

### VBC (Value-Based Care)
- **핵심 아웃컴**: 품질 지표 개선, 공유 절감 실현
- **차별화**: HEDIS/Stars 최적화 대시보드, RPM/CCM 데이터 통합
- **타겟 pain point**: 지표 추적 어려움, 데이터 사일로, ROI 입증
- **톤**: 전략적 + 데이터 기반

### FHIR Integration
- **핵심 아웃컴**: EMR 연동 자동화, 데이터 상호운용성
- **차별화**: H1 2026 출시 예정, ONC 규정 대응
- **타겟 pain point**: 수동 데이터 입력, EMR 파편화
- **톤**: 미래 지향 + 규정 대응 (Coming Soon 느낌)

## 페이지별 카피 구조

### Home Page
```
Hero: 전체 서비스를 아우르는 아웃컴 중심 메시지
Stats: 40+ hospitals, 3000+ patients, 120+ devices, 99.9% uptime
Services Preview: 각 솔루션 1줄 요약 + 링크
Trust: HIPAA + ISO 27001 + ISO 27701 배지
CTA: "Schedule a Demo" / "See Our Solutions"
```

### Solutions Page
```
각 솔루션 섹션:
  Anchor nav (RPM | CCM | APCM | HRA | AWV | VBC | FHIR)
  Per solution:
    Icon + Title + Lead paragraph
    Key points (4-5 bullets)
    CPT codes (card/badge 형태)
    "Learn More" → 상세 모달 또는 하위 페이지
```

## EN/KO 적응 규칙

| 영어 패턴 | 한국어 적응 |
|----------|-----------|
| "Reduce readmissions by X%" | "재입원율 X% 감소" (수동태→능동태) |
| "Empower your care team" | "케어 팀의 역량을 강화하세요" (명령형→권유형) |
| "Trusted by 40+ hospitals" | "40개 이상 병원이 신뢰하는" (수식형) |
| "Schedule a Demo" | "데모 예약하기" |
| "Get Started" | "시작하기" |
| "Learn More" | "자세히 보기" |

## 수치 표현 규칙

- 홈페이지에는 `[VERIFIED]`/`[REPORTED]` 수치만 사용
- "200+" 형태의 보수적 하한값 표현
- 출처를 각주 또는 툴팁으로 제공할 수 있도록 source 필드 포함
- 연도 명시: "As of 2025" / "2025년 기준"
