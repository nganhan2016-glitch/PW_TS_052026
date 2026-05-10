
Dung whie khi ko biet so lan lao, chi biet dk dừng.

/Mảng (Array)
Bản chất: let ten = "Hoang"

- Hiểu bản chất array gióng như là 1 cái tủ đựng đồ cso nhiều ngăn kéo
  -. nó chỉ có 1 cái ên (tên chiếc tủ - gióng tên biến)
  nó có thể chứa vô số món đồ bên trong (mỗi ngăn kéo là 1 món)
  các món đồ đc đặt cạnh nhau, có thứ tự

  cú pháp dùng dấu ngoặc vuông []
  các món đồ đực đặt bên trong dấu ngoặc vuông và cách nhau ởi dấu phẩy

  ví dụ

  //array chứa toàn string (danh sách tk test)
  let danhSachUser = ["admin", "test_01", "user_vip"]
  //array chứa toàn number
  let danhSachGia = [1000, 2000, 3000]

  //hoặc cái tủ rỗng
  let danhSachLoi = []

LƯU Ý: TRONG NHIỀU NGÔN NGỮ KHÁC, ARRAY chỉ đựng 1 loại kiểu dữ liêuk. nhưng JS có thể chứa tạp nham các loại dữ liệu
  let thapCam = ["Neko", 30, true null] -> -> TUY NHIÊN NGHIÊM CẤM SỬ DỤNG NHƯ NÀY chúng ta thường
  cố gắng giữ cho dữ liệu đồng nhất để dễ xử lý

   Cú pháp để lấy phần tử 
  tênBien [viTri] index bắt dầu = 0
  let sanPham = ["aoThun", "quanJean"]

console.log(sanPham[1])
console.log(sanPham[10]) = undefined.


Bộ đồ nghề xử lý
A. length đếm só lượng phần tử
tenMang.Length() -> trả ra number là tổng số phần tử trong mảng
Vì index = 0, nên phần tử Cuối cùng của manngr luôn nằm ở vị trí length - 1.

B. push() Nhét đồ vào cuối mảng
tenMang.push(giaTri) -> đầu ra: số lợng phần tử mới của mảng sau khi thêm 
và tác dụng phụ -> mảng gốc bị thay đổi

C.includes - Kiểm tra phân tử có tồn tại ko
tenMang.includes(giaTri)

D. .pop() - rút phần tử cuối cùng ra ngoài
đầu ra phần tử cuối cùng vằ bị rút ra
tác dụng phụ: mabrg gốc bị thay đổi

E. shift() - Rút phần tử đầu tiên ra ngoài

F. unshift() - Thêm phần tử vào đầu mảng

G. join() - gộp tất cả phần tử thành 1 chuỗi
cu phap: tenMang.join(ki tu noi)

H.indexOf() - Trả ra index nếu tìm thấy, -1 nếu ko có 

Object
là 1 cái tủ có dán nhãn => nkhi mình muốn lấy 1 cái ngăn kéo -> thì lấy qua tên ngăn kéo
QUY TẤC VÀNG: Dùng array khi bạn có 1 danh sách nhiều thứ giống nhau (danh sách user, giá..)
dùng object khi cần 1 mô tả chi tiết 1 thứ duy nhất (1 user, 1 sản phẩm, 1 cấu hình test)

Cú pháp: để tạo 1 object -> ta dùng dấu ngoặc nhọn {} bên trong là các cặp KEY_VALUE (Pairs) , ngăn cách bởi dấu phẩy

json();
khóa KEY: cái tên thuộc tính (cái nhãn dán trên ngăn kéo)
giá trị value : Đồ vật nằm tỏng ngăn kéo (có thể là string, number, boolean, array, hay là 1 function)

let userTest = {
hoTen: "Neko Nguyen",
tuoi: 30,
isVip: true,
quyenHan: ["read', "write"]

}


quy tắc đặt tên KEY
KEY TRONG OBJECT tuân theo quy tắc đặt tên

khi KHÔNG CẦN DẤU NHÁY "" (90% là các trường hợp)
nếu key là tên hợp lệ theo quy tắc biến 


quy tắc đặt tên KEY
KEY TRONG OBJECT tuân theo quy tắc đặt tên

cách trích xuất dữ liệu:

.lấyu theo 2 kiểu chính
A. DÙNG DẤU CHÂM - cách dùng 90%
tênobject.key -> khi key ko chứa dấu nháy kép

B. Dùng dấu ngoặc vuông ()
dùng cho trường hợp còn lại (key chứa nháy kép)
tenobject["tenkey"]

Them sua xoa (CRUD) du lieu trong object.

Các phương thức của object

A. Object.keys() -> gom tất cả key thành 1 mảng
B.Object.values() -> gom tất cả giá trị thành 1 mảng
C. Object.entries ()-> gom cả nhãn lẫn giá trị
D. Object.hasOwn()->kiểm tra key có phải của chính nó ko

cú pháp: Object.hasOwn(tenObject, "tenKey")
//-----------------
Array of Object
Cấu trúc này đc bao bên ngoài ngoặc vuông mảng [], bên trong trong chứa object {}

//-----------
Vòng lặp for - lặp lại có cấu trúc
A. Vòng lặp for cổ điển
Giống như cụ tổ, mạnh mẽ nhất và xuất hiện ở hầu hết mọi ngôn ngữ lập trình

cú pháp:
for ([1.Khởi tạo]; [2.Điều kiện dừng]; [3.Bước nhảy]){
    khối lệnh ben trong
}
[1]. Khởi tạo: Tọa biến đếm, chỉ chạy đúng 1 lần duy nhất
[2]. Điều kiện dừng : kiểm tra trước mỗi vòng, true -> chạy tiếp, false -> dừng
[3]. Bước nhảy: Cập nhất biến đêm sau mỗi vòng. thường là i++, i--,
ba phần cách nhau bởi dấu chấm phảy ; 
