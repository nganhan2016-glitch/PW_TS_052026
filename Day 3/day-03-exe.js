// BAI TAP
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên
let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";

//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả

rawAge = parseInt(rawAge.replaceAll("tuổi","").trim());
console.log(rawAge);

rawisVIP = rawisVIP.trim() === "true";
rawTicketPrice = parseInt(rawTicketPrice.replaceAll("đ","").replaceAll(".","").trim());
console.log(rawTicketPrice);

let disCount = 30;
let discountedTicketPrice;

if (rawAge >= 18 && rawisVIP) {
    discountedTicketPrice = rawTicketPrice * (100 - disCount )/100

} else {
   discountedTicketPrice = rawTicketPrice; 
}

console.log(`Gia sau giam ${discountedTicketPrice}`);



