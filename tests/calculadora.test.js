const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("subtrair 5 - 3 deveria retornar 2", () => {
  expect(calculadora.subtrair(5, 3)).toBe(2);
});

test("multiplicar 4 * 3 deveria retornar 12", () => {
  expect(calculadora.multiplicar(4, 3)).toBe(12);
});

test("dividir 12 / 3 deveria retornar 4", () => {
  expect(calculadora.dividir(12, 3)).toBe(4);
});

test("dividir por zero retorna Erro", () => {
  expect(calculadora.dividir(10, 0)).toBe("Erro");
});

test("operacao com valor inválido retorna Erro", () => {
  expect(calculadora.somar("a", 1)).toBe("Erro");
  expect(calculadora.subtrair(1, "b")).toBe("Erro");
  expect(calculadora.multiplicar(null, 1)).toBe("Erro");
});
