
class HocVien {

    // Buoc 1: Khai bao tat ca thuoc tinh o Class field
    // 2 thang nay se dc gna lai trong constructor
    hoTen = "";
    tuoi = 0;
    truongHoc = "Neko playwright";
    trangThai = "Đang học";

  //Bước2 : constructor chỉ gán lại cho thuộc tính cần giá trị động
    // moi thuoc tinh deu nam trong COnstructor
    constructor (ten, tuoi) {
        this.hoTen = ten;
        this.tuoi = tuoi;
    }
    // phuong thuc
    gioiThieu(){
        console.log(`${this.hoTen}, ${this.tuoi} tuổi, trường ${this.truongHoc}`);
        
    }
    gioiThieuArrow = () => {
        console.log(`${this.hoTen}, ${this.tuoi} tuổi, trường ${this.truongHoc}`);
    };
}
//cách 1. constructor có tham số (phổ biên)
let hv1 = new HocVien("Neko", 30);
hv1.gioiThieu();

// cach 2: constructor co gia tri amc dinh
class TestConfig {
  //B1.
  browser = "Chromium";
  timeout = 5000;
  constructor(browser = "Chromium", timeout = 5000) {
    this.browser = browser;
    this.timeout = timeout;
  }
}

let config1 = new TestConfig();
let config2 = new TestConfig("firefox");

let config3 = new TestConfig("webkit", 10000)

//cách 3: Constructor ko tham số - dùng class fields thuần
//kho moi object đều cso chung thuộc tính cốc định, ko cần csonstructor luôn ! chỉ cần 
//class fields là đủ
class LoginPage {
  //
  url = "htpps://nekosensei.com/login";
  txtEmail = "#email";
  btnSubmit = "button[type=submit]";
}
let trang = new LoginPage();
console.log(trong.url);
