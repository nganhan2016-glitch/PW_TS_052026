const testRuns = [
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





