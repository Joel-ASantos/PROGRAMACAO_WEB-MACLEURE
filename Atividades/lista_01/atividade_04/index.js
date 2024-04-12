const express = require('express')
const calcu = require('./calcu/operacoes')
const app = express()

app.get('/',function(){
    console.log("Hello World!\n")
    console.log("para fazer uma operação use o '/' com o valor da operação mais os valores.")
})

app.get('/soma',function(req,res) {
    let a = req.paramns.a
    let b = req.paramns.b
    let c = calcu.soma(a,b)
    res.send(""+c)
})

app.get('/sub',function(req,res) {
    let a = req.paramns.a
    let b = req.paramns.b
    let c = calcu.sub(a,b)
    res.send(""+c)
})

app.get('/mult',function(req,res) {
    let a = req.paramns.a
    let b = req.paramns.b
    let c = calcu.mult(a,b)
    res.send(""+c)
})

app.get('/div',function(req,res) {
    let a = req.paramns.a
    let b = req.paramns.b
    let c = calcu.div(a,b)
    res.send(""+c)
})

const PORT = 8080
app.listen(PORT,function() {
    console.log("app rodando na porta " + PORT)
})