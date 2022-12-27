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

//----------- second way, Floyd's Tortoise and Hare
function getIntersect(head: ListNode | null): ListNode | null {
  let tortoise = head;
  let hare = head;

  while (hare != null && hare.next != null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise == hare) {
      return tortoise;
    }
  }

  return null;
}

function detectCycle2(head: ListNode | null): ListNode | null {
  if (head == null) return null;

  let intersect = getIntersect(head);
  if (intersect == null) return null;
  let ptr1 = head;
  let ptr2 = intersect;

  while (ptr1 != ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
}
