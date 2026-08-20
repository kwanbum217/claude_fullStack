# Todo 리스트 화면 설계서 (Clean Blue & White 디자인 시스템)

> **문서 버전:** v2.0.0  
> **진도 회차:** 13회차 (HTML 뼈대 구축부터 Clean Blue & White 스타일링 및 인터랙션 완성까지)  
> **디자인 룰:** Clean Blue & White Design System (Coinbase & Modern Enterprise Style)  
> **핵심 원칙:** 전체 배경(순수 흰색 `#ffffff`), 본문 글자(진한 회색 `#5b616e`), 제목 및 주요 포인트(일렉트릭 블루 `#0052ff`)

---

## 1. 개요 및 학습 목표

### 1.1 학습 목표
1. **점진적 UI 구축 프로세스 체득**: 뼈대(HTML) → 입력 영역 → 순서 없는 목록 영역 → 스타일 연결(CSS) → 구조 배치 → 인터랙션 다듬기 6단계를 순차적으로 완성합니다.
2. **프롬프트 엔지니어링 실습**: AI에게 단계별 명확한 의도와 요구사항을 제시하여 단일 파일(`index.html` 및 `style.css`)을 점진적으로 확장해 나가는 협업 방식을 익힙니다.
3. **디자인 시스템 분석 및 적용**: `awesome-design-md-main/design-md` 분석 결과를 바탕으로 신뢰감 있는 화이트 캔버스, 진회색 본문 텍스트, 선명한 블루 포인트가 조화된 모던 엔터프라이즈 스타일을 직접 구현합니다.

### 1.2 전체 개발 프로세스 로드맵

```
[1단계: HTML 뼈대] 
   └── DOCTYPE 선언, Google Fonts 연동, 헤더 영역(h1 제목, 뱃지)
[2단계: 입력 영역]
   └── 할 일 입력창(input) 및 추가 버튼(button) 폼 구성 (placeholder: "할 일 입력해주세요")
[3단계: 목록 영역]
   └── 순서 없는 목록(ul/li), 체크박스, 할 일 텍스트, 수정/삭제 버튼, 상태 요약(Summary)
[4단계: 스타일 연결]
   └── Blue/White CSS Variables 토큰 정의, 글로벌 리셋, 폰트 및 배경 적용
[5단계: 구조 배치]
   └── 중앙 정렬 카드 컨테이너(max-width), Flexbox 레이아웃, 반응형 미디어 쿼리
[6단계: 디테일 다듬기]
   └── 블루 포커스 링, 인라인 수정 모드(is-editing), 호버/액티브 피드백, 완료선 및 디밍
```

---

## 2. 디자인 룰 분석 및 디자인 토큰 (Design Tokens)

`awesome-design-md-main/design-md` 하위의 74개 브랜드 디자인 시스템을 분석한 결과, **"전체 배경은 흰색, 글자는 진한 회색, 제목은 파란색"** 요구조건에 가장 완벽하게 부합하는 **Coinbase Design System (`coinbase/DESIGN.md`) 및 Modern Enterprise Blue 스타일**을 채택했습니다.

### 2.1 색상 토큰 (Color Palette)

| 토큰명 | CSS 변수명 | HEX 값 | 용도 |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--canvas` | `#ffffff` | 전체 페이지 기본 배경 (순수 흰색) |
| **Surface Card** | `--surface-card` | `#ffffff` | 메인 앱 컨테이너 카드 배경 (화이트) |
| **Surface Soft** | `--surface-soft` | `#f7f9fa` | 입력 필드 및 서브 컨테이너 배경 (소프트 쿨 그레이) |
| **Surface Item** | `--surface-item` | `#ffffff` | 개별 Todo 항목 카드 배경 |
| **Surface Hover**| `--surface-hover`| `#f4f6f8` | Todo 항목 마우스 호버 시 배경 |
| **Primary (Blue)**| `--primary` | `#0052ff` | 시그니처 일렉트릭 블루 (제목, 추가 버튼, 포커스 링) |
| **Primary Active**| `--primary-active`| `#003ecc` | 버튼 마우스 클릭/호버 시 어두운 딥 블루 |
| **Primary Subtle**| `--primary-subtle`| `#edf2fe` | 상단 뱃지 및 진행률 뱃지 배경 (연한 소프트 블루) |
| **Primary Disabled**| `--primary-disabled`| `#a8b8cc`| 비활성화 버튼 및 연한 테두리 |
| **Ink** | `--ink` | `#0a0b0d` | 가장 어두운 잉크 블랙 |
| **Body Strong** | `--body-strong` | `#1e2329` | Todo 목록 항목 텍스트 (다크 차콜) |
| **Body** | `--body` | `#5b616e` | 일반 본문 및 서브 설명 텍스트 (진한 슬레이트 회색) |
| **Muted** | `--muted` | `#7c828a` | 보조 안내 문구, 푸터 텍스트 |
| **Muted Soft** | `--muted-soft` | `#a8acb3` | 완료된 Todo 텍스트 디밍 및 취소선 |
| **Hairline** | `--hairline` | `#dee1e6` | 1px 기본 외곽 구분선 및 카드 테두리 |
| **Hairline Soft**| `--hairline-soft`| `#eef0f3` | 내부 부드러운 구분선 |
| **On Primary** | `--on-primary` | `#ffffff` | 블루 버튼 내부 텍스트 |
| **Success** | `--success` | `#05b169` | 완료 체크박스 및 상태 표시 |
| **Error** | `--error` | `#cf202f` | 삭제 버튼 호버 시 강조 색상 |

### 2.2 타이포그래피 (Typography Hierarchy)

- **UI 및 본문 폰트:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
- **모노스페이스 폰트:** `JetBrains Mono`, `ui-monospace`, `monospace`

```html
<!-- Google Fonts 연결 링크 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| 분류 | 폰트 패밀리 | 크기 | 두께(Weight) | 행간 / 자간 | 용도 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Title** | `Inter` | 34px | 700 (Bold) | Line-height: 1.2 / Letter-spacing: -0.6px | 메인 앱 타이틀 ("오늘의 할 일", 파란색 `#0052ff`) |
| **Badge Tag** | `Inter` | 12px | 600 (Semi-bold) | Line-height: 1.4 / Letter-spacing: 1.0px (대문자) | 상단 카테고리 뱃지 ("DAILY TASKS") |
| **Input / Button** | `Inter` | 14px | 600 (Semi-bold) | Line-height: 1.0 / Letter-spacing: 0 | 할 일 입력창, 추가/저장 버튼 |
| **Body Strong** | `Inter` | 15px | 500 (Medium) | Line-height: 1.5 / Letter-spacing: 0 | Todo 목록 텍스트 |
| **Meta / Count** | `Inter` | 13px | 500 (Medium) | Line-height: 1.4 / Letter-spacing: 0 | 할 일 통계 카운트, 상태 레이블 |

### 2.3 여백 및 형태 (Spacing & Border Radius)

- **Border Radius:**
  - `--rounded-sm: 6px`: 인라인 인풋, 수정/삭제 액션 버튼
  - `--rounded-md: 10px`: 텍스트 인풋, 추가 버튼, 리스트 아이템
  - `--rounded-lg: 16px`: 메인 카드 컨테이너
  - `--rounded-pill: 9999px`: 카테고리 뱃지, 진행률 칩
- **Spacing Scale (4px 기준):**
  - `--space-xs: 8px` · `--space-sm: 12px` · `--space-md: 16px` · `--space-lg: 24px` · `--space-xl: 32px` · `--space-section: 64px`

---

## 3. UI 컴포넌트 상세 설계

### 3.1 컴포넌트 레이아웃 와이어프레임

```
+---------------------------------------------------------+
|                    [ DAILY TASKS ]                      |  <- 뱃지 (소프트 블루 #edf2fe / 텍스트 #0052ff)
|                     오늘의 할 일                         |  <- H1 타이틀 (파란색 #0052ff, 34px, 700)
|            오늘 집중해야 할 작업들을 계획하고 관리합니다            |  <- 서브 텍스트 (진한 회색 #5b616e)
+---------------------------------------------------------+
| +-----------------------------------------------------+ |
| | [ 메인 카드 : 순수 흰색 (#ffffff) + 1px hairline ]     | |
| |                                                     | |
| | +--------------------------------+ +--------------+ | |
| | | 할 일 입력해주세요               | | + 할 일 추가 | | | <- 인풋 + 파란색 버튼(#0052ff)
| | +--------------------------------+ +--------------+ | |
| |                                                     | |
| | --------------------------------------------------- | | <- 구분선 (hairline)
| |                                                     | |
| | [ Todo 목록 영역 ]                                  | |
| | +-------------------------------------------------+ | |
| | | [v]  Express 서버 라우팅 복습하기  [수정][삭제] | | | <- Todo 아이템 (다크 차콜 #1e2329)
| | +-------------------------------------------------+ | |
| | +-------------------------------------------------+ | |
| | | [ ]  Clean Blue 디자인 시스템 적용 [수정][삭제] | | |
| | +-------------------------------------------------+ | |
| | +-------------------------------------------------+ | |
| | | [ ]  Prisma Migration 스키마 점검  [수정][삭제] | | |
| | +-------------------------------------------------+ | |
| |                                                     | |
| | --------------------------------------------------- | |
| |  전체 3개 | 완료 1개 | 남은 할 일 2개                 | | <- 상태 통계 바 (파란색 카운트 강조)
| +-----------------------------------------------------+ |
+---------------------------------------------------------+
```

### 3.2 컴포넌트별 상세 스펙

#### [C1] Header & Badge (헤더 영역)
- **카테고리 뱃지 (`.badge-blue`)**:
  - 배경: `var(--primary-subtle)` (#edf2fe), 텍스트: `var(--primary)` (#0052ff)
  - 폰트: `Inter 12px / 600`, 자간: 1.0px (대문자), 둥글기: `var(--rounded-pill)` (9999px), 패딩: `5px 14px`
- **메인 타이틀 (`h1.app-title`)**:
  - 텍스트: `오늘의 할 일`
  - 폰트: `Inter`, 크기: 34px, 두께: 700 (Bold), 색상: `var(--primary)` (#0052ff, 파란색), 자간: -0.6px
- **서브 타이틀 (`p.app-subtitle`)**:
  - 텍스트: `오늘 집중해야 할 작업들을 계획하고 관리합니다.`
  - 폰트: `Inter`, 크기: 14px, 두께: 400, 색상: `var(--body)` (#5b616e, 진한 회색)

#### [C2] Main Card Container (메인 카드 영역)
- 배경: `var(--surface-card)` (#ffffff), 테두리: `1px solid var(--hairline)` (#dee1e6)
- 둥글기: `var(--rounded-lg)` (16px), 내부 패딩: `var(--space-xl)` (32px), 그림자: `0 4px 20px rgba(10, 11, 13, 0.04)`

#### [C3] Input Area (입력 영역)
- **입력 폼 (`.todo-form`)**: `display: flex; gap: var(--space-xs);` (8px)
- **텍스트 입력창 (`.todo-input`)**:
  - 배경: `var(--surface-soft)` (#f7f9fa), 테두리: `1px solid var(--hairline)` (#dee1e6)
  - 높이: 44px, 패딩: `10px 16px`, 둥글기: `var(--rounded-md)` (10px)
  - 플레이스홀더: `placeholder="할 일 입력해주세요"` (색상: `var(--muted)`)
  - 포커스 상태 (`:focus`): `background: #ffffff; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(0, 82, 255, 0.15); outline: none;`
- **추가 버튼 (`.btn-add`)**:
  - 배경: `var(--primary)` (#0052ff, 파란색), 텍스트: `var(--on-primary)` (#ffffff)
  - 높이: 44px, 패딩: `0 22px`, 둥글기: `var(--rounded-md)` (10px), 폰트: `Inter 14px / 600`
  - 호버/액티브 상태: `background-color: var(--primary-active)` (#003ecc), `transform: scale(0.98)`

#### [C4] List Area (목록 및 편집 영역)
- **목록 컨테이너 (`.todo-list`)**: `list-style: none; display: flex; flex-direction: column; gap: 10px;`
- **아이템 카드 (`.todo-item`)**:
  - 배경: `var(--surface-item)` (#ffffff), 테두리: `1px solid var(--hairline)` (#dee1e6)
  - 패딩: `14px 16px`, 둥글기: `var(--rounded-md)` (10px)
  - 호버 시: `border-color: var(--muted); background-color: var(--surface-hover)` (#f4f6f8)
- **체크박스 (`.todo-checkbox`)**: `accent-color: var(--primary);` 크기: 19px, 커서: pointer
- **할 일 텍스트 (`.todo-text`)**:
  - 폰트: `Inter 15px / 500`, 색상: `var(--body-strong)` (#1e2329, 다크 차콜)
  - 완료 시 (`.completed .todo-text`): `text-decoration: line-through; color: var(--muted-soft);` (#a8acb3)
- **인라인 수정 인풋 (`.todo-edit-input`)**:
  - 높이: 36px, 패딩: `0 12px`, 테두리: `1px solid var(--primary)`, 포커스 링: `0 0 0 2px rgba(0, 82, 255, 0.15)`
- **액션 버튼 그룹 (`.item-actions`)**:
  - **수정 버튼 (`.edit-btn`, `.btn-edit`)**: 폰트 `13px / 500`, 색상 `var(--muted)`, 호버 시 `color: var(--primary); background: var(--primary-subtle)`
  - **삭제 버튼 (`.delete-btn`, `.btn-delete`)**: **빨간 계열 배경(`background-color: #feecee; color: var(--error);`)을 기본 적용**하여 명확히 구분, 호버 시 `#fdd8db`
  - **저장 버튼 (`.btn-save`)**: `background: var(--primary); color: #ffffff; font-size: 12px; font-weight: 600; padding: 5px 10px; border-radius: 6px`
  - **취소 버튼 (`.btn-cancel`)**: `border: 1px solid var(--hairline); color: var(--muted); font-size: 12px; padding: 4px 9px; border-radius: 6px`

#### [C5] Summary Bar (통계 및 상태 바)
- **컨테이너 (`.todo-footer`)**:
  - 패딩 탑: `var(--space-md)` (16px), 상단 보더: `1px solid var(--hairline)` (#dee1e6)
  - 폰트: `Inter 13px / 500`, 색상: `var(--body)` (#5b616e, 진한 회색)
  - 카운트 강조: `strong { color: var(--primary); font-weight: 700; }` (파란색 숫자 강조)
- **진행률 뱃지 (`.status-badge`)**:
  - 배경: `var(--primary-subtle)` (#edf2fe), 텍스트: `var(--primary)` (#0052ff), 둥글기: `var(--rounded-pill)`, 패딩: `5px 12px`

---

## 4. 단계별 구현 및 프롬프트 엔지니어링 가이드

### 1단계: HTML 기본 뼈대 만들기 (Skeleton)
- **목표**: 페이지에 파란색 카테고리 뱃지와 H1 제목만 있는 최소한의 시맨틱 HTML 파일 생성
- **작업 경로**: `workspace/day13/index.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>오늘의 할 일 - Clean Blue Todo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <span class="badge-blue">DAILY TASKS</span>
      <h1 class="app-title">오늘의 할 일</h1>
      <p class="app-subtitle">오늘 집중해야 할 작업들을 계획하고 관리합니다.</p>
    </header>
    
    <main class="app-card">
      <!-- 이후 단계에서 입력창 및 목록 추가 -->
    </main>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

> **[ 1단계 실습 프롬프트 ]**  
> `workspace/day13` 경로에 `index.html`을 생성해줘. Google Fonts에서 `Inter` 폰트를 불러오고, `style.css`를 연동해줘. 페이지 상단에는 'DAILY TASKS'라는 카테고리 뱃지와 '오늘의 할 일'이라는 H1 제목, 그리고 간단한 설명글을 작성해줘. 메인 카드 영역(`.app-card`)을 뼈대로 두고, 앞으로 이 안에 입력창, 버튼, 할 일 목록을 순서대로 추가할 예정이야.

---

### 2단계: 입력 영역 태그 추가 (Input Area)
- **목표**: 메인 카드 내부에 플레이스홀더가 설정된 입력 필드와 추가 버튼 폼 추가 (스타일 미적용 순수 태그)
- **작업 위치**: `index.html`의 `<main class="app-card">` 내부

```html
<!-- 입력 영역 추가 -->
<section class="input-section">
  <form class="todo-form" onsubmit="return false;">
    <input 
      type="text" 
      class="todo-input" 
      placeholder="할 일 입력해주세요" 
      aria-label="할 일 입력"
      autocomplete="off"
    >
    <button type="button" class="btn-add">추가</button>
  </form>
</section>
```

> **[ 2단계 실습 프롬프트 ]**  
> `workspace/day13/index.html`의 `<main class="app-card">` 안에 입력 영역(`<section class="input-section">`)을 추가해줘. 사용자가 할 일을 입력할 수 있는 텍스트 input 태그(placeholder="할 일 입력해주세요")와 '추가' 텍스트가 적힌 버튼 태그를 form 형태로 감싸서 구성해줘. 아직 CSS 스타일은 작성하지 말고 순수 HTML 태그 구조만 만들어줘.

---

### 3단계: 순서 없는 목록 영역 태그 추가 (List Area & Summary)
- **목표**: 실습용 샘플 Todo 목록(`ul/li`), 체크박스, 수정/삭제 버튼, 상태 요약 바 추가
- **작업 위치**: `index.html`의 입력 영역 아래

```html
<!-- 목록 영역 추가 -->
<section class="list-section">
  <ul class="todo-list">
    <!-- 완료된 항목 예시 -->
    <li class="todo-item completed">
      <input type="checkbox" class="todo-checkbox" checked aria-label="할 일 완료 여부 선택">
      <span class="todo-text">HTML 기본 뼈대 구조 작성하기</span>
      <div class="item-actions">
        <button type="button" class="btn-edit" aria-label="할 일 수정">수정</button>
        <button type="button" class="btn-delete" aria-label="할 일 삭제">삭제</button>
      </div>
    </li>
    <!-- 진행 중 항목 예시 1 -->
    <li class="todo-item">
      <input type="checkbox" class="todo-checkbox" aria-label="할 일 완료 여부 선택">
      <span class="todo-text">Clean Blue 디자인 토큰 CSS 정의하기</span>
      <div class="item-actions">
        <button type="button" class="btn-edit" aria-label="할 일 수정">수정</button>
        <button type="button" class="btn-delete" aria-label="할 일 삭제">삭제</button>
      </div>
    </li>
  </ul>
</section>

<!-- 상태 요약 푸터 바 -->
<footer class="todo-footer">
  <span class="count-info">전체 <strong>2</strong>개 중 <strong>1</strong>개 완료</span>
  <span class="status-badge">오늘 진행률 50%</span>
</footer>
```

> **[ 3단계 실습 프롬프트 ]**  
> `workspace/day13/index.html`의 입력창 아래에 Todo 목록 영역(`<section class="list-section">`)과 상태 요약 푸터(`<footer class="todo-footer">`)를 추가해줘. `<ul>` 태그 안에 샘플 Todo 항목 2개를 `<li>`로 작성하고, 각 항목에는 체크박스, 할 일 텍스트, 그리고 수정 및 삭제 버튼을 묶은 액션 영역(`.item-actions`)이 포함되도록 해줘. 1개 항목에는 `completed` 클래스를 부여해서 완료 상태 구조를 확인할 수 있게 해줘.

---

### 4단계: 스타일 연결 (CSS Variables & Reset)
- **목표**: `workspace/day13/style.css` 파일을 생성하고 전체 배경 흰색, 본문 진회색, 제목 파란색 토큰 선언

```css
:root {
  --primary: #0052ff;
  --primary-active: #003ecc;
  --primary-subtle: #edf2fe;
  --body: #5b616e;
  --body-strong: #1e2329;
  --muted: #7c828a;
  --muted-soft: #a8acb3;
  --hairline: #dee1e6;
  --canvas: #ffffff;
  --surface-card: #ffffff;
  --surface-soft: #f7f9fa;
  --surface-item: #ffffff;
  --surface-hover: #f4f6f8;
  --on-primary: #ffffff;
  --error: #cf202f;

  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --rounded-sm: 6px;
  --rounded-md: 10px;
  --rounded-lg: 16px;
  --rounded-pill: 9999px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: var(--font-body);
  background-color: var(--canvas); /* 전체 배경: 흰색 */
  color: var(--body);              /* 본문 글자: 진한 회색 */
  line-height: 1.55;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 16px;
}
```

> **[ 4단계 실습 프롬프트 ]**  
> `workspace/day13/style.css` 파일을 생성해줘. 전체 배경은 흰색(`--canvas: #ffffff`), 본문 글자는 진한 회색(`--body: #5b616e`), 제목 및 주요 포인트는 파란색(`--primary: #0052ff`)으로 설정하고, `:root`에 디자인 토큰들을 선언한 뒤 기본 마진/패딩 리셋과 배경색을 적용해줘.

---

### 5단계: 구조 배치 및 반응형 레이아웃 (Layout & Card)
- **목표**: 메인 컨테이너 배치, 화이트 카드 스타일링, Flexbox 정렬, 파란색 타이틀 적용

```css
.app-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.app-header { text-align: center; }

.badge-blue {
  display: inline-block;
  background-color: var(--primary-subtle);
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: var(--rounded-pill);
  margin-bottom: 8px;
}

.app-title {
  font-size: 34px;
  font-weight: 700;
  color: var(--primary); /* 제목: 파란색 */
  letter-spacing: -0.6px;
  margin-bottom: 6px;
}

.app-subtitle {
  font-size: 14px;
  color: var(--body); /* 진한 회색 */
}

.app-card {
  background-color: var(--surface-card);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-lg);
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  box-shadow: 0 4px 20px rgba(10, 11, 13, 0.04);
}
```

> **[ 5단계 실습 프롬프트 ]**  
> `workspace/day13/style.css`에 레이아웃 구조 스타일을 작성해줘. 최대 너비 600px의 중앙 정렬 `.app-container`를 만들고, `.badge-blue`, 파란색 `#0052ff`가 적용된 `h1.app-title`, 그리고 흰색 카드 배경과 1px 테두리, 부드러운 그림자가 적용된 `.app-card` 컴포넌트를 구현해줘.

---

### 6단계: UI 디테일 다듬기 & 인터랙션 (Refining & Edit Mode)
- **목표**: 인풋 포커스 링, 파란색 추가 버튼, 인라인 수정 모드, 취소선, 모바일 반응형 완성

```css
/* 입력 폼 컨트롤 */
.todo-form { display: flex; gap: 8px; }

.todo-input {
  flex: 1;
  height: 44px;
  padding: 10px 16px;
  background-color: var(--surface-soft);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);
  color: var(--body-strong);
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}

.todo-input:focus {
  outline: none;
  background-color: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 82, 255, 0.15);
}

.btn-add {
  height: 44px;
  padding: 0 22px;
  background-color: var(--primary);
  color: var(--on-primary);
  border: none;
  border-radius: var(--rounded-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.btn-add:hover { background-color: var(--primary-active); }

/* 리스트 아이템 및 인라인 수정 */
.todo-item {
  background-color: var(--surface-item);
  border: 1px solid var(--hairline);
  border-radius: var(--rounded-md);
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.todo-item:hover {
  border-color: var(--muted);
  background-color: var(--surface-hover);
}

.todo-text {
  flex: 1;
  font-size: 15px;
  color: var(--body-strong);
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: var(--muted-soft);
}

.todo-edit-input {
  flex: 1;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--primary);
  border-radius: var(--rounded-sm);
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 82, 255, 0.15);
}

.item-actions { display: flex; gap: 6px; }

.edit-btn, .btn-edit {
  background: transparent;
  border: none;
  font-size: 13px;
  color: var(--muted);
  cursor: pointer;
  padding: 5px 8px;
  border-radius: var(--rounded-sm);
  transition: color 0.15s, background-color 0.15s;
}

.edit-btn:hover, .btn-edit:hover {
  color: var(--primary);
  background: var(--primary-subtle);
}

/* 삭제 버튼: 빨간 계열 배경 적용 */
.delete-btn, .btn-delete {
  background-color: #feecee;
  color: var(--error);
  border: none;
  font-size: 13px;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: var(--rounded-sm);
  transition: background-color 0.15s;
}

.delete-btn:hover, .btn-delete:hover {
  background-color: #fdd8db;
}

.btn-save {
  background-color: var(--primary);
  color: #ffffff;
  border: none;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: var(--rounded-sm);
  cursor: pointer;
}

.btn-cancel {
  background-color: transparent;
  border: 1px solid var(--hairline);
  color: var(--muted);
  font-size: 12px;
  padding: 4px 9px;
  border-radius: var(--rounded-sm);
  cursor: pointer;
}

/* 푸터 및 반응형 */
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-md);
  border-top: 1px solid var(--hairline);
  font-size: 13px;
  color: var(--body);
}

.todo-footer strong { color: var(--primary); font-weight: 700; }
.status-badge { background-color: var(--primary-subtle); color: var(--primary); padding: 5px 12px; border-radius: var(--rounded-pill); font-weight: 600; }

@media (max-width: 768px) {
  body { padding: 32px 12px; }
  .app-title { font-size: 28px; }
  .app-card { padding: var(--space-md); }
}
```

> **[ 6단계 실습 프롬프트 ]**  
> `workspace/day13/style.css`에 인풋 필드 포커스 링, 파란색 추가 버튼, Todo 리스트 아이템 호버, 완료선 처리, 인라인 수정 모드(수정 인풋 및 저장/취소 버튼), 삭제 버튼 호버 스타일 및 모바일 반응형(`@media (max-width: 768px)`) 코드를 모두 완성해줘.

---

## 5. 검증 체크리스트

| 항목 | 점검 내용 | 확인 |
| :--- | :--- | :---: |
| **디자인 룰** | 전체 배경 흰색(`#ffffff`), 본문 진회색(`#5b616e`), 제목 파란색(`#0052ff`)이 적용되었는가? | [x] |
| **입력 플레이스홀더** | 인풋 필드에 `"할 일 입력해주세요"`가 정확히 적용되었는가? | [x] |
| **순서 없는 목록** | HTML `<ul>` 및 `<li>` 태그 기반으로 목록이 구현되었는가? | [x] |
| **인라인 수정 기능** | 수정 버튼 클릭 시 인라인 입력창과 저장/취소 버튼으로 정상 전환되는가? | [x] |
| **인터랙션 피드백** | 포커스 시 3px 블루 링, 추가 버튼 호버, 완료 삭선/디밍이 동작하는가? | [x] |
| **컨벤션 준수** | 이모지 미사용, 2 spaces 들여쓰기, 한국어 주석 및 용어 병기 규칙을 준수했는가? | [x] |
