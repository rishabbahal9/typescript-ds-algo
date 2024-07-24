import Queue from "../queue";
describe("Queue", () => {
  it("class exists", () => {
    expect(Queue).toBeDefined();
  });

  it("Example 1", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue("Rishab");
    q.enqueue(true);
    q.enqueue(null);
    q.enqueue(undefined);

    expect(q.isEmpty()).toBeFalsy();

    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe("Rishab");
    expect(q.dequeue()).toBe(true);
    expect(q.dequeue()).toBe(null);
    expect(q.dequeue()).toBe(undefined);
    expect(q.isEmpty()).toBeTruthy();
  });
});
