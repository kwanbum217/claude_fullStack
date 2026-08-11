// 버튼 요소를 가져온다
const button = document.getElementById("click-btn");

// 버튼이 클릭될 때 실행되는 함수
function handleClick() {
  // 알림창으로 메시지 출력
  alert("클릭되었습니다");
}

// addEventListener로 클릭 이벤트를 연결한다
button.addEventListener("click", handleClick);

// input / submit 이벤트에 사용할 요소들을 가져온다
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name-input");
const output = document.getElementById("input-output");

// input 이벤트: 입력 내용이 바뀔 때마다 실행되는 함수
function handleInput() {
	// 입력된 값을 화면에 표시
	output.textContent = nameInput.value;
}

// submit 이벤트: 폼이 제출될 때 실행되는 함수
function handleSubmit(event) {
	// 페이지가 새로고침되는 기본 동작을 막는다
	event.preventDefault();

	// 알림창으로 입력된 값을 출력
	alert(`${nameInput.value}님, 제출되었습니다.`);
}

// input / submit 이벤트를 연결한다
form.addEventListener("submit", handleSubmit);
nameInput.addEventListener("input", handleInput);
