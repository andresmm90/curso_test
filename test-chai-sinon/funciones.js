const ejecutarOperacion = (operacion, valor1, valor2) => {
  if (operacion == "S") {
    for (let index = 0; index < 3; index++) {
      suma(valor1, valor2);
    }
  } else {
    resta(valor1, valor2);
  }
};

/* const suma = (valor1, valor2, cb) => {
  const result = valor1 + valor2;
  cb(result);
}; */

const suma = (valor1, valor2) => valor1 + valor2;
const resta = (valor1, valor2) => valor1 - valor2;

module.exports = { ejecutarOperacion };
