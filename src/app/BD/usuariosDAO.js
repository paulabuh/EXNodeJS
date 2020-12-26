/* 
Classe com métodos de SELECT, INSERT, UPDATE, DELETE
*/
class UsuariosDAO {

  // constructor está recebendo a conexão.
  constructor(bd){
    this._bd = bd;
  }

  validaAcesso(dadosForm){
    return new Promise((resolve,reject)=>{
      var sql = "select * from usuarios where  "+
                "loginUsr = '" + dadosForm.InputLogin+"' and "+
                "senhaUsr = '" + dadosForm.InputSenha+"' ";
      console.log(sql);
      this._bd.query(sql, 
        function (error, dados){
          if (error){
            console.log(error);
            return reject('Não foi possível buscar Usuario.');
          } else {
            if (dados.length>0){
              resolve(dados);
            }
            resolve(false);
          }
        }
      );
    });
  }

  validaAcessoPassport(login, senha){
    return new Promise((resolve,reject)=>{
      var sql = "select * from usuarios where  "+
                "loginUsr = '" + login +"' and "+
                "senhaUsr = '" + senha +"' ";
      console.log(sql);
      this._bd.query(sql, 
        function (error, dados){
          if (error){
            console.log(error);
            return reject('Não foi possível buscar Usuario.');
          } else {
            if (dados.length>0){
              resolve(dados);
            }
            return resolve(null);
          }
        }
      );
    });
  }
}

module.exports = UsuariosDAO;