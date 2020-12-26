const { check, validationResult} = require('express-validator');
const usuariosDAO = require('../BD/usuariosDAO');
var bd = require('../../config/database');

class UsuariosController{

  exibeLogin(){
    return function(req,res){
      res.marko(require('../views/usuarios/loginUsuario.marko'));
    }
  }

  validaAcessoPassport(){
    return function(req,res,next){
      const erros = validationResult(req);
      if (erros.isEmpty()){
          const passport = req.passport;
          passport.authenticate('local',(erro, usuario, informacao) => 
          {
              // se o parametro INFORMACAO tiver dados, significa que o LOGIN/SENHA não existem no BD
              if (informacao) { 
                  console.log('NÃO TEM USUARIO CADASTRADO NO BD!');
                  return res.marko(
                      require('../views/usuarios/loginUsuario.marko'),{erro:true});
              }
              // se o parametro ERRO tiver dados, significa que o processo de validação deu algum ERRO
              if (erro)  { 
                  console.log('O processo de validação PASSPORT NÃO FOI OK!');
                  return res.marko(
                    require('../views/usuarios/loginUsuario.marko'),{erro:true});  // o processamento da requisição não irá parar
              }
  
              // PRECISO PEGAR O USUÁRIO AUTENTICADO E INSERIR NA SESSAO
              req.login(usuario, (erro) => {
                  // verificando se ocorreu algum problema na serialização do dados
                  if (erro) { 
                      console.log("PROBLEMA NA CRIAÇÃO DO PASSPORT");
                      return res.marko(
                        require('../views/usuarios/loginUsuario.marko'),{erro:true}); 
                  }
                  console.log("AUTENTICAÇÃO FEITA COM SUCESSO!");
                  return res.redirect('/clientes/lista');
              });
          }) (req,res,next);  // o método authenticate retorna uma função que recebe esses 3 parametros
      } else {
        res.marko(require('../views/usuarios/loginUsuario.marko'),{errosValidacao:erros.array()});
      }
    }
  }

  validaAcesso(){
    return function(req,res){
      const erros = validationResult(req);
      if (erros.isEmpty()){
        const uDAO = new usuariosDAO(bd);
        uDAO.validaAcesso(req.body)
        .then(dados => { 
          if (dados == false){
            res.marko(require('../views/usuarios/loginUsuario.marko'),{erro:true});
          } else {
            req.session.login = req.body.InputLogin;
            req.session.save();
            //req.session.loggedIn = true;
            console.log("Sessao criada: "+req.session.login);
            res.redirect('/clientes/lista');
          }
        })
        .catch(erro => console.log(erro));
      } else {
        res.marko(require('../views/usuarios/loginUsuario.marko'),{errosValidacao:erros.array()});
      }
    }
  }

}

module.exports = UsuariosController;