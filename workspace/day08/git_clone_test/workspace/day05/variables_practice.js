// 2 ~ 4번줄 까지 변수 선언 및 초기화이다.
// 이름: 변하지 않는 값이므로 const 사용
const name = "홍길동";

// 취미: 변하지 않는 값이므로 const 사용
const hobby = "독서";

// 나이: 나이가 들면 바뀔 수 있는 값이므로 let 사용
let age = 25;

// 변수들을 콘솔에 출력
console.log(name);
console.log(age);
console.log(hobby);

// 변수 초기화이다.
age += 1;
console.log("1년후 age의 값", age);

age = 100;
console.log("수정된 age의 값", age);

// 변수 name의 변수타입은 const 이므로 변수 초기화를 진행 할 수 없다.
// name = "김관범";
// console.log("수정된 name의 값", name);
