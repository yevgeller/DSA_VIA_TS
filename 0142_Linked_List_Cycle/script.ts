function detectCycle(head: ListNode | null): ListNode | null {
  let visited = new Set<ListNode>();
  let node = head;
  while (node != null) {
    if (visited.has(node)) {
      return node;
    }

    visited.add(node);
    node = node.next;
  }

  return null;
}
