/*
//Yếu tố 1:
let soLanClick = 1;

//Yếu tố 2:
while (soLanClick <= 3) {
  //Thực hiện hành động
  console.log(`Đang click lần thứ ${soLanClick}`);

  //Yếu tố 3
  soLanClick++;
}

console.log("Đã click xong 3 lần. thoát vòng lặp");

//LƯU Ý: VÒNG LẶP VÔ TẠN
// let bungDoi = true;

// while (bungDoi === true) {
//   console.log("Đang ăn thịt nướng");
//   //Hậu quả: ăn mãi ko ngừng -> nổ bụng -> treo máy -> infinite loop vòng lặp
//   // vô tận
//   // bungdoi =false
// }

let miengThit = 5;

while (miengThit > 0) {
  console.log(`Đang ăn... Còn lại. ${miengThit} miếng`);

  miengThit--;
}
console.log("Đã ăn hết, no bụng");

// Trong AT sẽ có cơ chế retry - thử lại tối đa N lần
//Viết code tìm nút thanh toán, cứ 1sec tìm 1 lần, tìm tối đa 5 lầm. nếu thấy thì dừng. nếu quá 5 lần thì báo lỗi

let maxRetry = 5; //so lan thu toi da
let currentRetry = 1; //Lan thu hien tai
let isFound = false; //Trang thai tim thay nut

while (isFound === false && currentRetry <= maxRetry) {
  console.log(`Đang tìm nút thanh toán trên màn hình ...`);

  //Giả lập tìm kiếm (là cho tỉ lệ tìm kiếm  < 0.8)
  let toolGiaLap = Math.random();
  let searchResult = toolGiaLap > 0.3;

  console.log(`Search result : ${toolGiaLap}`);


  if (searchResult === true) {
    isFound = true; //Tìm thấy rồi. Đổi trạng thái để thoát vòng lặp
    console.log("NGON! Đã tìm thấy nút thanh toán. Bấm click ngay");
  } else {
    console.log("Khong thấy, chuẩn bị thử lại");
    currentRetry++; //Tăng số lần thử lên 1 (bước nhảy)
  }
}

//xử lý kết quả

if (isFound === false) {
  console.log(`TEST FAIL, Đã thử 5 lần nhưgn mạng lag quá, ko thấy nút đâu`);
}

let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"];

console.log(sanPham[1]);
console.log(sanPham[2]);

console.log(sanPham[10]);


let danhSachLoi = [];

//chay test ... phat hien ra loi
danhSachLoi.push("Nút đăng nhập ko bấm đc");
danhSachLoi.push("sAi mầu chữ ở footer");

console.log(danhSachLoi);

let cacTrangThaiChoChoPhep = ["PENDING", "APPROVED", "SHIPPED"];

let trangThaiThucTe = "APPROVED";

if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
  console.log("TEST PASS: TRANG THAI HIEN THI DUNG LOGIC");
} else {
  console.log("TEST FAIL");
}

let lichSuDuyetWeb = ["Trang chủ", "sản phẩm", "Giỏ hàng"];

let trangVuaThoat = lichSuDuyetWeb.pop();

console.log(lichSuDuyetWeb);

console.log(trangVuaThoat);

let hangChoHoTro = ["Khách A", "Khách B", "Khách C"];
let khachHangDuocXuLy = hangChoHoTro.shift();

console.log(hangChoHoTro);
console.log(khachHangDuocXuLy);

let danhSachUuTien = ["Bug Thuong", "Bug Giao dien"];

danhSachUuTien.unshift("BUG SIEU TO KHONG LO");
console.log(danhSachUuTien);


let tags = ["automation", "playwright", "javascript"];

let tagString = tags.join(", ");

console.log(tagString);

let danhSachMenu = ["Home", "About", "Services"];

console.log(danhSachMenu.indexOf("About"));

let gioHang = [
  "Bàn phím cơ",
  "Chuột gamin",
  "Màn hình 27 inch",
  "Tai nghe bluetooth",
];

//1. In ra tổng số sản phẩm
// 2. In ra sản phẩm đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. thêm 1 cái lót chuột vào cuối giỏ hàng
console.log(gioHang[0]);
console.log(gioHang[gioHang.length-1]);
gioHang.push("lót chuột");
console.log(gioHang);

//---------------




let userTest = {
  hoTen: "Neko Nguyen",
  tuoi: 30,
  isVip: true,
  quyenHan: ["read", "write"],
};

console.log(userTest);
console.log(userTest.hoTen);

let apiData = {
  "firt-name": "neko",
  "content-type": "text/html",
  "so dien thoai": "01234567",
};
console.log(apiData["firt-name"]);


//Trường hợp rất hay dùng trong AT: Khi key đc lưu trong 1 biến khac
// (dynamic key)

let userTest2 = {
  hoTen: "Neko Nguyen",
  email: "neko@gmail.com",
};

let thongTinCanLay = "email";

console.log(userTest2.thongTinCanLay);

console.log(userTest2[thongTinCanLay]);



let config = { browse: "Chrome", timeout: 5000 };
// ko in ra duoc
console.log(`Ban đầu ${config}`);
console.log("Ban đầu", config);

config.timeout = 10000;
console.log("Sau khi sửa timeout", config);

//thêm dữ liệu (gọi tên key chưa tồn tại + giá trị)
config.isHeadless = true;
console.log("Sau khi thêm isHeadless", config);

//Xóa dữ liệu (dùng từ khóa delete)
delete config.browser;

console.log("Sau khi xóa browser", config);

const user3 = { ten: "neko" };
//vẫn thêm sửa xóa đc ruột bên trong, const chỉ cấm bạn gán lại cả object bằng dấu bằng 


user3 = { ten: "meo" };
console.log(user3);

//----
let spTiki = { id: "SP01", ten: "Bàn phím", gia: 50000 };

let danhSachKey = Object.keys(spTiki);
console.log(danhSachKey);

console.log(danhSachKey.includes("gia"));

let danhSachValue = Object.values(spTiki);
console.log(danhSachValue);
console.log(danhSachValue.includes("Bàn phím"));


let danhSachCap = Object.entries(spTiki);
console.log(danhSachCap);
// [ [ 'id', 'SP01' ], [ 'ten', 'Bàn phím' ], [ 'gia', 50000 ] ]
console.log(danhSachCap[0]);

console.log(danhSachCap[0][1]);
console.log(Object.hasOwn(spTiki, "id2"));
*/
//----------bai tap
let apiResponse = {
  userId: 9999,
  userName: "neko_auto",
  role: "admin",
  isActive: "yes",
};

//Dùng Objet.keys để đếm xem API trả về bao nhiêu trường
//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
// kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo
// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"

let fieldArrays =  Object.keys(apiResponse).length;
console.log(`so truong API tra ve ${fieldArrays}`);

console.log(`Có userId, ${Object.hasOwn(apiResponse, "userId")}`);
console.log(`Có email, ${Object.hasOwn(apiResponse, "email")}`);
console.log(`Có role, ${Object.hasOwn(apiResponse, "role")}`);

const isActiveValue = apiResponse.isActive;
console.log(isActiveValue);
console.log(typeof isActiveValue);

if (typeof apiResponse.isActive !== "boolean") {
  console.log("isActive không đún gkieeur boolean");
}

let hasAdmin = Object.values(apiResponse).includes("admin");
console.log(`Có chứa admin hay ko ${hasAdmin}`);

/*
let hasUserId = Object.hasOwn(apiResponse,"userId");
if (hasUserId) {
  console.log("co field UserId");
} else {
  console.log("ko co field User ID");
  
}
let hasEmail = Object.hasOwn(apiResponse,"email");
if (hasEmail) {
  console.log("co field email");
} else {
  console.log("ko co field email");
}
let hasRole = Object.hasOwn(apiResponse,"role");
console.log(Object.hasOwn(apiResponse,"role"));
 
*/


let danhSachUser = [
  { id: 2, ten: "teo", role: "user" },
  { id: 3, ten: "teo2", role: "user2" },
];

