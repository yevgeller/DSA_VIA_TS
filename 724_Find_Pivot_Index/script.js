function pivotIndex(nums) {
    if (nums.length === 0)
        return -1;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log("sum", sum);
    var leftSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        console.log(i, "i", "leftSum", leftSum, "nums[i]", nums[i], "equation", sum - nums[i] - leftSum);
        if (leftSum == sum - nums[i] - leftSum)
            return i;
        leftSum += nums[i];
    }
    return -1;
}
//console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(this.pivotIndex([2, 1, -1]));
//# sourceMappingURL=script.js.map