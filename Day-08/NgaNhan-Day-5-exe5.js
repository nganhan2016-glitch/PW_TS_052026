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

function locDanhSachChayLai(rawRuns) {
    // Bước 1 + 2: map để chuẩn hóa, destructuring từng phần tử
    const normalizedRuns = rawRuns.map(({ id, module, status, owner, priority, enabled }) => ({
        id: id.trim().toUpperCase(),
        module: module.trim().toLowerCase(),
        status: status.trim().toLowerCase(),
        owner: owner.trim(),
        priority,
        enabled
    }));

    // Bước 3: filter test cần chạy lại
    const rerunList = normalizedRuns.filter(({ enabled, id, status }) =>
        enabled === true
        && id !== ""
        && (status === "fail" || status === "flaky")
    );

    // Bước 4: filter test thiếu owner
    const missingOwnerList = normalizedRuns.filter(({ enabled, id, owner }) =>
        enabled === true
        && id !== ""
        && owner === ""
    );

    // Bước 5: find test critical đầu tiên
    const firstCriticalCase = normalizedRuns.find(({ enabled, id, priority, status }) =>
        enabled === true
        && id !== ""
        && priority === 1
        && status === "fail"
    ) ?? null; // find trả null nếu không có 

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