---
name: skill-sync
description: 학습 진도 및 에이전트 문서 동기화 스킬. memo/dayXX.txt 새 학습 노트가 추가되거나 진도가 변경되었을 때 AGENTS.md, SKILLS.md, CLAUDE.md, codex.md, README.md, .cursorrules, 각 에이전트 스킬 폴더의 진도를 최신 상태로 동기화합니다.
---

# 학습 진도 및 에이전트 문서 동기화 (S10)

새로운 학습 노트(`memo/dayXX.txt`)나 실습 코드(`workspace/dayXX/`)가 추가되었을 때, 프로젝트 내 모든 AI 에이전트의 설정 문서를 최신 진도로 동기화합니다.

## 대상 문서 목록

1. `AGENTS.md`: 1. 현재 진도, 2. 디렉토리 구조, 4.4 허용 기술, 5. 학습 진도 요약 테이블, 7. 향후 확장 계획
2. `SKILLS.md`: 1.5 스킬 등록 경로, 4. 현재 학습 스택 표, 5. 학습 커리큘럼 로드맵, 6. 파일 네이밍 규칙
3. `CLAUDE.md`: 2.3 학습 진도 제약
4. `codex.md`: 2.3 학습 진도 준수
5. `README.md`: 1. 현재 진도, 2. 디렉토리 구조, 3. 학습 진도 로드맵 표
6. `.cursorrules`: 현재 학습 진도
7. `.cursor/rules/skills.mdc`: 4. 학습 진도 제한 (+ 필요 시 `s1~s10` 개별 규칙)
8. `.opencode/skills/*/SKILL.md`: 진도 의존 문구(허용 기술 범위)
9. `.agents/skills/*/SKILL.md`: `.opencode/skills/`와 동일 내용 유지

## 작업 절차

1. `memo/` 폴더를 조회하여 가장 최신 회차 파일(`dayXX.txt`)의 내용을 분석합니다. 내용이 비어 있는 회차는 진도 기준에서 제외합니다.
2. 새로 학습한 주요 개념(예: HTML, CSS, DOM, fetch, JSON, CRUD, Git, Docker 등) 및 실습 파일 목록을 파악합니다.
3. 대상 문서 9종을 차례로 확인하여 현재 진도 텍스트와 학습 허용 스택을 최신 회차 내용으로 일괄 수정합니다.
4. 스킬 파일은 `.opencode/skills/`, `.agents/skills/`, `.cursor/rules/` 세 경로가 항상 같은 내용을 유지하도록 함께 갱신합니다.
5. 모든 문서 작성 시 **이모지(Emoji) 사용을 절대 금지**합니다.
6. 수정 완료 후 변경된 문서 목록과 최신 반영 진도를 사용자에게 보고합니다.
