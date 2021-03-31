require('./subdirectory/sub')
console.log('---------------------------')
console.log(`Nome arquivo: `, __filename )
console.log(`Diretorio onde está o arquivo: `, __dirname) 
console.log(`Diretorio em que foi invocado o comando: `, process.cwd()) 
console.log(`Parametros de execução: `, process.argv)
console.log(`Sistema opereacional: `, process.env.OS)
console.log(`Idioma do PC: `, process.env.LANG)
console.log(`Nome do servidor: `, process.env.COMPUTERNAME)
console.log(`Login do OS: `, process.env.USERNAME)

switch (process.argv[2]){
    case '-a':
        console.log('Executando rotina principal');
        break;
    case '-i':
        console.log('Executando instalação');
        break;
    case '-q':
        console.log('Encerrando Aplicação');
        process.exit() //Interrompe o código de imediato
        break;    
    default:
        console.log('Parametro inválido')
        break
}

console.log(`Ambiente do servidor: `, process.platform)
// console.log(`Recurso`, )