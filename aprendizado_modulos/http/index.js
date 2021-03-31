const http = require('http');

const hostname = '127.0.0.1'
const port = 3000

const url = `http://${hostname}:${port}/`

const server = http.createServer((req, res)=>{
    res.statusCode = 200;

    res.setHeader('Content-type', 'text/html');
    res.end('<h1> Hello world node.js</h1>');


})

server.listen(port, hostname, ()=>{
    console.log(`Rodando na url ${url}`);
})

//Parte para executar e já abrir o navegador padrão
const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
require('child_process').exec(open + ' ' + url);