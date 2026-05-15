/*
"Bài 1
Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

Dữ liệu đầu vào:

let apiResponse = {
    userId: 101,
    username: ""neko_tester"",
    email: null,
    isActive: ""true"",  // Bug: phải là boolean, không phải string
    phone: """",
    role: ""admin""
};

Yêu cầu:

Với mỗi key, kiểm tra:
Giá trị có phải null hoặc """" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
Nếu key là ""isActive"", kiểm tra typeof có phải ""boolean"" không? → In cảnh báo sai kiểu.
Đếm tổng số lỗi tìm được.
Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra."																									
*/
// Đúng: Dữ liệu đầu vào giữ đúng theo đề.
let apiResponse = {
  userId: 101,
  username: "neko_tester",
  email: null,
  isActive: "true", // Bug: phải là boolean, không phải string
  phone: "",
  role: "admin",
};

// Đúng: Có biến đếm lỗi riêng, bám sát yêu cầu "đếm tổng số lỗi".
let errorCount = 0;

// Đúng: for...in phù hợp để duyệt từng key trong object.
// Góp ý: Có thể dùng `const` cho `key` vì trong mỗi vòng lặp mình không gán lại biến này.
// Gợi ý:
// for (const key in apiResponse) {
for (let key in apiResponse) {
  // Đúng: Lấy value bằng apiResponse[key] là đúng khi key thay đổi theo từng vòng lặp.
  // Góp ý: Có thể dùng `const value` vì value không bị gán lại trong block này.
  // Gợi ý:
  // const value = apiResponse[key];
  let value = apiResponse[key];

  // Check null hoặc chuỗi rỗng
  // Đúng: Điều kiện này bắt đúng `email: null` và `phone: ""`.
  if (value === null || value === "") {
    console.log(`Field "${key}" rỗng`);
    errorCount++;
  }

  // Check kiểu dữ liệu cho isActive
  // Đúng: Chỉ kiểm tra kiểu dữ liệu khi key là `isActive`, và dùng typeof để so với "boolean".
  if (key === "isActive" && typeof value !== "boolean") {
    console.log(
      `Field "${key}" nên là kiểu boolean, nhưng lại là ${typeof value}`,
    );
    errorCount++;
  }
}

// Đúng: Tổng lỗi ra 3, khớp với email rỗng, phone rỗng và isActive sai kiểu.
console.log(`Tổng lỗi: ${errorCount}`);

// ===================================================
// TỔNG HỢP REVIEW — BÀI 1
// ===================================================
// Kết quả: Đạt — Logic đúng và tổng lỗi ra đúng 3 theo yêu cầu đề bài.
//
// Điểm tốt:
//   - Duyệt object bằng `for...in` đúng hướng.
//   - Kiểm tra đủ 2 rule: field rỗng và `isActive` sai kiểu dữ liệu.
//   - Biến `errorCount` tăng đúng mỗi lần vi phạm, bám sát yêu cầu "1 lỗi = 1 lần vi phạm".
//
// Cần cải thiện:
//   - Có thể đổi `let key` và `let value` thành `const` để rõ là các biến này không bị gán lại:
//     for (const key in apiResponse) {
//       const value = apiResponse[key];
//     }
//   - Có thể đổi wording tổng kết cho sát đề hơn:
//     console.log(`Tổng số lỗi tìm được: ${errorCount}`);
// ===================================================

//=========================================
/*
"
Bài 2
Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.

Dữ liệu đầu vào:

let testUrls = [
    { url: ""/api/users"", status: 200 },
    { url: """", status: null },
    { url: ""/api/products"", status: 200 },
    { url: ""/api/orders"", status: 500 },
    { url: ""/api/reviews"", status: 200 }
];
Yêu cầu:

Nếu url rỗng ("""") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
Nếu bình thường → in kết quả PASS.
Đếm tổng URL đã test được (không tính URL bị bỏ qua)."																                                                 	
*/
// Đúng: Dữ liệu đầu vào giữ đúng theo đề.
let testUrls = [
  { url: "/api/users", status: 200 },
  { url: "", status: null },
  { url: "/api/products", status: 200 },
  { url: "/api/orders", status: 500 },
  { url: "/api/reviews", status: 200 },
];

// Đúng: Có biến đếm URL đã test.
let sumUrl = 0;

// Góp ý: Khai báo `let testUrl;` bên ngoài rồi dùng `for (testUrl of testUrls)` vẫn chạy,
// nhưng cách phổ biến và gọn hơn là khai báo biến ngay trong vòng lặp.
// Gợi ý:
// for (const testUrl of testUrls) {
let testUrl;

// Đúng: for...of phù hợp để duyệt từng object URL trong mảng.
for (testUrl of testUrls) {
  // Đúng: Gặp URL rỗng thì in cảnh báo và `continue`, không tính vào tổng URL đã test.
  if (testUrl.url === "") {
    console.log("URL rỗng");
    continue;
  }

  // SAI: Đây là lỗi kết quả. URL `/api/orders` đã được kiểm tra status 500 trước khi `break`,
  // nên vẫn phải được tính là đã test. Hiện tại `sumUrl++` nằm sau nhánh 500 nên tổng cuối chỉ ra 2 thay vì 3.
  // Gợi ý:
  // sumUrl++;
  // if (testUrl.status === 500) {
  //   console.log(`Lỗi nghiêm trọng tại URL ${testUrl.url} có statusCode = 500`);
  //   break;
  // }
  if (testUrl.status === 500) {
    console.log(`LOi nghiem trong tai URL ${testUrl.url} cò statusCode = 500`);
    break;
  }

  // Góp ý: Dòng này đang in cả object, trong khi đề yêu cầu in kết quả PASS.
  // Gợi ý:
  // console.log(`PASS: ${testUrl.url}`);
  console.log(testUrl);
  sumUrl++;
}

// SAI: Vì chưa tăng `sumUrl` cho URL status 500 nên output thực tế là 2.
// Output đúng mong đợi: Tổng URL đã test: 3
// Gợi ý sửa đầy đủ:
// for (const testUrl of testUrls) {
//   if (testUrl.url === "") {
//     console.log("URL rỗng");
//     continue;
//   }
//   sumUrl++;
//   if (testUrl.status === 500) {
//     console.log(`Lỗi nghiêm trọng tại URL ${testUrl.url} có statusCode = 500`);
//     break;
//   }
//   console.log(`PASS: ${testUrl.url}`);
// }
console.log(`Tổng URL đã test: ${sumUrl}`);

// ===================================================
// TỔNG HỢP REVIEW — BÀI 2
// ===================================================
// Kết quả: Cần sửa — `continue` và `break` dùng đúng hướng, nhưng tổng URL đã test đang sai kết quả: hiện ra 2, đúng phải là 3.
//
// Điểm tốt:
//   - Gặp URL rỗng thì `continue` đúng yêu cầu.
//   - Gặp status 500 thì `break` đúng yêu cầu.
//   - Dùng `for...of` là cách phù hợp và dễ đọc cho mảng object.
//
// Cần cải thiện:
//   - Đây là lỗi kết quả: cần tăng `sumUrl` ngay sau khi qua bước URL rỗng, trước khi kiểm tra status 500:
//     sumUrl++;
//     if (testUrl.status === 500) {
//       console.log(`Lỗi nghiêm trọng tại URL ${testUrl.url} có statusCode = 500`);
//       break;
//     }
//   - Cần đổi `console.log(testUrl)` thành output PASS rõ ràng:
//     console.log(`PASS: ${testUrl.url}`);
//   - Nên sửa thông báo lỗi bị sai dấu/chính tả thành:
//     console.log(`Lỗi nghiêm trọng tại URL ${testUrl.url} có statusCode = 500`);
//   - Nên viết vòng lặp theo cách phổ biến hơn:
//     for (const testUrl of testUrls) { ... }
// ===================================================
