const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Acessando rota ADMIN')
})

router.get('/:id', (req, res)=>{
    const usuario = req.params.id
    res.send('Acessando rota ADMIN com id: ' + usuario)
})

router.post('/', (req, res)=>{
    const {login, senha} = req.body
    res.send(`Acessando rota ADMIN com POST\nLogin: ${login}\nSenha: ${senha}`)
})

router.patch('/:id', (req, res)=>{
    const usuario = req.params.id
    res.send('Acessando rota ADMIN com PATCH para id: ' + usuario)
    //Depois, fazer funcoes para verificações de existencia
})

router.put('/:id', (req, res)=>{
    const usuario = req.params.id
    res.send('Acessando rota ADMIN com PUT para id: ' + usuario)
        //Depois, fazer funcoes para verificações de existencia

})

/*
PATCH: geralmente, altera alguns dados
PUT: geralmente, altera todos os dados
*/


router.delete('/:id', (req, res)=>{
    const usuario = req.params.id
    res.send('Acessando rota ADMIN com DELETE para id: ' + usuario)
        //Depois, fazer funcoes para verificações de existencia

})

module.exports = router

