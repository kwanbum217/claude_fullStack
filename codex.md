# codex.md — Codex AI 에이전트 가이드

> OpenAI Codex 및 관련 에이전트는 이 프로젝트에서 작업할 때 
> 아래 지침과 `AGENTS.md`, `SKILLS.md`를 우선 수용하여 수행합니다.

---

## 1. 필수 참고 문서
- [AGENTS.md](AGENTS.md): 프로젝트 개요, 공통 규칙, 학습 진도, 파일 관리 규칙
- [SKILLS.md](SKILLS.md): S1~S10 스킬 상세 정의, 스킬 매핑, 허용 기술 스택

---

## 2. Codex 핵심 준수 사항

### 2.1 언어 및 주석
- 소통 언어 및 코드 주석은 **한국어**로 작성합니다.
- 기술 용어는 영어 원문을 병기합니다. (예: 선택자(Selector))

### 2.2 이모지 사용 금지
- 코드, 주석, 문서 등 모든 결과물에서 **이모지(Emoji)를 절대 사용하지 않습니다.**

### 2.3 학습 진도 준수
- 현재 진도: **11회차 (HTML/CSS/JS, Git & GitHub, Docker 기초, Node.js/Express 기초 완료, Prisma ORM/SQLite 학습 중)**
- 미학습 기술(React, MongoDB/MySQL 등)은 생성 금지.
- 소스 코드 생성 시 힌트와 설명 주석을 충실히 작성합니다.

### 2.4 코딩 컨벤션
- HTML: `<!DOCTYPE html>`, `<meta charset="UTF-8">`, 공백 2칸(2 spaces) 들여쓰기.
- CSS: 외부 스타일시트 권장, 파일명 소문자+언더스코어(_).
