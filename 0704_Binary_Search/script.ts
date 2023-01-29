function search(nums: number[], target: number): number {
let min = 0;
let max = nums.length / 2;
look(nums, target, min, max);

  return -1;
}

function look(nums: number[], target: number, min: number, max: number): number {
if(nums[max] == target) return max;
if(nums[max] > target) {
    min = 0; 
    max = max / 2;
    look(nums, target, min, max);
} else {
    min = max+1;
    max = 
}

}