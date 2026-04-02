# 정보원 신뢰도 순위

## Tier 1: 최고 신뢰 (공식 정부/학술 출처)

| 출처 | 유형 | URL 패턴 | 용도 |
|------|------|---------|------|
| CMS.gov | 미국 정부 | cms.gov | 규정, 코드, 수가, 프로그램 정의 |
| Federal Register | 미국 정부 | federalregister.gov | Final Rule 원문, 규정 변경 |
| ONC.gov | 미국 정부 | healthit.gov | 상호운용성, FHIR 정책 |
| PubMed / NCBI | 학술 | pubmed.ncbi.nlm.nih.gov | 동료 검토 임상 연구 |
| AHRQ | 미국 정부 | ahrq.gov | 의료 품질 연구 |
| CBO | 미국 정부 | cbo.gov | 재정 영향 분석 |

## Tier 2: 높은 신뢰 (준공식/학회)

| 출처 | 유형 | 용도 |
|------|------|------|
| CMS Innovation Center (CMMI) | 준정부 | 혁신 모델, 시범 프로그램 |
| AMA (American Medical Association) | 학회 | CPT 코드 정의, 의료 정책 |
| ATA (American Telemedicine Association) | 학회 | 원격의료 동향, 채택 데이터 |
| PCORI | 연구기관 | 비교효과 연구 |
| KFF (Kaiser Family Foundation) | 비영리 연구 | Medicare/Medicaid 데이터, 정책 분석 |
| HIMSS | 학회 | 의료 IT 동향, 디지털 헬스 |

## Tier 3: 보통 신뢰 (시장조사 기관)

| 출처 | 유형 | 주의사항 |
|------|------|---------|
| Grand View Research | 시장조사 | 유료 보고서. 무료 요약만 사용 가능. 시장 규모 추정치 |
| Fortune Business Insights | 시장조사 | 유료. CAGR 전망 |
| MarketsandMarkets | 시장조사 | 유료. 시장 세분화 |
| Allied Market Research | 시장조사 | 유료. 지역별 분석 |
| Frost & Sullivan | 시장조사 | 유료. 기술 동향 |
| McKinsey & Co. | 컨설팅 | 무료 공개 보고서/기사 활용 |
| Deloitte | 컨설팅 | Healthcare Outlook 등 공개 자료 |

**Tier 3 사용 원칙**: 무료 공개 요약/보도자료만 사용. "보고서에 따르면" 형태로 간접 인용. 복수 기관의 수치를 교차 검증.

## Tier 4: 참고 수준 (업계 뉴스/기업)

| 출처 | 유형 | 주의사항 |
|------|------|---------|
| Healthcare IT News | 업계 뉴스 | 최신 동향. 수치는 교차 확인 필요 |
| Becker's Hospital Review | 업계 뉴스 | 병원 경영 동향 |
| Modern Healthcare | 업계 뉴스 | 의료 산업 뉴스 |
| 기업 보도자료 | 기업 | 자사 유리 편향 가능. 사실만 추출 |
| 기업 블로그 | 기업 | 마케팅 의도 포함. 참고용 |
| LinkedIn 게시물 | 개인/기업 | 비공식. 교차 확인 필수 |

**Tier 4 사용 원칙**: 단독 출처로 사용 금지. 반드시 Tier 1-3 출처로 교차 확인. 확인 불가 시 `[UNVERIFIED]` 표기.

## 교차 검증 규칙

1. **시장 규모 수치**: 최소 2개 Tier 3 기관의 수치를 비교. 20% 이상 차이 시 양쪽 모두 병기.
2. **채택률/비율**: Tier 1-2 출처 우선. 없으면 Tier 3 + Tier 4 복수 확인.
3. **임상 성과**: PubMed 동료 검토 논문만 `[VERIFIED]` 가능. 기업 사례 연구는 `[REPORTED]`.
4. **수가 정보**: CMS.gov 공식 Fee Schedule만 `[VERIFIED]`. 기타는 모두 `[UNVERIFIED]`.
5. **규정 해석**: Federal Register 원문 > CMS 가이던스 > AMA 해석 > 업계 해석 순서.
