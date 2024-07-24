import fibonacci from "../fibonacci";

describe("Fibonnaci", () => {
  it("Method exists", () => {
    expect(fibonacci).toBeDefined();
  });

  it("Example 1", () => {
    expect(fibonacci(0)).toBe(0);
  });
  
  it("Example 2", () => {
    expect(fibonacci(1)).toBe(1);
  });
  
  it("Example 3", () => {
    expect(fibonacci(2)).toBe(1);
  });
  
  it("Example 4", () => {
    expect(fibonacci(8)).toBe(21);
  });

  it("Example 5", () => {
    expect(fibonacci(39)).toBe(63245986);
  });
});
