//testing funciones matemáticas
const { suma, resta } = require("../funcionesMatematicas");

let resultado, esperado;

resultado = suma(2, 3);
esperado = 5;

if (resultado != esperado) {
  throw new Error(`${resultado} es diferente a ${esperado}`);
}

console.log("TEST OK!");
