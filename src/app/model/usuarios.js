const { check, validationResult} = require('express-validator');

class Usuarios{
  static validaocoesLogin(){
    return [
      check('InputLogin').isLength({min:5}).withMessage('Login inválido. Máximo de 6 caracteres.'),
      check('InputSenha').isLength({min:3}).withMessage('Senha inválida. Máximo de 8 caracteres.')
    ];
  }
}

module.exports = Usuarios;