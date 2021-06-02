//https://github.com/ssalaza7/cursotest
var chai = require("chai");
const expect = require("chai").expect;
const assert = require("chai").assert;
chai.use(require("chai-string"));

// describimos el comportamiento del test
describe("Comparar dos cadenas de texto con el plugin chai-string", function () {
  // definimos el comportamiento
  it("Se comparan dos cadenas de texto y se espera que sean iguales", function () {
    var v1 = "abcdef";
    assert.equalIgnoreCase(v1, "AbCdEf");
    expect(v1).to.equalIgnoreCase("AbCdEf");
  });

  it("Se comparan dos cadenas de texto y se espera que comiencen igual", function () {
    var v2 = "abcdef";
    assert.startsWith(v2, "abc");
    expect(v2).to.startsWith("abc");
  });
});
