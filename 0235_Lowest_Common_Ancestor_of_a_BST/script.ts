//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/2508999/typescript-javascript-dfs-with-comments/

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  return dfs(root, p, q);
}

function dfs(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
  // if any of the values are null, just return the value of root
  if ([root, p, q].includes(null)) return root;

  // if both values are greater than root
  // the LCS is in right subtree
  if (p.val > root.val && q.val > root.val) return dfs(root.right, p, q);

  // if both values are less than root
  // then LCS is in left subtree
  if (p.val < root.val && q.val < root.val) return dfs(root.left, p, q);

  // if there's a split
  // then we found our LCS
  return root;
}
