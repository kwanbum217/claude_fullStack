// .env 파일의 환경 변수(DATABASE_URL 등)를 로드
import "dotenv/config";

// express 불러오기 (웹 서버 프레임워크)
import express from "express";

// Prisma Client 불러오기 (generated/prisma/client.ts 에서 자동 생성된 클라이언트 사용)
import { PrismaClient } from "./generated/prisma/client.ts";

// Express 앱 생성 (서버 객체)
const app = express();

// JSON 형식의 요청 본문(body)을 받아서 사용할 수 있게 해주는 미들웨어 설정

// 미들웨어(Middleware) : 요청이 라우트에 도달하기 전에 먼저 거쳐가는 중간 처리 단계를 의미한다. express.json()이 디표적인 미들웨어이다.

app.use(express.json());
// 요청으로 들어오는 JSON 데이터를 해석해서 req.body에 저장한다.
// req.body : 요청과 함꼐 전달된 데이터가 담기는 저장 공간을 의미한다.
// 헤당 코드를 통해 이후 사용할 POST/PUT 라우트에서 데이터를 빈 값으로 처리되지 않도록 처리한다.

// PrismaClient 인스턴스 생성 (DB 연결 객체)
const prisma = new PrismaClient();

// GET /todos 라우트 : 전체 Todo 목록 조회
// app.get(경로, 콜백) : GET 요청이 해당 경로로 들어오면 콜백 함수를 실행한다.
app.get("/todos", async (req, res) => {
  // prisma.todo.findMany() : Todo 테이블의 모든 데이터(행)를 조회한다.
  const todos = await prisma.todo.findMany();
  // 조회 결과를 JSON 형식으로 응답한다.
  res.json(todos);
});

// POST /todos 라우트 : 새 Todo 생성
// app.post(경로, 콜백) : POST 요청이 해당 경로로 들어오면 콜백 함수를 실행한다.
app.post("/todos", async (req, res) => {
  // req.body.title : 요청 본문(body)에 담긴 title 값을 가져온다. (isDone, createdAt은 기본값 자동 적용)
  const newTodo = await prisma.todo.create({
    data: {
      title: req.body.title,
    },
  });
  // 생성된 Todo를 JSON 형식으로 응답한다.
  res.json(newTodo);
});

// PUT /todos/:id 라우트 : 특정 Todo의 완료 상태(isDone) 수정
// app.put(경로, 콜백) : PUT 요청이 해당 경로로 들어오면 콜백 함수를 실행한다.
// 경로의 :id는 URL 파라미터로, req.params.id로 접근할 수 있다.
app.put("/todos/:id", async (req, res) => {
  // req.params.id : URL 경로에 포함된 Todo의 고유 번호(id)를 가져온다. (문자열로 전달됨)
  const id = Number(req.params.id);
  // req.body.isDone : 요청 본문(body)에 담긴 완료 상태(isDone) 값을 가져온다.
  const updatedTodo = await prisma.todo.update({
    // where: 어떤 Todo를 수정할지 id로 찾는다.
    where: { id },
    // data: 수정할 내용을 지정한다. (isDone만 수정)
    data: {
      isDone: req.body.isDone,
    },
  });
  // 수정된 Todo를 JSON 형식으로 응답한다.
  res.json(updatedTodo);
});

// DELETE /todos/:id 라우트 : 특정 Todo 삭제
// app.delete(경로, 콜백) : DELETE 요청이 해당 경로로 들어오면 콜백 함수를 실행한다.
app.delete("/todos/:id", async (req, res) => {
  // req.params.id : URL 경로에 포함된 Todo의 고유 번호(id)를 가져온다. (문자열로 전달됨)
  const id = Number(req.params.id);
  // prisma.todo.delete() : where로 찾은 id에 해당하는 Todo를 삭제한다.
  const deletedTodo = await prisma.todo.delete({
    where: { id },
  });
  // 삭제된 Todo를 JSON 형식으로 응답한다.
  res.json(deletedTodo);
});

// 3000번 포트에서 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
