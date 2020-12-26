/* 
Classe com métodos de SELECT, INSERT, UPDATE, DELETE
*/
class ClientesDAO {

  // constructor está recebendo a conexão.
  constructor(bd){
    this._bd = bd;
  }

  dadosClientes(callback){
    
    return new Promise((resolve,reject)=>{
      var sql = 'Select idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie from clientes';
      this._bd.query(sql, function(error,dados){
        if (error){
          console.log(error);
          return reject('Lista de Clientes não foi gerada');
        } 
        resolve(dados);
      })
    });
    /*var sql = 'Select idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie from clientes';
    this._bd.query(sql,
    (error,dados) => callback(error,dados))*/
  }

  buscaCliente(idCliente){
    return new Promise((resolve,reject)=>{
      var sql = 'Select idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%Y/%m/%d") as dataNiverClie from clientes'+
                ' where idClie = '+idCliente;
      this._bd.query(sql, function(error,dados){
        if (error){
          console.log(error);
          return reject('Não foi possível buscar o cliente');
        } 
        //console.log(dados);
        resolve(dados);
      })
    });
  }

  inserirCliente(dadosForm){
    return new Promise((resolve,reject)=>{
      var sql = "Insert into clientes (cpfClie, emailClie, nomeClie,dataNiverClie) values ("+
                "'" + dadosForm.InputCPF+"', "+
                "'" + dadosForm.InputEmail+"', "+
                "'" + dadosForm.InputNome+"', "+
                "'" + dadosForm.InputDataNascimento+"')";
      this._bd.query(sql, 
        function (error){
          if (error){
            console.log(error);
            return reject('Não foi possível inserir.');
          }
          resolve();
        }
      );
    });
  }

  alterarCliente(dadosForm){
    return new Promise((resolve,reject)=>{
      var sql = "update clientes set "+
                "cpfClie = '" + dadosForm.InputCPF+"', "+
                "emailClie = '" + dadosForm.InputEmail+"', "+
                "nomeClie = '" + dadosForm.InputNome+"', "+
                "dataNiverClie = '" + dadosForm.InputDataNascimento+"' "+
                " where idClie = "+dadosForm.InputId;
      console.log(sql);
      this._bd.query(sql, 
        function (error){
          if (error){
            console.log(error);
            return reject('Não foi possível alterar.');
          }
          resolve();
        }
      );
    });
  }

  excluirCliente(idCliente){
    return new Promise((resolve,reject)=>{
      var sql = "delete from clientes "+
                " where idClie = "+idCliente;
      console.log(sql);
      this._bd.query(sql, 
        function (error){
          if (error){
            console.log(error);
            return reject('Não foi possível excluir.');
          }
          resolve();
        }
      );
    });
  }
}

module.exports = ClientesDAO;