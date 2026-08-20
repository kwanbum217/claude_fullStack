# Day 12 — Express + Prisma Todo REST API 명세서 (API Specification)

> **문서 버전:** v1.0.0  
> **진도 회차:** 12회차 (Express 서버와 Prisma Client를 연동한 REST API CRUD)  
> **기본 서버 주소:** `http://localhost:3000`  
> **통신 프로토콜:** HTTP/1.1 (JSON Body 규격)

---

## 1. REST API 개요 및 엔드포인트 요약

| HTTP 메서드 | 엔드포인트 URL | 라우트 역할 | 요청 데이터 (Request) | 응답 데이터 (Response) |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/todos` | 전체 Todo 목록 조회 | 없음 | `200 OK` + Todo 배열 JSON |
| **POST** | `/todos` | 신규 Todo 생성 | `body: { title: string }` | `200 OK` + 생성된 Todo JSON |
| **PUT** | `/todos/:id` | 특정 Todo 완료 여부 수정 | `params: id`, `body: { isDone: boolean }` | `200 OK` + 수정된 Todo JSON |
| **DELETE** | `/todos/:id` | 특정 Todo 삭제 | `params: id` | `200 OK` + 삭제된 Todo JSON |

---

## 2. 세부 엔드포인트 명세

### 2.1 전체 목록 조회 (GET /todos)
- **설명**: 데이터베이스에 저장된 모든 Todo 항목을 최신순으로 조회합니다.
- **Request**:
  - Headers: 없음
  - Body: 없음
- **Response**: `200 OK`
  ```json
  [
    {
      "id": 1,
      "title": "Express 서버 구축하기",
      "isDone": false,
      "createdAt": "2026-08-20T08:00:00.000Z"
    }
  ]
  ```

---

### 2.2 신규 할 일 생성 (POST /todos)
- **설명**: 사용자가 전달한 제목(`title`)으로 새 Todo를 데이터베이스에 추가합니다.
- **Request**:
  - Headers: `Content-Type: application/json`
  - Body:
    ```json
    {
      "title": "Prisma Migration 복습"
    }
    ```
- **Response**: `200 OK`
  ```json
  {
    "id": 2,
    "title": "Prisma Migration 복습",
    "isDone": false,
    "createdAt": "2026-08-20T08:05:00.000Z"
  }
  ```

---

### 2.3 할 일 상태 수정 (PUT /todos/:id)
- **설명**: URL 파라미터로 지정한 Todo의 완료 상태(`isDone`)를 수정합니다.
- **Request**:
  - URL Parameters: `id` (정수형 Todo ID)
  - Headers: `Content-Type: application/json`
  - Body:
    ```json
    {
      "isDone": true
    }
    ```
- **Response**: `200 OK`
  ```json
  {
    "id": 1,
    "title": "Express 서버 구축하기",
    "isDone": true,
    "createdAt": "2026-08-20T08:00:00.000Z"
  }
  ```

---

### 2.4 할 일 삭제 (DELETE /todos/:id)
- **설명**: URL 파라미터로 지정한 Todo를 데이터베이스에서 영구 삭제합니다.
- **Request**:
  - URL Parameters: `id` (정수형 Todo ID)
  - Body: 없음
- **Response**: `200 OK`
  ```json
  {
    "id": 1,
    "title": "Express 서버 구축하기",
    "isDone": true,
    "createdAt": "2026-08-20T08:00:00.000Z"
  }
  ```

---

## 3. 공통 서버 설정 및 미들웨어 주의사항

1. **`app.use(express.json())`**: 브라우저나 클라이언트가 전송하는 JSON 형태의 요청 본문을 파싱하여 `req.body`로 안전하게 바인딩하기 위해 필수적으로 적용합니다.
2. **URL 파라미터 형변환**: `req.params.id`는 문자열이므로 Prisma 연동 시 `parseInt(req.params.id)` 또는 `Number(req.params.id)`로 정수 변환하여 쿼리를 수행합니다.
