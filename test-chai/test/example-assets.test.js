const assert = require("chai").assert;

const numbers = [1, 2, 3, 4, 5];
const text = [1, 2, 3, 4, 5];

assert.isArray(numbers, "is Array of numbers");
assert.isArray(text, "is Array of numbers");

console.log("OK");
