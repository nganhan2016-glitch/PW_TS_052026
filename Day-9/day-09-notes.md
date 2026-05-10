Closure
Định nghĩa: Closure là 1 hàm ghi nhớ các biến xung qanh nơi nó đc sinh ra, và gom vào 1 cái balo
dù sau này cái hàm đó bị mang đi chạy ở nơi khác, nó vẫn xách theo cái balo đó đi dể dùng
Cú pháp: closure ko có từ khóa rieng. Minh sẽ nhận biết qua 3 dấu hiệu:

function hamCha(){

    //có khai báo biến trong hàm cha
    let bienRiengTu = 0


    // có hàm con bên trogn - hàm này sử dụng biến của cha
    function hamCon(){
      bienRiengTu ++
      return bienRiengTu
    }
    return hamCon

}

//3 dấu hiệu chính khi nhận biết 1 closure
- .Hàm lồng trong hàm *hàm con nằm trong hàm cha
- Hàm con sử dụng biến của hàm cha
- khi hàm con chạy nó vẫn truy cập đc biến của hàm cha

//==============
This - 
This (tôi) 
là gì??? : bản chất của this giống đại từ nhân xưng "Tôi" trong dời sống
cùng từ tôi nhưng ai nói thì Tôi là người đó
Quy tac: this ko mang gia tri co dinh - Gia tri cua nó phụ thuoc hoan toan vao Ai la nguoi đọc

this. trong object
Ke dung truoc dau cham = THIS

Các nhận dạng của this
Gọi qua objet (object.ham()) -> this trỏ về đúng cái object đó -> user.gioiThieu -> this = user
gọi khơi khơi (ham()) -> undefined -> gioiThieu() -> this = undefinedfd
arrowFunction (()=>{

}) - > kế thừa this từ scope bên ngoài -> ko có this riêng

so sánh cơ chế this của 2 loại hàm
chàm thường trong object  -> cos this riêng đc qdd bởi cách gọi -> this = object (vì qua cách gọi object.method) -> khi call back bên trong object (this =window -> vì call back gọi khơi khơi)
arrow function ->ko kế thừa this -> this = global (vì object ko phải là scope!!!) 