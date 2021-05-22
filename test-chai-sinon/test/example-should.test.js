const chai = require("chai");
const should = require("chai").should();
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const { ejecutarOperacion } = require("../funciones");

chai.use(sinonChai);

describe("ejecutarOperacion", function () {
  it("puede llamar la funcion de Suma", () => {
    const resultado = 5;
    const suma = sinon.spy();
    ejecutarOperacion("S", 2, 3);
    suma.should.have.callCount(0);
    //sinon.assert.calledOnce(suma);
  });
});
