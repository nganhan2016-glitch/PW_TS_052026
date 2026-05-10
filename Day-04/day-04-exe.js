/*
let score = 95;

if (score >= 50) {
  console.log("Đậu");
} else if (score >= 90) {
  console.log("XS");
}

//Ứng dụng tron AT
let statusCode = 404;

if (statusCode === 200) {
  console.log("API hoạt động ok");
} else if (statusCode === 400) {
  console.log("Lỗi dữ liệu gửi lên (Bad Request)");
} else if (statusCode === 404) {
  console.log("Không tìm thấy dường dẫn, Not found");
} else {
  //Dành cho tất cả các TH còn lại (VD: 502, 503)
  console.log('Server dang gap loi ');
  
}
// BAI TAP
//BT nhỏ
let loginStatus = "locked";

//1. nếu loginStatus === 'sucess' -> in 'TEst pass: login thành công'
//2. nếu loginStatus  === 'locked' -> 'Tài khoản bị khóa'
//3. Các TH còn lại -> in 'Test fail: login thất bại'

if (loginStatus === "success") {
    console.log("TEst pass: login thành công");    
} else if (loginStatus === "locked" ) {
    console.log("Tài khoản bị khóa");   
} else {
    console.log("Test fail: login thất bại"); 
}
    

let diem = 8;
let trangthai = diem >= 5 ? "PASS" : "FAIL";
console.log(trangthai);

//gán text
let isSaving = true;

let buttonText = isSaving ? "Đang lưu" : "Lưu";

//chọn config

let isCI = false;

let reportMode = isCI ? "html" : "list";

//hiển thị nhãn
let hasBug = true;
let statusLabel = hasBug ? "Có bug" : "Ổn";

let score2 = 95;
// let result;
// toan tu 3 ngoi-------------------------------------

if (score >= 90) {
  result = "XS";
} else if (score >= 50) {
  result = "ĐẬu";
} else {
  result = "Tèo";
}


let result = score2 >= 90 ? "XS" : score2 >= 50 ? "Đậu" : "Tèo";
//----------- BAI TAP
let failedTests = 2;
let suiteStatus =
  failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";
// YC -> viết lại đoạn code trên bằng if/else if/else

if (failedTests === 0) {
    suiteStatus = "PASS";
} else if (failedTests <= 2) {
    suiteStatus = "WARNING";
} else {
    suiteStatus = "FAIL";
} */
console.log("aaa");

if ("0") {
  console.log("Có chạy vào đây hay ko");
}
if (0) {
  console.log("Có chạy vào đây hay ko");
}

//Ví dụ AT
//
//Dữ liệu lấy từ web ("", hoặc 'https://github.com...')
let githubLink = "";

// if (githubLink !== "" && githubLink !== null && githubLink !== undefined) {
//   console.log("User đã upload github link");
// } else {
//   console.log("Chưa upload");
// }

if (githubLink) {
  console.log("User đã upload github link");
} else {
  console.log("Chưa upload");
}

let rawUserName = "    ";

// mình cần check xem là rawUserName có hợp lệ hay ko  nếu rỗng là ko hợp lệ và ngực lại
if (rawUserName.trim()) {
    console.log("hop le");
    
} else {
    console.log("ko hop le");
    
}

//---
let role = "admin";

switch (role) {
  case "admin":
    console.log("Cấp quyền truy cập vào toàn bộ hệ thống");
    break;
  case "editor":
    console.log("Cấp quyền chỉnh sửa");
    break;

  default:
    console.log("Lỗi role ko hợp lệ");
}

let browserName = "firefox";
switch (browserName) {
  case "chrome":
  case "edge":
    //gom nhóm
    console.log("Khởi động driver ");
    break;
}