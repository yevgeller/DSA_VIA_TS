/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoListsRecursively(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 == null) return l2;
  else if (l2 == null) return l1;
  else if (l1.val < l2.val) {
    l1.next = mergeTwoListsRecursively(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsRecursively(l2.next, l1);
    return l2;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let prehead = new ListNode(-1);

  let prev = prehead;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 == null ? l2 : l1;

  return prehead.next;
}
