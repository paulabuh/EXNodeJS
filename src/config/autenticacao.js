const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrag = require('passport-local').Strategy;

const express_store = require('express-mysql-session')(sessao);
//criando forma de armazenamento das variáveis de sessão no BD
var opcoes = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'', 
    database:'turma5'}
var session_store = new express_store(opcoes);

const UsuariosDao = require('../app/BD/usuariosDAO');
const db = require('./database');

module.exports = (app) => {
    // configurando a sessão de autenticação
    // aqui iremos colocar o código das validações do acesso
    passport.use(new LocalStrag(
        {
            // 1o parametro - campos iremos usar na estratégia de acesso
            usernameField: 'InputLogin',  
            passwordField: 'InputSenha'
        }, // 2o parametro - função para efetuar o login que será chamada pelo módulo passaport
        // função done - será executada quando for efetuar o LOGIN - fará a validação do acesso tiver sido executada 
        (login, senha, done) => {
            // a função done precisa ser executada quando o processo de validação for encerrado!
            const usuarioDao = new UsuariosDao(db);
            usuarioDao.validaAcessoPassport(login,senha)
                .then(usuario => { 
                    // colocando a lógica do processo de autenticação
                    // AUTENTICAÇÃO NEGADA: senão tiver nenhum usuario cadastrado com a senha passada
                    //if (!usuario || senha != usuario[0].senhaUsr) {
                    if (!usuario) {
                        /*
                            null  = nenhum erro na autenticacao
                            false = nao conseguiu autentincar nenhum usuario no BD
                            objeto mensagem = string com a mensagem de erro
                        */
                        return done(null, false, { 
                            mensagem: 'LOGIN e SENHA INVÁLIDOS!'
                        });
                    }
                    // conseguiu autenticar o usuario - existe CADASTRO
                    return done(null, usuario);
                })
                .catch(erro => done(erro, false));
        }
    ));

    // serializar a sessão
    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            // informações do usuário que desejo guardar na sessão
            login: usuario.loginUsr,
            nome:  usuario.nomeUsr
        };
        done(null, usuarioSessao);
    });

    // deserializar a sessão
    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    // estou dizendo que a minha aplicação usará uma sessão
    // configurar a sessão que será criada no processo de validação
    app.use(sessao({
        secret: 'xpto',  // string usada na assinatura da sessão
        genid: function(req) {
            return uuid();  // gerar strings aleatórios - ids das sessões
        },
        resave: false,  // as alterações nas sessões não serão salvas
        saveUninitialized: false,  // a aplicação irá gerar a sessão somente depois do acesso/login
        store:session_store
    }));

    // inicialização do passport e da sessão
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req,res,next) {
        req.passport = passport;
        next();
    })
}  // end do module.exports