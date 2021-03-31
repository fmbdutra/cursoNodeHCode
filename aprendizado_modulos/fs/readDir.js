const fs = require('fs')

fs.readdir(__dirname, (err, data)=>{
    if(err) throw err;

    data.forEach(files => {
        console.log(__dirname +'\\'+files);
    });
})
//readDir le primeiro o diretorio e manda o callback
//readDirSync é sincrono, sem callback, travando a conexão