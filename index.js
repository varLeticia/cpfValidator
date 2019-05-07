function cpfValidator(strCPF) {
  let soma;
  let resto;
  soma = 0;
  if (strCPF === '00000000000') return false;
  strCPF.split('').splice(0, 9).forEach((numero, index) => {
    soma += parseInt(numero) * (11 - (index + 1));
  });
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(strCPF.substring(9, 10))) return false;
  soma = 0;
  strCPF.split('').splice(0, 10).forEach((numero, index) => {
    soma += parseInt(numero) * (12 - (index + 1));
  });
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(strCPF.substring(10, 11))) {
    return false;
  }
  return true;
}
module.exports = cpfValidator;