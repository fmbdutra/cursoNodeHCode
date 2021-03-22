console.log('Exibindo mensagem no console')

// erro
// console.error(new Error('Exibindo mensagem de erro!!!'))

//tabela
// const carros = ['GM', 'VW'] //ARRAY
const carros = {empresa: 'GM', modelo: 'Onix'} //OBJETO
console.table(carros)

//Contagem
console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando processo')
console.countReset('processo')
console.count('processo')

//TIME
console.time('contador')
for (let index = 0; index < 100; index++) {
//    console.log(index)
    
}
console.timeEnd('contador')

//Assert
console.assert(true, 'Faça algo') //Não aparece
console.assert(false, 'Ih, %s', 'nao funcionou') //Aparece, quer dizer que aparece só se falha

console.cler() //LImpa todos dados do console