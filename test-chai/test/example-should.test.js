const should = require("chai").should();
const numbers = [1, 2, 3];

numbers.should.to.be.an("Array").that.include(2).that.have.lengthOf(3);
console.log("Se ejecutó should OK");
