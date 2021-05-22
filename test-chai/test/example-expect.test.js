const expect = require("chai").expect;
const numbers = [1, 2, 3];

expect(numbers).to.be.an("Array").that.include(2).that.have.lengthOf(3);
console.log("Se ejecutó expect OK");
