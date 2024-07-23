import maxChar from "../maxChar";

describe("Maximum character", () => {
  it("Method defined", () => {
    expect(maxChar).toBeDefined();
  });
  
  it("example 1", () => {
    expect(maxChar("absgdrwterqirutweeEEwlcsbjhdcdeeeeskmGboiee")).toBe("e");
  });
  
  it("example 2", () => {
    expect(maxChar("")).toBe(undefined);
  });
});
