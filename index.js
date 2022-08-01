const https = require('https');
const http = require('http');

module.exports = url => {
    return new Promise((res, rej) => {
        let req = url.startsWith('https://') ? https.get(url) : http.get(url);
        req.once("response", r => {
            req.destroy();
            let c = parseInt(r.headers['content-length']);
            if(!isNaN(c)) res(c);
            else rej("Couldn't get file size");
        });
        req.once("error", e => rej(e));
    });
};
