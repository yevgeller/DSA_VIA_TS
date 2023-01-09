/**
 * Definition for node.*/
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
  while (!stack.length) {
    let node: Node = stack.pop();
    output.push(node.val);
  }
  return output;
}
