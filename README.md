# url-file-size
Get file size from URL (in bytes) without downloading it. 0 dependencies.  
  
Params: 
- `url` - url to get file size of. string or instance of `require('url').URL` (required)  
- `timeout` - connection timeout. number in milliseconds (optional, default is `10000`)  
- `maxRedirects` - max amount of redirects. number (optional, default is `5`)  
  
Returns `Promise<Number>` with bytes on success.  
```js
const ufs = require("url-file-size");

ufs("https://dimden.dev/logo.png")
    .then(console.log) // 1416
    .catch(console.error);
```
Created by [dimden](https://dimden.dev/)
