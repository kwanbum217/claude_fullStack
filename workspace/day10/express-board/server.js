const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// 정적 파일 제공 미들웨어 (public 폴더 안의 CSS, JS 등 제공)
app.use(express.static(path.join(__dirname, 'public')));

// 루트 경로 ('/') 접속 시 public/index1.html 페이지 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

// API 경로 ('/api/hello') - JSON 응답 라우트
app.get('/api/hello', (req, res) => {
  res.json({ message: '안녕하세요' });
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다`);
});
