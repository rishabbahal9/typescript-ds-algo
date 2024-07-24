import Queue from "../data-structures/queue";

const weaveQueue = (q1: Queue<any>, q2: Queue<any>): Queue<any> => {
  const q = new Queue();
  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q.enqueue(q1.dequeue());
    }
    if (q2.peek()) {
      q.enqueue(q2.dequeue());
    }
  }
  return q;
};

export default weaveQueue;
