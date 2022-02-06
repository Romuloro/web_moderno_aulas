const door = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDados')

app.use(express.json())

app.use(bodyParse.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // converter para Json
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
     const produto = bancoDeDados.salvarProduto({
         nome: req.body.nome,
         preco: req.body.preco
     })
    res.send(produto) //Gera um JSON
})

app.put('/produtos/:id', (req, res, next) => {
     const produto = bancoDeDados.salvarProduto({
         id: req.params.id,
         nome: req.body.nome,
         preco: req.body.preco
     })
    res.send(produto) //Gera um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
   res.send(produto) //Gera um JSON
})

app.listen(door, () => {
    console.log(`Servidor executando na porta ${door}.`)
})
