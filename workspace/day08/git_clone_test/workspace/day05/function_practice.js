// 두 숫자를 더한 값을 반환하는 화살표 함수 (Arrow Function)
const add = (num1, num2) => {
  return num1 + num2;
};
/*
	위의 코드는 화살표 함수를 활용하여, 함수를 정의한 코드이다.
	변수를 선언하고(const add), 해당 변수에 함수를 저장하는 방식이다.
	따라서 변수 이름 자체가 함수 이름이 되겠다.
	변수와 대입 연산자 뒤에 오는 소괄호 내에 존재하는 num1과 num2를 매개변스(Parameter)라고 한다.
	매개변수란, 함수를 실핼할 때 반드시 필요한 요소를 의미하며, 중괄호 내에 존재하는 수행문에서 활용된다.
*/

// 이름을 입력받아 인사말을 반환하는 함수 (function 키워드)
function greet(name) {
  return `안녕하세요, ${name}님!`;
}

// 함수 호출 결과를 콘솔에 출력
console.log(add(3, 5));
console.log(greet("홍길동"));
