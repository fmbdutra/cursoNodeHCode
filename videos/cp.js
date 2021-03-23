const { spawn } = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

//STDIO - o que eu quero fazer (ler, fazer etc)

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
})

//CLOSE - fechou todas as conexoes
//EXIT - fechar cada um
ls.on('close', (code)=>{
    console.log(`Processo em segundo plano finalizado com sucesso \n code: ${code}`)
})