const fs = require('fs')

// fs.readFile('./fs/texto.txt', (err, data)=>{
//     if(err) throw err

//     console.log(data.toString());
// } )

//Abaixo, usando Sync. Travará a conexão até ler totalmente o arquivo.
const text = fs.readFileSync('./fs/texto.txt');

console.log(`texto: ${text}`)