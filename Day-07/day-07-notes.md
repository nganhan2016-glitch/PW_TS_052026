1. Function
2. Hoisting: goi ham truoc khi dc khoi tao

// goi ham truc khi khoi tao
xinchao();


// tao ham sau
function xinchao(){
    console.log(`HOisting`)
}

Ứng dụng
Viết các kịch ban test ở đầu, và vứt hết các hàm hỗ trợ (helper, clean data) => viết hất các hàm ho tro xuogn duoi cung cua file cho do chat cho
Hoisting ko phai ap dung cho tat ca cac loai ham, no phu thuoc vao kieu viet ham

Cac môn phái viết hàm trong Javascript:
1. cổ diển: function delcaration -> truyen thống, giống như học ở đầu buổi
function tenHam(){

}
Ưu diem: ho tro 100% Hoisting, gọi ở đâu cũng chạy
tên hàm rõ ràng -> code dễ đọc, dễ debug (lỗi sẽ hiện tên hàm trong stack trace)
Nhuoc diem: cu phao dai dong hon so voi arrow function.
  có this riêng -> có thể ảnh hưởng khi dùng call back (học sau)

2. FUnction Expression
const tenHam = function(){
    ...
}  
KO DUOC ho tro Hoisting
 An toàn hơn nhờ const; với declaration , mình có thể vô tình khai báo trùng tên hàm ở chỗ khác ->
hàm cũ bị ghi đè âm thầm mà ko hề báo lỗi
- linh hoạt - truyền hàm như 1 món đồ: vì ham duoc cất trong biến -> có thể truyền vào hàm khác
- chon ham theo dieu kien

ưu điểm: dùng const -> ngăn việc khai báo lại hàm trùng tên
có thể gán vào biến -> linh hoạt truyền hàm
nhược điểm: ko có hoisting
cu phap: vna dai dong, vna phai viet chu function.

3. Arrow function: (ham mui ten)
-> là phien ban nang cap cua fucntion expression nhung rut gon toi da cu phap

// dang day du
const tenHam = (thamso,...) => {
    // than ham
}

// dang rut gon
const tenHam = (thamso1) => console.log('abc')
ko có chữ function như ở expression . thêm dấu mũi tên => vào giữa dấu () và {}

KO HO TRO HOISTING
UU diem: cu phap sieu ngan -> rat hay su dung khi viet call back (map, filter)
-> ko co this rieng -> an toan khi su dung voi setYomeout, foreach..()

Nhược điểm
ko có hoisting
ko có this riêng -> lưu ý khi viết với object
khi debug loi, se ko hien thi ten trong stack trace

KY THUAT XU LY THAM SO NANG CAO
cach viet ham co ban -> nang cao hon 1 chut vi thuc te ko don gian

- function overloading - 1 ham nhieu cach goi
-> 1 so ngon ngu nhu java, c# , ban co the nhiu ham cung ten, nhung khac nhau ve SL hoac kieu tham so
nhung JS KO HO TRO OVERLOADING KIEU DO

-> CACH GIAI QUYET -> no dung 1 ham duy nhat, tu kiem tra va xu ly input

 - Default Parameter (giá trị mặc định)
  Khi người gọi ko truyền đủ tham số, JS tgwj động gán giá trị mặc định
LƯU Ý: chi hoat dong tot khi tham so mac dinh nam cuối, neu tham so giua bi thieu, ban bat buoc truyen undefined haoc null lam giu chỗ
-> QUY TAC: luon dat tham so default o cuoi, neu co nhieu hon 3 tham so thi co the dung option Object (hoc sau)

- Rest parameter (...args) -> nhận bao nhiêu tham số cũng đc
Dấu ... () gom tât cả tha số vào 1 mảng

- option object -
Neu 1 ham co nhieu hon 3 tham so, thay vi truyen cac tham so le te, de nham thu tu -> goi tat ca vao 1 object.
Day la pattern hay su dung.

### Destructuring và spread operator ###
const {page} = await browser.newContext()
{...defaultConfig, timeout:4000}

Destructuring - Phân rã
-cú pháp cho phép bóc tách giá trị từ array hoặc object thànhc các biến riêng lẻ chi trong 1 dong code
