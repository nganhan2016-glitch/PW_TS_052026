// Đúng: Giữ đầy đủ 5 config case theo đề.
const configCase1 = {
    defaultConfig: {
        env: "local",
        baseUrl: "http://localhost:3000",
        timeout: 30000,
        retries: 0,
        headed: true,
        browsers: ["chromium"],
        reporter: {
            type: "html",
            output: "reports/default"
        }
    },
    envConfig: {
        env: "staging",
        baseUrl: "https://staging.neko.dev",
        retries: 1,
        browsers: ["chromium", "firefox"]
    },
    overrideConfig: {
        timeout: 500,
        headed: true,
        browsers: [" Chromium ", "chromium", "webkit"],
        reporter: {
            type: "html",
            output: "reports/custom"
        }
    }
};

const configCase2 = {
    defaultConfig: {
        env: "ci",
        baseUrl: "https://ci.neko.dev",
        timeout: 10000,
        retries: 2,
        headed: true,
        browsers: ["chromium"],
        reporter: {
            type: "html",
            output: "reports/ci"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase3 = {
    defaultConfig: {
        env: "staging",
        baseUrl: "ftp://bad-url",
        timeout: 2000,
        retries: 1,
        headed: false,
        browsers: ["firefox"],
        reporter: {
            type: "json",
            output: "reports/json"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase4 = {
    defaultConfig: {
        env: "test",
        baseUrl: "https://prod.neko.dev",
        timeout: 5000,
        retries: 1,
        headed: false,
        browsers: ["webkit"],
        reporter: {
            type: "html",
            output: "reports/test"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase5 = {
    defaultConfig: {
        env: "local",
        baseUrl: "http://localhost:3000",
        timeout: 30000,
        retries: -1,
        headed: false,
        browsers: [],
        reporter: {
            type: "",
            output: ""
        }
    },
    envConfig: {},
    overrideConfig: {}
};

// Đúng: Dùng spread và merge đúng thứ tự default -> env -> override.
function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig) {
    return {
        ...defaultConfig,
        ...envConfig,
        ...overrideConfig,
        // Đúng: Có merge riêng reporter để không làm mất field nested.
        reporter: {
            ...defaultConfig.reporter,
            ...envConfig.reporter,
            ...overrideConfig.reporter
        }
    };
}

function kiemTraCauHinh(config) {
    // Đúng: Dùng object destructuring khi đọc config.
    const { env, baseUrl, timeout, retries, headed, browsers } = config;

    const errors = [];
    const warnings = [];
    const seenBrowsers = [];

    // Bước 3a: trim và lowercase từng browser
    // Đúng: Dùng map để chuẩn hóa browser.
    const normalizedBrowsers = browsers.map(b => b.trim().toLowerCase());

    // Bước 3b: filter ra những browser xuất hiện hơn 1 lần
    // Đúng: Dùng filter để lấy browser bị trùng.
    const duplicates = normalizedBrowsers.filter((browser) => {
        if (seenBrowsers.includes(browser)) {
            return true;   // đã gặp rồi → trùng
        } else {
            seenBrowsers.push(browser);
            return false;  // chưa gặp → thêm vào → bỏ qua
        }
    });

    // Bước 3c: find browser trùng đầu tiên (nếu có)
    // Đúng: Dùng find để lấy browser trùng đầu tiên.
    // Góp ý: Cách này đúng. Một cách ngắn hơn là tìm trực tiếp trên normalizedBrowsers với index.
    // Gợi ý:
    // const firstDuplicate = normalizedBrowsers.find((browser, index) => normalizedBrowsers.indexOf(browser) !== index);
    const firstDuplicate = normalizedBrowsers.find((browser) => {
        if (duplicates.includes(browser)) {
            return true;   // có trong danh sách trùng → dừng lại, trả về browser này
        } else {
            return false;  // không trùng → tiếp tục
        }
    });
    // ERRORS
    // Đúng: Bắt lỗi baseUrl không bắt đầu bằng http/https.
    if (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")) {
        errors.push("baseUrl phải bắt đầu bằng http:// hoặc https://");
    }

    // Đúng: Bắt lỗi timeout dưới 1000.
    if (timeout < 1000) {
        errors.push("timeout phải từ 1000ms trở lên");
    }

    // Đúng: Bắt lỗi retries âm.
    if (retries < 0) {
        errors.push("retries không được âm");
    }

    // Đúng: Bắt lỗi browsers rỗng.
    if (browsers.length === 0) {
        errors.push("browsers không được rỗng");
    }

    // Đúng: Bắt lỗi browser trùng sau khi đã chuẩn hóa.
    if (firstDuplicate) {
        errors.push(`Có browser bị trùng: "${firstDuplicate}"`);
    }

    // WARNINGS
    // Đúng: CI mà headed true thì đưa vào warnings.
    if (env === "ci" && headed === true) {
        warnings.push("Đang chạy CI nhưng headed đang bật");
    }

    // Đúng: baseUrl chứa prod nhưng env không phải production thì đưa vào warnings.
    if (baseUrl.includes("prod") && env !== "production") {
        warnings.push(`baseUrl chứa "prod" nhưng env là "${env}", không phải "production"`);
    }
    return { errors, warnings };
}

// Đúng: Test đủ 5 case.
let finalConfig1 = taoCauHinhCuoi(configCase1.defaultConfig, configCase1.envConfig, configCase1.overrideConfig);
console.log("config1",finalConfig1);
let result1 = kiemTraCauHinh(finalConfig1);
console.log("ket qua kiem tra",result1);
console.log("===============");


let finalConfig2 = taoCauHinhCuoi(configCase2.defaultConfig, configCase2.envConfig, configCase2.overrideConfig);
console.log(finalConfig2);
let result2 = kiemTraCauHinh(finalConfig2);
console.log(result2);
console.log("===============");

let finalConfig3 = taoCauHinhCuoi(configCase3.defaultConfig, configCase3.envConfig, configCase3.overrideConfig);
console.log(finalConfig3);
let result3 = kiemTraCauHinh(finalConfig3);
console.log(result3);
console.log("===============");

let finalConfig4 = taoCauHinhCuoi(configCase4.defaultConfig, configCase4.envConfig, configCase4.overrideConfig);
console.log("config4",finalConfig4);
let result4 = kiemTraCauHinh(finalConfig4);
console.log("ket qua kiem tra",result4);
console.log("===============");

let finalConfig5 = taoCauHinhCuoi(configCase5.defaultConfig, configCase5.envConfig, configCase5.overrideConfig);
console.log("config5",finalConfig5);
let result5 = kiemTraCauHinh(finalConfig5);
console.log("ket qua kiem tra",result5);
console.log("===============");

// ===================================================
// TỔNG HỢP REVIEW — BÀI 3
// ===================================================
// Kết quả: Đạt — Merge đúng thứ tự, kiểm tra đúng errors/warnings và dùng đủ map/filter/find cho browsers.
//
// Điểm tốt:
//   - Thứ tự merge `defaultConfig -> envConfig -> overrideConfig` đúng.
//   - Có xử lý nested object `reporter`, đây là điểm tốt vì spread thường chỉ copy nông.
//   - Check đúng các case lỗi/cảnh báo chính: timeout thấp, browser trùng, CI headed, baseUrl sai, prod URL ngoài production.
//
// Cần cải thiện:
//   - Có thể viết `firstDuplicate` gọn hơn để dễ đọc:
//     const firstDuplicate = normalizedBrowsers.find((browser, index) => normalizedBrowsers.indexOf(browser) !== index);
//   - Nên thêm khoảng trắng sau dấu phẩy trong log để format đẹp hơn:
//     console.log("config1", finalConfig1);
// ===================================================
