const { check, validationResult} = require('express-validator');
const clientesDAO = require('../BD/clientesDAO');
var bd = require('../../config/database');

class ClientesController{

  static rotas(){
    return {
      listagem: '/clientes/lista',
      cadastro: '/clientes/inclusao'
    };
  }
  
  validacaoAutenticacao(){
    return function(req,res,next){
      if (req.isAuthenticated()){
        next();
      } else {
        res.redirect('/');
      }
    };
  }

  exibeDadosClientes() {
    return function(req,res){
      
      //if (req.session.login){
      //  console.log('Possui sessao'+req.session.login);
        const cDAO = new clientesDAO(bd);
        cDAO.dadosClientes()
        .then(dados => {
            res.marko(
              require('../views/clientes/listaClientes.marko'),
              {clientes:dados}
            );
          })
        .catch(erro => console.log(erro));
      //} else {
      //  console.log('Não possui sessao');
      //  res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      //}
    };
  }

  exibeDadosClientesEJS() {
    return function(req,res){
      
      if (req.session.login){
        console.log('Possui sessao'+req.session.login);
        const cDAO = new clientesDAO(bd);
        cDAO.dadosClientes()
        .then(dados => {
            res.render('ejs/listaClientes',
              {clientes:dados}
            );
          })
        .catch(erro => console.log(erro));
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    };
  }

  exibeFormCadClientes(){
    return function(req,res){
      if (req.session.login){
        res.marko(require('../views/clientes/novoCliente.marko'));
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    }
  }

  inserirCliente(){
    return function(req,res){
      if (req.session.login){
        const erros = validationResult(req);
        if (erros.isEmpty()){
          //console.log(req.body);
          const cDAO = new clientesDAO(bd);
          cDAO.inserirCliente(req.body)
            .then(res.redirect(ClientesController.rotas().listagem))
            .catch(erro => console.log(erro));
        } else {
          res.marko(require('../views/clientes/novoCliente.marko'),{
            errosValidacao:erros.array(),
            cliente:{
              idClie: req.body.InputId,
              cpfClie: req.body.InputCPF,
              nomeClie: req.body.InputNome,
              dataNiverClie: req.body.InputDataNascimento,
              emailClie: req.body.InputEmail
            }
          });
        }
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    }
  }

  exibeFormSelecaoCliente(){
    return function(req,res){
      if (req.session.login){
        const cDAO = new clientesDAO(bd);   
        const isAlteracao = req.params.isAlteracao;   
        cDAO.dadosClientes()
        .then(dados => {
            res.marko(
              require('../views/clientes/selecionaCliente.marko'),
              {clientes:dados,
              isAlteracao:isAlteracao}
            );
          })
        .catch(erro => console.log(erro));
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    };
  }

  exibeFormAlteracaoCliente(){
    return function(req,res){
      if (req.session.login){
        const cDAO = new clientesDAO(bd);
        var idCliente = req.params.idCliente;
        if (idCliente == null){
          idCliente = req.body.cb_cliente;
        }
        console.log(idCliente);
        cDAO.buscaCliente(idCliente)
        .then(dados => {
            res.marko(
              require('../views/clientes/alterarCliente.marko'),
              {cliente:dados[0]}
            );
          })
        .catch(erro => console.log(erro));
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    };
  }

  alterarCliente(){
    return function(req,res){
      console.log(req.body);
      if (req.session.login){
        const erros = validationResult(req);
        if (erros.isEmpty()){
          
          const cDAO = new clientesDAO(bd);
          cDAO.alterarCliente(req.body)
            .then(res.redirect(ClientesController.rotas().listagem))
            .catch(erro => console.log(erro));
        } else {
          res.marko(require('../views/clientes/alterarCliente.marko'),{
            errosValidacao:erros.array(),
            cliente:{
              idClie: req.body.InputId,
              cpfClie: req.body.InputCPF,
              nomeClie: req.body.InputNome,
              dataNiverClie: req.body.InputDataNascimento,
              emailClie: req.body.InputEmail
            }
          });
        }
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    }
  }

  excluirCliente(){
    return function(req,res){
      if (req.session.login){
        const cDAO = new clientesDAO(bd);
        var idCliente = req.params.idCliente;
        if (idCliente == null){
          idCliente = req.body.cb_cliente;
        }
        cDAO.excluirCliente(idCliente)
          .then(res.redirect(ClientesController.rotas().listagem))
          .catch(erro => console.log(erro));
      } else {
        console.log('Não possui sessao');
        res.marko(require('../views/usuarios/loginUsuario.marko'),{semsessao:true});
      }
    }
  }
}



module.exports = ClientesController;