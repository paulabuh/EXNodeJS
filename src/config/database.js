const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'',
  database:'turma5'
});

connection.connect(function(err){
  if (err)
    console.log('Erro na conexão com BD turma 5');
  else
    console.log('Conexão BD turma 5 OK !!');
});

module.exports = connection;