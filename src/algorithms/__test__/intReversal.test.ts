import intReversal from "../intReversal";

describe("Integer reversal", () => {
  it("method defined", () => {
    expect(intReversal).toBeDefined();
  });
  
  it("method defined", () => {
    expect(intReversal(24)).toBe(42);
  });
  
  it("method defined", () => {
    expect(intReversal(2.4)).toBe(4);
  });
});
