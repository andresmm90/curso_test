//https://github.com/ssalaza7/cursotest
var chai = require("chai");
const expect = require("chai").expect;
const chaiJsonPattern = require("chai-json-pattern").default;
chai.use(chaiJsonPattern);

// describimos el comportamiento del test
describe("Validar elementos de un json con el plugin chai-json-pattern", function () {
  // definimos el comportamiento
  it("Se valida que la edad este entre un rango de 0 a 30 años", function () {
    const v1 = { edad: 29 };
    expect(v1).to.matchPattern(`{
            "edad": Number AND range(0, 30),
        }`);
  });
});
