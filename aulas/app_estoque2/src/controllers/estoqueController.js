const Usuario = require('../models/usuario');

function indexView(req,res) {
    res.render('index.html');
}

function criarContaView(req,res) {
    res.render('usuario_cadastro.html');
}

function cadastrar_usuario(req,res) {
    let usario = {
        email: req.body.email,
        senha: req.body.senha,
        perfil: req.body.perfil
    }
    Usuario.create(usario).then(()=>{
        res.redirect('/?cadastrar_usuario=true')
    }).catch((err)=>{
        console.log(err);
        res.redirect('/?cadastrar_usuario=false')
    });
    res.redirect('/')
}

module.exports = {
    indexView,
    criarContaView,
    cadastrar_usuario
}