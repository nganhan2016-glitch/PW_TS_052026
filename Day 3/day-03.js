
let maGiamGia = "DISCOUNT CODE: 10% OFF";
//ddeer lấy
let phanTramGiamGia = Number(
  maGiamGia.slice(maGiamGia.indexOf(":") + 2, maGiamGia.indexOf("%")),
);
console.log(phanTramGiamGia);
let phanTramGiamGia2 = Number(
  maGiamGia.replace("DISCOUNT CODE:", "").replace("% OFF", ""),
);

console.log(phanTramGiamGia2);

console.log(10 + 5);

console.log("10" + 5);
console.log("10" - 5);
console.log("Mười" - 5);

console.log("10" / 2);
//-------------------------
//Mình cần test chức năng Đăng kí tk, nút đăng kí chỉ sáng lên (enable) khi thỏa mãn đồng thời 
// //3 đkieen
// 1. tuổi người dùng phải từ 18 trở lên
// 2. mật khẩu phảu có đúng 8 kt
// 3. check box đồng ý phải đc tích

let userAge  = 20;
let passwordInput = "Neko12345";
let isTermAccept = true;

//1. tao bien isAgeValid de kiem tra tuoi >=18 hay ko
//2. tao bien isPasswordValid kie tra mk co dung 8kt

//ket hop toan bo dieu kien de tao bien isSubmitButtonEnabled

//in ra console,log
let isAgeValid = userAge >= 18;
let isPasswordValid = passwordInput.length === 8;
let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccept;
console.log(isSubmitButtonEnabled);

let a = 5
let kq1= a++;
console.log((kq1));
console.log((a));

let b =5;
let kq2 = ++b;
console.log(kq2);
console.log(b);

let count = 0;
// count++;
++count;
//++count, count += 1, count = count + 1
console.log(count);

let i = 3;
//vừa làm 2 việc 1 lúc
// tính toán và cập nhật biến
// -> lí do khó đọc. vì nhìn nhanh ko biết
// nhân 3 hay 4
//sau dòng này i còn giá trị nào
//khó dubug
let resultPostFix = i++ * 2;

console.log(resultPostFix);
console.log(i);

//let resultPostFix = i * 2;
i++;
//----------------------
/* let retries = 2;

let firstLog = retries++;

let secondLog = ++retries;

let canRetry = retries-- > 3;*/

//đoán output 4 dòng
//viết lại theo cách rõ ràng
/*let retries = 2;
let firstLog =  retries;
retries ++;
let secondLog= retries +1
retries --;
let canRetry = retries > 3*/
console.log("aaa");

let retries = 2;
let firstLog = retries;
retries++;

++retries;

let secondLog = retries;

let canRetry = retries > 3;


console.log(firstLog);

console.log(secondLog);

console.log(canRetry);

console.log(retries);
// BAI TAP
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên

let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";

//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả

rawAge = parseInt(rawAge.slice(1,2));
console.log(rawAge);

rawisVIP = "true" == true;
console.log(rawisVIP);

rawTicketPrice = rawTicketPrice.trim().slice(-2);
console.log(rawTicketPrice);
