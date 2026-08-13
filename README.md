# claude_fullStack — 풀스택 웹 개발 학습 프로젝트

> 오프라인 수업 내용을 바탕으로 개념 메모 정리, 실습 코드 작성, 그리고 다중 AI 에이전트(Claude, Codex, Cursor, Antigravity, OpenCode)와 협업하며 풀스택 웹 개발 기술을 습득하는 프로젝트입니다.

---

## 1. 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | **claude_fullStack** |
| 학습 목표 | HTML5 $\rightarrow$ CSS3 $\rightarrow$ JavaScript $\rightarrow$ Node.js $\rightarrow$ React $\rightarrow$ Database(MongoDB/MySQL) 풀스택 개발 역량 강화 |
| 현재 진도 | **9회차** (HTML, CSS, JavaScript 기초/DOM/JSON/CRUD, Git & GitHub 완료 / Docker 기초 학습 중) |
| 개발 환경 | VS Code, Chrome Browser, Node.js, Git, GitHub, Docker Desktop |
| 소통/주석 | 한국어 (기술 용어 영어 원문 병기) |

---

## 2. 디렉토리 구조

```
claude_fullStack/
├── README.md            # 프로젝트 상세 안내 문서 (이 파일)
├── AGENTS.md            # AI 에이전트 협업 가이드
├── SKILLS.md            # 에이전트 역할 및 스킬(S1~S10) 정의서
├── CLAUDE.md            # Anthropic Claude 전용 지침서
├── codex.md             # OpenAI Codex 전용 지침서
├── .cursorrules         # Cursor IDE 전용 지침서
├── .opencode/           # OpenCode 스킬 (S1~S10 SKILL.md)
├── .agents/             # 범용 에이전트 스킬 (S1~S10 SKILL.md)
├── .cursor/rules/       # Cursor 스킬 규칙 (s1~s10 .mdc)
├── memo/                # 회차별 수업 메모 (일차별 학습 노트)
│   ├── ot.txt           # OT — 과정 소개, 개발환경 세팅
│   ├── day01.txt        # 1회차 — 웹 개요, HTTP, HTML 기초 및 태그
│   ├── day02.txt        # 2회차 — 리스트, 테이블, 폼, 시맨틱 태그
│   ├── day03.txt        # 3회차 — CSS 소개, 텍스트 스타일링, 색상
│   ├── day04.txt        # 4회차 — CSS 적용 방법, 선택자 4종, 박스 모델, display
│   ├── day05.txt        # 5회차 — CSS 레이아웃, JS 변수 및 함수
│   ├── day06.txt        # 6회차 — DOM 조작, fetch 비동기 통신, HTTP/API 흐름
│   ├── day07.txt        # 7회차 — JSON 이해, 기능 명세 프롬프트, 미니 게시판 CRUD
│   ├── day08.txt        # 8회차 — Git 개념, git init/status/add/commit, GitHub 연동
│   ├── day09.txt        # 9회차 — Docker 개념, 이미지/컨테이너, Dockerfile, docker 명령어
│   └── day10.txt        # 10회차 — (작성 예정)
├── resource/            # 학습 리소스 (이미지, 참고 자료 등)
└── workspace/           # 회차별 실습 코드
    ├── day01/           # 1회차 실습 (login1.html)
    ├── day02/           # 2회차 실습 (index3.html)
    ├── day03/           # 3회차 실습 (외부 CSS, 프로필 페이지, standard_html)
    ├── day04/           # 4회차 실습 (박스 모델, display, 선택자 실습)
    ├── day05/           # 5회차 실습 (JS 변수/함수, DOM 기본)
    ├── day06/           # 6회차 실습 (fetch API 연동, DOM 조작)
    ├── day07/           # 7회차 실습 (미니 게시판 CRUD — index1.html, style1.css, script1.js)
    ├── day08/           # 8회차 실습 (Git 저장소 실습 — git_practics)
    └── day09/           # 9회차 실습 (board-docker — Dockerfile 작성 및 이미지화)
```

---

## 3. 학습 진도 로드맵

| 회차 | 주제 | 핵심 학습 내용 | 관련 메모 / 실습 |
| --- | --- | --- | --- |
| **OT** | 과정 소개 | 웹 개발 환경 세팅 (VS Code, Chrome, Node.js) | [memo/ot.txt](memo/ot.txt) |
| **Day 01** | 웹 개요 & HTML 기초 | HTTP, 클라이언트/서버 구조, HTML5 문서 구조 및 태그 | [memo/day01.txt](memo/day01.txt) |
| **Day 02** | HTML 심화 | 리스트, 테이블, 폼 요소, 시맨틱 태그, 블록/인라인 | [memo/day02.txt](memo/day02.txt) |
| **Day 03** | CSS 소개 | CSS 문법, 외부/내부 스타일시트, 텍스트 및 색상 표현 | [workspace/day03](workspace/day03) |
| **Day 04** | CSS 적용·선택자·박스 모델 | 선택자 4종, 박스 모델(Margin/Padding/Border), display | [workspace/day04](workspace/day04) |
| **Day 05** | CSS 레이아웃 & JS 기초 | CSS 응용 레이아웃, JS 변수(var, let, const), 함수 | [workspace/day05](workspace/day05) |
| **Day 06** | JS DOM 조작 & fetch API | DOM 조작, fetch 비동기 통신, HTTP/API 흐름 | [workspace/day06](workspace/day06) |
| **Day 07** | JS 미니 게시판 CRUD & JSON | JSON 개념, 기능 명세 프롬프트, 목록 출력, 게시글 추가/삭제 | [workspace/day07](workspace/day07) |
| **Day 08** | Git & GitHub 기초 | Git 개념, git init, status, add, commit, GitHub 연동 및 push | [workspace/day08](workspace/day08) |
| **Day 09** | Docker 기초 | Docker 개념, Docker Desktop 설치, 이미지/컨테이너, Dockerfile(FROM/COPY/EXPOSE), docker build/run/ps/stop | [workspace/day09](workspace/day09) |

---

## 4. AI 에이전트 협업 시스템 (S1~S10)

이 프로젝트는 다양한 AI 에이전트가 역할별 스킬 규격에 따라 체계적으로 협업하도록 설계되었습니다.

### 에이전트 스킬 목록

| 스킬 코드 | 스킬 이름 | 설명 | 담당 에이전트 |
| --- | --- | --- | --- |
| **S1** | 수업 메모 정리 | 수업 내용을 구조화된 `memo/dayXX.txt` 양식으로 정리 | 전체 에이전트 |
| **S2** | 실습 코드 생성 | 진도 범위 내 HTML/CSS/JS 실습 파일 생성 | 전체 에이전트 |
| **S3** | 코드 리뷰 및 피드백 | 문법 검증, 시맨틱 구조, 피드백 제공 | 전체 에이전트 |
| **S4** | 개념 설명 및 Q&A | 한국어 비유 및 단계별 학습 개념 설명 | 전체 에이전트 |
| **S5** | 프로젝트 관리 | 파일 구조 및 진도 상태 관리 | 전체 에이전트 |
| **S6** | 리소스 생성 | 학습용 다이어그램 및 시각 자료 생성 | 전체 에이전트 |
| **S7** | 디버깅 및 문제 해결 | 오류 원인 분석 및 수정 힌트 제공 | 전체 에이전트 |
| **S8** | 코드 리팩토링 | 코드 구조 개선 및 외부 파일 분리 | 전체 에이전트 |
| **S9** | Claude 디자인 시스템 | DESIGN.md 기반 UI 스타일링 적용 | 전체 에이전트 |
| **S10** | 에이전트 문서 동기화 | 새 메모/자료 발생 시 전체 에이전트 지침서 동기화 | 전체 에이전트 |

---

## 5. 코딩 및 문서 규칙

1. **언어 및 주석**: 모든 소통, 문서 작성, 코드 주석은 **한국어**를 사용하며 기술 용어는 영어 원문을 병기합니다.
2. **이모지(Emoji) 사용 금지**: 코드, 주석, Commit 메시지, Markdown 문서 등 **모든 산출물에서 이모지 사용을 엄격히 금지**합니다.
3. **들여쓰기 및 스타일**: HTML/CSS/JS 코드는 **공백 2칸(2 spaces)** 들여쓰기를 준수하며, 파일명은 **영어 소문자 + 언더스코어(_)** 방식을 사용합니다.
4. **진도 제한 준수**: 아직 배우지 않은 기술 스택(Node.js, React, DB 등)은 사전 도입하지 않으며 현재 학습 진도 이내의 기술(HTML/CSS/JS, Git & GitHub, Docker 기초)만 사용합니다.

---

## 6. GitHub 원격 저장소 정보

- **원격 저장소 주소**: `https://github.com/kwanbum217/claude_fullStack.git`
- **기본 브랜치**: `main`
