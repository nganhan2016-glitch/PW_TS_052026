const testCaseConfig = {
    minPriority: 1,
    maxPriority: 5
};

const rawRows = [
    [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
    ["TC_LOGIN_001", "login", "2", "regression", "active"],
    ["TC_SEARCH_002", "search", "0", "smoke", "active"],
    ["TC_CART_003", "", "3", "checkout", "inactive"],
    ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
    ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
    ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
    ["LOGIN_007", "login", "2", "smoke", "active"],
    ["TC_USER_008", "user", "6", "regression", "active"],
    ["TC_API_009", "api", "3", "api", "disabled"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
    [" TC_EMPTY_012 ", "   ", "2", "misc", "active"]
];

let result = chuanHoaDanhSachTest(rawRows, testCaseConfig);
console.log(result);
for (const invalidCase of result.invalidCases) {
    console.log(invalidCase.id, invalidCase.errors);
}

function chuanHoaDanhSachTest(rawRows, config = {}) {
    const validCases = [];
    const invalidCases = [];
    const seenIds = [];
    const duplicatedIds = [];

    const { minPriority, maxPriority } = config;
    for (const item of rawRows) {
        const errors = [];
        const [id, module, priority, tag, status] = item;
        const cleanId = id.trim().toUpperCase();
        const cleanModule = module.trim().toLowerCase();
        const cleanPriority = Number(priority);
        const cleanTag = tag.trim().toLowerCase();
        const cleanStatus = status.trim().toLowerCase();

        if (!cleanId.startsWith("TC_")) {
            errors.push("ID phải bắt đầu bằng TC_");
        }
        if (!cleanModule) {
            errors.push("Module không rỗng");
        }
        if (cleanPriority < minPriority || cleanPriority > maxPriority) {
            errors.push(`Priority phải từ ${minPriority} đến ${maxPriority}`);
        }
        if (cleanStatus !== "active" && cleanStatus !== "inactive") {
            errors.push("Status chỉ được là active hoặc inactive");
        }
        if (seenIds.includes(cleanId)) {
            errors.push("ID bị trùng");
            duplicatedIds.push(cleanId);
        } else {
            seenIds.push(cleanId);
        }
        if (errors.length === 0) {
            validCases.push({
                id: cleanId,
                module: cleanModule,
                priority: cleanPriority,
                tag: cleanTag,
                status: cleanStatus
            })
        } else {
            invalidCases.push({
                id: cleanId,
                module: cleanModule,
                priority: cleanPriority,
                tag: cleanTag,
                status: cleanStatus,
                errors: errors
            })
        }
    }
    return {
        validCases: validCases,
        invalidCases: invalidCases,
        summary: {
            total: rawRows.length,
            valid: validCases.length,
            invalid: invalidCases.length,
            duplicateIds: duplicatedIds
        }
    }
}

