import Tests from "../tests";

describe("Dado que tengo una funciones para realizar diferentes operaciones", () => {
  let test: Tests;
  beforeEach(() => {
    test = new Tests();
  });

  it("deseo garantizar que se ejecute correctamente la función", () => {
    expect(test.funcionOperaciones(1, 2)).toBeTruthy();
  });

  it("deseo garantizar que se llamen la operación de restar", async () => {
    const spyResta = jest.spyOn(Tests.prototype, "funcionResta");
    await test.funcionOperaciones(1, 2);
    expect(spyResta).toBeCalled();
  });

  it("deseo garantizar que se llamen la operación de sumar", async () => {
    const responseSuma = new Promise<number>((resolve, reject) => {
      resolve(4);
    });

    const spySuma = jest
      .spyOn(test, "funcionSuma")
      .mockReturnValue(responseSuma);

    await test.funcionOperaciones(1, 2);

    expect(spySuma).toBeCalled();
  });
});
