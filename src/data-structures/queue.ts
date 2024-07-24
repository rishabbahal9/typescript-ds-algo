class Queue<T> {
  data: T[];

  constructor() {
    this.data = [];
  }

  enqueue(value: T): void {
    this.data.unshift(value);
  }

  dequeue(): T | undefined {
    return this.data.length ? this.data.pop() : undefined;
  }

  isEmpty(): boolean {
    return this.data.length == 0 ? true : false;
  }
}

export default Queue;
