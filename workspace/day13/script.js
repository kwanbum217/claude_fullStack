/**
 * Todo 리스트 애플리케이션 인터랙션 스크립트 (script.js)
 * 기능: 할 일 추가, 완료 체크 토글(취소선), 인라인 수정/저장/취소, 삭제, 진행률 실시간 갱신
 */

document.addEventListener("DOMContentLoaded", function () {
  // DOM 요소 참조
  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const countInfo = document.getElementById("countInfo");
  const statusBadge = document.getElementById("statusBadge");

  /**
   * 상태 요약 푸터 바 갱신 함수 (전체 개수, 완료 개수, 진행률 %)
   */
  function updateSummary() {
    const items = todoList.querySelectorAll(".todo-item");
    const total = items.length;
    const completed = todoList.querySelectorAll(".todo-item.completed").length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    countInfo.innerHTML = `전체 <strong>${total}</strong>개 중 <strong>${completed}</strong>개 완료`;
    statusBadge.textContent = `오늘 진행률 ${percentage}%`;
  }

  /**
   * 신규 할 일 리스트 아이템(li) 생성 헬퍼 함수
   * @param {string} text - 할 일 텍스트 내용
   * @returns {HTMLElement} 생성된 li 요소
   */
  function createTodoItem(text) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" aria-label="할 일 완료 여부 선택" />
      <span class="todo-text">${text}</span>
      <div class="item-actions">
        <button type="button" class="edit-btn" aria-label="할 일 수정">수정</button>
        <button type="button" class="delete-btn" aria-label="할 일 삭제">삭제</button>
      </div>
    `;
    return li;
  }

  /**
   * 수정 완료 저장 함수
   * @param {HTMLElement} item - 수정 중인 li.todo-item 요소
   */
  function saveEdit(item) {
    const editInput = item.querySelector(".todo-edit-input");
    const textSpan = item.querySelector(".todo-text");
    const actionsDiv = item.querySelector(".item-actions");
    if (!editInput || !textSpan || !actionsDiv) return;

    const newText = editInput.value.trim();
    if (newText) {
      textSpan.textContent = newText;
    }

    editInput.style.display = "none";
    textSpan.style.display = "";
    item.classList.remove("is-editing");

    // 액션 버튼 복원
    actionsDiv.innerHTML = `
      <button type="button" class="edit-btn" aria-label="할 일 수정">수정</button>
      <button type="button" class="delete-btn" aria-label="할 일 삭제">삭제</button>
    `;
  }

  /**
   * 수정 취소 함수
   * @param {HTMLElement} item - 수정 중인 li.todo-item 요소
   */
  function cancelEdit(item) {
    const editInput = item.querySelector(".todo-edit-input");
    const textSpan = item.querySelector(".todo-text");
    const actionsDiv = item.querySelector(".item-actions");
    if (!textSpan || !actionsDiv) return;

    if (editInput) {
      editInput.style.display = "none";
    }
    textSpan.style.display = "";
    item.classList.remove("is-editing");

    // 액션 버튼 복원
    actionsDiv.innerHTML = `
      <button type="button" class="edit-btn" aria-label="할 일 수정">수정</button>
      <button type="button" class="delete-btn" aria-label="할 일 삭제">삭제</button>
    `;
  }

  // 1. 신규 할 일 추가 폼 제출 이벤트
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    const item = createTodoItem(text);
    todoList.appendChild(item);
    todoInput.value = "";
    updateSummary();
  });

  // 2. 목록 이벤트 위임 (체크박스 토글, 삭제, 수정 모드 진입, 저장, 취소)
  todoList.addEventListener("click", function (e) {
    const target = e.target;
    const item = target.closest(".todo-item");
    if (!item) return;

    // (1) 체크박스 클릭 -> 취소선(completed) 토글
    if (target.classList.contains("todo-checkbox")) {
      if (target.checked) {
        item.classList.add("completed");
      } else {
        item.classList.remove("completed");
      }
      updateSummary();
      return;
    }

    // (2) 삭제 버튼 클릭 -> 항목 제거
    if (target.classList.contains("delete-btn") || target.classList.contains("btn-delete")) {
      item.remove();
      updateSummary();
      return;
    }

    // (3) 수정 버튼 클릭 -> 인라인 수정 모드 진입
    if (target.classList.contains("edit-btn") || target.classList.contains("btn-edit")) {
      const textSpan = item.querySelector(".todo-text");
      const currentText = textSpan.textContent.trim();
      const actionsDiv = item.querySelector(".item-actions");

      item.classList.add("is-editing");
      textSpan.style.display = "none";

      // 인라인 수정 인풋 생성 또는 재활용
      let editInput = item.querySelector(".todo-edit-input");
      if (!editInput) {
        editInput = document.createElement("input");
        editInput.type = "text";
        editInput.className = "todo-edit-input";
        editInput.setAttribute("aria-label", "할 일 수정 입력");
        textSpan.parentNode.insertBefore(editInput, actionsDiv);
      }
      editInput.value = currentText;
      editInput.style.display = "block";
      editInput.focus();
      editInput.select();

      // 버튼을 [저장] / [취소]로 전환
      actionsDiv.innerHTML = `
        <button type="button" class="btn-save" aria-label="수정 내용 저장">저장</button>
        <button type="button" class="btn-cancel" aria-label="수정 취소">취소</button>
      `;
      return;
    }

    // (4) 수정 내용 [저장] 버튼 클릭
    if (target.classList.contains("btn-save")) {
      saveEdit(item);
      return;
    }

    // (5) 수정 [취소] 버튼 클릭
    if (target.classList.contains("btn-cancel")) {
      cancelEdit(item);
      return;
    }
  });

  // 3. 인라인 수정 인풋 키보드 단축키 (Enter = 저장, Escape = 취소)
  todoList.addEventListener("keydown", function (e) {
    if (e.target.classList.contains("todo-edit-input")) {
      const item = e.target.closest(".todo-item");
      if (!item) return;

      if (e.key === "Enter") {
        e.preventDefault();
        saveEdit(item);
      } else if (e.key === "Escape") {
        e.preventDefault();
        cancelEdit(item);
      }
    }
  });

  // 초기 상태 통계 갱신
  updateSummary();
});
