const Buffer = require('buffer').Buffer

const buf = Buffer.from('hello world, buffer')
console.log(buf)
console.log('ToString: '+ buf.toString())
console.log('UTF16LE: '+ buf.toString('utf16le'))

const buf_string = Buffer.from('Carregando um string', 'utf-8')
console.log(buf_string)
console.log('ToString: ' +buf_string.toString())
console.log('É buffer? '+Buffer.isBuffer(buf_string).toString())
console.log('varia bytes: ' + buf_string.toString('utf-8', 0, 10))//primeiros 10 caracteries - começa no 0 e termina no 10, como substring