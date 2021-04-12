const fs = require('fs').promises //Versao 12 do Nodejs

async function read(){
    const data = await fs.readFile('./fs/texto.txt', 'binary')
    return new Buffer.from(data)
}


try{
    read().then(data=> console.log(data.toString()))
}catch(error){
    console.log(error)
}