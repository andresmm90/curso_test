/* const ejecutarOperacion = (operacion, valor1, valor2) => {
  if (operacion == "S") {
    suma(valor1, valor2);
  } else {
    resta(valor1, valor2);
  }
};

const suma = (valor1, valor2) => {
  console.log("Se realizará suma");
  return valor1 + valor2;
};
const resta = (valor1, valor2) => valor1 - valor2;

module.exports = { ejecutarOperacion, suma };
 */
module.exports = {
  ejecutarOperacion: function (operacion, valor1, valor2) {
    if (operacion == "S") {
      this.suma(valor1, valor2);
      console.log("Se realizará suma");
    } else {
      console.log("Se realizará resta");
      this.resta(valor1, valor2);
    }
  },
  suma: (valor1, valor2) => valor1 + valor2,
  resta: (valor1, valor2) => valor1 - valor2,
};
