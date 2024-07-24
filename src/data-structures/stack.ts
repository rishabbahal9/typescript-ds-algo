class Stack<T> {
  data: T[];

  constructor() {
    this.data = [];
  }

  push(value: T): void {
    this.data.push(value);
  }

  peek(): T | undefined {
    return this.data.length ? this.data[this.data.length - 1] : undefined;
  }

  pop(): T | undefined {
    return this.data.length ? this.data.pop() : undefined;
  }

  isEmpty(): boolean {
    return this.data.length == 0 ? true : false;
  }
}

export default Stack;