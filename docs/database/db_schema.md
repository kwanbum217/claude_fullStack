# Day 11 — Todo 데이터베이스 모델 설계서 (Database Schema Spec)

> **문서 버전:** v1.0.0  
> **진도 회차:** 11회차 (Prisma ORM & SQLite 데이터 모델링 및 마이그레이션)  
> **데이터베이스 엔진:** SQLite (`file:./dev.db`)  
> **ORM 프레임워크:** Prisma ORM v6 (`@prisma/client`)

---

## 1. 개요 및 설계 목적

1. **데이터 영구 저장**: 인메모리(변수) 방식에서 벗어나 파일 기반 관계형 데이터베이스(SQLite)에 데이터를 안전하게 영구 저장합니다.
2. **ORM 기반 타입 안전성**: Prisma Model을 정의하여 SQL 쿼리를 직접 작성하지 않고 메서드 기반의 안전한 CRUD 인터페이스를 확보합니다.
3. **마이그레이션(Migration) 관리**: `schema.prisma` 설계도를 기반으로 데이터베이스 스키마 버전 이력을 체계적으로 관리합니다.

---

## 2. 데이터베이스 스키마 정의 (`schema.prisma`)

```prisma
// Prisma Generator 및 Datasource 설정
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Todo 모델 정의 (todos 테이블 매핑)
model Todo {
  id        Int      @id @default(autoincrement()) // 기본키(PK), 자동 증가
  title     String                                 // 할 일 내용 (필수 문자열)
  isDone    Boolean  @default(false)                // 완료 여부 (기본값: false)
  createdAt DateTime @default(now())                // 생성 시각 (기본값: 현재 시각)
}
```

---

## 3. 필드(컬럼) 상세 명세

| 필드명 | 데이터 타입 | SQLite 타입 | 제약 조건 | 기본값 | 설명 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`id`** | `Int` | `INTEGER` | Primary Key, Auto Increment | 자동 증가 | 각 Todo 항목의 고유 식별자 (기본키) |
| **`title`** | `String` | `TEXT` | NOT NULL | 없음 | 사용자가 작성한 할 일 제목 텍스트 |
| **`isDone`** | `Boolean` | `BOOLEAN` | NOT NULL | `false` | 작업 완료 여부 플래그 (`true`/`false`) |
| **`createdAt`** | `DateTime` | `DATETIME` | NOT NULL | `now()` | 레코드 생성 시각 (ISO 8601 타임스탬프) |

---

## 4. 데이터베이스 마이그레이션 및 Prisma Client CRUD

### 4.1 마이그레이션 실행
```bash
# SQLite DB 생성 및 Todo 모델 반영
npx prisma migrate dev --name init
```

### 4.2 Prisma Client 조작 메서드 매핑

| 작업 (CRUD) | Prisma Client 메서드 | SQL 매핑 개념 | 예시 코드 |
| :--- | :--- | :--- | :--- |
| **Create (생성)** | `prisma.todo.create()` | `INSERT INTO Todo ...` | `await prisma.todo.create({ data: { title: '학습' } })` |
| **Read (조회)** | `prisma.todo.findMany()` | `SELECT * FROM Todo` | `await prisma.todo.findMany()` |
| **Update (수정)** | `prisma.todo.update()` | `UPDATE Todo SET ... WHERE id = ?` | `await prisma.todo.update({ where: { id: 1 }, data: { isDone: true } })` |
| **Delete (삭제)** | `prisma.todo.delete()` | `DELETE FROM Todo WHERE id = ?` | `await prisma.todo.delete({ where: { id: 1 } })` |
