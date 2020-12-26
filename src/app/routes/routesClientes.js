module.exports = (app) => {

  // Evitar problema com o CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  const clientesController = new require('../controller/clientesController');
  const cController = new clientesController();
  const validacoesClientes = require('../model/clientes');
  const rotasClientes = clientesController.rotas();

  /** Rotas **/
  app.use(rotasClientes.listagem, cController.validacaoAutenticacao());

  app.get(rotasClientes.listagem, cController.exibeDadosClientes());
  app.get(rotasClientes.cadastro, cController.exibeFormCadClientes());
  app.post('/clientes/insertBD', validacoesClientes.validaocoesClientes(), cController.inserirCliente());

  app.get('/clientes/listaEJS', cController.exibeDadosClientesEJS());
  
  app.get('/clientes/selecionaCliente/:isAlteracao', cController.exibeFormSelecaoCliente());
  app.post('/clientes/formAlteracao', cController.exibeFormAlteracaoCliente());
  app.get('/clientes/alteracao/:idCliente', cController.exibeFormAlteracaoCliente());
  app.post('/clientes/updateBD', validacoesClientes.validaocoesClientes(), cController.alterarCliente());
  
  app.get('/clientes/exclusao/:idCliente', cController.excluirCliente());
  app.post('/clientes/deleteBD', cController.excluirCliente());
}