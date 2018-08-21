const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))//transforma o corpo da requissição para um objeto 


app.get('/produtos', (req, res) => {
	res.send(bancoDeDados.getProdutos()) // converte para json
})

app.get('/produtos/:id', (req, res) =>{
	res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res) => {
	const produto = bancoDeDados.excluirProduto(req.params.id)
	res.send(produto) //JSON
})

app.listen(porta, () => {
	console.log(`Servidor executando na porta ${porta}`)
})