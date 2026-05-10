for (let i = 1; i <= 5; i++) {
  console.log(`Đang chạy vòng thứ ${i}`);
}

//
let soLuongAccount = 3;

for (let i = 1; i <= soLuongAccount; i++) {
  let emailTest = `nguoiDung_${i}@gmail.com`;
  console.log(`Đã tạo tài khoản ${emailTest}`);
}

//Duyệt array bằng index
let sanPham2 = ["Quần đùi", "Áo cộc", "váy"];

for (let i = 0; i < sanPham2.length; i++) {
  console.log(`Sản phẩm #${i + 1} : ${sanPham2[i]}`);
}


//Duyệt object
let config2 = {
  browser: "Firefox",
  timeout: 2000,
  headless: true,
};

// Object ko dùng đc for cổ điển
let keys = Object.keys(config2);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = config2[key];
  console.log(`${key}: ${value}`);
}

// mô phỏng vòng lặp 1
// i =0 => i vẫn nhỏ hơn i < 3
// keys[0]; ->browser
// config2['browser'] -> firefox

// Trace thực thi:
// 1. Tạo object config2 với 3 thuộc tính:
//    - browser = "Firefox"
//    - timeout = 2000
//    - headless = true
// 2. Gọi Object.keys(config2) để lấy mảng tên thuộc tính:
//    keys = ["browser", "timeout", "headless"]
// 3. Vòng lặp for bắt đầu với i = 0, điều kiện i < keys.length (3).
//    - Lần 1: i = 0
//      key = "browser"
//      value = config2["browser"] = "Firefox"
//      In ra: browser: Firefox
//    - Lần 2: i = 1
//      key = "timeout"
//      value = config2["timeout"] = 2000
//      In ra: timeout: 2000
//    - Lần 3: i = 2
//      key = "headless"
//      value = config2["headless"] = true
//      In ra: headless: true
// 4. Sau lần lặp cuối, i tăng thành 3.
//    Điều kiện 3 < 3 là sai nên vòng lặp dừng.