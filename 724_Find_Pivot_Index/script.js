function pivotIndex(nums) {
    if (nums.length === 0)
        return -1;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    var leftSum = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (leftSum == sum - nums[i] - leftSum)
            return i;
        leftSum += nums[i];
    }
    return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
//# sourceMappingURL=script.js.map