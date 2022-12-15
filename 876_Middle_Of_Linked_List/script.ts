// public ListNode middleNode(ListNode head) {
//         ListNode slow = head, fast = head;
//         while (fast != null && fast.next != null) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow;
//     }

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function middleNode2(head: ListNode | null): ListNode | null {
  let arr = [];
  arr.push(null);
  let curr = head;
  while (curr != null) {
    arr.push(curr);
    curr = curr.next;
  }
  let len = arr.length;
  let pos = Math.round(len / 2);
  console.log("len:", len, ", mid: ", pos);
  return arr[pos];
}
