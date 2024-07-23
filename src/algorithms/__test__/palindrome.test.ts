import palindrome from "../palindrome";

describe("Palindrome", () => {
  it("method exists", () => {
    expect(palindrome).toBeDefined();
  });

  it("example 1", () => {
    const res = palindrome("ambma");
    expect(res).toBe(true);
  });

  it("example 2", () => {
    const res = palindrome("aMbma");
    expect(res).toBe(true);
  });

  it("example 3", () => {
    const res = palindrome("kritika");
    expect(res).toBe(false);
  });
});
