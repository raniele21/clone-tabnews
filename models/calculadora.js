function validarNumero(valor) {
  return typeof valor === "number" && !Number.isNaN(valor);
}

function somar(numero1, numero2) {
  if (!validarNumero(numero1) || !validarNumero(numero2)) {
    return "Erro";
  }
  return numero1 + numero2;
}

function subtrair(numero1, numero2) {
  if (!validarNumero(numero1) || !validarNumero(numero2)) {
    return "Erro";
  }
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  if (!validarNumero(numero1) || !validarNumero(numero2)) {
    return "Erro";
  }
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  if (!validarNumero(numero1) || !validarNumero(numero2) || numero2 === 0) {
    return "Erro";
  }
  return numero1 / numero2;
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};   