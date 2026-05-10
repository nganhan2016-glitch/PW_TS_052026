- **Array destructuring**
  - Bóc tách giá trị từ mảng.
- **Spread operator**
  - Dùng dấu `...` đặt trước tên biến của một `array` hoặc `object` để trải toàn bộ nội dung của nó ra.
  - Nếu có thuộc tính trùng tên, giá trị ở bên phải sẽ ghi đè giá trị ở bên trái.
  - Spread không làm thay đổi `object` cũ mà tạo ra một `object` mới.

Hàm CallBack (Gọi lại)
Tới 1 nhà hàng -> đông khách
Thằng order bảo là -> ông vất lại số điện thoại cho tôi -> khi nào có bàn thì tôi sẽ GỌI LẠI (CALL BACK) cho ông
Đưa số điện thoại
Thằng order tiếp tục làm việc ()
Khi có bàn , order lấy số của mình ra -> thực hiện hành động gọi
-> CALLBACL là 1 hàm A đc truyền vào làm tham số cho 1 hàm khác (B) -> khi hàm B là xong việc, sẽ lôi hàm A ra để chạy

Bản chât: Hàm ở trong JS là công dân hạng nhất (first class citizen)
-> quyền bình đẳng như 1 cố, hay 1 chuỗi -> nghĩa là ta có thể nhét nó vào biến, truyền đi lung tung, hoặc return nó từ 1 hàm khác

có ngoặc () = THỰC THI NGAY -> giống bấm nút say sinh tố ->

không có () = GIAO BẢN VẼ -> truyền bản thân cái máy xay cho người khác, để lúc nào họ muốn thì tự cắm điện àm chạy
1 hàm ko có return sau hi chạy xong -> JS tư trả giá trị mặc định là undefined

QUY TẮC NHỚ: KHi truyền callBack luôn viết tên hàm trần (ko có ())


Array callback methods
Map  -> biển đổi mãng cũ thành 1 mảng mới
nhận vào 1 callback function thường là có 3 tham số nhưng tự tế chỉ dùng 1
const mangMoi = mangCu.map((phanTu, index, mangGoc)=>{
  phantu = phần tử hiện tại
  index = vị trí 0, 1 ,2
  mang goc 
  return giaTriMoi (bắt buộc phải return)
})


Filter - Lọc phần tử thỏa mãn điều kiện




Find () - Tìm Phẩn tử ĐẦU TIÊN THỎA MÃN ĐIỀU KIỆN


Scope
là phạm vi quyu định 1 biến đc phép sống và nhìn thấy ở đâu trong đoạn code

A. Global scope (phạm vi toàn cục -)
Đặc điểm: Biến đc khai báo lộ thiên, ko nằm trong bất kì cái ngoặc {} hay function nào
Quyền lực: LÀ VUA- . bất kfi ai , ở đâu trong file code cũng có thể nhìn thấy và lấy ra xài

B. Function Scope (phạm vi hàm )
Đặc điểm: biến đc khai báo BÊN TRONG 1 function
Quyền lực; AO LÀNG - những gì sinh tra trong hàm, sẽ chết đi khi hàm chạy xong. -> THẾ GIỚI BÊN NGOÀI
TYỆT ĐỐI KO NHÌN THẤY NÓ

C. Block scope (phạm vi khối )
Bất kì thứ gì năm trong ngoặc nhọn của {} của if, ffor, while -> đều là 1 block scope
-> NHỮNG GÌ XẢY RA ở trong ngoặc nhọn sẽ ở lại trong đó
KO DC DUNG VAR

D. CMA bÂy
Object KO PHAI la 1 scope
hình thức thì giống nhau, nhưng vai trò hay bản chât hoàn tôafn khác nahu

SCope: là vùng nhìn thấy biến
object là hộp dữlieue chứa các cặp key-vale
hay trả lời câu hỏi
SCOPE TRẢ LỜI: biến này đứng ở đây còn nhìn thấy ko
OBJECT trả lời: dữ liệu này nằm trong property nào
OBJECT ko tao ra Scope


SCOPE CHAIN = > xác định scope -> tìm từ trong ra ngoài. ko bh tìum từ ngoài vào trong.
hàm con nhìn thấy biến của hàm cha. nhưng hàm cha ko nhìn thấy biến của hàm con