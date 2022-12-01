function pivotIndex(nums: number[]): number {
  if (nums.length === 0) return -1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let leftSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - nums[i] - leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));