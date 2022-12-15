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
  let curr = head;
  while (curr != null) {
    arr.push(curr);
    curr = curr.next;
  }
  let 
  let pos = Math.round(arr.length/2);
  console.log(pos);
  return arr[pos];
}
