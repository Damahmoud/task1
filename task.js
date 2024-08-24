const ht = require('node:http');

const serv = ht.createServer((req, res) => {
    let x = req.url;
    let ans;
    let a = '', b = '', f = 1;

    for (let i = 0; i < x.length; i++) {
        if (f) {
            if (x[i] >= '0' && x[i] <= '9') {
                f ^= 1;
                while (x[i] >= '0' && x[i] <= '9' && i < x.length) {
                    a += x[i];
                    i++;
                }
            }
        } else {
            if (x[i] >= '0' && x[i] <= '9') {
                while (x[i] >= '0' && x[i] <= '9' && i < x.length) {
                    b += x[i];
                    i++;
                }
            }
        }
    }

    let aa = parseInt(a, 10), bb = parseInt(b, 10);
    if (x.charAt(1) == 'a') {
        ans = aa + bb;
    } else if (x.charAt(1) == 's') {
        ans = aa - bb;
    } else if (x.charAt(1) == 'm') {
        ans = aa * bb;
    } else if (x.charAt(1) == 'd') {
        ans = bb !== 0 ? aa / bb : 'you whould think i didnt think about that huh';
    } else {
        ans = 'you had one job bro';
    }

    res.end(ans.toString());
});

serv.listen(2003, () => {
    console.log("3amlny kois yasta");
});