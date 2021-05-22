const { suma, resta } = requiere("../funcionesMatematicas");
const { esperoQue } = requiere("./funcionesTesting");

let resultado, esperado;

resultado = suma(2, 3);
esperado = 5;

//expect(resultado).toBe(5);
//should(resultado).to.be(5);
esperoQue(resultado).seaIgual(esperado);
