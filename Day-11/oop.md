OOP và class
object:
Class: nhà máy đúc khuôn

class-> bản vẽ thiết kế : là tờ giấy vẽ sơ đồ nhà. trên đó ghi : nhà có mấy cửa sổ,
màu sơn gì...
object (ngôi nhà thực tế): từ 1 ban thiết kế -> thuê thợ xây lên 100 ngôi nhà thật.

mỗi ngôi nhà đc goi là 1 object (hay instance/thực thể)

Cú pháp:
Class: thuoc tinh + phuong thuc
Tên class: bat buoc viet HOa chu cai dau tien (pascalCase) để phan biet voi cac biến thông thuong. -> LoginPage, HocVien,SHoppingCart.

thuoc tinh khai bao trong class
co 2 cach viet de khai bao thuoc tinh trong class.
cách 1. gán trong constructor() -> cú pháp this.ten = gia tri
vị trí nằm tỏng hàm constructor() -> khi nào dùng: khi giá trị phụ thuộc vào tham số truyền vào

cách thứ 2: class field
khai báo thuoc tinh ben ngoai  constructor() -> ten = giaTri (ko cần this)
Ngay đầu class trước constructor, -> Khi giá trị cố định, không thay đổi theo object

NGUYEN TAC VANG: moi thuoc tinh deu nen khai bao o class field truoc.
constructor chỉ dùng để gán lại giá trị cho những thuộc tính cần nhận tham số từ bên ngoàoi
nếu class ko cần nhận tham số, ko cần gán lại giá trị, ko cần chạy logic khởi tạo ->
thì có thể bỏ construct()

Luồng tạo 1 object từ class

ví dụ khi mình gọi
//Bước 1. Lệnh "new" sẽ tạo ra 1 object rỗng {} và gán this cho nó
let hv = new HocVien("a", 10)

Bước 2: class fields chạy trước - gán giá trị cố định vào object

Bước 3: Constructor chạy SAU; gán lại giá trị động từ tham số truyền vào

constructor() - Trái tim class
nó là 1 hàm đặc biệt trong class, co dac diem:
1. tu dong chay: no duoc js goi ngya lap tuc moi khi ban dung tu khoa new de tao object moi -> ko bao gio phai goi abng tay
2. moi class cho co DUY NHAT 1 construtor

Nhiệm vụ chính: gán lại giá trị ban đầu cho các thuộc tính (this..xxx) của object đang đc tạo ra. -> nói cách khác là bước lắp ráp linh kiện cho ngồi nhà

Phuong thuc: hanh dong cua object
chung ta se co nhung object co hàm -> để mieu ta hanh dong ma object thu hien khindc tao ra tu class.


this sử dụng trong method chính là object hiện tại (ngôi nhà đang gọi hàm -> tham chiéu ài cũ)

co 2 cach viet method: binh thuong va arrow function

class ViDu {

//method thưuongf - shorthand (Khuyến nghị dùng thằng này)
chaoHoi(){

}
//arrow function gán vào class field
tamBiet = ()=>{

}
}


method thường
this. phụ thuộc vào ai gọi 
bộ nhớ: dùng chung 1 bản cho mọi object (tiết kiệm)
kế thừa: class con có thể override

arrow function 
this: luôn khóa cứng vào object (ko bao giờ lạc)
bộ nhớ: mỗi object tạo ra 1 bản riêng(tốn hơn)
ke thua: class con ko the overide

Quy tac: chi dung method thuong.
chỉ dùng arrow khi mình biết
chắc chắn method đó sẽ bị tách ra khỏi bọect để truyền vào hàm khác (callBack -> tham chiếu bài cũ)


