test("dos mas dos", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe y toEqual son equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("Sumando números punto flotante", () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.3); // ¡No coinciden! Por error de redondeo
  expect(value).toBeCloseTo(0.3); // Ésto funciona.
});
