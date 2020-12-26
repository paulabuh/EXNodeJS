const { check, validationResult} = require('express-validator');

class Clientes{
  static validaocoesClientes(){
    return [
      check('InputNome').isLength({ min: 3 }).withMessage('Nome Incompleto! Digitar pelo menos 3 letras'),
      check('InputDataNascimento').isISO8601('AAAA/MM/DD').withMessage('Data incorreta! Digite data com AAAA/MM/DD'),
      check('InputEmail').isEmail().withMessage('Email inválido! Coloque @ e ponto'),
      check('InputCPF').isLength({ min: 11 }).withMessage('CPF inválido! Digitar 11 dígitos')
    ];
  }
}

module.exports = Clientes;