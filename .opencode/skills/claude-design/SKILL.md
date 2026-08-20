---
name: claude-design
description: Claude 디자인 시스템 적용 스킬. HTML/CSS 파일 생성 시 본 문서에 정의된 디자인 토큰(코랄/크림 색상 팔레트, Garamond/Inter 폰트 스택, 뱃지, 크림 카드, 둥근 모서리)을 적용할 때 사용합니다.
---

# Claude 디자인 시스템 (S9)

HTML 및 CSS 작성 시 본 문서에 정의된 Claude 디자인 가이드라인에 따른 디자인 토큰과 UI 스타일을 적용합니다.

## 1. 디자인 토큰 (CSS Variables)

```css
:root {
  /* 색상 팔레트 (Color Palette) */
  --primary: #cc785c;
  --primary-active: #a9583e;
  --ink: #141413;
  --body: #3d3d3a;
  --muted: #6c6a64;
  --muted-soft: #8e8b82;
  --hairline: #e6dfd8;
  --canvas: #faf9f5;
  --surface-card: #efe9de;
  --surface-item: #ffffff;
  --surface-dark: #181715;
  --on-primary: #ffffff;

  /* 타이포그래피 (Typography Font Stack) */
  --font-display: "EB Garamond", Garamond, "Times New Roman", serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* 둥글기 (Border Radius) */
  --rounded-sm: 6px;
  --rounded-md: 8px;
  --rounded-lg: 12px;
  --rounded-pill: 9999px;

  /* 간격 (Spacing) */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-section: 64px;
}
```

## 2. HTML 폰트 연동

HTML `<head>` 내에 Google Fonts 링크를 항상 연동합니다.

```html
<link
  href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
>
```

## 3. 핵심 UI 컴포넌트 규격

### 3.1 뱃지 (Badge)
- 상단 카테고리/태그 표기 시 코랄 뱃지 적용
- 배경: `var(--primary)`, 텍스트: `var(--on-primary)`
- 폰트 크기: 12px, 자간: 1.5px, 대문자(uppercase), 둥글기: `var(--rounded-pill)`

### 3.2 제목 (Heading)
- 메인 `h1` 제목: `var(--font-display)` 세리프체 적용, 디스플레이용 폰트는 볼드 지양(font-weight: 400), `var(--ink)` 색상 사용

### 3.3 카드 (Card Surface)
- 주요 입력창 및 섹션 용기: `var(--surface-card)` (#efe9de 크림색) 배경
- 테두리: 1px solid `var(--hairline)` (#e6dfd8)

### 3.4 버튼 및 입력창 (Input & Button)
- 입력창 포커스: border-color `var(--primary)` 및 rgba(204, 120, 92, 0.15) 그림자 링
- 주요 버튼: 배경 `var(--primary)`, 호버 시 `var(--primary-active)`

## 4. 적용 가이드
- 웹 페이지 생성 시 전형적인 기본 스타일 대신 항상 위의 Claude 디자인 시스템 토큰을 기준으로 CSS 스타일시트를 구현합니다.
- 모바일 대응을 위해 `@media (max-width: 768px)` 반응형 스타일을 함께 적용합니다.
- 코드 및 주석에 이모지(Emoji)를 절대 사용하지 않습니다.
