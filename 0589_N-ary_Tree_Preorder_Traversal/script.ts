/**
 * Definition for node.*/
namespace FiveEightyNine {
  class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
      this.children = [];
    }
  }

  //*/
  function preorder(root: Node | null): number[] {
    let stack: Array<Node> = [];
    let output: Array<number> = [];
    if (root == null) return output;
    stack.push(root);
    while (stack.length) {
      let node = stack.pop();
      output.push(node.val);
      node.children.reverse();
      node.children.forEach((x) => stack.push(x));
    }
    return output;
  }

  let ch1: Node = new Node(3);
  let ch2: Node = new Node(2);
  let ch3: Node = new Node(4);
  let pa: Node = new Node(1);
  pa.children = [ch1, ch2, ch3];
  console.log(preorder(pa));
}
