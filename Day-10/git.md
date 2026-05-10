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
    git branch -M main
    B6: gắn folder này với remote repossiory trên git
    nối git ở local với remote repo để chia sẻ code
    git remote add origin ....đường link remote repositry 
    git remote add origin https://github.com/meomew-auto/JS-TS-BASIC-202603.git
    -> sau này push (đẩy code) thì đẩy code lên đâu
     B7: push đẩy code 
     lần đầu tiên chưa đẩy code -> ta thiết lập upstream cho branch local hiện tại với remote

     git push -u origin main 
    -u: upstream 
    origin là tên ngắn của repo github mà mình đã gắn vào 


có nhiều môi trường
dev: main  -> nhánh  này là nhánh chính chạy ổn định -> khi làm việc người ta sẽ tạo ra 1 nhánh khác để làm việc để ko ảnh hưởng tới nhánh chính đang sử dụng  -> sau khi code ổn định ở nhánh phụ -> chúng ta mới merge code -> vào nhánh chính -> để bổ sung thêm tính năng
uat: main

