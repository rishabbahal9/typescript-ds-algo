import Queue from "../../data-structures/queue";
import weaveQueue from "../weaveQueue";

describe("Weave queues", () => {
  it("weave method exists", () => {
    expect(weaveQueue).toBeDefined();
  });

  it("test 1", () => {
    const q1 = new Queue();
    const q2 = new Queue();

    q1.enqueue(1);
    q1.enqueue(2);
    q1.enqueue(3);
    q1.enqueue(4);
    q1.enqueue(5);
    q1.enqueue(6);
    q1.enqueue(7);

    q2.enqueue("hi");
    q2.enqueue("hello");
    q2.enqueue("Bonjour");
    q2.enqueue("namaste");

    const q = weaveQueue(q1, q2);

    expect(q.peek()).toBe(1)
    expect(q.dequeue()).toBe(1)
    expect(q.dequeue()).toBe("hi")
    expect(q.dequeue()).toBe(2)
    expect(q.dequeue()).toBe("hello")
    expect(q.dequeue()).toBe(3)
    expect(q.dequeue()).toBe("Bonjour")
  });
});
