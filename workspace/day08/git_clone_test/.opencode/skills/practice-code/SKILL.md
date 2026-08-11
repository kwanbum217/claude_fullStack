---
name: practice-code
description: 실습 코드 생성 스킬. 사용자가 학습 주제에 맞는 HTML/CSS 실습 파일 생성을 요청하거나, workspace/dayXX 폴더에 실습 코드를 만들 때 사용합니다. HTML 템플릿, 외부 CSS 분리, 한국어 주석 규칙을 따릅니다.
---

# 실습 코드 생성 (S2)

학습 진도에 맞는 실습용 HTML/CSS 코드 파일을 생성합니다.

## 파일 규칙

- 위치: `workspace/day{회차번호}/` 폴더
- 파일명: 영어 소문자 + 언더스코어 (예: box_practics.html)
- 현재 진도 이내의 기술만 사용 (HTML + CSS + JavaScript 기초/DOM/fetch)

## HTML 파일 템플릿

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

## 주의사항

- 현재 학습 진도를 확인 → `memo/` 폴더의 최신 메모를 참고합니다.
- JavaScript는 기초(DOM 조작, fetch/API)까지 학습 진행되었으므로 사용 가능합니다. (Node.js, React, DB 등 미학습 프레임워크/기술은 사용 금지)
- 외부 CSS/JS 사용 시 필요에 따라 해당 폴더 내 파일 함께 생성합니다.
- 한국어 주석으로 코드 설명을 포함합니다.
- 들여쓰기는 공백 2칸(2 spaces)을 사용합니다.
- 이모지(Emoji) 사용 금지.

## 작업 절차

1. `memo/` 폴더에서 최신 메모로 현재 진도를 확인합니다.
2. 요청 주제에 맞는 실습 폴더/파일 위치를 결정합니다.
3. 템플릿에 따라 코드를 생성합니다.
4. 필요 시 외부 CSS 파일을 분리해 함께 생성합니다.
5. 생성 완료 후 파일 목록을 사용자에게 안내합니다.
