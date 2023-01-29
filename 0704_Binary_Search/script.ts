function search(nums: number[], target: number): number {
let min = 0;
let border = nums.length / 2;

if(nums[border] == target) return border;
if(nums[border]<target)
{
    return look(nums, target, border, nums.length);
} else {
    return look(nums, target, 0, border);
}

return look(nums, target, min, max);

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