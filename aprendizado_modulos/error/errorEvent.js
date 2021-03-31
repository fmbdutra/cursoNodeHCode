const {EventEmitter} = require('events')
const emitter = new EventEmitter()

const validaObjeto = (a) =>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo invalido!'))
    } else {
        console.log('Objeto valido')
    }
}

emitter.addListener('error', (err)=>{
    console.log(`evento ${err.message}`);
})

let dados = { name: 'Hcode', course: 'NodeJS'}

validaObjeto(dados)
// validaObjeto(123) ---> objeto invalido