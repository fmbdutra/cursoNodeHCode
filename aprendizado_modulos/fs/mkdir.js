const fs = require('fs')

// fs.mkdir('./projeto', (err)=>{
//     if(err) throw err;
//     console.log('Diretório ligado por sucesso')
// })


// fs.mkdir('./projeto/assets/images', {recursive: true} //ativar funcao recursiva para criação de subpastas
// , (err)=>{
//     if(err) throw err;
//     console.log('Diretório ligado por sucesso')
// })

const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){ //Diretorios
    dir.forEach((item)=>{
        fs.mkdir(`./projeto/assets/${item}`, {recursive: true} //ativar funcao recursiva para criação de subpastas
        , (err)=>{
            if(err) throw err;
            console.log(`Diretório ${item} por sucesso`)
        })
    })
    
}

make(assets);
