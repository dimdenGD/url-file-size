# url-file-size
Get file size from URL (in bytes) without downloading it. 0 dependencies.  
  
Returns Promise<Number> with bytes on success.
```js
const ufs = require("url-file-size");

ufs("https://dimden.dev/logo.png")
    .then(console.log) // 1416
    .catch(console.error);
```
Created by [dimden](https://dimden.dev/)