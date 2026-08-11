// Fetch API를 사용하여 외부 데이터 요청
fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    // 응답 객체를 JSON 형태로 변환하여 반환
    return response.json();
  })
  .then(function(data) {
    // 변환된 데이터를 콘솔에 출력
    console.log('가져온 데이터:', data);
  })
  .catch(function(error) {
    // 요청 실패 시 에러 처리
    console.error('데이터를 불러오는 중 오류 발생:', error);
  });
