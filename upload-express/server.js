const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()

const PORT = 3000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    // res.json({
    //     message: 'Hello World Updload de arquivos'
    // })
    res.sendFile(__dirname + '/index.html')
})



app.listen(PORT, ()=>{
    console.log('Rodando servidor de upload de arquivos')
})