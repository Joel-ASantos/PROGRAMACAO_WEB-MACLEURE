const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('página inicial')
})

app.get('/ola',function(req,res){
    res.send('Hello, World!')
})

app.get('/ola/:n',function(req,res){
    let nome = req.params.n
    res.send('Hello, World! ' + nome)
})

const PORT = 8080
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT)
})   