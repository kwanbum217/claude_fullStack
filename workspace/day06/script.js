// querySelector를 사용하여 요소 선택
const title = document.querySelector('#title');
const changeBtn = document.querySelector('#change-btn');
const htmlBtn = document.querySelector('#html-btn');

// 1. textContent 사용 예시
changeBtn.addEventListener('click', function() {
  // textContent는 단순 텍스트로 다루므로 HTML 태그를 포함해도 순수 문자열로 출력됩니다.
  title.textContent = 'textContent로 변경된 제목';
  title.style.color = '#3b82f6';
});

// 2. innerHTML 사용 예시
htmlBtn.addEventListener('click', function() {
  // innerHTML은 문자열 내의 HTML 태그를 실제 요소로 해석하여 파싱합니다.
  title.innerHTML = '<em>innerHTML</em>로 <span style="color: #ef4444;">태그 적용</span>!';
  title.style.color = '#10b981';
});
