# Web App Task Manager

同一個任務管理器的三個版本，用來對照從純 HTML、原生 JavaScript，到 React 的做法。三份程式彼此獨立，可以各自用瀏覽器直接開啟。

## 資料夾

| 資料夾 | 內容 |
| --- | --- |
| `html/` | 只有 HTML 結構，沒有 CSS 和 JavaScript |
| `vanilla/` | HTML、CSS、原生 JavaScript 的完整版本 |
| `react/` | 用 React 重做新增、完成／取消完成、刪除 |


## html

`html/index.html` 是最一開始的頁面骨架，用 `header`、`main`、`section`、`ul`、`li` 排出這些區塊：

- 網頁標題
- 任務輸入欄位和新增按鈕
- 篩選按鈕
- 三筆寫死的範例任務
- 寫死的任務統計

直接開啟這個檔案即可。按鈕和輸入框還沒有功能。

## vanilla

| 檔案 | 作用 |
| --- | --- |
| `vanilla/index.html` | 頁面結構，並接上樣式與程式 |
| `vanilla/style.css` | 版面、480px 以下的手機排版，以及按鈕 hover、輸入框 focus |
| `vanilla/script.js` | 新增、完成／取消完成、刪除、篩選、統計 |

開啟 `vanilla/index.html` 即可使用。任務存在頁面上的 `tasks` 陣列裡，重新整理後不會保留。

`script.js` 的主要行為：

- 空白任務不能新增
- 勾選核取方塊會完成或取消完成，完成的文字會加上刪除線
- 刪除會依任務 `id` 從陣列移除
- 「全部」「未完成」「已完成」只改變畫面上看得到的清單
- 新增、完成、刪除後，總數、未完成數、已完成數會一起更新

## react

`react/index.html` 用 CDN 載入 React，所以開啟時需要網路。畫面由 `App` 元件畫進 `<div id="root">`。

這個版本只重做三個功能：

- 新增任務，輸入框由 state 控制，新增後立刻出現在清單並清空輸入框
- 勾選核取方塊可完成或取消完成
- 刪除任務

篩選和統計留在 `vanilla/`，沒有在 React 版本重做。
