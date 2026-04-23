// Express 프레임워크 불러오기
const express = require("express");

// 라우터 객체 생성 (app이 아닌 router 단위로 분리)
const router = express.Router();

// DB 연결 객체 가져오기
const db = require("../config/db");

// GET /board/list 요청 처리
// router.get("/list", async (req, res) => {
//   try {
//     // DB 쿼리 실행
//     // mysql2 promise 방식은 [rows, fields] 형태로 반환됨
//     const [rows] = await db.query("SELECT * FROM h_member");

//     // 조회 결과를 JSON 형태로 클라이언트에 응답
//     res.json(rows);
//   } catch (err) {
//     // 에러 로그 출력 (서버 콘솔)
//     console.error(err);

//     // 클라이언트에는 500 에러 응답
//     res.status(500).json({ message: "DB Error" });
//   }
// });

router.get("/list", (req, res) => {
  // DB 쿼리 실행
  // mysql2 promise 방식은 [rows, fields] 형태로 반환됨
  db.query("SELECT * FROM h_member", (err, rows) => {
    if (err) {
      res.status(500).json({ message: "DB Error" });
    } else {
      res.json(rows);
    }
  });
});

// router를 외부에서 사용할 수 있게 export
module.exports = router;
