# To-do List

- 用 Next.js 與 Firebase 做可以一個有後端可以存取的待辦清單網頁。
- 用 ChatGPT 輔助。

## 安裝 nvm

https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

## 用 nextjs 建立 Todo List 專案

```
npx create-next-app@latest todo-firebase-next
cd todo-firebase-next
npm install firebase
```

後面的步驟他一開始請我找 page/ 資料夾，但那是似乎是 Next.js 13 之前的版本的做法， 13 或更新的版本是用 app router ，所以是在 app/ 下做事。 Firebase 的東西要自己建立 lib/ 來做。

設定首頁，初步連結 Firebase ，設定用 Google 登入。