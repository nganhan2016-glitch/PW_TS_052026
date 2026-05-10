//Bài tập nhỏ:
// Có 1 hệ thống đăng nhập. -> rule Là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đsung trước khi hết lượt
// -> hiển thị ĐĂng nhập thành công. Nếu sai -> khóa tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;
let lanthu =1;
let isFinish = false;

//Yêu cầu:
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa

while (maxLanThu <= 3 && matKhauDung === "1234") {
    if (lanthu === 1) {
        matKhauNhap = "0000";
    } else if (lanthu == 2) {
        matKhauNhap = "9999";
    } else if (lanthu === 3) {
        matKhauNhap = "1234"
    }

    if (matKhauNhap === matKhauDung) {
        console.log("dang nhap thanh cong");
        isFinish = true;
        
    } else {
        console.log(`mat khau sai ${matKhauNhap}`);         
        maxLanThu --;
    }
    lanthu ++;
}
if (isFinish === false){
    console.log("tk bi khoa");
    
}