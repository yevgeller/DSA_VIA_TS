function search(nums: number[], target: number): number {
    return look2(nums, target, 0, nums.length);

// let middle = nums.length / 2;

// if(nums[middle] == target) return middle;
// if(nums[middle]<target)
// {
//     return look(nums, target, middle, nums.length);
// } else {
//     return look(nums, target, 0, middle);
// }


}

function look2(nums: number[], target: number, min: number, max: number): number {

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