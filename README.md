# React + Vite + Yarn berry

---

# 배포 : Vercel

`yarn add -D vercel`

```json
"scripts": {
  "deploy": "vercel"
}
```

`yarn deploy`

---

### 📓 Todo List App

-   [x] 전체 아이템들 보여주기 - All
-   [x] 아이템 체크박스 토글
-   [x] 아이템 추가
-   [x] 아이템 삭제
-   [x] 아이템 필터링 - Active
-   [x] 아이템 필터링 - Completed
-   [x] 다크모드 지원
-   [x] 로컬 스토리지에 저장

### 아이콘 사용하기 ([React Icons](https://www.npmjs.com/package/react-icons))

`yarn add react-icons`  
[아이콘 고르기](https://primer.style/foundations/icons)

### 고유한 아이디 라이브러리 (uuid)

-   [npm](https://www.npmjs.com/package/uuid)  
    `npm install uuid`

```js
import { v4 as uuidv4 } from 'uuid';
```

-   [yarn](https://classic.yarnpkg.com/en/package/uuid.v4)  
    `yarn add uuid.v4`

```js
import { v4 as uuidv4 } from 'uuid.v4';
```
