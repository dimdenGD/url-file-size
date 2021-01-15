const https = require('https');

module.exports = url => {
    return new Promise((res, rej) => {
        let req = https.get(url);
        req.once("response", r => {
            req.abort();
            let c = parseInt(r.headers['content-length']);
            if(!isNaN(c)) res(c);
            else rej("Couldn't get file size");
        });
        req.once("error", () => rej("Connection error"));
    });
};
