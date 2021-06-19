import plusTen from "../src/calc";

describe("test plusTen", (): void => {
  test("plus one", (): void => {
    const resp: number = plusTen(1);
    expect(resp).toBe(11);
  });

  test("plus two", (): void => {
    const resp: number = plusTen(2);
    expect(resp).toBe(12);
  });
});
