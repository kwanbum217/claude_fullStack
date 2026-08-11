// 1. querySelector로 li 항목들이 추가될 ul 태그 선택
const userList = document.querySelector("#user-list");

// 2. Fetch API(가져오기)를 사용하여 사용자 데이터 요청
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // 응답을 JSON 형태로 변환
    return response.json();
  })
  .then(function (users) {
    // 3. 배열 순회하여 createElement로 li 태그 동적 생성 및 추가
    users.forEach(function (user) {
      // li 태그 생성
      const li = document.createElement("li");
      li.className = "user-card-item";

      // 사용자 이름(name)을 담을 요소 생성
      const nameElement = document.createElement("span");
      nameElement.className = "user-name";
      nameElement.textContent = user.name;

      // 이메일(email)을 담을 요소 생성
      const emailElement = document.createElement("span");
      emailElement.className = "user-email";
      emailElement.textContent = user.email;

      // li 태그 자식으로 name과 email 요소 추가
      li.appendChild(nameElement);
      li.appendChild(emailElement);

      // 최종적으로 ul 태그에 생성된 li 추가
      userList.appendChild(li);
    });
  })
  .catch(function (error) {
    // 에러 발생 시 처리
    console.error("사용자 목록을 불러오는 도중 오류 발생:", error);
  });
