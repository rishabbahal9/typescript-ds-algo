import stringReverse from "../stringReversal";

describe("String reversal", () => {
  it("Function exists", () => {
    expect(stringReverse).toBeDefined();
  });

  it("example 1", () => {
    const res = stringReverse("shweta");
    expect(res).toBe("atewhs")
  });

  it("example 2", () => {
    const res = stringReverse("gunjan");
    expect(res).toBe("najnug")
  });
});
