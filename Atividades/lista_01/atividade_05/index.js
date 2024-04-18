const express = require('express')
const estoque = require('./src/estoque')
const app = express()

const PORT = 8080
app.listen(PORT,function(){
    console.log("App rodando na porta " + PORT)
})

app.get('/adicionar/:id/:nome/:qtd',function(req,res){
    let id = req.params.id
    let nome = req.params.nome
    let qtd = req.params.qtd
    let p = estoque.criarProduto(id,nome,qtd)
    estoque.adicionarProduto(p)
    res.send(p)
})

app.get('/listar',function(req,res){
    res.send(estoque.listarProdutos())
})

app.get('/remover/:id',function(req,res){
    let id = req.params.id
    estoque.removerProduto(id)
    res.send(id)
})

app.get('/editar/:id/:qtd',function(req,res){
    let id = req.params.id
    let qtd = req.params.qtd
    estoque.EditarQtd(id,qtd)
    res.send(id,qtd)
    console.log("update no produto")
})