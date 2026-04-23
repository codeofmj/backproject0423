// // mysql2 라이브러리 불러오기 (MySQL 연결용)
// const mysql = require("mysql2");

// // .env 파일에 있는 환경변수를 process.env로 불러오기
// require("dotenv").config();

// // 커넥션 풀 생성 (여러 요청을 동시에 처리하기 위해 필수)
// // createConnection이 아니라 createPool을 쓰는 게 실무 표준
// const pool = mysql.createPool({
//   host: process.env.DB_HOST, // DB 서버 주소 (ex: localhost)
//   port: Number(process.env.DB_PORT), // 포트 (문자열 → 숫자 변환 필수)
//   user: process.env.DB_USER, // DB 사용자명
//   password: process.env.DB_PASSWORD, // DB 비밀번호
//   database: process.env.DB_DATABASE, // 사용할 DB 이름

//   // 커넥션 풀 옵션
//   waitForConnections: true, // 연결이 없으면 대기할지 여부
//   connectionLimit: 10, // 동시에 최대 10개 연결
//   queueLimit: 0, // 대기열 제한 없음 (0 = 무제한)
// });

// // promise()를 붙이면 async/await 사용 가능해짐
// // → 콜백 방식 대신 await db.query() 사용 가능
// module.exports = pool.promise();

// mysql2 라이브러리 불러오기 (MySQL 연결용)
const mysql = require("mysql2");

// .env 파일에 있는 환경변수를 process.env로 불러오기
require("dotenv").config();

// 커넥션 풀 생성 (여러 요청을 동시에 처리하기 위해 필수)
// createConnection이 아니라 createPool을 쓰는 게 실무 표준
const pool = mysql.createPool({
  host: process.env.DB_HOST, // DB 서버 주소 (ex: localhost)
  port: Number(process.env.DB_PORT), // 포트 (문자열 → 숫자 변환 필수)
  user: process.env.DB_USER, // DB 사용자명
  password: process.env.DB_PASSWORD, // DB 비밀번호
  database: process.env.DB_DATABASE, // 사용할 DB 이름

  // 커넥션 풀 옵션
  waitForConnections: true, // 연결이 없으면 대기할지 여부
  connectionLimit: 10, // 동시에 최대 10개 연결
  queueLimit: 0, // 대기열 제한 없음 (0 = 무제한)
});

// promise()를 붙이면 async/await 사용 가능해짐
// → 콜백 방식 대신 await db.query() 사용 가능
module.exports = pool;
