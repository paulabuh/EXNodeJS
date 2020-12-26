const app = require('./src/config/express');
const routesClientes = require('./src/app/routes/routesClientes');
routesClientes(app);

const routesUsuarios = require('./src/app/routes/routesUsuarios');
routesUsuarios(app);

// iniciando servidor Node JS
app.listen(3000, function(){
  console.log('Servidor NodeJS OK - Porta 3000');
});


