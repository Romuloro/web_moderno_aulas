const door = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 7500.78}) // converter para Json
})

app.listen(door, () => {
    console.log(`Servidor executando na porta ${door}.`)
})
