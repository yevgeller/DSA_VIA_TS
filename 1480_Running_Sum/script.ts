function runningSum(nums: number[]): number[] {
  if (nums.length === 0) return [];
  if (nums.length === 1) return nums;

  let result = [nums[0]];
  let runningTotal: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    runningTotal += nums[i];
    result.push(runningTotal);
  }
  return result;
}


