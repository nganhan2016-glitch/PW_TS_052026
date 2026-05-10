// goi ham truc khi khoi tao
xinchao();


// tao ham sau
function xinchao(){
    console.log(`HOisting`)
}

// HOisting fucntion declaration
let loginStatus = checkLoginStatus();
console.log(loginStatus);


function checkLoginStatus() {
  return true;
}

// Fucntion expression
checkLoginStatus();
const checkLoginStatus = function (){
    return true;
}

//-------------
function tinh(a, b) {
  return a + b;
}

function tinh(a, b) {
  return a * b;
}

console.log(tinh(2, 3));

const tinh2 = function (a, b) {
  return a + b;
};

const tinh2 = function (a, b) {
  return a * b;
};

//---
const utils = {
  lamSach: function (text) {
    return text.trim().toLowerCase();
  },
};

console.log(utils.lamSach("  HELLLO  "));
//-----
const moiTruong = "staging";

const layUrl =
  moiTruong === "staging"
    ? function () {
        return "https://staging.neko.vn";
      }
    : function () {
        return "https://neko.vn";
      };
console.log(layUrl());

// arrow fucntion
const tinhTongExpression = function (a, b) {
  return a + b;
};

//chuyển sang arrow

const tinhTongArrow = (a, b) => {
  return a + b;
};

const tinhTongSieuNgan = (a, b) => a + b;

// cach sd thuc te
// luc nao dung loai nao?
// viet method ben trong object


const sanPham = {
  ten: "iphone 17",
  gia: 2000000,

  //cách 1: function expression kiểu cổ điển

  hienThiExpression: function () {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 2: để viết 1 hàm. method shorthand -> NÊN DÙNG

  hienThiShorthand() {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

    //cách 3. ko SỬ DỤNG ARROW KHI VIẾT METHOD TRONG OBJECT
  hienThiArrow: () => {
    console.log(`${this.ten} - ${this.gia}`);
  },
};
sanPham.hienThiExpression();
sanPham.hienThiShorthand();
sanPham.hienThiArrow();

//Method ở trong object hay sử dụng trong các trường
// ví dụ 1 object có cả data lẫn hành vi. ví dụ 1 object tên cart có dữ liệu item và method getSummary() để mô tả chính nó

const cart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

console.log(cart.getSummary());

//object config: ví dụ object có cấu hình, timeout, baseurrl -> có 1 method buildUrl () để ghép link hoàn chỉnh
//object formatter có các method formatPrice, formatDate() -> objet tiện ích

// vd: 1 object cu the, viet nhanh dung ngya-> method ben torng obj la hop ly
// nhung neu nhiu obj cung formnhu cart1, cart 2, cart 3 -> dung CLASS de to chuc hon

//B. Truyền hàm làm call back.  -> callback là truyền 1 hàm vào chỗ khác để nó đc gọi sau
// -> arrow function là lựa chọn ưu tiên hàng đầu

const giaSanPham = [15000, 20000, 40000];

//declaration
function locGiaCao(gia) {
  return gia > 20000;
}

const ketQua1 = giaSanPham.filter(locGiaCao);

//expression

const ketQua2 = giaSanPham.filter(function (gia) {
  return gia > 20000;
});

//arrrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

//Sự thật: là arrow funcion hoàn toàn thay thế function expression ở rất nhiều code base
//cả 2 đều dùng const. và ko có hoisting . nhưgn arrow thì ngắn hơn gấp bội
//function expression chỉ xuất hiện ở 1 số trường hợp
/// code cũ khi arrow chưa ra đời thì người ta dùng nhiều
/// -> KẾT LUẬN> code mới chỉ nhớ 2 loại: declaration và arrow

//nếu khai 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm trước
function guiThongBao(message) {
  console.log(`${message}`);
}

function guiThongBao(messsage, userId) {
  console.log(`${messsage}, ${userId}`);
}

guiThongBao("deploy xong");

guiThongBao("deploy xong", 101);

function guiThongBao(message, target) {
  if (typeof target === "undefined") {
    console.log(`${message}`);
    return;
  }
  if (typeof target === "number") {
    console.log(`${message}, ${target}`);
    return;
  }

  console.log(`target ko hợp lệ`);
}

guiThongBao("deployxong");

guiThongBao("deploy xong", 101);
guiThongBao("deploy xong", "101");

//đây là phong cách viết 1 hầm nhiueef cách gọi
 //return ở đây gióng như
// "xử lý xong trường hợp này rồi -> thoát hàm luôn"

function timSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      break;
    }
    console.log(arr[i]);
  }
}

//break ở dây chỉ dừng for, ko kết thúc function ngay

function timSo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      return;
    }
    console.log(arr[i]);
  }
}
// gặp 5 là kết thúc luôn cả hàm
//---

function dangNhap(user, pass, moiTruong = "staging") {
  console.log(`${moiTruong} Đăng nhập: ${user} - ${pass}`);
}

dangNhap("admin", "123456");
dangNhap("admin", "1234567", "dev");

function taoTestUser(ten, tuoi = 25, email, vaiTro = "tester") {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoTestUser("neko",null, "neko@vn.com");
//----------------------------
//rest parameters
function tongTien(...danhSachGia) {
  //danhsachgia là 1 mảng
  let tong = 0;
  for (const gia of danhSachGia) {
    tong += gia;
  }
  return tong;
}

console.log(tongTien(100000));
console.log(tongTien(1000, 2000, 3000, 4000));

//
//hàm nhận vào duy nhát 1 object là options
function taoUser(options) {
  //bóc tách (destructuring) object ra từng biến riêng biệt
  const { ten, tuoi = 25, email, vaiTro = "test" } = options;
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
//c2
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test" }) {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
//gọi hàm
//gọi hàm
taoUser({
  ten: "neko",
  email: "neko@vn.com",
});

taoUser2({
  ten: "neko",
  tuoi: 100,
  email: "neko@vn.com",
});


//----
// const user = danhSach[0];

// const pass = danhSach[1];

//destruct
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

//bỏ qua phần tử ko cần
const [firstName, , city] = ["neko", 25, "hanoi"];

console.log(firstName);
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];

console.log(c);

//object destruct
// => cú pháp gặp nhiều nhất -> bóc tách thuộc tính object ra biến riêng biệt theo tên thuộc tính ( ko theo thu tu nhu array)

// const response = { status: 200, body: "ok", headers: {} };

// const status = response.status;

const { status, body } = { status: 200, body: "ok", headers: {} };

console.log(status);
console.log(body);
 
// doi ten bien
const { status: statusCode, body: noiDung } = {
  status: 200,
  body: "ok",
  headers: {},
};
console.log(statusCode);

console.log(noiDung);

// gia tri mac dinh + doi ten

const { ten, tuoi = 18, vaiTro: role = "viewer" } = { ten: "neko" };

console.log(ten);
console.log(tuoi);
console.log(role);

//destruct trong tham số hàm
function hienThiUser({ ten, email, tuoi = 18 }) {
  console.log(`${ten}, ${email}, ${tuoi}`);
}

hienThiUser({ ten: "Neko", email: "a" });
const { ten: ten2, email, tuoi: tuoi2 = 18 } = { ten: "Neko", email: "a" };

//destruct lồng (nested)
const apiResponse = {
  data: {
    user: { name: "neko", email: "neko@123" },
    token: "123",
  },
  status: 200,
};
const {
  data: {
    user: { name, email },
    token,
  },
  status: status2,
} = apiResponse;

console.log(name);
console.log(token);

//- bai tap
const testRun = [
  [
    " login smoke ",
    { browser: "   chromium   ", env: "  staging  " },
    "  PASS ",
  ],
  [
    " checkout payment ",
    { browser: "   firefox   ", env: "  prod  " },
    "  FAIL ",
  ],
  [
    " search product ",
    { browser: "   webkit   ", env: "  staging  " },
    "  PASS ",
  ],
  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];
function taoBaoCaoTest(testRuns) {
  //khai báo các biến cần sử dụng
  const passed = [];
  const failed = [];
  let invalid = 0;
  for (const item of testRuns) {
    const [rawTestName, { browser, env }, rawStatus] = item;

    const testName = rawTestName.trim();
    const browserName = browser.trim();
    const envName = env.trim();
    const status = rawStatus.trim().toUpperCase();
    if (testName === "") {
      invalid++;
      continue;
    }

    if (status !== "PASS" && status !== "FAIL") {
      invalid++;
      continue;
    }
    const reportItem = `${testName} - ${browserName} - ${envName}`;
    if (status === "PASS") {
      passed.push(reportItem);
    } else {
      failed.push(reportItem);
    }
  }
  return {
    totalValid: passed.length + failed.length,
    invalid: invalid,
    passed: passed,
    failed: failed,
  };
}
console.log(taoBaoCaoTest(testRuns));

// // Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô

// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.

// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // {
// //   totalValid: 3,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging",
// //     "search product - webkit - staging"
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }

