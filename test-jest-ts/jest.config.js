module.exports = {
  //Directorios donde Jest va a buscar los archivos de pruebas
  roots: ["<rootDir>/src"],
  //Patrones que usa jest para detectar los archivos
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  //Indica que tests nos queremos saltar
  //testPathIgnorePatterns: ["files/__tests__/tests.spec.ts"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    /*    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub", */
  },
  //Indica si se debe generar informe de cobertura cuando se ejecuta la prueba
  collectCoverage: true,
  //ruta donde generará el informe de cobertura
  coverageDirectory: "coverage",
  //
  coverageProvider: "v8",
  //Limpia las instancias de todos los mocks por cada una de las pruebas que se ejecute
  clearMocks: true,
};
