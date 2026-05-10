
  const slug = " Playwright Basic First test ";
  ```
- Kết quả mong muốn:
  ```js
  playwright-basic-first-test
  ```
- Cách xử lý:
  - `trim()` để xóa khoảng trắng ở đầu và cuối chuỗi
  - `toLowerCase()` để chuyển toàn bộ ký tự sang chữ thường
  - `replaceAll(" ", "-")` để thay khoảng trắng bằng dấu `-`

- Method chaining là cách gọi nhiều method liên tiếp trên cùng một giá trị.
- Kết quả của bước trước sẽ trở thành đầu vào cho bước sau.

```js
let slug = "abc";
let trimmed = slug.trim();
let lowerCase = trimmed.toLowerCase();
let result = lowerCase.replaceAll(" ", "-");
```

- Có thể viết ngắn gọn bằng method chaining:

```js
const slug = " Playwright Basic First test ";
console.log(slug.trim().toLowerCase().replaceAll(" ", "-"));
```

54000000 -> 54.000.000 (slice)
toLocaleString() -> hãy hiển thị số n ày theo thói quen của 1 quốc gia/ngôn ngữ
cụ thể
ví dụ: cùng số 54M -> việt nam : 54.000.000 -> mẽo: 54,000,000
cú pháp. so.toLocaleString(locale, options)

----
let text = "ABCDEFGH"
// 01234567
// -8-7-6-6-4-3-2-1

Bạn chỉ cần nhớ:
start: được lấy
end: ko đc lấy
nếu là số âm, hãy đổi sang vị trí dương trước (bằng cách lấy length + với số âm)
nếu chỉ là 1 tham số, thì đó là start, end = đến hết chuỗi

mình muốn lấy DEFGH
dùng slice lấy như nào???
slice có thể nhận vào 1 tham số (start) -> nếu ko có end, nó sẽ lấy đến hết chuỗi
dùng slice 1 tham số . dùng số dương
=============================

### Day 3: Toan tu (Operator)###

Toán tử (Operator)
phép cộng: (+)
đây là phép toán ngyu hiểm nhất vì có tính chất lưỡng cực
Nếu cả 2 là số: Nó làm toán (10+5=15)
Nếu 1 trong 2 lã chuối (string): => keo dán ("10" + 5 => 105)

phép trừ: (-)
Javascript luôn cố gắng ép kiểu chuỗi thành số khi gặp dấu trừ

phép nhân , chia tương tự pháp trừ

phép chia lay du (%) -> tra ve phan du cua phep chia
10 % 3 = 1
10 % 2 = 0
-> dung de check so chan , so lẻ

Toán tử gán: dung dấu =
quy tac: phai sang trai
let diemSo = 10

TOan tử gán rút gọn
vd: x = x +5
1. = -> x= 10 -> x = 10
2. += => x += 5 -> x= x + 5
3. -= => x -= 5 -> x = x -5
4. \*= -> x *= 5 -> x = x  * 5

Toan tu so sanh
> < >= <= 

== (bằng nhau ) vs === (bằng nhau tuyêt đối)
1. toán tử == (so sánh lỏng lẻo:)
   nó chỉ quan tâm GIÁ TRỊ, ko quan tâm đến KIỂU DỮ LIỆU,
   nên nếu kiểu dữ liệu khác nhau, nó sẽ tự động ép kiểu để cố gắng cho chúng = nhau

2. toan tu === ( so sanh nghiem ngat)
No kiem tra gia tri lan kieu du lieu

TOAN TU LOGIC
Phép VÀ (&& - logic AND)
Phep HOAC (// - logic OR)

Phép PHỦ DỊNH (! - logic NOT) -> dao nguoc gia tri boolean
cach doc toan tu cho dung: 3 cach doc quen thuoc (khong, ko phai, phu dinh cua)
VÍ DỤ
spin loading -> check xem no co uay tron hay ko
!isLoading -> đọc là không loading, không phải đang loading
!isSucess -> ko thanh cong
!hasPermission -> ko cos quyen

meo hãy dịch luôn thành 1 câu phủ định

---------
TOAN TU TĂng/Giảm (prefix va postfix)
cú pháp:
postfix (i++): trả về giá trị cũ của i, rồi SAU ĐÓ mới tăng i lên 1
prefix (++i): tăng i lên 1 trước, rồi mới trả về giá trị mới

sẻ ra 2 câu hỏi
giá trị của cả biểu thức i++ hoặc ++i là gì?
giá trị cuối cùng của biến i sau khi dòng code chạy là gì

NƠI DÙNG TOÁN TỬ ĐC NHÉT VÀO:
phép gán : let y = i++
phép tính: let total = ++i \* 2
hàm . console.log(i++)
điều điện if(i++ > 5)
diem mau chot: noi dang dung no luon nhan gia tri cua bieu thuc, chu ko phai nhon bien sau cung la du

//BEST PRACTICE -> là nên viết 1 đòng riêng biệt
LƯU Ý KHI DÙNG ++/ --
khi ++/-- đừng 1 mình trên 1 dòng riêng biệt, nó hoàn toàn VÔ HẠI, prefix hay post fix đều cho KQ
giống nhau