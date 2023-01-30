function search(nums: number[], target: number): number {
  return searchTwo(nums, target, 0, nums.length);
}

function searchTwo(
  nums: number[],
  target: number,
  min: number,
  max: number
): number {
  debugger;
  let mid = (max - min) / 2;

  if (nums[mid] == target) return mid;

  if (nums[mid] < target) return searchTwo(nums, target, mid + 1, max);

  return searchTwo(nums, target, min, mid - 1);
}

search([-1, 0, 3, 5, 9, 12], 9);
