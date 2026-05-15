// Đúng: Giữ đủ rawRuns theo đề.
const rawRuns = [
    { id: " tc_login_001 ", module: " login ", status: " FAIL ", owner: "an", priority: 1, enabled: true },
    { id: "TC_SEARCH_002", module: "search", status: "pass", owner: "binh", priority: 2, enabled: true },
    { id: " tc_cart_003 ", module: " cart ", status: " flaky ", owner: " chi ", priority: 1, enabled: true },
    { id: "TC_PAY_004", module: "payment", status: "fail", owner: "", priority: 1, enabled: true },
    { id: " TC_USER_005 ", module: " user ", status: " skip ", owner: "duy", priority: 3, enabled: true },
    { id: "TC_REPORT_006", module: "report", status: "fail", owner: "ha", priority: 2, enabled: false },
    { id: " ", module: "api", status: "fail", owner: "linh", priority: 1, enabled: true },
    { id: "TC_SYNC_007", module: " sync ", status: " FAIL ", owner: " minh ", priority: 2, enabled: true },
    { id: "TC_BILL_008", module: "billing", status: "pass", owner: "", priority: 1, enabled: true },
    { id: "TC_ORDER_009", module: " order ", status: " flaky ", owner: "nam", priority: 2, enabled: true }
];

// Đúng: Giữ bài trong 1 hàm chính theo yêu cầu.
function locDanhSachChayLai(rawRuns) {
    // Bước 1 + 2: map để chuẩn hóa, destructuring từng phần tử
    // Đúng: Dùng map để tạo normalizedRuns, có destructuring ngay trong callback.
    const normalizedRuns = rawRuns.map(({ id, module, status, owner, priority, enabled }) => ({
        id: id.trim().toUpperCase(),
        module: module.trim().toLowerCase(),
        status: status.trim().toLowerCase(),
        owner: owner.trim(),
        priority,
        enabled
    }));

    // Bước 3: filter test cần chạy lại
    // Đúng: Dùng filter đúng điều kiện: enabled, id không rỗng, status fail/flaky.
    const rerunList = normalizedRuns.filter(({ enabled, id, status }) =>
        enabled === true
        && id !== ""
        && (status === "fail" || status === "flaky")
    );

    // Bước 4: filter test thiếu owner
    // Đúng: Dùng filter đúng điều kiện missing owner.
    const missingOwnerList = normalizedRuns.filter(({ enabled, id, owner }) =>
        enabled === true
        && id !== ""
        && owner === ""
    );

    // Bước 5: find test critical đầu tiên
    // Đúng: Dùng find để lấy case critical đầu tiên; `?? null` đúng yêu cầu nếu không tìm thấy.
    const firstCriticalCase = normalizedRuns.find(({ enabled, id, priority, status }) =>
        enabled === true
        && id !== ""
        && priority === 1
        && status === "fail"
    ) ?? null; // find trả null nếu không có 

    // Đúng: Return đủ 4 field theo đề.
    return {
        normalizedRuns,
        rerunList,
        missingOwnerList,
        firstCriticalCase
    };
}

const result = locDanhSachChayLai(rawRuns);
console.log(result);

const { normalizedRuns, rerunList, missingOwnerList, firstCriticalCase } = result;
console.log('=== normalizedRuns ===');
console.log(normalizedRuns);
console.log('=== rerunList ===');
console.log(rerunList);
console.log('=== missingOwnerList ===');
console.log(missingOwnerList);
console.log('=== firstCriticalCase ===');
console.log(firstCriticalCase);

// ===================================================
// TỔNG HỢP REVIEW — BÀI 5
// ===================================================
// Kết quả: Đạt — Dùng đúng map/filter/find, chuẩn hóa đúng dữ liệu và trả đúng các danh sách yêu cầu.
//
// Điểm tốt:
//   - `normalizedRuns` chuẩn hóa đúng id/module/status/owner.
//   - `rerunList` đúng 5 case cần chạy lại và loại được case disabled/id rỗng.
//   - `missingOwnerList` và `firstCriticalCase` đúng yêu cầu.
//
// Cần cải thiện:
//   - Có thể đặt tên `result` rõ hơn nếu ghép nhiều bài chung file:
//     const bai5Result = locDanhSachChayLai(rawRuns);
//   - Có thể tách điều kiện rerun ra biến để dễ debug:
//     const shouldRerun = enabled === true && id !== "" && (status === "fail" || status === "flaky");
// ===================================================
