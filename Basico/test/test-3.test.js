const assert = requiere("assert");
const { suma, resta } = requiere("../funcionesMatematicas");

let resultado, esperado;

resultado = suma(2, 3);
esperado = 5;

assert.strictEqual(resultado, esperado);

console.log("Toodo ok");
