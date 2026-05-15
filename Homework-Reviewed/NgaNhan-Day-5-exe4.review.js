// Đúng: Khai báo đúng options theo đề.
const resultOptions = {
    slowThreshold: 2500,
};

// Đúng: Giữ đủ dữ liệu results theo đề.
const results = [
    {
        id: "TC_LOGIN_001",
        module: "login",
        statuses: ["fail", "pass"],
        durations: [1200, 800],
        owner: "an"
    },
    {
        id: "TC_SEARCH_002",
        module: "search",
        statuses: ["pass"],
        durations: [600],
        owner: "binh"
    },
    {
        id: "TC_CART_003",
        module: "cart",
        statuses: ["fail", "fail", "fail"],
        durations: [1500, 1700, 1600],
        owner: ""
    },
    {
        id: "TC_PAY_004",
        module: "payment",
        statuses: ["pass"],
        durations: [-50],
        owner: "chi"
    },
    {
        id: "TC_PROFILE_005",
        module: "profile",
        statuses: ["pass", "pass"],
        durations: [700, 650],
        owner: "duy"
    },
    {
        id: "",
        module: "report",
        statuses: ["pass"],
        durations: [300],
        owner: "ha"
    },
    {
        id: "TC_API_006",
        module: "api",
        statuses: ["fail", "unknown"],
        durations: [400, 500],
        owner: "linh"
    },
    {
        id: "TC_BILL_007",
        module: "billing",
        statuses: ["fail", "pass", "pass", "pass"],
        durations: [600, 700, 650, 620],
        owner: "minh"
    },
    {
        id: "TC_LOG_008",
        module: "log",
        statuses: ["skip"],
        durations: [100],
        owner: "nam"
    },
    {
        id: "TC_SYNC_009",
        module: "sync",
        statuses: ["fail", "pass"],
        durations: [1500],
        owner: "oanh"
    }
];

// Đúng: Giữ toàn bộ logic trong hàm chính theo yêu cầu.
function phanTichKetQuaChay(results, options) {
    let analyzed = [];
    let invalid = [];
    let passedCount = 0;
    let failedCount = 0;
    let flakyCount = 0;
    let slowCount = 0;

    // Đúng: Lấy slowThreshold từ options.
    const { slowThreshold } = options;
    // Góp ý: Dòng log này hơi dư vì đề chỉ cần return object phân tích.
    // Gợi ý:
    // Xóa dòng console.log(options);
    console.log(options);

    for (const result of results) {
        // Đúng: Dùng destructuring khi đọc từng result object.
        const { id, module, statuses, durations, owner } = result;

        // Bước 2: kiểm tra invalid
        let hasNegativeDuration = false;
        // Đúng: Duyệt durations để bắt duration âm.
        for (const d of durations) {
            if (d < 0) {
                hasNegativeDuration = true;
            }
        }
        // Đúng: Invalid khi thiếu id, length lệch, hoặc có duration âm.
        const isInvalid = !id
            || statuses.length !== durations.length
            || hasNegativeDuration;

        if (isInvalid) {
            invalid.push({ id, module, statuses, durations, owner });
            continue; // bỏ qua bước tính toán, qua item tiếp theo
        }
        // Bước 3: tính toán
        // Đúng: finalStatus là status cuối cùng.
        const finalStatus = statuses[statuses.length - 1];
        // Đúng: retryCount = số lần chạy - 1.
        const retryCount = statuses.length - 1;

        let totalDuration = 0;
        // Đúng: Tính tổng duration bằng vòng lặp rõ ràng.
        for (const d of durations) {
            totalDuration += d;
        }

        // Đúng: Flaky khi có fail và lần cuối pass.
        const isFlaky = statuses.includes("fail") && finalStatus === "pass";
        // Đúng: Slow khi tổng duration lớn hơn slowThreshold.
        const isSlow = totalDuration > slowThreshold;

        // Đúng: Summary chỉ tính các case hợp lệ, không tính invalid do đã continue ở trên.
        if (finalStatus === "pass") passedCount++;
        if (finalStatus === "fail") failedCount++;
        if (isFlaky) flakyCount++;
        if (isSlow) slowCount++;

        // Bước 4: push vào analyzed hoặc invalid
        // Đúng: analyzed có đủ finalStatus, retryCount, totalDuration, isFlaky, isSlow.
        analyzed.push({
            id: id,
            module: module,
            owner: owner,
            finalStatus: finalStatus,
            retryCount: retryCount,
            totalDuration: totalDuration,
            isFlaky: isFlaky,
            isSlow: isSlow
        })
    }

    // Bước 5: return
    // Đúng: Return đúng cấu trúc đề yêu cầu; summary ra total 10, passed 4, failed 1, flaky 2, slow 2, invalid 3.
    return {
        analyzed: analyzed,
        invalid: invalid,
        summary: {
            total: results.length,
            passed: passedCount,
            failed: failedCount,
            flaky: flakyCount,
            slow: slowCount,
            invalid: invalid.length 
}
    }
}

let result = phanTichKetQuaChay(results, resultOptions);
// console.log(result);
const { analyzed, invalid, summary } = result;
console.log('=== analyzed ===');
console.log(analyzed);
console.log('=== invalid ===');
console.log(invalid);
console.log('=== summary ===');
console.log(summary);

// ===================================================
// TỔNG HỢP REVIEW — BÀI 4
// ===================================================
// Kết quả: Đạt — Phân tích đúng analyzed/invalid/summary; output chính khớp đề.
//
// Điểm tốt:
//   - Bắt đúng 3 invalid: duration âm, thiếu id, và statuses/durations lệch độ dài.
//   - Tính đúng finalStatus, retryCount, totalDuration, isFlaky và isSlow.
//   - Summary đúng: total 10, passed 4, failed 1, flaky 2, slow 2, invalid 3.
//
// Cần cải thiện:
//   - Nên xóa `console.log(options)` vì đây là output phụ không cần thiết:
//     // console.log(options);
//   - Có thể thêm default cho options để hàm chắc hơn khi thiếu tham số:
//     function phanTichKetQuaChay(results, options = { slowThreshold: 2500 }) { ... }
// ===================================================
