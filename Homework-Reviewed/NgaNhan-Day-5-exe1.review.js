// Đúng: Khai báo đúng cấu hình login theo đề bài.
const loginOptions = {
  defaultRole: "guest",
  allowedRoles: ["admin", "tester", "viewer", "guest"],
  minPasswordLength: 8,
};

// Đúng: Giữ đủ 8 case test theo đề.
const loginTestData = [
  {
    name: "Case 1 - Hợp lệ cơ bản",
    formInput: {
      username: "  Neko_Admin  ",
      password: "  12345678  ",
      role: " tester ",
      rememberMe: "yes",
      device: "  chrome-win11  ",
    },
  },
  {
    name: "Case 2 - Role rỗng, phải dùng defaultRole",
    formInput: {
      username: "  guest_user  ",
      password: "  abcdefgh  ",
      role: "   ",
      rememberMe: "no",
      device: " firefox ",
    },
  },
  {
    name: "Case 3 - Username rỗng",
    formInput: {
      username: "    ",
      password: "12345678",
      role: "tester",
      rememberMe: "yes",
      device: "chrome",
    },
  },
  {
    name: "Case 4 - Username có khoảng trắng ở giữa",
    formInput: {
      username: "neko admin",
      password: "12345678",
      role: "tester",
      rememberMe: "yes",
      device: "chrome",
    },
  },
  {
    name: "Case 5 - Password quá ngắn",
    formInput: {
      username: "valid_user",
      password: "123",
      role: "tester",
      rememberMe: true,
      device: "chrome",
    },
  },
  {
    name: "Case 6 - Role không hợp lệ",
    formInput: {
      username: "valid_user",
      password: "12345678",
      role: "manager",
      rememberMe: "on",
      device: "chrome",
    },
  },
  {
    name: "Case 7 - rememberMe là boolean true",
    formInput: {
      username: "admin01",
      password: "abcdefgh",
      role: "admin",
      rememberMe: true,
      device: "edge",
    },
  },
  {
    name: "Case 8 - rememberMe là chuỗi lạ",
    formInput: {
      username: "viewer01",
      password: "abcdefgh",
      role: "viewer",
      rememberMe: "maybe",
      device: "safari",
    },
  },
];

// Đúng: Duyệt từng case và gọi hàm với formInput + loginOptions đúng cách.
for (const { name, formInput } of loginTestData) {
  console.log(name);
  const result = taoPayloadDangNhap(formInput, loginOptions);
  console.log(result);
}

// Đúng: Hàm nhận formInput và options theo đúng đề.
function taoPayloadDangNhap(formInput, options = {}) {
  const errors = [];
  let isValid;

  // Đúng: Dùng object destructuring + default value cho options.
  // Góp ý: Nên thêm default cho `allowedRoles` để hàm không lỗi nếu options thiếu field này.
  // Gợi ý:
  // const { defaultRole = "guest", minPasswordLength = 8, allowedRoles = [] } = options;
  const {
    defaultRole = "guest",
    minPasswordLength = 8,
    allowedRoles,
  } = options;

  // Đúng: Dùng object destructuring để lấy dữ liệu từ formInput.
  const { username, password, role, rememberMe, device } = formInput;

  // Đúng: Chuẩn hóa username, password, role, device đúng yêu cầu.
  const cleanUsername = username.trim().toLowerCase();
  const cleanPassword = password.trim();
  const cleanRole = role.trim().toLowerCase() || defaultRole;
  const cleanDevice = device.trim();

  // Đúng: Với data hiện tại, yes/on/true được chuyển thành true, các giá trị khác thành false.
  // Góp ý: Có thể chuẩn hóa chuỗi trước khi so sánh để xử lý được " YES " hoặc "On".
  // Gợi ý:
  // const rememberText = typeof rememberMe === "string" ? rememberMe.trim().toLowerCase() : rememberMe;
  // const cleanRememberMe = rememberText === true || rememberText === "yes" || rememberText === "on";
  const cleanRememberMe =
    rememberMe === true || rememberMe === "yes" || rememberMe === "on";

  // Đúng: Bắt lỗi username rỗng.
  if (!cleanUsername) {
    errors.push("Username không được rỗng");
  }

  // Đúng: Bắt lỗi username có khoảng trắng ở giữa.
  if (cleanUsername.includes(" ")) {
    errors.push("Username không được chứa khoảng trắng ở giữa");
  }

  // Đúng: Bắt lỗi password ngắn hơn minPasswordLength.
  if (cleanPassword.length < minPasswordLength) {
    errors.push(`Password phải dài ít nhất ${minPasswordLength} ký tự`);
  }

  // Đúng: Bắt lỗi role không nằm trong allowedRoles.
  if (!allowedRoles.includes(cleanRole)) {
    errors.push(
      `Role không hợp lệ, phải là một trong: ${allowedRoles.join(", ")}`,
    );
  }

  // Đúng: isValid phụ thuộc vào errors.length, rất rõ ràng.
  isValid = errors.length === 0;

  // Đúng: Return đúng cấu trúc { isValid, payload, errors } theo đề.
  return {
    isValid: isValid,
    payload: {
      username: cleanUsername,
      password: cleanPassword,
      role: cleanRole,
      rememberMe: cleanRememberMe,
      device: cleanDevice,
    },
    errors: errors,
  };
}

// ===================================================
// TỔNG HỢP REVIEW — BÀI 1
// ===================================================
// Kết quả: Đạt — Hàm xử lý đúng 8 case, chuẩn hóa dữ liệu đúng và trả đúng cấu trúc đề yêu cầu.
//
// Điểm tốt:
//   - Dùng destructuring đúng cho cả `formInput` và `options`.
//   - Validate đúng các lỗi username rỗng, username có khoảng trắng, password ngắn và role sai.
//   - Không sửa trực tiếp object input, mà tạo các biến clean riêng.
//
// Cần cải thiện:
//   - Nên thêm default `allowedRoles = []` để hàm chắc hơn khi options thiếu field này:
//     const { defaultRole = "guest", minPasswordLength = 8, allowedRoles = [] } = options;
//   - Nên chuẩn hóa chuỗi `rememberMe` trước khi so sánh để xử lý được nhiều biến thể hơn:
//     const rememberText = typeof rememberMe === "string" ? rememberMe.trim().toLowerCase() : rememberMe;
//     const cleanRememberMe = rememberText === true || rememberText === "yes" || rememberText === "on";
// ===================================================
