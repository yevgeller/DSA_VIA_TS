function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  if (nums.length === 1 && target === nums[0]) return 0;
  let left = 0,
    right = nums.length;
  while (left <= right) {
    debugger;
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] == target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
  }
}

search([-1, 0, 3, 5, 9, 12], 9);
