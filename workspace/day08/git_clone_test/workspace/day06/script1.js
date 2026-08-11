// 1. 변수: Claude 스타일의 에디토리얼 인사말 배열 선언
const greetings = [
  '작은 시작이 모여 위대한 생각을 만듭니다.',
  '오늘 하루도 당신만의 창의성을 깊이 있게 펼쳐보세요.',
  '명확하고 단정한 시선으로 세상을 바라보는 하루가 되기를 권합니다.',
  '가장 깊은 호기심에서부터 근사한 아이디어가 시작됩니다.',
  '당신의 생각을 더 명확하고 차분하게 정리해나가는 하루가 되시길 기원합니다.',
  '진정한 관찰과 사고는 조용하고 차분한 순간에 이루어집니다.'
];

// 2. DOM 조작: querySelector로 필요한 HTML 요소 선택
const greetingDisplay = document.querySelector('#greeting-display');
const greetingBtn = document.querySelector('#greeting-btn');

// 3. 함수: 배열 내의 인사말을 무작위로 추첨하여 반환하는 함수
function getRandomGreeting() {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

// 4. 이벤트: 버튼 클릭 이벤트를 감지하고 화면을 갱신
greetingBtn.addEventListener('click', function() {
  // 무작위 인사말 가져오기
  const newGreeting = getRandomGreeting();

  // DOM 조작: 텍스트 변경
  greetingDisplay.textContent = newGreeting;

  // DOM 조작: 미세한 강조 스타일링 적용 (코랄 컬러 텍스트 미세 강조)
  greetingDisplay.style.color = '#141413';
});
