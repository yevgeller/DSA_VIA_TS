function search(nums, target) {
    if (nums.length === 0)
        return -1;
    if (nums.length === 1 && target === nums[0])
        return 0;
    var left = 0, right = nums.length;
    while (left <= right) {
        var mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] == target)
            return mid;
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
