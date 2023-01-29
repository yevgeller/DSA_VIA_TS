function search(nums: number[], target: number): number {
let min = 0;
let max = nums.length / 2;
if(nums[max] == target) return max;
if(nums[max] > target) {
    min = 0; 
    max = max / 2;
    look(nums, min, max);
} else {
    min = max+1;
    max = 
}

  return -1;
}

function look(nums: number[], min: number, max: number): number {


}