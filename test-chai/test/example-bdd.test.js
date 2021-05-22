//Agregamos la librería de afirmaciones
const expect = require("chai").expect;
const suma = (num1, num2) => num1 + num2;
//definimos el comportamiento del test
describe("yo como usuario deseo calcular la suma de 2 números", () => {
  const num1 = 2;
  const num2 = 3;
  //definimos el primer paso para ejecutar el comportamiento
  it("se suma los valores de 2+3 y se espera como resultado 5", () => {
    var resultado = 5;
    expect(suma(num1, num2)).to.equal(resultado);
  });
});
