const mongoose = require("mongoose");
require("dotenv").config();


// mongoDB 연결하는 함수 route 진행
const connect = () => {
  mongoose
    .connect(process.env.TEST_KEY) //mongoDB 주소 연결하기
    .catch(err => console.log(err));
};



mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;