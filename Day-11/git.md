Rebase/ Revert/ reset

.Gitignore: sẽ nói cho Git biet la" những files này đừng theo dõi"
node_modules/
dist/
.env
\*.log
coverage/

xảy ra 2 trường hợp với gitignore
1 file chưa từng commit -> thêm vào .gitignore là đủ
2 file đã commit/push -> thêm vào .gitignore là chưa đủ. phải dùng git rm --cached hoặc git rm -r --cached