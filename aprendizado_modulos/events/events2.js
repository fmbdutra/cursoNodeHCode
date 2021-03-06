const {EventEmitter} = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento()

//Subscriber - assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando evento 'segurança': ${x} ${y}`)
})

//Publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'alterou salario')

meuEvento.on('encerrar', (data)=>{
    console.log('Assinante: ' + data)
})

meuEvento.emit('encerrar', 'Encerrando a execução')

