# 경쟁사 서비스/기능 비교 매트릭스

> [KNOWLEDGE-BASED: 2025년 5월까지 학습 데이터 기반]
> 분석일: 2026-04-02
> 분석자: competitor-analyst 에이전트
> 면책조항: 본 분석은 AI 학습 데이터(~2025년 5월)를 기반으로 작성되었습니다. 2025년 이후 변경사항은 [UNVERIFIED]로 표기합니다. 실제 사이트 접근을 통한 검증이 필요합니다.

---

## 1. 핵심 서비스 비교 매트릭스

| 기업 | Tier | RPM | CCM | APCM | HRA | AWV | VBC | FHIR | 다국어 | 가격 공개 | 디바이스 수 |
|------|------|-----|-----|------|-----|-----|-----|------|--------|----------|------------|
| **HicareNet** | — | O | O | X (미구현) | △ | O | O | 준비중 | EN/KR/ES | 부분 ($5K/월) | 120+ |
| **Vivify/Optum** | T1 | O | O | ? | △ | △ | O | O | EN (일부 ES) | X | 자체키트 |
| **CareSimple** | T1 | O | △ | X | X | X | △ | O | EN/FR | X | FDA-cleared 한정 |
| **HRS** | T1 | O | O | ? | △ | X | O | O | EN (일부 ES) | X | 자체키트 |
| **ThoroughCare** | T1 | O | O | **O** | O | O | O | O | EN | 부분 | 제3자 통합 |
| **HealthSnap** | T1 | O | O | ? | X | X | △ | O | EN | 부분 | 셀룰러 기반 |
| **TimeDoc Health** | T1 | O | O | ? | X | X | △ | O | EN | X | 제3자 통합 |
| **ChronicCareIQ** | T1 | O | O | ? | △ | O | △ | O | EN | X | 제3자 통합 |
| **Signallamp** | T1 | O | O | ? | X | X | △ | △ | EN | X | 제3자 통합 |
| **Prevounce** | T2 | O | O | ? | **O** | **O** | △ | O | EN | X | 제3자 통합 |
| **WellTrackONE** | T2 | X | X | ? | **O** | **O** | △ | △ | EN | X | N/A |
| **Optimize Health** | T2 | O | △ | X | X | X | △ | O | EN | X | 제3자 통합 |
| **Rimidi** | T2 | O | O | ? | X | X | **O** | O (SMART on FHIR) | EN | X | 제3자 통합 |
| **Athenahealth** | T3 | △ (파트너) | △ | ? | △ | △ | △ | O | EN | X | EHR 통합 |
| **Epic (MyChart)** | T3 | △ (파트너) | △ | ? | △ | △ | △ | O | 다국어 | X | EHR 통합 |
| **Teladoc** | T3 | O (Livongo) | △ | ? | X | X | △ | O | EN/ES | X | Livongo 키트 |

**범례**: O=지원, X=미지원, △=부분지원, ?=미확인

---

## 2. APCM 지원 현황 (중점 분석)

| 기업 | APCM 지원 | 상세 |
|------|----------|------|
| **ThoroughCare** | **O** | 전용 APCM 페이지 보유. G0556 워크플로우, Tier 구조, 자격기준 기술 |
| **HicareNet** | **X** | 현재 미구현. 홈페이지/서비스에 APCM 콘텐츠 없음 |
| Vivify/Optum | ? | Optum 규모에서 추가 가능성 있으나 공개 정보 없음 |
| CareSimple | X | RPM 전문. 케어 관리 프로그램 확장 미확인 |
| HRS | ? | 케어 관리 확장 가능성 있으나 APCM 특정 콘텐츠 미확인 |
| HealthSnap | ? | RPM/CCM 중심. APCM 언급 미확인 |
| TimeDoc Health | ? | CCM 전문이므로 APCM 확장 가능성 있음. 미확인 |
| ChronicCareIQ | ? | CCM/AWV 지원하므로 APCM 추가 가능성. 미확인 |
| Signallamp | ? | 미확인 |
| Prevounce | ? | AWV/HRA 전문이므로 APCM 관련 가능성. 미확인 |

**핵심 인사이트**: APCM(Advanced Primary Care Management)은 CMS CY2025 PFS에서 신설된 프로그램으로, 2025년 1월 시행 이후 아직 시장 침투 초기 단계이다. ThoroughCare만이 명확한 APCM 지원을 확인할 수 있으며, 이는 HicareNet에게 **조기 진입 기회**를 의미한다.

---

## 3. 기능 상세 비교 (RPM 중심)

| 기능 | HicareNet | Vivify | CareSimple | HRS | HealthSnap | Optimize |
|------|-----------|--------|------------|-----|------------|----------|
| 디바이스 연동 수 | 120+ | 자체키트 (제한) | FDA-cleared | 자체키트 | 셀룰러 | 제3자 |
| BT 자동 페어링 | O | △ | O | △ | X (셀룰러) | △ |
| 셀룰러 디바이스 | X | X | X | X | **O** | X |
| 게이트웨이/허브 | **O** (HH-800A/930) | X | X | X | X | X |
| AI 분석/리포트 | O | O | △ | △ | △ | △ |
| 환자 앱 | O (고령층 친화) | O | O | O (태블릿) | O | O |
| 의료진 포털 | O | O | O | O | O | O |
| 실시간 알림 | O | O | O | O | O | O |
| 환자 교육 콘텐츠 | △ (음성안내) | O | X | **O** (라이브러리) | △ | △ |
| 비디오 방문 | X | O | X | O | X | X |
| 자동 빌링/코딩 | O | O | △ | △ | O | △ |

---

## 4. 서비스 모델 비교

| 기업 | 서비스 모델 | 설명 |
|------|-----------|------|
| **HicareNet** | SaaS + 하드웨어 렌탈 | 플랫폼 구독 + 기기 임대 (월 $15/기기 + $500 플랫폼) |
| Vivify/Optum | Enterprise SaaS | 대형 헬스시스템 대상 Enterprise 계약 |
| CareSimple | Enterprise SaaS | 화이트 라벨 가능 플랫폼 라이선싱 |
| HRS | SaaS + 키트 배송 | 턴키 키트(태블릿+디바이스) 배송 + 플랫폼 |
| ThoroughCare | SaaS (환자당) | 환자당 월 구독. 가격 문의형 |
| HealthSnap | SaaS + 턴키 서비스 | 기기 배송 + 임상 지원 + 빌링까지 포함 |
| TimeDoc Health | 기술 + 서비스 | 소프트웨어 + 전담 임상팀 아웃소싱 |
| ChronicCareIQ | SaaS (환자당) | 소프트웨어 구독형 |
| Signallamp | 기술 + 서비스 | TimeDoc과 유사한 하이브리드 모델 |
| Prevounce | SaaS | AWV/CCM 소프트웨어 구독 |
| WellTrackONE | 완전 서비스 | 간호사 파견형 AWV 서비스 |

---

## 5. EHR 통합/FHIR 비교

| 기업 | FHIR | 주요 EHR 통합 | 비고 |
|------|------|-------------|------|
| HicareNet | 준비중 (H1 2026 목표) | [UNVERIFIED] | FHIR 기반 EMR 연동 준비 중 |
| Vivify/Optum | O | Epic, Cerner, athena | Optum 생태계 통합 |
| CareSimple | O | 다수 EHR | 개방형 아키텍처 강조 |
| HRS | O | Epic, Cerner, athena, Meditech | 다수 EHR 통합 경험 |
| ThoroughCare | O | 다수 EHR | 광범위 통합 |
| HealthSnap | O | 주요 EHR | 통합 지원 |
| TimeDoc | O | 주요 EHR | 통합 지원 |
| Rimidi | O | Epic (SMART on FHIR) | SMART on FHIR 선도 |

---

## 6. 보안/인증 비교

| 기업 | HIPAA | ISO 27001 | ISO 27701 | SOC 2 | HITRUST | 비고 |
|------|-------|-----------|-----------|-------|---------|------|
| **HicareNet** | O | **O** | **O** | ? | X | 이중 ISO 인증이 차별점 |
| Vivify/Optum | O | ? | ? | O | O | Optum 수준 보안 |
| CareSimple | O | ? | ? | O | ? | SOC 2 강조 |
| HRS | O | ? | ? | O | ? | HIPAA + SOC 2 |
| ThoroughCare | O | ? | ? | ? | ? | HIPAA 준수 |
| HealthSnap | O | ? | ? | ? | ? | HIPAA 준수 |
| TimeDoc | O | ? | ? | ? | ? | HIPAA 준수 |

**핵심 인사이트**: HicareNet의 ISO 27001 + ISO 27701 이중 인증은 경쟁사 대비 명확한 보안 차별점이다. 대부분 경쟁사는 HIPAA + SOC 2 수준에 머물며, 국제 표준 ISO 인증을 보유한 기업은 극소수이다.

---

## 7. 타겟 고객 세그먼트 비교

| 기업 | 대형 헬스시스템 | 중소 클리닉 | FQHC | ACO | SNF | 홈헬스 | 보험사 |
|------|-------------|-----------|------|-----|-----|-------|-------|
| HicareNet | X | **O** | △ | △ | △ | X | X |
| Vivify/Optum | **O** | X | X | O | X | X | **O** |
| CareSimple | O | △ | X | X | X | X | X |
| HRS | O | △ | X | X | **O** | **O** | X |
| ThoroughCare | △ | **O** | **O** | O | X | X | X |
| HealthSnap | X | **O** | O | X | X | X | X |
| TimeDoc | △ | **O** | O | O | X | X | X |
| ChronicCareIQ | X | **O** | X | X | X | X | X |
| Signallamp | △ | O | X | O | X | X | X |
| Prevounce | X | **O** | O | X | X | X | X |

---

## 8. 경쟁 포지션 맵 (2x2 매트릭스)

```
          넓은 서비스 범위
               |
   Optum/      |     ThoroughCare
   Vivify      |     (CCM/RPM/AWV/APCM/
   (Enterprise)|      TCM/BHI/PCM)
               |
 대형 ---------|---------- 중소
 고객          |          고객
               |
   Teladoc     |     HicareNet
   Epic        |     HealthSnap
   (플랫폼     |     ChronicCareIQ
    거대 규모)  |     TimeDoc
               |
          좁은 서비스 범위
```

### 포지션 해석
- **좌상단 (넓은 범위 + 대형 고객)**: Vivify/Optum — Enterprise VBC 종합 솔루션
- **우상단 (넓은 범위 + 중소 고객)**: ThoroughCare — 중소 클리닉 대상 가장 넓은 프로그램 커버리지
- **좌하단 (좁은 범위 + 대형 고객)**: Epic, Teladoc — EHR/가상케어 플랫폼의 부가 기능
- **우하단 (좁은 범위 + 중소 고객)**: HicareNet, HealthSnap, ChronicCareIQ — RPM/CCM 전문 중소 타겟

### HicareNet 이동 방향
HicareNet은 현재 **우하단**(RPM/CCM 중심 + 중소 클리닉)에 위치한다.
APCM/HRA 추가 및 VBC 강화를 통해 **우상단**(넓은 범위 + 중소 고객)으로 이동해야 하며, 이는 ThoroughCare와의 직접 경쟁을 의미한다. 그러나 HicareNet의 **다국어 + 120+ 디바이스 + 게이트웨이 + ISO 인증**은 ThoroughCare에 없는 차별점이다.

---

## 9. 종합 점수 비교 (주관적 평가)

> 주의: 아래 점수는 공개 정보 기반의 정성적 평가이며 정량적 측정이 아닙니다.

| 기업 | 서비스 폭 (10) | 기술 깊이 (10) | 시장 접근성 (10) | 브랜드 인지도 (10) | 종합 |
|------|------------|------------|-------------|-------------|------|
| ThoroughCare | 9 | 7 | 8 | 6 | 30 |
| Vivify/Optum | 8 | 8 | 6 (Enterprise) | 9 | 31 |
| HRS | 7 | 7 | 7 | 7 | 28 |
| HicareNet | 6 | 8 | 7 | 4 | 25 |
| HealthSnap | 5 | 7 | 8 | 5 | 25 |
| TimeDoc | 6 | 6 | 7 | 5 | 24 |
| ChronicCareIQ | 6 | 6 | 7 | 4 | 23 |
| CareSimple | 4 | 8 | 6 | 5 | 23 |
| Signallamp | 5 | 5 | 6 | 3 | 19 |

**HicareNet 강점**: 기술 깊이(120+ 디바이스, AI 리포트, 게이트웨이)에서 높은 점수. 서비스 폭(APCM 미구현)과 브랜드 인지도에서 개선 필요.
