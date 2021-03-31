const express = require('express')
const router = express.Router()

function logRequest(req, res, next) {
    console.log('Executando a função Middleware na rota de usuários')

    return next()
}

router.get('/', logRequest, (req, res)=>{
    res.send('Listando usuario')
})

router.get('/:id', (req, res)=>{
    const usuarioId = req.params.id
    res.send(`Listando usuario de ID: ${usuarioId}`)
})


module.exports = router