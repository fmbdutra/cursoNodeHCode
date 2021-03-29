const express = require('express')
const app = express()
const PORT = 3000

const adminRoutes = require('./routes/admin')
const usuariosRoutes = require('./routes/usuarios')

app.use(express.json()) //Habilita leitura de JSON no express

app.get('/', (req, res)=>{
    res.send('Hello World Hcode Express')
})

app.use('/usuarios', usuariosRoutes)

app.use('/admin', adminRoutes)


app.listen(PORT, ()=>{
    console.log(`Servidor rodando: http://localhost:${PORT}`)
        //Depois, fazer funcoes para verificações de existencia

})