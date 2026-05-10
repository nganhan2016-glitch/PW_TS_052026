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

function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig) {
    return {
        ...defaultConfig,
        ...envConfig,
        ...overrideConfig,
        reporter: {
            ...defaultConfig.reporter,
            ...envConfig.reporter,
            ...overrideConfig.reporter
        }
    };
}

function kiemTraCauHinh(config) {
    const { env, baseUrl, timeout, retries, headed, browsers } = config;

    const errors = [];
    const warnings = [];
    const seenBrowsers = [];

    // Bước 3a: trim và lowercase từng browser
    const normalizedBrowsers = browsers.map(b => b.trim().toLowerCase());

    // Bước 3b: filter ra những browser xuất hiện hơn 1 lần
    const duplicates = normalizedBrowsers.filter((browser) => {
        if (seenBrowsers.includes(browser)) {
            return true;   // đã gặp rồi → trùng
        } else {
            seenBrowsers.push(browser);
            return false;  // chưa gặp → thêm vào → bỏ qua
        }
    });

    // Bước 3c: find browser trùng đầu tiên (nếu có)
    const firstDuplicate = normalizedBrowsers.find((browser) => {
        if (duplicates.includes(browser)) {
            return true;   // có trong danh sách trùng → dừng lại, trả về browser này
        } else {
            return false;  // không trùng → tiếp tục
        }
    });
    // ERRORS
    if (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")) {
        errors.push("baseUrl phải bắt đầu bằng http:// hoặc https://");
    }

    if (timeout < 1000) {
        errors.push("timeout phải từ 1000ms trở lên");
    }

    if (retries < 0) {
        errors.push("retries không được âm");
    }

    if (browsers.length === 0) {
        errors.push("browsers không được rỗng");
    }

    if (firstDuplicate) {
        errors.push(`Có browser bị trùng: "${firstDuplicate}"`);
    }

    // WARNINGS
    if (env === "ci" && headed === true) {
        warnings.push("Đang chạy CI nhưng headed đang bật");
    }

    if (baseUrl.includes("prod") && env !== "production") {
        warnings.push(`baseUrl chứa "prod" nhưng env là "${env}", không phải "production"`);
    }
    return { errors, warnings };
}

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