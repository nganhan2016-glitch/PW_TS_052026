let loiChao = "Xin chao";
let loiChao2 = 'XIn chao';
let myName = "I'm Nga";

const tenHv = "Nga";
const loiGt = `Ten toi la ${tenHv}`;
console.log(loiGt);

//boolean
let denDangBat = true; // den sang
let daTotNghiep = false; // chua tot nghiep

let email = "   user01  ";
console.log(email.trim());

//include
let thongBao = "Dang nhap that bai. Sai mat khau";
console.log(thongBao.includes("thanh cong"));
console.log(thongBao.includes("mat khau"));

let giaTien = "100$";
let giaTienSo = giaTien.replace("$","");
console.log(giaTienSo);

let tien = "1.000.000";
console.log(tien.replace(".",""));
console.log(tien.replaceAll(".",""));

///
let url = "https://shopee.vn/product/12345";
console.log(url.indexOf("product"));

let fileName = "report_2026.pdf";
console.log(fileName.slice(-4));

let errMsg = "Error 404: Page not found";
let pos = errMsg.indexOf(":");

console.log(errMsg.substring(errMsg.indexOf(":")+2,));
//
let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
// yêu cầu lấy ra được ORD-2026-123
console.log(rawText.trim());
let start = rawText.indexOf(":");
let end = rawText.indexOf("|");
let result = rawText.slice(start + 2, end).trim();
console.log(result.length);

//////
let s1 = "100";
console.log(Number(s1));

let s2 = "100px";
console.log((Number(s2)));
console.log(parseInt(s2));
console.log(parseInt("10.999"));
console.log(parseFloat("10.5Kg"));

console.log(Number("")); // tra ve 0

console.log(19.956);
//--------------
let min = 50;
let max = 55;

let sl = Math.floor(Math.random() * (max - min + 1)) + min;
 console.log(sl);

 console.log(typeof sl);

 //-----------
 let ngay = 5;
 let chuoiNgay = String(ngay);
 
 let orderNumber = 5;
 let orderNumberStr = String (orderNumber);
 let orderId = orderNumberStr.padStart(5,"0");
console.log(`SP-${orderId}`);

let username = "Nga";
let age = 44;
console.log("Ten: "+ username + " - Tuoi:" + age);
console.log("Ten:", username, "Tuoi:", age);
console.log(`Ten: ${username} - Tuoi: ${age}`);

let amount =9.5;
//"009.50"
console.log(String(amount.toFixed(2)).padStart(6,0));
