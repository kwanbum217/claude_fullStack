// 버튼 요소를 가져온다
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

// 문단이 추가될 컨테이너 요소를 가져온다
const container = document.getElementById("container");

// 추가한 문단을 순서대로 기억하는 배열
const paragraphs = [];

// '문단 추가' 버튼 클릭 시 실행되는 함수
function addParagraph() {
	// 1. 새로운 <p> 태그를 만든다 (createElement)
	const paragraph = document.createElement("p");

	// 2. 만들어진 <p> 태그에 내용을 넣는다
	paragraph.textContent = "새로 추가된 문단입니다.";

	// 3. 컨테이너에 문단을 붙인다 (appendChild)
	container.appendChild(paragraph);

	// 4. 추가한 문단을 배열에 기억해 둔다
	paragraphs.push(paragraph);
}

// '문단 삭제' 버튼 클릭 시 실행되는 함수
function removeParagraph() {
	// 배열에서 마지막 문단을 하나 꺼낸다
	const paragraph = paragraphs.pop();

	// 꺼낸 문단이 있을 때만 삭제한다
	if (paragraph) {
		// 화면에서 삭제한다 (remove)
		paragraph.remove();
	}
}

// 버튼에 클릭 이벤트를 연결한다
addBtn.addEventListener("click", addParagraph);
removeBtn.addEventListener("click", removeParagraph);
