// Express 불러오기
const express = require("express");

// Express 앱 생성
const app = express();

// board 라우터 불러오기
const boardRouter = require("./routes/board");

// /board 경로로 들어오는 요청을 boardRouter로 넘김
// 예: /board/list → board.js에서 처리
app.use("/board", boardRouter);

// 기본 라우트 (루트 URL)
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// 서버 실행 (포트 3001에서 대기)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
