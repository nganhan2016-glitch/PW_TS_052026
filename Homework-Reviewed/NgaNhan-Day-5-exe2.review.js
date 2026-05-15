// Đúng: Khai báo đúng config min/max priority theo đề.
const testCaseConfig = {
    minPriority: 1,
    maxPriority: 5
};

// Đúng: Giữ đủ rawRows theo đề bài.
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

// Đúng: Gọi hàm với rawRows và config đúng yêu cầu.
// Góp ý: Nếu sau này gộp nhiều bài vào cùng một file, nên đặt tên result rõ hơn để tránh trùng biến.
// Gợi ý:
// const bai2Result = chuanHoaDanhSachTest(rawRows, testCaseConfig);
let result = chuanHoaDanhSachTest(rawRows, testCaseConfig);
console.log(result);

// Đúng: In thêm invalidCases để dễ kiểm tra từng lỗi.
for (const invalidCase of result.invalidCases) {
    console.log(invalidCase.id, invalidCase.errors);
}

// Đúng: Hàm nhận rawRows và config theo đúng đề.
function chuanHoaDanhSachTest(rawRows, config = {}) {
    const validCases = [];
    const invalidCases = [];
    const seenIds = [];
    const duplicatedIds = [];

    // Đúng: Có destructuring config.
    // Góp ý: Nên thêm default value để hàm chắc hơn khi config thiếu min/max.
    // Gợi ý:
    // const { minPriority = 1, maxPriority = 5 } = config;
    const { minPriority, maxPriority } = config;

    // Đúng: Dùng for...of để duyệt chính, không dùng map/filter/find cho phần duyệt chính.
    for (const item of rawRows) {
        const errors = [];

        // Đúng: Dùng array destructuring để bóc từng cột.
        const [id, module, priority, tag, status] = item;

        // Đúng: Chuẩn hóa id/module/priority/tag/status đúng yêu cầu.
        const cleanId = id.trim().toUpperCase();
        const cleanModule = module.trim().toLowerCase();
        const cleanPriority = Number(priority);
        const cleanTag = tag.trim().toLowerCase();
        const cleanStatus = status.trim().toLowerCase();

        // Đúng: Bắt lỗi id không bắt đầu bằng TC_.
        if (!cleanId.startsWith("TC_")) {
            errors.push("ID phải bắt đầu bằng TC_");
        }
        // Đúng: Bắt lỗi module rỗng.
        if (!cleanModule) {
            errors.push("Module không rỗng");
        }
        // Đúng: Bắt lỗi priority ngoài khoảng 1-5.
        if (cleanPriority < minPriority || cleanPriority > maxPriority) {
            errors.push(`Priority phải từ ${minPriority} đến ${maxPriority}`);
        }
        // Đúng: Bắt lỗi status không phải active/inactive.
        if (cleanStatus !== "active" && cleanStatus !== "inactive") {
            errors.push("Status chỉ được là active hoặc inactive");
        }
        // Đúng: Dùng seenIds để phát hiện duplicate id.
        if (seenIds.includes(cleanId)) {
            errors.push("ID bị trùng");
            duplicatedIds.push(cleanId);
        } else {
            seenIds.push(cleanId);
        }

        // Đúng: Tạo object mới cho valid/invalid, không sửa trực tiếp rawRows.
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
    // Đúng: Return đủ validCases, invalidCases và summary; kết quả valid 6, invalid 8 là đúng.
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

// ===================================================
// TỔNG HỢP REVIEW — BÀI 2
// ===================================================
// Kết quả: Đạt — Chuẩn hóa đúng dữ liệu, phân loại đúng 6 valid / 8 invalid và bắt đúng 2 id bị trùng.
//
// Điểm tốt:
//   - Dùng `for...of` và array destructuring đúng yêu cầu.
//   - Không dùng `map`, `filter`, `find` cho phần duyệt chính.
//   - Tạo object mới cho kết quả, không sửa trực tiếp `rawRows`.
//
// Cần cải thiện:
//   - Nên thêm default value cho config để hàm ổn định hơn:
//     const { minPriority = 1, maxPriority = 5 } = config;
//   - Nếu ghép nhiều bài vào cùng một file, nên đổi `result` thành tên rõ hơn:
//     const bai2Result = chuanHoaDanhSachTest(rawRows, testCaseConfig);
// ===================================================
