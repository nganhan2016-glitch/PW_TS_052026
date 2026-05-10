let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"
let grade;

/*
Yêu cầu:
Dùng .trim() để làm sạch rawProjectName và rawEnvName.
Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
Ép rawPassRate sang Number.
Ép rawHasReport sang Boolean đúng cách. */

rawProjectName = rawProjectName.trim();
let envName = rawEnvName.trim();
if (envName === "") {
    rawEnvName = "Development";
} else {
    rawEnvName = envName;
}
rawPassRate = Number(rawPassRate);
if (rawHasReport === "true") {
    rawHasReport = true;
} else {
    rawHasReport = false;
}

/*
Tạo hasCriticalBug theo quy tắc:
nếu message là null hoặc undefined -> false
nếu sau trim() là rỗng -> false
ngược lại -> true
Dùng if / else if để xếp hạng:
>= 95 -> "EXCELLENT"
>= 80 -> "GOOD"
>= 60 -> "NEEDS IMPROVEMENT"
còn lại -> "CRITICAL"
*/
let hasCriticalBug; 
if (rawCriticalMessage === null || rawCriticalMessage === undefined) {
    hasCriticalBug = false;
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false
} else {
    hasCriticalBug = true;
}

rawCriticalMessage = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";

if (rawPassRate >= 95) {
    grade = "EXCELLENT";
} else if (rawPassRate >= 80) {
    grade = "GOOD";
} else if (rawPassRate >= 60) {
    grade = "NEEDS IMPROVEMENT";
} else {
    grade = "CRITICAL";
}

/*
Dùng switch/case để gán tên engine cho browserUsed:
chrome -> "Chromium"
edge -> "Chromium"
firefox -> "Gecko"
safari -> "WebKit"
Nếu không khớp -> "Unknown"
*/ 
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

/*
Dùng toán tử 3 ngôi để tạo message cho report:
nếu hasReport là true -> "Có report"
ngược lại -> "Chưa có report" */
let report = rawHasReport ? "Có report": "Chưa có report";

/*
Tạo isReadyToRelease theo quy tắc:
nếu pass rate dưới 80 -> false
nếu có critical bug -> false
nếu chưa có report -> false
còn lại -> true */
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

/*
In báo cáo ra console.

Expected output
Project:         Neko CRM
Environment:     Development
Browser:         chrome
Engine:          Chromium

Pass Rate:       82.00%
Grade:           GOOD
Report:          Có report
Critical Bug:    Không có bug nghiêm trọng

Ready:           YES
*/
console.log("Project:".padEnd(15," ")+ "Neko CRM");
console.log("Environment:".padEnd(15, " ") + rawEnvName);
console.log("Browser:".padEnd(15, " ") + browserUsed);
console.log("Engine:".padEnd(15, " ") + engine);
console.log("");
rawPassRate = Number(rawPassRate).toFixed(2);
console.log("Pass Rate:".padEnd(15, " ")+ rawPassRate + "%"  );
console.log("Grade:".padEnd(15, " ") + grade);
console.log("Report:".padEnd(15, " ") + report);
console.log("Critical Bug:".padEnd(15, " ") + rawCriticalMessage);
console.log("Ready:".padEnd(15, " ") + ready);




