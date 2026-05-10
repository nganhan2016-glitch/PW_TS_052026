const resultOptions = {
    slowThreshold: 2500,
};

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

function phanTichKetQuaChay(results, options) {
    let analyzed = [];
    let invalid = [];
    let passedCount = 0;
    let failedCount = 0;
    let flakyCount = 0;
    let slowCount = 0;

    const { slowThreshold } = options;
    console.log(options);

    for (const result of results) {
        const { id, module, statuses, durations, owner } = result;

        // Bước 2: kiểm tra invalid
        let hasNegativeDuration = false;
        for (const d of durations) {
            if (d < 0) {
                hasNegativeDuration = true;
            }
        }
        const isInvalid = !id
            || statuses.length !== durations.length
            || hasNegativeDuration;

        if (isInvalid) {
            invalid.push({ id, module, statuses, durations, owner });
            continue; // bỏ qua bước tính toán, qua item tiếp theo
        }
        // Bước 3: tính toán
        const finalStatus = statuses[statuses.length - 1];
        const retryCount = statuses.length - 1;

        let totalDuration = 0;
        for (const d of durations) {
            totalDuration += d;
        }

        const isFlaky = statuses.includes("fail") && finalStatus === "pass";
        const isSlow = totalDuration > slowThreshold;

        if (finalStatus === "pass") passedCount++;
        if (finalStatus === "fail") failedCount++;
        if (isFlaky) flakyCount++;
        if (isSlow) slowCount++;

        // Bước 4: push vào analyzed hoặc invalid
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

