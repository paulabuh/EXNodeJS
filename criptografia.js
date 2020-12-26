const criptografia = require('crypto');

function criptografar(s){
  const cipher = criptografia.createCipher('aes-256-ctr','abcdabcd');
  const senhacripto = cipher.update(s,'utf8','hex');
  return senhacripto;
}

function descriptografar(s){
  const cipher = criptografia.createDecipher('aes-256-ctr','abcdabcd');
  const senhadecripto = cipher.update(s,'hex','utf8');
  return senhadecripto;
}

const senha = 'teste123';
console.log('Senha digitada: '+senha);
const senhac = criptografar(senha);
console.log('Senha criptografada: '+senhac);
console.log('Senha descriptografada: '+descriptografar(senhac));