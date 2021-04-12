const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile)

const conteudo = 'Criando arquivo com promisse'


writeFile('utilArquivo.txt', conteudo).then(()=>{
    console.log('Arquivo utilArquivo criado com sucesso!')
}).catch((err)=>{
    console.log('Deu erro!!!!!', err)
})