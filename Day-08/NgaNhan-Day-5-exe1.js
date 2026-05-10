
const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  "
        }
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox "
        }
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome"
        }
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "on",
            device: "chrome"
        }
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge"
        }
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari"
        }
    }
];

for (const { name, formInput } of loginTestData) {
    console.log(name);
    const result = taoPayloadDangNhap(formInput, loginOptions);
    console.log(result);
}
function taoPayloadDangNhap(formInput, options = {}) {
    const errors = [];
    let isValid;

    const {
        defaultRole = "guest",
        minPasswordLength = 8,
        allowedRoles
    } = options;

    const { username, password, role, rememberMe, device } = formInput;
    const cleanUsername = username.trim().toLowerCase();
    const cleanPassword = password.trim();
    const cleanRole = role.trim().toLowerCase() || defaultRole;
    const cleanDevice = device.trim();
    const cleanRememberMe = rememberMe === true || rememberMe === "yes" || rememberMe === "on";

    if (!cleanUsername) {
        errors.push("Username không được rỗng");
    }

    if (cleanUsername.includes(" ")) {
        errors.push("Username không được chứa khoảng trắng ở giữa");
    }

    if (cleanPassword.length < minPasswordLength) {
        errors.push(`Password phải dài ít nhất ${minPasswordLength} ký tự`);
    }

    if (!allowedRoles.includes(cleanRole)) {
        errors.push(`Role không hợp lệ, phải là một trong: ${allowedRoles.join(", ")}`);
    }

    isValid = errors.length === 0;

    return {
        isValid: isValid,
        payload: {
            username: cleanUsername,
            password: cleanPassword,
            role: cleanRole,
            rememberMe: cleanRememberMe,
            device: cleanDevice,
        },
        errors: errors
    }
}
