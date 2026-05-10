1. Rẽ nhánh kịch bản (if /else)

2. Cau truc If else if else
cấu trúc
if (đk1 ){
chạy nếu đk 1 đúng
}else if(đk 2){
chạy nếu đk 1 sai, nhưng đk 2 đúng
}else if (đk 3){
chạy nếu các đk trên đều sa, nhưng đk 3 đúng
}else {
chạy nếu tất cả các đk trên là si
}

quy tắc
luôn bắt đầu bằng if
có thể 0, 1 hoặc nhiều else if
else là tùy chọn ko bắt buộc

nếu có else thì nó luôn đừng cuối cùng

trong cả cumhj này,máy tính chỉ chyaj 1 nhánh duy nhát

NẾU ĐK Nào đúng đầu tiên thì nó chạy vào nhánh đó. và BỎ QUA TẤT CẢ các nhánh bên dưới (dù bên dưới có đúng đi nữa)

3. TOAN TU 3 ngôi - lối tắt if else
vi no co 3 thanh phan
syntax: 
let bien = dieu kien ? gia tri neu dung : gia tri neu sai
dau ? mang y nghia hoi xem dk dung hay sai
dau : ngan cach giua dung (bne trai) va sai ben phai
-> cach doc: neu dk dung, thi lay ve ben trai :, sai thi lay ve ben phai

BEST PRACTICE: khi nao dung toan tu 3 ngoi.
--- if/else la cau lenh re nhanh, quyet dinh chay khoi code nao.
--- 3 ngoi: la bieu thuc dung de tao ra 1 gia tri
Khi nao uu tien toan tu 3 ngoi: khi ban chi can chon 1 gia tri; bai toan chi co 2 ket qua; moi nhanh deu ngan va doc hieu ngay.
// rat phu hop cac case: gan text cho bien, chon config, return 1 gia tri ngan, hien thi nhan don gian

khi nao uu tien if else: trong moi nhanh co nhiu hanh dong, biet trc con mo rong them logic

4. TRUTHY vs FALSY
Bình thường, câu lệnh if(đk) đòi hỏi cái đk bên trong phải là kiểu Boolean (true or false)
Neu ban dua vao 1 string, number, 1 object... no thuong ko bao loi ngay, no se lam 1 buoc ngầm gọi là ép kiểu.

If (gia tri bat ki) {
    ...
}
JS sẽ tự xử lý theo kiểu:
. gia tri at ky đã là true hoặc false chưa
. nếu chưa, hạm tạm thời đỏi nó sang boolean
. nếu kq true -> vào if và ngc lại

thằng if ko hỏi mày thuộc kieuer dữ liệu gì
mà nó hỏi: trong ngữ cảnh điều kiện, tao nên xem mày là ĐÚNG HAY SAI

đó là lý do tại sao sinh 2 khái niệm
TRUTHY: ko phải boolean thật, nhưng khi đưa vào if thì xem là true
FALSY: ko phải boolean thật, nhưg khi đưa vào if thì xem là false

QUY TAC:
Những giá trị mang năng lượng tiêu cực, trống rỗng, vô nghĩa -> bị ép thành false -> gọi là falsy
con tất CẢ NHỮNG THỨ CÒN LẠI trên đời -> bị ép thành true -> TRUTY

LIST 6 thằng FALSY:
false
0 ( số 0)
"" (chuoi rong) 
null (rong)
undefined (chua xac dinh)
NaN ( not a number)

TAT CA DK kHAC coi la TRUTHY nhung chu y cac bẫy
//Trò lưaaf bằng string
"0": Một chuỗi chứa số 0 -> TRUTHY
"false" -> TRUTHY
" " -> TRUTHY

// Object/ Array
[]; 1 cai mảng rong -> TRUTHY
{}: 1 cai object rong -> TRUTHY

Nếu biên đã mang nghĩ là đúng hay sai (isLogin, haspermission)-> dùng trực tiếp
nêus dữ liệu là số, chuỗi màng , thì chỉ nên dự vào truthy/falsy khi ý nghĩa của nó thực sự rõ ràng

5. SWITCH CASE

Mình cứ tưởng tượng switch..case hoạt động y như 1 chiếc máy bán nc tự động
.Bạn nhết tiền và bấm mã số switch()
máy sẽ dò tìm đúng ô chữa mã số đó case()
nhả ra chai nc (code thực thi)
nếu bám mã ko tồn tại, hì refund hay thông báo lỗi (default)

cú pháp
switch (biểu thưc): nơi bạn truyền vào biến cần kiểm tra
case giá trị: điểm dừng (lưu ý dấu : ở cuối)
breakL lệnh ngắt: gặp lệnh này sẽ thoát khỏi switch
default: gióng như else

nếu ko có break -> thf chạy dúng vào case đầu tiên khớp, nhưng sau đó nó chạy tuọt xuống tất cả các case
bên duoi ma ko kiem tra dk

// KHI NAO DUNG SWITCH? KHI NAO IF ELSE
Điều kiện: Dùng if else khi điều kiện đa dạng, phưucs tạp (>, < >=), điều kiện lồng nhau, nhieefu biến
dùng switch case khi có 1 biểu duy trong suiwtch, rồi mỗi case là 1 GGIAS TRỊ CỐ DỊNh để so khớp ===

số lượng: ít nhánh (2-3 trường hợp)
switch case : rất nhiều nhánh từ 4 TH

NÓI NGẮN GỌN; SWITCH KO MẠNH Ở ĐK LOGIC mà mạnh ở so khớp nhiều giá TRỊ CỐ ĐỊNH CỦA 1 biến hay biểu thức
