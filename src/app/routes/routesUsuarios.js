module.exports = (app) => {

  // Evitar problema com o CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  const usuariosController = require('../controller/usuariosController');
  const uController = new usuariosController();
  const validacoesUsuario = require('../model/usuarios');

  /** Rotas **/
  app.get('/', uController.exibeLogin());
  //app.post('/usuarios/validaAcesso', validacoesUsuario.validaocoesLogin(), uController.validaAcesso());
  app.post('/usuarios/validaAcesso', validacoesUsuario.validaocoesLogin(), uController.validaAcessoPassport());
  
}