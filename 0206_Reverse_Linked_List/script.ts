// Definition for singly-linked list.
// namespace TwoOhSix {
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;

  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

function a(head: ListNode): ListNode {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let tempNode = curr.next; //look right
    curr.next = prev; //look left
    prev = curr; //move from right to middle
    curr = tempNode.next; //move from middle to right
  }
  return prev;
}

function reverseList2(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
//}
