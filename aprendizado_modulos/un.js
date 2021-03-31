const fs = require('fs');


fs.readFile('file.txt', (err, data) =>{
    if(err) throw err;
    console.log(data);

    //sincronizado, uma açao de cada vez
    fs.unlink('file.txt', (errUnlink)=>{
        if(errUnlink) throw errUnlink;
    });

    console.log('arquivo lido');
});

//desincronizado e não le tudo
// fs.unlinkSync('file.txt');
