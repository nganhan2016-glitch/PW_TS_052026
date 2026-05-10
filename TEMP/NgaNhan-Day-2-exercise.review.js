/* Bai 1: 
Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.
Dữ liệu đầu vào:

Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
Yêu cầu: Viết code để:

Làm sạch và chuyển đổi Giá gốc về Number.
Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100. */

// Khai báo biến input đúng theo đề
let rawPrice = " 1.000.000 đ ";
let percentDiscount = 20;
let discountedPrice = " 800.000 đ ";

// Góp ý: chuỗi xử lý hơi phức tạp: trim() rồi substring(0, rawPrice.length-2) rồi replaceAll(".", "") rồi parseInt
//    - substring(0, rawPrice.length-2): rawPrice.length = 16 (tính TRƯỚC trim)
//      nhưng substring chạy trên chuỗi ĐÃ trim (12 ký tự), nên 14 > 12 → lấy hết chuỗi
//    - Kết quả vẫn đúng 1000000, nhưng cách dùng rawPrice.length (chưa trim) lại cắt chuỗi ĐÃ trim — dễ nhầm
// Gợi ý đơn giản hơn: parseInt(rawPrice.trim().replace("đ","").replaceAll(".",""))
rawPrice = parseInt(rawPrice.trim().substring(0,rawPrice.length-2).replaceAll(".",""));
console.log(rawPrice);

// Công thức đúng: 1000000 * 80/100 = 800000
let expectedPrice = rawPrice * (100 - percentDiscount)/100;
console.log(expectedPrice);

/* Bai 2:
...
*/

// Khai báo biến input đúng
let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

// trim() + toUpperCase() — chuẩn
tenSanPham = tenSanPham.trim().toUpperCase();
// Dùng substring + indexOf — cách tiếp cận đúng
// Góp ý: giaGoc.length-4 đếm 4 ký tự từ cuối để bỏ " vnđ"
//    Cách này hoạt động đúng ở đây, nhưng nếu data thay đổi (ví dụ đơn vị khác) thì sẽ sai
//    An toàn hơn: dùng indexOf("vnđ") thay vì length - 4
giaGoc = giaGoc.substring(giaGoc.indexOf(":") + 2,giaGoc.length-4).replaceAll(',', "");
// Góp ý: cùng pattern length-4 cho soLuong — ở đây đúng nhưng fragile
soLuong = soLuong.substring(soLuong.indexOf(":")+2,soLuong.length-4);
// Lấy maGiamGia xong ra "10% " — nên dùng .trim() ở cuối cho an toàn
maGiamGia = maGiamGia.substring(maGiamGia.indexOf(":")+2, maGiamGia.length-4);

// Output đúng format
console.log("HÓA ĐƠN THANH TOÁN - ID:#0002");
console.log(`Sản phẩm: ${tenSanPham}`);
console.log(`Đơn giá: ${giaGoc}`);
console.log(`Số lượng: ${soLuong}`);
// Tính inline giaGoc * soLuong — gọn!
// JavaScript tự ép kiểu String thành Number khi dùng phép nhân
console.log(`Tổng tiền (Gốc): ${giaGoc * soLuong}`);
console.log(`Giảm giá: ${maGiamGia}`);
// Góp ý: maGiamGia.substring(0,2) hardcode lấy 2 ký tự đầu cho "10"
//    Nếu giảm giá là 5% (1 chữ số) hoặc 100% (3 chữ số) sẽ sai
//    Gợi ý: let discountNum = parseInt(maGiamGia); — parseInt tự lấy phần số từ đầu chuỗi
let tongTien = (giaGoc * soLuong) * (100 - (maGiamGia.substring(0,2)))/100; 
// SAI: Thiếu format tiền — in ra "54000000" thay vì "54.000.000"
// Gợi ý: chuyển số thành chuỗi rồi dùng slice chèn dấu chấm ngăn cách:
//    let str = String(tongTien);
//    let formatted = str.slice(0,-6) + "." + str.slice(-6,-3) + "." + str.slice(-3);
//    console.log(`THÀNH TIỀN: ${formatted} VNĐ`);
// Góp ý: cũng thiếu " VNĐ" ở cuối
console.log(`THÀNH TIỀN: ${tongTien}`);

// ===================================================
// TỔNG KẾT REVIEW — NGA NHÂN
// ===================================================
// Bài 1: Đạt — Kết quả đúng, cách tiếp cận ổn
// Bài 2: Cần sửa — Logic tính toán đúng nhưng vài chỗ hardcode và thiếu format
//
// Điểm tốt:
//   - Biết dùng substring + indexOf để cắt chuỗi
//   - Biết dùng block comment /* */ cho đề bài — gọn gàng
//   - Tận dụng JS tự ép kiểu khi nhân — cho thấy hiểu về type coercion
//   - Kết quả tính toán chính xác
//
// Cần cải thiện:
//   - Bài 1: cách dùng substring(0, rawPrice.length-2) dễ nhầm, nên đơn giản hóa
//   - Dùng length-4 để cắt cuối chuỗi — nên dùng indexOf cho an toàn hơn
//   - substring(0,2) hardcode cho số giảm giá — nên dùng parseInt() hoặc indexOf("%")
//   - Thiếu format tiền (chèn dấu chấm ngăn cách nghìn)
//   - Thiếu " VNĐ" ở dòng THÀNH TIỀN
// ===================================================
