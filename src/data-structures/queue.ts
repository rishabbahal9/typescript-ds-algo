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

  peek(): T | undefined {
    return this.data.length ? this.data[this.data.length - 1] : undefined;
  }

  isEmpty(): boolean {
    return this.data.length == 0 ? true : false;
  }
}

export default Queue;
