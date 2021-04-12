const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura");

const dados = fs.readFile('file.txt',(err, data)=>{
    if(err) throw err;
    console.log('Terminei leitura de arquivo ')
});

console.log("Executando");

console.log((process.hrtime()[0]/60).toFixed(5));
