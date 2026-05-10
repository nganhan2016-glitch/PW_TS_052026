//spread operator - sao chép và gộp mảng

const mangGoc = [1, 2, 3];
//clone mảng gốc -> dùng spread operator
const mangSaoChep = [...mangGoc];
mangSaoChep.push(9999);

console.log(mangGoc);
console.log(mangSaoChep);

//gộp 2 mảng lại -> 1
const mang1 = ["A", "B"];
const mang2 = ["C", "D"];

const mangGop = [...mang1, ...mang2];
console.log(mangGop);

// [0, ... ,4,5]
//Chèn phần tử vào giữa
const mangMoi = [0, ...mangGoc, 4, 5];

//spread với object - Sao chép và ghi đè

const configMacDinh = {
  baseUrl: "https://staging.neko.vn",
  timeout: 30000,
  headless: true,
  retries: 2,
};
//ghi đè 2 field, và giữ nguyên phần còn lại
const configProd = {
  ...configMacDinh,
  baseUrl: "https://neko.vn",
  retries: 0,
};

console.log(configProd);

// Tạo cấu hình debug từ cấu hình mặc định và tắt chế độ headless
const configDebug = { ...configMacDinh, headless: false };

//spread trong tham số hàm
const danhSachGia = [10000, 20000, 30000];

const giaMax = Math.max(...danhSachGia);

// Cách viết bên dưới tương đương với dòng trên:
// const giaMax = Math.max(10000, 20000, 30000);

//----Bài tập--------------------
//có dữ liệu như sau
const configMacDinhBaiTap = {
  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
  timeout: 30000, // Thời gian chờ tối đa là 30 giây
  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
  retries: 2, // Số lần thử lại khi có lỗi
};

const configGhiDe = {
  timeout: 10000,
  headless: false,
};


const tagsMacDinh = [" smoke  ", "  login "];
const tagsThem = ["  check out  ", "  smoke  ", "  regression "];

const tocDoPhanHoi = [1200, 3400, 800, 1500];

const tenSuiteRaw = "  Payment  Flow  ";


function taoCauHinhChayTest() {
    let configCuoi = {...configMacDinh, timeout: 10000, headless: false }
    //console.log(configCuoi);

    let mangGop = [...tagsMacDinh, ...tagsThem];
    let mangCuoi= [];

    for (let item of mangGop){
        let cleanTag =  item.trim().toLowerCase();
        if (cleanTag === ""){
            continue;
        }            
        if (!mangCuoi.includes(cleanTag))
            mangCuoi.push(cleanTag);

    }
    //console.log(mangCuoi);

    let cleanSuiteRaw =  tenSuiteRaw.trim().replace(" ","");
    if (cleanSuiteRaw === " "){
        cleanSuiteRaw = "unknown-suite";
    }
    //console.log(cleanSuiteRaw);
     
    let thoiGianPhanHoiMax = Math.max(...tocDoPhanHoi);
    //console.log(thoiGianPhanHoiMax);
    
    return {
        suiteName: "Payment Flow",
        config: configCuoi,
        tags: mangCuoi,
        slowestRespone: thoiGianPhanHoiMax
    }
    
}

let cauHinh = taoCauHinhChayTest();
console.log(cauHinh);

//Yêu cầu
//Viết 1 hàm taoCauHinhChayTest()
// Dùng object spread để tạo configCuoi từ configMacdinh và config Ghi đè
//Dùng Array spread để gộp tagsMacDinh và tagsTheem thanh 1 mang mới
// Sau đó xử lý mangr mới bằng cách là bỏ tag rỗng, đổi về lowerCase, và có thể xử lý tag trùng (dùng includes)
// Làm sạch tenSuiteRaw
// nếu tenSuiteRaw rỗng thì dùng mặc định là "unknown-suite"
//Tìm thời gian phản hồi lớn nhất dùng spread với Math.Max
//Trả về object có dạng
//Trả về object có dạng
// {
//     suiteName: "Payment Flow",
//     config:{
//       baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//   timeout: 10000, // Thời gian chờ tối đa là 30 giây
//   headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//   retries: 2, //
//     },
//     tags: ['smoke', 'login', 'checkout', 'regression'],
//     slowestRespone: 3400
// // }

//=======================
// có ngoặc tròn () --> hàm chạy ngay -> lấy kết quả -> ly sinh tố
const ketQuaChay = layDuLieuTest();
console.log(ketQuaChay);
console.log(typeof ketQuaChay);

///ko có ngoặc tròn  -> giao bản vẽ -> lấy bản thân cái máy

const copyHam = layDuLieuTest;
console.log(copyHam);
console.log(typeof copyHam);

//Ví dụ call back

//Bước 1; Tạo "sốd diện thoại" -> call back

function quayLaiAn() {
  console.log("Tao quay lại đây !!!");
}

//Bước 2: Bồi bàn nhận calll back làm tham số

function choBanTrong(soDienThoaiCuaKhach) {
  console.log("Đang dọn bạn...");

  //Bước 3. xử lý xong -> lôi hàm ra và gọi để chạy
  //Đây chính là lúc callBack đc gọi lại
  soDienThoaiCuaKhach();
}

//Bước 4: Chạy -> ko có () sau quayLaiAn
choBanTrong(quayLaiAn);

function layDuLieuTest() {
  return "Dữ liệu test";
}
//================
///Callback có tham số -
// Hàm nhận call back có thể tryền dữ liệu ngươci lại cho callback khi gọi

function thongBaoKetQua(tenBaiTest, ketQua) {
  console.log(`${tenBaiTest} - ${ketQua}`);
}

function chayTest(tenTest, callBack) {
  console.log(`đang chạy ${tenTest}`);

  //Giả lập: pass nếu test chứa logi fail nếu ko

  const pass = tenTest.includes("login");
  callBack(tenTest, pass ? "Chạy passed" : "chạy fail");
}

chayTest("login thành công", thongBaoKetQua);
//---
//-----------
function inThongBao() {
  console.log("đã đợi xong");
}
//cách1
// setTimeout(inThongBao, 5000);
//cáh2
setTimeout(function () {
  console.log("đã đợi xong");
}, 3000);

//cách 3 -> dùng arrow function
setTimeout(() => {
  console.log("đã đợi xong");
}, 3000);

//ứng dụng thực tế
//Call back thường xảy ra ở các hàm xử lý array

const giaSanPhamUI = [100000, 250000, 500000];
const giaMoi = giaSanPhamUI.map((gia) => {
  return gia * 2;
});
console.log(giaMoi);
//-------------
const users = [
  { ho: "nguyen", ten: "neko" },
  { ho: "Tran", ten: "New" },
];

const hoTen = users.map((u) => {
  return `${u.ho} ${u.ten}`;
});

console.log(hoTen);
//--------
const sanPhamUI = [
  { ten: "Chuột", gia: 150000, tonKho: true },
  { ten: "Bàn phím", gia: 500000, tonKho: false },
  { ten: "Màn hình", gia: 3000000, tonKho: true },
  { ten: "Tai nghe", gia: 200000, tonKho: true },
];

//Lọc cấc sản phẩm còn hàng
//dùng for
let sanPhamConHang = [];
for (const sanPham of sanPhamUI){
    if (sanPham.tonKho === true){
        sanPhamConHang.push(sanPham);
    }
}
console.log(sanPhamConHang);
// cach 2: dung filter
const sanPhamConHangFilter = sanPhamUI.filter((sanPham) => {
  return sanPham.tonKho === true;
});
// cach viet khac
const sanPhamConHangFilter = sanPhamUI.filter(
  (sanPham) => sanPham.tonKho === true,
);

// loc gia < 200000

const sanPhamGia = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000;
})
//----
const sanPhamCuoi = sanPhamUI.filter((sanPham) => {
    return sanPham.gia < 200000 && sanPham.tonKho === true;
})

console.log(sanPhamCuoi);

//FIND
const users = [
  { id: 1, ten: "neko", role: "admin" },
  { id: 2, ten: "mew", role: "tester" },
  { id: 3, ten: "Cat", role: "tester" },
];

//tìm phần tử có role là admin
const userAdmin = users.find((user) => {
    return user.role === "admin";
})
console.log(userAdmin);
const testerUser = usersTest.find((user) => user.role === "tester");
console.log(testerUser);
