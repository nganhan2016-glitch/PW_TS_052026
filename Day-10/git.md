Các khu vực quan trọng mà mn cần lưu ý
working directory : folder project trên máy 
staging area: vùng chuẩn bị commit -> nơi bạn chọn file nào sẽ commit tiếp theo
local repository: folder .git trên máy (nơi lưu lịch commit local)
remote repository: github/gitlab/bitbucket -> nơi lưu bản online 

pwd
ls

- Các bước để đẩy code lên remote repository
B1: Khởi tạo git trong folder hiện
git init
Ý nghĩa: làm lần đầu tiên và duy nhất -> sau lệnh này git sẽ tạo rra 1 folder ẩn tên là .git
-> là nơi lưu lịch sử thay đổi của project. bình thường mình ko cần mở hoặc sửa trực tiếp folder này
Initianilzed -> khởi tạo xong 
empty Git repository -> lịch sử đang rỗng vì chúng ta chưa commirt lân fnaof

B2: kiem tra trang thai file git status
-B2: kiểm tra trạng thái file
  git status
    nói đơn giản: git đã đc bật tỏng folder -> nhưng chưa tạo mốc lưu đầu tiên
    B3: git add tên filder hoặc tên folder
    git add . -> chọn tât cả các file đang thay đổi trong project
    B4: tạo commit đầu tiên
    git commit -m "nội dung mô tả commit"