const https = require('https');
const http = require('http');

const ufs = (url, attempts = 0) => {
    return new Promise((res, rej) => {
        let req = url.startsWith('https://') ? https.get(url) : http.get(url);
        req.once("response", r => {
            req.destroy();
            if(r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
                if(attempts > 5) {
                    return rej(new Error('Too many redirects'));
                }
                return res(ufs(r.headers.location, attempts + 1));
            }
            let c = parseInt(r.headers['content-length']);
            if(!isNaN(c)) res(c);
            else rej("Couldn't get file size");
        });
        req.once("error", e => rej(e));
    });
};

module.exports = ufs;
