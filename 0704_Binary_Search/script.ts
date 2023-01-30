function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  if (nums.length === 1 && target === nums[0]) return 0;
  return searchTwo(nums, target, 0, nums.length);
}

function searchTwo(
  nums: number[],
  target: number,
  min: number,
  max: number
): number {
  if (max >= min && nums[min] !== target) return -1;
  let mid = Math.floor((max - min) / 2) + min - 1;

  if (nums[mid] == target) {
    return mid;
  } else if (nums[mid] < target) {
    return searchTwo(nums, target, mid + 1, max);
  } else {
    return searchTwo(nums, target, min, mid - 1);
  }
}

search([-1, 0, 3, 5, 9, 12], 9);
