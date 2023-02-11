/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  let stack: any[] = [];

  let current: any | null = root;
  let prev: any | null = null;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (prev !== null && current.val <= prev.val) return false;
    prev = current;
    current = current.right;
  }
  return true;
}

function isValidBST2(root: TreeNode | null): boolean {
  //https://leetcode.com/problems/validate-binary-search-tree/solutions/2962697/typescript-solution-without-recursion/
  if (!root) return true;
  let queue = [{ node: root, min: null, max: null }];
  while (queue[0]) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const { node, min, max } = queue.shift();
      if (min !== null && min >= node.val) return false;
      if (max !== null && max <= node.val) return false;
      node.left && queue.push({ node: node.left, min, max: node.val });
      node.right && queue.push({ node: node.right, min: node.val, max });
    }
  }

  return true;
}

//https://leetcode.com/problems/validate-binary-search-tree/solutions/783930/easy-to-understand-2-lines-solution-o-n-with-examples-and-explanation-javascript/
function isValidBST3(
  root: TreeNode | null,
  min = -Infinity,
  max = Infinity
): boolean {
  if (!root) return true;
  return (
    !(root.val <= min || root.val >= max) &&
    isValidBST3(root.left, min, root.val) &&
    isValidBST3(root.right, root.val, max)
  );
}
