const express = require('express');
const mustacheExpress = require('mustache-express');
const db = require('./src/db')
const app = express();

app.engine('html',mustacheExpress());
app.set('view engine','html');
app.set('views',__dirname + '/src/views');

app.use(express.urlencoded({extended: true}));
app.use('/',require('./src/routes/estoqueRoutes'));

db.sync(function () {
    console.log('banco de dados conectado');
});

const PORT = 8080
app.listen(PORT,function () {
    console.log(' app rodando na porta ' + PORT)
});