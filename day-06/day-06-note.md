## Vòng lặp `for` - lặp lại có cấu trúc

### A. Vòng lặp `for` cổ điển

- Đây là kiểu vòng lặp cơ bản, mạnh mẽ và xuất hiện trong hầu hết các ngôn ngữ lập trình.

- **Cú pháp:**

  ```js
  for ([1. Khởi tạo]; [2. Điều kiện dừng]; [3. Bước nhảy]) {
    // khối lệnh bên trong
  }
  ```

- **[1] Khởi tạo:** Tạo biến đếm, chỉ chạy đúng 1 lần duy nhất.
- **[2] Điều kiện dừng:** Được kiểm tra trước mỗi vòng lặp. Nếu `true` thì tiếp tục, nếu `false` thì dừng.
- **[3] Bước nhảy:** Cập nhật biến đếm sau mỗi vòng lặp, thường là `i++` hoặc `i--`.
- Ba phần được ngăn cách với nhau bằng dấu chấm phẩy `;`, không phải dấu phẩy `,`.

B. Vòng lặp for...of (dành cho array)
cú pháp
for (let phanTu of danhSach){
phanTu tự động nhận giá trị của từng phần tử trong danh sách
}
danhSach: 1 array (hoặc 1 string) mà muốn duyệt qua
phanTu: biến tạm, tự động nhận GIÁ TRỊ của từng phần tử trong mỗi vòng lap
of: từ khóa
KO DÙNG ĐƯỢC CHO OBJECT

C. for...in (dành riêng cho object)
nó sẽ duyệt thẳng qua từng tên thuộc tính (key) mà ko cần biến hình trước

for (let key in tenObject){

}
tenObject: objet mà dang muốn duyêt qua
key: Biến tạm, tự động nhận tên thuộc tính (key), trong mỗi vòng lặp

// Dung vong lap nao cho array va Object
// while: ko biet so lan lap -> lap den khi dk sai
// for co dien: biet chinh xac so lan lap- > khi can kiem soat tuyet doi bien doi
//có array, chỉ cần giá trị -> for...of 
//có array, cần cả index.. for cổ điển
//duyệt object... -> dùng for of + biến hình hoặc for in

Break và continue -
Khi chạy vòng lặp - .đôi khi mình muốn can thiệp ngay giữa chừng
-> Tìm thấy rồi, mà ko cần tìm nữa -> dưungf ngay ! (break)
-> cái này ko quan tâm, bỏ qua đi -> nhảy sang vòng lặp tiếp theo (continue)
được dùng trong 
for cổ điển, while, for of,. for in..
(for each -> ko dùng được)

for (...){
if(dieukien){
continue ///
}
//bỏ qua dòng code ở đây sẽ ko đc chạy
}
