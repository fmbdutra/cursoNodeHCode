console.log('executando modulo01.js')

const oculta = () => {
    console.log('Executado funcao oculta')
}
const executa = () => {
    console.log('Executando a função executa') 
}
//REPL - comando NODE no console e dar um require('./module-01') vai aparecer a funcao executa

const welcome = `Bem vindo ao module-01`

module.exports = {executa, welcome}