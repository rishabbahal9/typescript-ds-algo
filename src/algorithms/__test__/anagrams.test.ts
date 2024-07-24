import anagrams from "../anagrams";

describe("Anagrams", () => {
  it("Method exists", () => {
    expect(anagrams).toBeDefined();
  });

  it("Example 1", () => {
    expect(anagrams("news","NSEW")).toBeTruthy();
  });

  it("Example 2", () => {
    expect(anagrams("news","SEW")).toBeFalsy();
  });

  it("Example 3", () => {
    expect(anagrams("new","NSEW")).toBeFalsy();
  });
});
