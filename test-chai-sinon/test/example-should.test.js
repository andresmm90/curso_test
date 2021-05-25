const chai = require("chai");
const should = require("chai").should();
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const r = require("../funciones");

chai.use(sinonChai);

describe("Usar calculadora", function () {
  it("puede llamar la funcion de Suma", () => {
    const resultado = 5;
    const suma = sinon.spy(r, "suma");
    r.ejecutarOperacion("S", 2, 3);
    //suma.should.have.callCount(0);
    sinon.assert.callCount(suma, 1);
  });
});
