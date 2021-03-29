const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Listando usuario')
})

router.get('/:id', (req, res)=>{
    const usuarioId = req.params.id
    res.send(`Listando usuario de ID: ${usuarioId}`)
})


module.exports = router