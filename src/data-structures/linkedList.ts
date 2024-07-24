export class LLNode {
  data: any;
  next: LLNode | null;
  constructor(data: any, next: LLNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList<T> {
  head: LLNode | null;

  constructor() {
    this.head = null;
  }

  insertFirst(data: T) {
    this.head = new LLNode(data, this.head);
  }

  insertLast(data: T) {
    let pointer = this.head;
    while (pointer && pointer.next) pointer = pointer.next;
    pointer
      ? (pointer.next = new LLNode(data))
      : (this.head = new LLNode(data));
  }

  size() {
    let pointer = this.head;
    let counter = 0;
    while (pointer) {
      counter++;
      pointer = pointer.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let pointer = this.head;
    while (pointer && pointer.next) pointer = pointer.next;
    return pointer;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head?.next : null;
  }

  removeLast() {
    switch (this.size()) {
      case 0:
        break;
      case 1:
        this.head = null;
        break;
      default:
        let pointer = this.head;
        let secondLast = this.head;
        while (pointer && pointer.next) {
          secondLast = pointer;
          pointer = pointer.next;
        }
        if (secondLast) secondLast.next = null;
    }
  }

  getAt(index: number) {
    if (index === 0) return this.head;

    let pointer = this.head;
    for (let i = 1; i < index; i++) {
      if (pointer) {
        pointer = pointer.next;
      }
    }
    return pointer !== null ? pointer.next : null;
  }

  removeAt(index: number) {
    if (index == 0) {
      if (this.head) this.head = this.head.next;
      return;
    }

    if (this.size() >= index) {
      let pointer = this.head;
      for (let i = 1; i < index; i++) {
        pointer = pointer?.next ? pointer?.next : null;
      }
      // const previousNode = pointer;
      // const nodeToBeRemoved = pointer.next;
      // const nextNode = nodeToBeRemoved.next;
      if (pointer)
        pointer.next = pointer?.next?.next ? pointer?.next?.next : null;
    }
  }

  insertAt(data: T, index: number) {
    switch (index) {
      case 0: // Insert at start
        this.head = new LLNode(data, this.head);
        break;
      case this.size(): // Insert at end
        let pointer = this.head;
        if (pointer) {
          while (pointer.next) pointer = pointer.next;
          pointer.next = new LLNode(data);
        }
        break;
      default:
        if (index < this.size()) {
          let pointer = this.head;
          for (let i = 1; i < index; i++) {
            pointer = pointer?.next ? pointer?.next : null;
          }
          // Pointer is at index-1 node
          if (pointer) pointer.next = new LLNode(data, pointer.next);
        } else {
          // Index out of bounds inserting at last
          let pointer = this.head;
          if (pointer) {
            while (pointer.next) pointer = pointer.next;
            pointer.next = new LLNode(data);
          }
        }
      // Insert in middle
    }
  }
  forEach(callback: (pointer: LLNode) => void) {
    let pointer = this.head;
    while (pointer) {
      callback(pointer);
      pointer = pointer.next;
    }
  }
  // ROUGH
  traverseLinkedList() {
    let pointer = this.head;
    while (pointer) {
      console.log(pointer);
      pointer = pointer.next;
    }
  }
}
