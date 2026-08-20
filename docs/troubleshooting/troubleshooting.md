# 공통 개발 트러블슈팅 및 회고 노트 (Troubleshooting Guide)

> **문서 버전:** v1.0.0  
> **범위:** 풀스택 개발 실습 과정(HTML, CSS, Express, Prisma, SQLite)에서 발생한 주요 에러 분석 및 해결 솔루션

---

## 1. 터미널 및 한글 문자 인코딩 깨짐 (Encoding Issue)

### 1.1 문제 현상
- Windows 명령 프롬프트(CMD) 환경에서 `curl` 명령어나 터미널 입력으로 한글 데이터를 전송할 때 DB 및 웹 화면에 한글이 깨져서(`???` 또는 유니코드 깨짐) 저장되는 현상 발생.

### 1.2 원인 분석
- Windows 기본 콘솔 코드페이지가 한국어 완성형(`EUC-KR`, 코드페이지 949)으로 지정되어 있어, UTF-8 기반의 Node.js 서버 및 SQLite DB와 인코딩 불일치 발생.

### 1.3 해결 방법
터미널 코드페이지를 UTF-8(65001)로 변경 후 명령어 실행:
```cmd
chcp 65001
```

---

## 2. Express `req.body` 빈 객체(`undefined`) 처리 오류

### 2.1 문제 현상
- 클라이언트에서 `POST` 또는 `PUT` 요청으로 JSON 데이터를 전송했으나, `req.body`가 비어있거나 `undefined`로 읽혀 DB 저장 시 에러 발생.

### 2.2 원인 분석
- Express 서버는 기본적으로 요청 본문(Body)을 자동으로 파싱하지 않으므로, JSON 파서 미들웨어가 누락되어 발생.

### 2.3 해결 방법
`server.js` 뼈대 코드 상단(라우트 등록 전)에 JSON 파싱 미들웨어를 반드시 등록:
```javascript
const express = require('express');
const app = express();

// JSON 요청 본문 해석 미들웨어 등록 (필수)
app.use(express.json());
```

---

## 3. URL 파라미터 타입 불일치 (String vs Number)

### 3.1 문제 현상
- `PUT /todos/:id` 또는 `DELETE /todos/:id` 라우트에서 `prisma.todo.update()` 실행 시 타입 에러(`Argument 'id': Invalid value provided. Expected Int, provided String`) 발생.

### 3.2 원인 분석
- Express의 `req.params.id`는 기본적으로 문자열(`string`) 타입인 반면, Prisma 스키마에서 `id`는 정수형(`Int`)으로 정의되어 타입 불일치 발생.

### 3.3 해결 방법
Prisma 호출 전 `Number()` 또는 `parseInt()`로 정수형 변환:
```javascript
const id = parseInt(req.params.id, 10);
await prisma.todo.delete({
  where: { id: id }
});
```

---

## 4. Prisma Schema 변경 후 DB 미반영 오류

### 4.1 문제 현상
- `schema.prisma` 파일에 새로운 필드나 모델을 추가했으나 실제 서버 코드나 데이터베이스에 반영되지 않는 현상.

### 4.2 원인 분석
- Prisma는 모델 정의 후 `migrate` 명령을 실행해야 실제 DB 파일에 테이블이 생성되고, `@prisma/client` 타입이 새로 갱신됩니다.

### 4.3 해결 방법
```bash
# 1. 마이그레이션 생성 및 DB 반영
npx prisma migrate dev --name <마이그레이션명>

# 2. 클라이언트 수동 재생성이 필요한 경우
npx prisma generate
```
