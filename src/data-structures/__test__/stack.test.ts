import Stack from "../stack";

describe("Stack", () => {
  it("class exists", () => {
    expect(Stack).toBeDefined();
  });

  it("Example 1", () => {
    const s = new Stack();
    s.push(1);
    s.push("Rishab");
    s.push(true);
    s.push("tree");

    expect(s.isEmpty()).toBeFalsy();
    expect(s.peek()).toBe("tree");

    expect(s.pop()).toBe("tree");
    expect(s.pop()).toBe(true);
    expect(s.pop()).toBe("Rishab");
    expect(s.pop()).toBe(1);

    expect(s.isEmpty()).toBeTruthy();
  });
});
