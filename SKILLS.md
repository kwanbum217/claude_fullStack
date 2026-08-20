# SKILLS.md — AI 에이전트 스킬 및 작업 가이드

> 이 문서는 프로젝트에 참여하는 AI 에이전트들이 수행할 수 있는 스킬(작업 유형)과
> 각 스킬 수행 시 따라야 할 규칙을 정의합니다.

---

## 1. 스킬 목록 총괄

| #  | 스킬 이름             | 설명                                  | 관련 폴더          | 담당 에이전트              |
| -- | --------------------- | ------------------------------------- | ------------------ | -------------------------- |
| S1 | 수업 메모 정리        | 수업 내용을 구조화된 메모로 정리       | `memo/`            | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S2 | 실습 코드 생성        | 학습 주제에 맞는 HTML/CSS/JS 파일 생성| `workspace/`       | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S3 | 코드 리뷰 및 피드백   | 작성된 코드의 문제점·개선점 분석       | `workspace/`       | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S4 | 개념 설명 및 Q&A      | 프로그래밍 개념을 한국어로 쉽게 설명   | —                  | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S5 | 프로젝트 관리         | 파일 구조 정리, 문서 업데이트          | 프로젝트 전체      | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S6 | 리소스 생성           | 학습용 이미지, 다이어그램 등 생성      | `resource/`        | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S7 | 디버깅 및 문제 해결   | 코드 오류 원인 분석 및 수정 안내       | `workspace/`       | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S8 | 코드 리팩토링         | 기존 코드 구조 개선 및 최적화          | `workspace/`       | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S9 | Claude 디자인 시스템 | 본 문서에 정의된 토큰 기반 UI/CSS 스타일 적용 | `workspace/`       | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |
| S10| 에이전트 문서 동기화  | 새 메모/자료 발생 시 에이전트 문서 자동 동기화 | 프로젝트 전체 | 전체 에이전트 (Claude, Codex, Cursor, Antigravity, OpenCode) |

---

## 1.5 에이전트 자동 스킬 등록 경로

`SKILLS.md`의 S1~S10 스킬은 각 에이전트가 **자동 인식**하는 실제 스킬 파일로도 등록되어 있습니다.
세 경로 모두 동일한 S1~S10 스킬을 담고 있으며, 스킬 내용 변경 시 **세 경로를 함께 갱신**해야 합니다.

| 대상 에이전트     | 등록 경로                          | 파일 형식   |
| ----------------- | ---------------------------------- | ----------- |
| OpenCode          | `.opencode/skills/{스킬이름}/SKILL.md` | SKILL.md    |
| 범용 에이전트     | `.agents/skills/{스킬이름}/SKILL.md`   | SKILL.md    |
| Cursor            | `.cursor/rules/s{번호}-{스킬이름}.mdc` | .mdc 규칙   |

| 스킬 이름        | 스킬 폴더명(SKILL.md)  | Cursor 규칙 파일             |
| ---------------- | ---------------------- | ---------------------------- |
| S1 메모 정리     | `memo-writing/`        | `s1-memo-writing.mdc`        |
| S2 실습 코드 생성 | `practice-code/`       | `s2-practice-code.mdc`       |
| S3 코드 리뷰      | `code-review/`         | `s3-code-review.mdc`         |
| S4 개념 설명 Q&A  | `concept-qna/`         | `s4-concept-qna.mdc`         |
| S5 프로젝트 관리  | `project-manage/`      | `s5-project-manage.mdc`      |
| S6 리소스 생성    | `resource-create/`     | `s6-resource-create.mdc`     |
| S7 디버깅         | `debugging/`           | `s7-debugging.mdc`           |
| S8 코드 리팩토링  | `refactoring/`         | `s8-refactoring.mdc`         |
| S9 Claude 디자인  | `claude-design/`       | `s9-claude-design.mdc`       |
| S10 에이전트 동기화 | `skill-sync/`        | `s10-skill-sync.mdc`         |

**동작 방식**:
- 각 스킬의 `description`에 트리거 키워드를 정의했습니다. 해당 작업이 발생하면 에이전트가 자동으로 스킬을 로드합니다.
- OpenCode는 `.opencode/skills/`, 범용 에이전트는 `.agents/skills/` 폴더를 스캔하여 `**/SKILL.md` 파일을 자동 인식합니다.
- Cursor는 `.cursor/rules/*.mdc`를 자동 적용하며, `skills.mdc`가 공통 규칙(진도 제한 포함)을 담당합니다.
- 별도 설정(`opencode.json`) 없이 기본 경로라 바로 동작합니다.
- **주의**: 새 스킬/수정 사항은 에이전트 재시작 후 적용됩니다.

---

## 2. 스킬 상세 정의

### S1. 수업 메모 정리

**목적**: 수업에서 배운 내용을 `memo/dayXX.txt` 형식으로 정리

**작업 규칙**:
```
- 파일명: day{회차번호}.txt (예: day05.txt, day06.txt)
- 위치: memo/ 폴더
- 인코딩: UTF-8
```

**메모 형식 (기존 스타일 준수)**:
```
[ N회차 진도 ]
1. 대주제
	(1) 소주제
		: 설명 내용
	(2) 소주제
		: 설명 내용

2. 대주제
	(1) 소주제
	...
```

**주의사항**:
- 기존 메모 파일(day01~day04)의 번호 체계와 들여쓰기 방식을 **그대로 유지**
- 공백 2칸(2 spaces) 들여쓰기 사용
- 설명 앞에 콜론(:)과 공백 추가
- 코드 예제는 들여쓰기로 구분
- 사용자가 수업 내용을 전달하면 해당 형식으로 정리

**작업 절차**:
1. `memo/` 폴더에서 가장 최신 메모(dayXX.txt)를 확인합니다.
2. 다음 회차 번호를 결정합니다.
3. 사용자가 전달한 수업 내용을 위 형식으로 정리합니다.
4. 작성 완료 후 파일 공유 및 저장을 진행합니다.

---

### S2. 실습 코드 생성

**목적**: 학습 진도에 맞는 실습용 HTML/CSS 코드 파일 생성

**작업 규칙**:
```
- 위치: workspace/day{회차번호}/ 폴더
- 파일명: 영어 소문자 + 언더스코어 (예: box_practics.html)
- 현재 진도 이내의 기술만 사용 (HTML + CSS 기초)
```

**HTML 파일 템플릿**:
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>실습 제목</title>
</head>
<body>
  <!-- 실습 코드 -->
</body>
</html>
```

**주의사항**:
- 현재 학습 진도를 확인 → `memo/` 폴더의 최신 메모 참고
- JavaScript는 현재 기초(DOM 조작, fetch)까지 학습 진행되었으므로 해당 개념 사용 가능 (React 등 미학습 프레임워크는 사용 금지)
- Docker 기초까지 학습했으므로 정적 웹페이지용 `Dockerfile`(FROM/COPY/EXPOSE) 작성 가능
- Node.js/Express 및 Prisma(ORM, SQLite)까지 학습했으므로 서버 코드·DB 연동 실습 가능
- 외부 CSS/JS 사용 시 필요에 따라 해당 폴더 내 파일 함께 생성
- 한국어 주석으로 코드 설명 포함

**작업 절차**:
1. `memo/` 폴더의 최신 메모를 통해 현재 진도를 파악합니다.
2. 요청된 학습 주제에 맞추어 파일 경로와 이름을 결정합니다.
3. 표준 HTML 템플릿과 CSS 코드를 규칙에 따라 생성합니다.
4. 한국어 주석과 공백 2칸 들여쓰기를 적용하고 저장합니다.

---

### S3. 코드 리뷰 및 피드백

**목적**: 사용자가 작성한 코드를 검토하고 개선점 제안

**리뷰 항목**:
1. **문법 검증**: HTML 태그 짝 맞춤, CSS 속성/값 오류
2. **구조 평가**: 시맨틱 태그 사용 여부, 논리적 구조
3. **스타일 일관성**: 들여쓰기, 네이밍 규칙 준수
4. **학습 포인트**: 현재 진도에서 더 연습하면 좋을 개념

**피드백 형식**:
```
[잘한 점]: ...
[개선할 점]: ...
[학습 팁]: ...
```

**작업 절차**:
1. 대상 코드를 읽고 문법, 구조, 스타일, 학습 포인트 4가지를 평가합니다.
2. 지정된 피드백 양식([잘한 점], [개선할 점], [학습 팁])에 맞춰 작성합니다.
3. 기존 코드 수정이 필요하면 사용자 승인을 먼저 받습니다.

---

### S4. 개념 설명 및 Q&A

**목적**: 프로그래밍 개념을 쉽게 설명하고 학습자의 질문에 답변

**설명 원칙**:
- **비유 활용**: 일상적인 비유로 개념 설명 (기존 메모에서 사용된 비유 참고)
  - 예: HTML = 건물의 뼈대/구조, CSS = 인테리어/꾸미기
- **단계적 설명**: 큰 그림 → 세부 사항 순서
- **코드 예제 병기**: 설명과 함께 짧은 코드 예제 제공
- **학습 진도 고려**: 아직 배우지 않은 개념은 미리 언급하지 않음

**작업 절차**:
1. 학습자의 질문 의도를 정확히 파악합니다.
2. 현재 진도 수준에 알맞은 비유와 예시 코드를 작성합니다.
3. 단계별 설명 및 주의사항을 한국어로 전달합니다.

---

### S5. 프로젝트 관리

**목적**: 프로젝트 파일 구조 정리 및 문서 최신 상태 유지

**관리 항목**:
- 새 학습일 시작 시 `workspace/day{번호}/` 폴더 생성
- 새 학습일 시작 시 `memo/day{번호}.txt` 파일 생성
- `AGENTS.md` 학습 진도 테이블 업데이트
- `resource/` 폴더에 필요한 리소스 정리
- 불필요한 파일 정리 (사용자 승인 후)

**작업 절차**:
1. 전체 디렉토리 및 문서 상태를 확인합니다.
2. 필요한 폴더를 만들거나 `AGENTS.md` / `SKILLS.md` 상태를 최신화합니다.

---

### S6. 리소스 생성

**목적**: 학습에 필요한 시각 자료 생성

**생성 가능 리소스**:
- HTML 구조 다이어그램
- CSS 박스 모델 시각화
- 웹 페이지 레이아웃 목업
- 학습 참고 이미지

**저장 위치**: `resource/` 폴더

**작업 절차**:
1. 시각 자료의 목적과 형식을 설정합니다.
2. `resource/` 폴더 내에 규칙에 맞는 파일명으로 생성합니다.

---

### S7. 디버깅 및 문제 해결

**목적**: 코드 오류를 진단하고 해결 방법 안내

**디버깅 절차**:
1. 에러 메시지 또는 증상 확인
2. 관련 코드 분석
3. 원인 설명 (한국어로)
4. 수정 방법 제안 (코드 diff 포함)
5. 유사 실수 방지 팁 제공 (정답 직접 제안보다 힌트 우선)

---

### S8. 코드 리팩토링

**목적**: 기존 코드의 품질과 구조를 개선

**리팩토링 기준**:
- 인라인 CSS → 외부 CSS 분리
- 반복 코드 제거
- 시맨틱 태그 적용
- CSS 클래스 네이밍 개선
- 주석 정리

**작업 절차**:
1. 리팩토링 대상을 분석하고 개선안을 마련합니다.
2. 변경 전/후 diff를 제시하여 사용자 승인을 받습니다.
3. 기능을 유지한 상태에서 구조만 개선합니다.

---

### S9. Claude 디자인 시스템 적용

**목적**: 프로젝트 웹 UI 생성 시 Claude 디자인 시스템 토큰(코랄/크림 토큰, Garamond/Inter 폰트 스택, 뱃지, 카드 등)을 일관되게 적용

**디자인 핵심 규격**:
- **색상**: `--primary` (#cc785c), `--canvas` (#faf9f5), `--surface-card` (#efe9de)
- **폰트**: Display (`EB Garamond`), Body (`Inter`)
- **스타일**: 둥근 뱃지(`badge`), 세리프 디스플레이 헤딩(`h1`), 크림색 카드 레이아웃(`card`)

**작업 절차**:
1. HTML `<head>`에 Google Fonts (`EB Garamond` & `Inter`) 지정
2. CSS `:root`에 Claude 표준 디자인 토큰 정의
3. 컴포넌트 구획 및 레이아웃을 디자인 시스템 규칙에 맞추어 스타일링

---

### S10. 학습 진도 및 에이전트 문서 동기화

**목적**: `memo/` 폴더에 새 학습 노트(`dayXX.txt`)가 추가되거나 진도가 수정되었을 때, 프로젝트 내 모든 AI 에이전트 지침 문서(`AGENTS.md`, `SKILLS.md`, `CLAUDE.md`, `codex.md`, `.cursorrules`, `.cursor/rules/skills.mdc` 등)를 최신 학습 내역으로 일괄 업데이트

**작업 절차**:
1. `memo/` 폴더를 검색하여 최신 회차 노트를 파악하고 핵심 기술 스택을 추출합니다.
2. `AGENTS.md` (현재 진도, 디렉토리 구조, 학습 진도 표)를 업데이트합니다.
3. `SKILLS.md` (스킬 표, 학습 스택 표, 로드맵)를 업데이트합니다.
4. 에이전트 개별 지침서 (`CLAUDE.md`, `codex.md`, `README.md`, `.cursorrules`, `.cursor/rules/`, `.opencode/skills/`, `.agents/skills/`)를 업데이트합니다.
5. 문서 내 이모지(Emoji) 포함 여부를 검증하고 전면 배제합니다.
6. 동기화 결과를 사용자에게 요약 보고합니다.

---

## 3. 에이전트별 스킬 매핑

```
┌─────────────┬─────────────────────────────────────────────┐
│  에이전트    │  수행 가능 스킬                               │
├─────────────┼─────────────────────────────────────────────┤
│  Claude     │  S1 S2 S3 S4 S5 S6 S7 S8 S9 S10             │
│  Codex      │  S1 S2 S3 S4 S5 S6 S7 S8 S9 S10             │
│  Cursor     │  S1 S2 S3 S4 S5 S6 S7 S8 S9 S10             │
│  Antigravity│  S1 S2 S3 S4 S5 S6 S7 S8 S9 S10             │
│  OpenCode   │  S1 S2 S3 S4 S5 S6 S7 S8 S9 S10             │
└─────────────┴─────────────────────────────────────────────┘
```

---

## 4. 현재 학습 스택 및 사용 가능 기술

에이전트는 코드 생성 시 **현재 진도 이내의 기술만** 사용해야 합니다.

| 기술          | 상태   | 사용 가능 여부 |
| ------------- | ------ | -------------- |
| HTML5 기초    | 완료   | O 사용 가능      |
| CSS3 기초     | 완료   | O 사용 가능      |
| CSS Flexbox   | 완료   | O 사용 가능      |
| JavaScript    | 완료   | O 사용 가능 (기초, DOM 조작, fetch/API, JSON, 미니 게시판 CRUD) |
| Git & GitHub  | 완료   | O 사용 가능 (git init, status, add, commit, push, remote 연결) |
| Docker 기초   | 완료   | O 사용 가능 (이미지/컨테이너 개념, Dockerfile FROM/COPY/EXPOSE, docker build/run/ps/stop) |
| Node.js Express| 완료   | O 사용 가능 (npm init -y, package.json 프로젝트 초기화, express 패키지 설치, 서버 구현) |
| Prisma (ORM)   | 완료   | O 사용 가능 (prisma@6, @prisma/client@6 설치, npx prisma init --datasource-provider sqlite, schema.prisma Model 정의, prisma migrate dev, Prisma Client CRUD) |
| SQLite         | 완료   | O 사용 가능 (Prisma 연동 SQLite 파일 DB, dev.db) |
| Express+Prisma REST API | 완료 | O 사용 가능 (GET/POST/PUT/DELETE 라우트, 경로 파라미터, 요청 바디 파싱, JSON 응답) |
| React         | 미학습 | X 사용 불가      |
| MongoDB/MySQL  | 미학습 | X 사용 불가      |

> **참고**: 학습 진도가 변경되면 이 테이블을 업데이트합니다.

---

## 5. 학습 커리큘럼 로드맵

```
Phase 1 (현재)          Phase 2                 Phase 3
──────────────         ──────────────          ──────────────
[완료] HTML 기초        JavaScript 심화          [진행] Node.js Express
[완료] CSS 기초         이벤트 처리              [진행] Prisma & SQLite (ORM)
[완료] JS DOM·JSON·CRUD  비동기(async/await)      React
[완료] Git & GitHub 기초 배포                    MongoDB/MySQL
[완료] Docker 기초
[완료] Node.js Express
[완료] Prisma & SQLite
[완료] Express+Prisma REST API
```

---

## 6. 파일 네이밍 규칙

| 유형             | 규칙                          | 예시                          |
| ---------------- | ----------------------------- | ----------------------------- |
| 메모 파일        | `day{번호}.txt`               | `day05.txt`                   |
| 실습 HTML        | `{주제}_practics.html`        | `box_practics.html`           |
| 실습 CSS (외부)  | `{주제}.css` 또는 `style.css` | `standard_html.css`           |
| 리소스 이미지    | `{주제}_{설명}.{확장자}`      | `boxmodel_diagram.png`        |
| 종합 실습        | `{주제}.html`                 | `profile.html`                |
| Docker 설정      | `Dockerfile` (확장자 없음)    | `workspace/day09/board-docker/Dockerfile` |
| Prisma 설정      | `schema.prisma`, `.env`, `prisma.config.ts` | `workspace/day11/prisma/schema.prisma` |
