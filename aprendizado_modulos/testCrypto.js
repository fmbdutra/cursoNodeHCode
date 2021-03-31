const crypto = require('crypto');
const start = Date.now();

function logHashTime(){
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", ()=>{
        console.log(`Hash: ${Date.now() - start}`);
    })
}

//4 threads, da ao mesmo tempo, pois é pesado, usando o LIBUV
logHashTime();
logHashTime();
logHashTime();
logHashTime();

// +1, vem depois dos 4 na execução
logHashTime();