const user = {
  hoTen: "neko",
  tuoi: 18,
  gioiThieu() {
    //có sử dụng this. this o day chinh la object user
    console.log(` Tôi là ${this.hoTen}, ${this.tuoi} tuổi`);
  },
};

//khi gọi user.gioiThieu() -> kẻ đừng trước dấu chấm = user -> this = user

user.gioiThieu();


const sanPham = {
  ten: "iphone 15",
  gia: 2500000,
  soLuong: 10,
  inThongTin() {
    console.log(this);
    console.log(this.ten);
    console.log(this.gia);
  },

  giamGia(phanTram) {
    this.gia = this.gia * (1 - phanTram / 100);
    console.log(`${this.ten} sau giảm giá: ${this.gia.toLocaleString()}đ`);
  },
};

sanPham.inThongTin();
sanPham.giamGia(20);

function inRaThis() {
  console.log(this);
}
inRaThis();


const sanPham2 = {
  ten: "iphone 00",
  inten: () => {
    console.log(`Tên là ${this.ten}`);
  },
  intenDung() {
    console.log(`Sp: ${this.ten}`);
  },
};
sanPham2.inten();

// scope bne ngoai object = global -> this = window

const giohang = {
  items: ["chuột", "bàn phím", "màn hình"],
  inDanhSach() {
    console.log(`giỏ Hàng ${this.items.length} sản phẩm`);
    //function thường bên rogn forEach ->

    this.items.forEach(function (item) {
      console.log(`${item} (giỏ ${this.items.length})`);
    });
  },
  inDachSachDung() {
     //nếu là arrow function -> thì thằng this nó sẽ tìm theo scope bên ngoài -> this lúc này là
      // this của inDachSachDUng -> gioHang
    this.items.forEach((item) => {
      console.log(`${item} (giỏ ${this.items.length})`);
    });
  },
};

giohang.inDanhSach();
// -> gọi qua object -> this = giohang
//this.items.forEach(function())-> bên trong forEach JS alfm gì???
// nó gọi callBack(item) -> gọi KHƠI KHƠI -> không có ai.callback()

//bên trong forEach hoạt động đơn giản là
// for (let i = 0; i < arr.length; i++) {
//   callback[arr[i]]; -> gọi khơi khơi ko có obj phái trước _> 
// }