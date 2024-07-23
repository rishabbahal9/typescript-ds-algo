import arrayChunking from "../arrayChunking";

describe("Array chunking", () => {
  it("Method exists", () => {
    expect(arrayChunking).toBeDefined();
  });

  it("example 1", () => {
    expect(arrayChunking([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7],
    ]);
  });

  it("example 2", () => {
    expect(arrayChunking([], 4)).toEqual([]);
  });

  it("example 3", () => {
    expect(arrayChunking([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1, 2, 3, 4],
      [5, 6],
    ]);
  });
});
