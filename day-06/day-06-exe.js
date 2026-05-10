//Mình muốn tạo nhanh 5 mã đơn hàn để test màn hình quản lý đơn hàng
//dữ liệu đầu vào
let soLuongDon = 5;

// Yêu cầu
//1. Dùng for cổ điển lặp từ 1 > 5
// mỗi vòng tạo biến maDonHang theo mẫu ORDER-1, ORDER-2....
// in từng mã đơn hàng ra màn hình

for (let i = 0; i < soLuongDon; i++) {
    console.log(`ORDER-${i + 1}`);

}

let fruits = ["Tao", "cam", "Buoi"];

for (let fruit of fruits) {
    console.log(fruit);

}

let matKhau = "Ngapoooo";
for (let kytu of matKhau) {
    console.log(`ky tu: ${kytu}`);

}

let danhSachUsers = [
    { ten: "Neko", role: "admin" },
    { ten: "Neko2", role: "guest" },
    { ten: "Neko3", role: "user" },
];

for (let user of danhSachUsers) {
    console.log(`${user.ten}  -Role ${user.role}`);

}

let config = { browser: "Chrome", timeout: 5000 };


for (let cap of Object.entries(config)) {
    console.log(`${cap[0]} - ${cap[1]}`);

}
for (let key of Object.keys(config)) {
    console.log(`${key}: ${config[key]}`);
}
//
let danhSachUrl = ["/login", "/dashboard", "/profile"];

// dùng for...of... mỗi vòng kpawj lấy ra 1 url và in ra câu Đang kiểm tra: url
for (let url of danhSachUrl) {
    console.log(`Dang kiem tra ${url}`);

}

// FOR ... IN
for (let key in config) {
    console.log(`${key} - ${config[key]}`);
}

// Dung vong lap nao cho array va Object
// while: ko biet so lan lap -> lap den khi dk sai
// for co dien: biet chinh xac so lan lap- > khi can kiem soat tuyet doi bien doi
//có array, chỉ cần giá trị -> for...of 
//có array, cần cả index.. for cổ điển
//duyệt object... -> dùng for of + biến hình hoặc for in

// Ví dụ
let products = [
    { ten: "iphone", gia: 200000 },
    { ten: "airpods", gia: 300000 },
    { ten: "macbook", gia: 10000 },
];

//Yêu cầu: sử dụng for of + for in để in ra tên và giá của products
// mỗi lần lặp cần có dấu --- phân cách giữa các sản phẩm  o dau ra

for (let product of products) {
    console.log(product);
    for (let key in product) {
        console.log(`${key} : ${product[key]}`);
    }
    console.log("---");
}


//break
// từ 1 -> 100 mình muốn tìm số chia hết cho 7 đầu tiên

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`tim thay vi tri ${i}`);
        break;
    }
}

let sanPhams = [
    { ten: "iphone", conHang: true },
    { ten: "airpods", conHang: false },
    { ten: "macbook", conHang: true },
];

// tìm sản phẩm hết hàng đầu tiên.
for (let sp of sanPhams) {
    console.log(sp);
    if (sp.conHang === false) {
        console.log(`san pham ${sp.ten} het hang`);
        break;
    }
}
for (let sp of sanPhams) {
    if (!sp.conHang) {
        console.log(`san pham ${sp.ten} het hang`);
        break;
    }
}

// bỏ qua sp hết hàng
for (let sanPham of sanPhams) {
 if (!sanPham.conHang) {
    continue;
 }
console.log(sanPham.ten);
}

//continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
}  



let userInfo = {
  ten: "neko",
  email: "neko@gmail.com",
  password: "abc123",
  role: "admin",
};

let fieldAnDi = ["password"];

// dùng includes, và continue tỏng array -> bỏ qua field nhạy cảm  dựa trên array fieldAndi -> in ra key và value hợp lệ
//for (user )

for (let key in userInfo) {
  if (fieldAnDi.includes(key)) {
    continue; // bỏ qua trường nhạy cảm và tiếp tục vòng lặp để in ra những trường hợp lệ còn lại
  } 
  console.log(`${key}: ${userInfo[key]}`);
}

//Ví dụ
// Mình đang test trang TIKI, lấy đc danh sách giá 6 sản phẩm. Yêu cầu
// lọc ra những sản phẩm có giá lớn 100K và đếm xem có bao nhiêu sản phẩm là sp vip

//Yêu cầu
// tạo 1 array rỗng danhSachVip
/// Nếu giá > 100000 thì ta cho sản phẩm vào dnah sách vip
// và làm tiếp yêu cầu đề bài, là in ra danh sách vip và số lượng
let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000];
let danhsachVip = [];
for (let i =0 ; i < danhSachGia.length; i++){
    if (danhSachGia[i] > 100000) {
        danhsachVip.push(danhSachGia[i])
    }
}
for (let j =0 ; j<danhsachVip.length; j++){
    console.log(`danh sach vip thu ${j+1}: ${danhsachVip[j]}`);
    
}

// c2
let danhSachVip = [];

for (let gia of danhSachGia) {
    if (gia < 100000) {
        continue;
    }
    danhSachVip.push(gia);
}

console.log(`Danh sách sản phẩm vip: ${danhSachVip}`);
console.log(`Số lượng sản phẩm vip: ${danhSachVip.length}`);

//c3
// // tạo mảng VIP
// let danhSachVip = [];
// // duyệt từng giá
// for (let gia of danhSachGia) {
//   if (gia > 100000) {
//     danhSachVip.push(gia);
//   }
// }
// // in danh sách VIP
// console.log("Danh sách VIP:", danhSachVip);
// // in số lượng VIP
// console.log("Số sản phẩm VIP:", danhSachVip.length);


//ví dụ
//Yêu cầu viết 1 hàm tên là cleanPrice(rawString). Hàm này nhận vào là 1 chuỗi giá tiền lấy từ UI
// *ví dụ " Giá: 25.000.000 VND  ". Hàm phảiu tự động dọn dẹp và return về 1 số number nguyên
// (ví dụ 25000000)
// test case
// sp1 = "  Giá: 1.500.000 VND  ";
// sp2 = "   250.000 VND";
// sp3 = "";
// //output
// 15000000
// 250000
// 0

console.log("Bai 6");

function cleanPrice (rawString) {
   if (!rawString) return 0;
   
   let cleanNumber = rawString.replace("Giá:","").replace("VND","").replaceAll(".","").trim();
   return Number(cleanNumber);
}
let sp1 = "  Giá: 1.500.000 VND  ";
let sp2 = "   250.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));
/*
function cleanPrice(rawString) {
  if (!rawString) {
    return 0;
  }
    //bước 1: loại bỏ khoảng trắng thừa
    let cleanedString = rawString.trim();
    //bước 2: loại bỏ chữ cái và dấu chấm
    cleanedString = cleanedString.replace(/[^0-9]/g, "");
    //bước 3: chuyển đổi chuỗi thành số
    let price = parseInt(cleanedString);
    return price;
}
let sp1 = "  Giá: 1.500.000 VND  ";
let sp2 = "   250.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));
*/
/*
console.log("c2");

function cleanPrice(rawString) {
    if (!rawString) return 0;
    let result = rawString;
    result = result.trim();          // bỏ khoảng trắng 2 đầu
    result = result.replaceAll(".", ""); // bỏ dấu chấm
    result = result.replace("gia:", "");  // bỏ chữ gia:
    result = result.replace("VND", "");   // bỏ VND
    return Number(result.trim());
}
// in ra 
console.log(cleanPrice("gia: 1.500.000 VND  ")); // 1500000
console.log(cleanPrice("   250.000 VND"));       // 250000
console.log(cleanPrice(""));                     // 0
//-----------------------------------
console.log("c3");
function cleanPrice(rawString) {
    if (!rawString) {
        return 0
    }
    const cleanNumber = rawString.replace("Giá:", "").replace("VND", "").replaceAll(".", "").trim();
    return Number(cleanNumber);
}
let sp1 = "  Giá: 1.500.000 VND  ";
let sp2 = "   250.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3)); */