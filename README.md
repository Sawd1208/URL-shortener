# 短網址產生器
![1](https://raw.githubusercontent.com/Sawd1208/URL-shortener/main/public/1.png)



## 介紹
輸入一個URL，可以產生一組短網址

## 特點
- 把原始網址轉換成一個後綴有五碼隨機英數組合的短網址
- 產生出來的短網址會儲存在資料庫，再輸入原始網址不會再有新的一組短網址

## 使用
1. 先確認是否有安裝 npm和 Node.js
2. 將專案clone 到 local server
3. local server開啟後，透過終端機入進資料夾，輸入：
```
npm install
```
4. 安裝完畢之後，繼續輸入：
```
npm run start
```
5. 看見這行訊息代表可以順利運行，打開瀏覽器輸入以下網址：
```
Express is listening on http://localhost:3000
```
6. 暫停使用，請輸入：
```
ctrl + c
```

## 開發工具
- Node.js 18.15.0
- Express 4.18.2
- Express-handlebars 4.0.6
- Bootstrap 5.1.3
- body-parser 1.20.2
- dotenv 16.0.3
- mongoose 7.1.2
- MongoDB