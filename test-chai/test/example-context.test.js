//Agregamos la librería de afirmaciones
const { suma } = require("../sum");
const expect = require("chai").expect;

//definimos el comportamiento del test
describe("yo como usuario deseo calcular la suma de 2 números", () => {
  context("HU 111", () => {
    it("se suma los valores de 2+3 y se espera como resultado 5", () => {
      var resultado = 5;
      expect(suma(2, 3)).to.equal(resultado);
    });
  });
});
