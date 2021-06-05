export default class Tests {
  constructor() {
    console.log("construcción test");
  }
  public async funcionOperaciones(
    numero1: number,
    numero2: number
  ): Promise<boolean> {
    const suma = await this.funcionSuma(numero1, numero2);
    const resta = await this.funcionResta(numero1, numero2);
    console.log({ suma });
    console.log({ resta });
    return true;
  }

  public async funcionSuma(numero1: number, numero2: number): Promise<number> {
    return numero1 + numero2;
  }

  public async funcionResta(numero1: number, numero2: number): Promise<number> {
    return numero1 - numero2;
  }
}
