//Mi libreria testing

const esperoQue = (dato) => {
  return {
    seaIgual: (esperado) => {
      if (dato != esperado) {
        throw new Error(`${dato} es diferente que esperado`);
      }
    },
  };
};

const prueba = (titulo, funcion) => {
  try {
    funcion();
    console.log(`ok ${titulo}`);
  } catch (error) {
    console.error(`ok ${titulo}`);
  }
};
