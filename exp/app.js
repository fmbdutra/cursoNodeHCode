const express = require('express')
const app = express()

const PORT = 3000

//informar onde estão arquivos estáticos
app.use(express.static('public'))

//Funções de middleware de rotas
const adminRoutes = require('./routes/admin')
const usuariosRoutes = require('./routes/usuarios')

const cookieParser = require('cookie-parser')

app.use(express.json()) //Habilita leitura de JSON no express
//Função de middleware built-in do express para ler JSON

app.use(cookieParser())

app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Fabiano Dutra', {
        maxAge: 9000,
        httpOnly: true
    })

    return res.send('Cookie gravado com sucesso!')
})

app.get('/getcookie', (req,res)=>{
    let user = req.cookies['user']
    return user && res.send(user)
    
})

//Middleware tratando erros
app.get('/*', (req, res, next)=>{
    setImmediate(()=>{
        next(new Error('Temos um problema'))
    })
})

app.use((err, req, res, next)=>{
    console.log(err.stack) //stack: todas informações
    res.status(500).json({
        message: err.message 
    })
})

app.use((req, res, next)=>{
    //next() => funcao a ser executada após realizar funções de middleware

    console.log('Executando Middleware me nível de aplicação')
    
    return next()
})

app.get('/', (req, res)=>{
    res.send('Hello World Hcode Express')
})

app.use('/usuarios', usuariosRoutes)

app.use('/admin', adminRoutes)


app.listen(PORT, ()=>{
    console.log(`Servidor rodando: http://localhost:${PORT}`)
        //Depois, fazer funcoes para verificações de existencia

})