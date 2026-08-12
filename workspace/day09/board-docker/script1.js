/* ── 미니 게시판 스크립트 (DOM 조작, 이벤트 처리, 추가/삭제 기능) ── */

// 1. 게시글 데이터 배열 (id, title 객체 포함)
let posts = [
  { id: 1, title: '첫 번째 게시글입니다. 환영합니다.' },
  { id: 2, title: 'HTML, CSS, JavaScript를 활용한 미니 게시판' },
  { id: 3, title: 'DOM 조작을 통한 동적 데이터 렌더링 실습' }
];

// 2. posts 배열을 화면 목록 영역(ul)에 li 태그로 출력하는 함수
function renderPosts() {
  const boardList = document.querySelector('#board-list');

  // 기존 목록 초기화
  boardList.innerHTML = '';

  // posts 배열을 순회하며 li 요소 생성 및 추가
  posts.forEach((post) => {
    const li = document.createElement('li');
    li.className = 'board-item';

    // 게시글 정보(제목, 날짜)와 삭제 버튼 생성
    li.innerHTML = `
      <div class="item-info">
        <span class="item-title">${post.title}</span>
        <span class="item-date">2026.08.10</span>
      </div>
      <button type="button" class="delete-btn">삭제</button>
    `;

    // 삭제 버튼에 클릭 이벤트 등록 (해당 post.id를 가진 게시글 제거)
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      deletePost(post.id);
    });

    boardList.appendChild(li);
  });
}

// 3. 새 게시글 추가 처리 함수
function addPost() {
  const titleInput = document.querySelector('#title-input');
  const titleText = titleInput.value.trim();

  // 3-1. 유효성 검사: 입력된 제목이 5글자 미만일 때 추가 제한 및 안내창 표시
  if (titleText.length < 5) {
    alert('제목을 5글자 이상 입력해주세요.');
    titleInput.focus();
    return;
  }

  // 3-2. 고유 id 자동 생성 (기존 id 중 최댓값 + 1, 빈 배열이면 1)
  const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

  // 3-3. 새 게시글 객체 생성 후 posts 배열에 추가
  const newPost = {
    id: newId,
    title: titleText
  };
  posts.push(newPost);

  // 3-4. 게시글 목록 다시 출력 (렌더링)
  renderPosts();

  // 3-5. 입력창 초기화 및 포커스 설정
  titleInput.value = '';
  titleInput.focus();
}

// 4. 게시글 삭제 처리 함수
function deletePost(id) {
  // posts 배열에서 해당 id를 가진 게시글 제거
  posts = posts.filter((post) => post.id !== id);

  // 화면 목록 다시 출력
  renderPosts();
}

// 5. 페이지 로드 시 초기화 및 이벤트 등록
document.addEventListener('DOMContentLoaded', () => {
  // 초기 목록 출력
  renderPosts();

  // '추가' 버튼 클릭 이벤트 등록
  const addBtn = document.querySelector('#add-btn');
  addBtn.addEventListener('click', addPost);

  // 입력창에서 엔터(Enter) 키 입력 시에도 게시글 추가
  const titleInput = document.querySelector('#title-input');
  titleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addPost();
    }
  });
});
