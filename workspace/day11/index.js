// .env 파일의 환경 변수(DATABASE_URL 등)를 로드
import 'dotenv/config'

// Prisma Client 불러오기 (generated/prisma/client.ts 에서 자동 생성된 클라이언트 사용)
import { PrismaClient } from './generated/prisma/client.ts'

// PrismaClient 인스턴스 생성 (DB 연결 객체)
const prisma = new PrismaClient()

async function main() {
  // 1) title이 'Prisma 공부하기'인 Todo 생성 후 출력
  const newTodo = await prisma.todo.create({
    data: {
      title: 'Prisma 공부하기', // isDone, createdAt 은 기본값 자동 적용
    },
  })
  console.log('--- 생성된 Todo ---')
  console.log(newTodo)

  // 2) 전체 Todo 목록 조회 후 출력
  const allTodos = await prisma.todo.findMany()
  console.log('\n--- 전체 Todo 목록 ---')
  console.log(allTodos)

  // 3) id가 1번인 Todo의 isDone을 true로 수정 후 출력
  const updatedTodo = await prisma.todo.update({
    where: { id: 1 },        // 수정할 대상: id가 1인 레코드
    data: { isDone: true },  // 변경할 값
  })
  console.log('\n--- 수정된 Todo (id: 1) ---')
  console.log(updatedTodo)

  // 4) 전체 목록 재조회 후 출력
  const allTodosAfterUpdate = await prisma.todo.findMany()
  console.log('\n--- 전체 Todo 목록 (수정 후) ---')
  console.log(allTodosAfterUpdate)

  // 5) id가 1번인 Todo 삭제 후 출력
  const deletedTodo = await prisma.todo.delete({
    where: { id: 1 }, // 삭제할 대상: id가 1인 레코드
  })
  console.log('\n--- 삭제된 Todo (id: 1) ---')
  console.log(deletedTodo)

  // 6) 전체 목록 재조회 후 출력
  const allTodosAfterDelete = await prisma.todo.findMany()
  console.log('\n--- 전체 Todo 목록 (삭제 후) ---')
  console.log(allTodosAfterDelete)
}

// main 함수 실행 후 DB 연결 해제
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect() // DB 연결 종료
  })

