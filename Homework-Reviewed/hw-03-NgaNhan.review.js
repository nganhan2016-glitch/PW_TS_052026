// HW-03: Báo cáo kiểm tra trước khi release

let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"
let grade;

// trim() — đúng
// Góp ý: gán lại biến gốc (rawProjectName = rawProjectName.trim())
//    Nên tạo biến mới để giữ data gốc cho debug:
//    let projectName = rawProjectName.trim();
rawProjectName = rawProjectName.trim();
let envName = rawEnvName.trim();
// if/else kiểm tra rỗng → gán "Development" — đúng
// Góp ý: gán lại rawEnvName — nên tạo biến mới (let environment = ...)
if (envName === "") {
    rawEnvName = "Development";
} else {
    rawEnvName = envName;
}

// Number() — đúng
// Góp ý: gán lại rawPassRate — nên tạo biến mới (let passRate = ...)
rawPassRate = Number(rawPassRate);

// Ép Boolean bằng if/else — đúng, dễ đọc
// Góp ý: gán lại rawHasReport — nên tạo biến mới (let hasReport = ...)
if (rawHasReport === "true") {
    rawHasReport = true;
} else {
    rawHasReport = false;
}

// hasCriticalBug: if/else if kiểm tra null, undefined, rỗng — đúng
let hasCriticalBug; 
if (rawCriticalMessage === null || rawCriticalMessage === undefined) {
    hasCriticalBug = false;
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false
} else {
    hasCriticalBug = true;
}

// Ternary tạo message — đúng
// Góp ý: gán lại rawCriticalMessage — biến gốc bị ghi đè
rawCriticalMessage = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";

// if/else if xếp hạng — đúng thứ tự, gọn
if (rawPassRate >= 95) {
    grade = "EXCELLENT";
} else if (rawPassRate >= 80) {
    grade = "GOOD";
} else if (rawPassRate >= 60) {
    grade = "NEEDS IMPROVEMENT";
} else {
    grade = "CRITICAL";
}

// switch/case — đúng, đầy đủ
// Góp ý: chrome/edge cùng "Chromium" — có thể gộp case (fall-through)
let engine;
switch (browserUsed) {
    case "chrome":
        engine = "Chromium";
        break;
    case "edge":
        engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";
        break;
    default:
        engine = "Unknown";
        break;
}

// Ternary — đúng
let report = rawHasReport ? "Có report": "Chưa có report";

// isReadyToRelease: if/else if — đúng logic
// Góp ý: report === "Chưa có report" — so sánh chuỗi thay vì Boolean
//    Nên dùng: !rawHasReport — vì rawHasReport đã là Boolean
//    So sánh chuỗi dễ sai nếu typo hoặc đổi ngôn ngữ
let isReadyToRelease;
if (rawPassRate < 80) {
    isReadyToRelease = false;
} else if (hasCriticalBug) {
    isReadyToRelease = false;
} else if (report === "Chưa có report"){
    isReadyToRelease = false;
} else {
    isReadyToRelease = true;
}
let ready = isReadyToRelease ? "YES" : "NO";

// Output
// SAI: "Neko CRM" hardcode thay vì dùng rawProjectName (đã trim)
console.log("Project:".padEnd(15," ")+ "Neko CRM");
// rawEnvName đã gán lại = "Development" — đúng kết quả nhưng dùng biến gốc không tường minh
console.log("Environment:".padEnd(15, " ") + rawEnvName);
console.log("Browser:".padEnd(15, " ") + browserUsed);
console.log("Engine:".padEnd(15, " ") + engine);
console.log("");
// SAI: rawPassRate đã là Number (82) nhưng Number(rawPassRate) gọi Number(82) lại
//    Không sai kết quả, nhưng thừa — rawPassRate.toFixed(2) là đủ
rawPassRate = Number(rawPassRate).toFixed(2);
// Hay! Dùng padEnd(15) căn chỉnh output — giống Ngọc Minh
console.log("Pass Rate:".padEnd(15, " ")+ rawPassRate + "%"  );
console.log("Grade:".padEnd(15, " ") + grade);
console.log("Report:".padEnd(15, " ") + report);
console.log("Critical Bug:".padEnd(15, " ") + rawCriticalMessage);
console.log("Ready:".padEnd(15, " ") + ready);

// ===================================================
// TỔNG KẾT REVIEW — NGA NHÂN — HW-03
// ===================================================
// Kết quả: Gần đạt — Logic đúng, output đúng, nhưng cách viết cần cải thiện
//
// Điểm tốt:
//   - hasCriticalBug if/else if tường minh, đủ 3 trường hợp
//   - Ép Boolean bằng if/else — đúng, dễ đọc
//   - if/else if xếp hạng gọn, đúng thứ tự
//   - switch/case đầy đủ, có default
//   - padEnd(15) căn chỉnh output — chuyên nghiệp
//   - Ternary cho report và ready — gọn
//   - isReadyToRelease kiểm tra từng điều kiện — tường minh
//
// Cần cải thiện:
//   - Gán lại biến gốc xuyên suốt (rawProjectName, rawEnvName, rawPassRate, rawHasReport, rawCriticalMessage)
//     Nên tạo biến mới cho mỗi giá trị đã xử lý — giữ data gốc cho debug
//   - "Neko CRM" hardcode trong console.log thay vì dùng biến
//   - chrome/edge nên gộp case (fall-through)
//   - isReadyToRelease: so sánh chuỗi report === "Chưa có report" — nên dùng Boolean
//   - Nên dùng const thay let cho biến không gán lại
//   - grade khai báo ở đầu file (dòng 7) — nên khai báo gần chỗ dùng
// ===================================================
