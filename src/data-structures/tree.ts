export class TNode {
  data: any;
  children: any[];
  constructor(data: any, children: any[]) {
    this.data = data;
    this.children = children;
  }
}

export default class Tree {
  root: TNode | null;

  constructor(root: TNode | null = null) {
    this.root = root;
  }

  traverseBf(iteratorMethod: (node: TNode) => void) {
    let arr = [this.root];
    while (arr.length) {
      const node: TNode = arr.shift()!;
      arr.push(...node.children);
      iteratorMethod(node);
    }
  }

  traverseDf(iteratorMethod: (node: TNode) => void) {
    let arr = [this.root];
    while (arr.length) {
      const node: TNode = arr.shift()!;
      arr.unshift(...node.children);
      iteratorMethod(node);
    }
  }
}
