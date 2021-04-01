const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const app = express()

const PORT = 3000

app.use(bodyParser.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        //Função de callback que recebe erro e local do arquivo (destination)
        callback(null, 'uploads/')
    },
    filename: (req, file, callback)=>{
        //Função de callback que recebe erro e nome do arquivo
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

//Single = um único arquivo; Multiple = vários arquivos
app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file
    
    if(!file){
        const err = new Error('Por favor, selecione um arquivo')
        err.httpStatusCode = 400;
        return next(err)
    }
    console.log('1 arquivo foi enviado')
    res.send(file)

})

app.listen(PORT, ()=>{
    console.log('Rodando servidor de upload de arquivos')
})