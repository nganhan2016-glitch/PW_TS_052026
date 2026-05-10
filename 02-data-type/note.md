clg -> console log
shift + . ==> >
Go Tat: Snippet > Javacript.json

biến: luu tru dữ liệu, gia trị de may tinh co the nho va su dung sau nay

cach khai bao bien:
cu phap: `[tu khoa] [ ten bien]= [gia tri]`
1. let: dung khi biet gia tri thay doi trong tuong lai
2. const: (chiec hop niem phong): viet tat cua constant: dung khi ban muon gia tri nay ko bao gio thay doi sau khi da khai bao.

### Cac quy tac dat ten biến: ###
1. ky tu dac biet, dau gach ngang la KO duoc, chi dung dau gach duoi_
2. số ở đầu la cam ki
3. khoang trang
4. Ko dung tu khoa cua Javascript : if, function, return
### Naming convention ###
Dung camel case: vd: let thongTinHocVien
### Nghe thuat dat ten ### (clean code)
dat ten: de doc len la hieu no chua cai gi.
1. TRanh dat ten vo nghia
2. Dat ten bien boolean: vd; isOpen, hasPermission
3. English hay Vietnamese
Cấm: tiengVIet co dấu, nửa tây nửa ta.

========================
Data type"
1. String:
2. Number:
quy tac dong goi: tran nhu nhong, ko can bao quanh boi ki tu nao ca
3. boolean:
=======================
hop do nghe xu ly string
1. length: dem xem chuoi co bn ky tu, tinh ca dau cach
cu phap: tenBien.length (luu y ko co ngoac tron vi day la thuoc tinh, ko phai method)

2. trim() - cai keo cat tia - lam sach khaong trang 2 dau
cu phap: tenBien.trim()

3. toUpperCase() va toLowerCase()
vd: tenBien.toUpperCase()

4. include - kinh lup tim kiem -> tra ve true/false - phan biet hoa /thuong (case sensitive)

5. replace - xoa va sua loi 
dac diem: chi thay the cho dau tien no tim thay + case sensitive
cu phap: tenBien.replace("cu","moi")

6. replaceAll()

7. indexOf() - may do vi tri
tim vi tri index dau tien cua 1 chuoi con trong chuoi me, neu ko co tra ve -1
cu phap: chuoime.indexof("chuoicon");
ket qua: tra ve so, tinh tu 0

8. substring() -
chuoi.substring(batdau, ketthuc): cat tu bat dau den trc ket thuc 
chuoi.slice(batdau,ketthuc): cat tuong tu, nhung ho tro so am.

9. slice()
cat lay 1 phan cua chuoi dua tren vi tri bat dau va vi tri ket thuc
start: dc tinh vao
- end: ko dc tinh vao
neu co 1 tham so: cat tu vi tri do dne het chuoi

tu duy ket hop nhieu string method
1. Dữ liệu có bẩn ko? trim(), replace, replaceAll, to LowerCase()
2. minh co can biet su ton tai hay ko? -> dung includes()
3. moc bat dau nam o dau: indexOf()
4. sau khi viet vi tri roi, can cat doan nao: slice, substring()
5. kq cuoi cung co can chuan hoa nua ko trim(), toLowerCase, split
=> lam sach -> tim moc -> cat/tact -> chuan hoa -> kiem tra
=============================
Hop do nghe su dung Number
1. Ep kieu
A. Number(): no co gang bien toan bo chuoi thanh so. Neu chuoi co chua du chi 1 ky tu la -> bao loi NaN(not a number)
B. parseInt()
no doc tu trai sang phai, gap so thi lay, gap chu thi stop.

C. parseFloat(): giong parseInt nhung giu lai phan thap phan
-------------------
-toFixed(): chot so thap phan () , giu lai n so sau dau phay
cu phap: tenBien.toFixed(so le muon lay) -> tu dong lam tron -> nhin vao chu so ngay sau vi tri ban muon giu
-- >=5: lam tron len
-- <5: lam trong xuong
-- neu thieu them so 0
-------------------
doi tuong toan hoc (math object)
Math.round(): lam theo quy tac toan hoc
Math.celi(): lam tron len tran nha: vd 4.1 -> 5
Math.floor(): lam trong xuong san : vd 4.9 -> 4
Tao so ngua nhien: Math.random() -> tra ve 1 so le tu 0 -> sat 1 (vd: 0.99999)

Math.floor(Math.random() * (max - min + 1)) + min

Math.min
Math.max
Math.abs

padStart(), padEnd()
.padStart: lap day cho trong phia truoc
ham nay dung de chen them ki tu vao dau chuoi cho den khi du do dai mong muon
luu y: la phuong thuc cua string() -> muon dung thi ep kieu sang chuoi truoc
cu phap: chuoi.padStart(do dai mong muon, ki tu chen)
-> do dai tong bao gom ca dem
-> muon do dai la n neu thieu thi bu ki tu vao

-------------------
- Cách nhớ nên dùng hàm nào:
  - Đầu vào hiện tại là text hay number?
    - Nếu là text, cần nghĩ tới việc ép kiểu.
  - Cần ép kiểu nghiêm ngặt hay linh hoạt?
    - `Number()`, `parseInt()`, `parseFloat()`
  - Sau khi thành số rồi, cần tính gì?
    - Cộng, trừ, nhân, chia, `min`, `max`
  - Có cần làm tròn không?
  - Có cần hiển thị đẹp không?
    - `toFixed()`, `padStart()`, `padEnd()`

 ------------------------------
 In ra man hinh console.log 
 1. c1: noi chuoi bang dau + 
 2. ngan cach bang dau ,
 3. Dung backstick - template literal  
