require('marko/node-require').install();
require('marko/express');

const express = require('express');
const session = require('express-session');

/*const express_store = require('express-mysql-session')(session);*/
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

//criando forma de armazenamento das variáveis de sessão no BD
/*var opcoes = {
  host:'localhost',
  port:3306,
  user:'root',
  password:'', 
  database:'turma5'}
var session_store = new express_store(opcoes);*/

// para conseguir ler os arquivos JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

// configurando variavel de sessao
/*
app.use(session({
  secret:'chavesecreta',
  saveUninitialized: true, 
  resave: true, 
  store:session_store}));
*/
const sessaoAutenticacao = require('./autenticacao');
sessaoAutenticacao(app);

module.exports = app;