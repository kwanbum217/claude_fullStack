---
name: skill-sync
description: 학습 진도 및 에이전트 문서 동기화 스킬. memo/dayXX.txt 새 학습 노트가 추가되거나 진도가 변경되었을 때 AGENTS.md, SKILLS.md, CLAUDE.md, codex.md, .cursorrules 등의 모든 에이전트 문서 진도를 최신 상태로 동기화합니다.
---

# 학습 진도 및 에이전트 문서 동기화 (S10)

새로운 학습 노트(`memo/dayXX.txt`)나 실습 코드(`workspace/dayXX/`)가 추가되었을 때, 프로젝트 내 모든 AI 에이전트의 설정 문서를 최신 진도로 동기화합니다.

## 대상 문서 목록

1. `AGENTS.md`: 현재 진도, 디렉토리 구조, 학습 진도 요약 테이블
2. `SKILLS.md`: 1. 스킬 목록 총괄, 4. 현재 학습 스택, 5. 학습 커리큘럼 로드맵
3. `CLAUDE.md`: 2.3 학습 진도 제약
4. `codex.md`: 2.3 학습 진도 준수
5. `.cursorrules`: 현재 학습 진도
6. `.cursor/rules/skills.mdc`: 4. 학습 진도 제한

## 작업 절차

1. `memo/` 폴더를 조회하여 가장 최신 회차 파일(`dayXX.txt`)의 내용을 분석합니다.
2. 새로 학습한 주요 개념(예: HTML, CSS, DOM, fetch, JSON, CRUD 등) 및 실습 파일 목록을 파악합니다.
3. 대상 문서 6종을 차례로 확인하여 현재 진도 텍스트와 학습 허용 스택을 최신 회차 내용으로 일괄 수정합니다.
4. 모든 문서 작성 시 **이모지(Emoji) 사용을 절대 금지**합니다.
5. 수정 완료 후 변경된 문서 목록과 최신 반영 진도를 사용자에게 보고합니다.
