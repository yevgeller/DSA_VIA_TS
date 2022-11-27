function twoSum(nums, target) {
    var numbersMap = new Map(); //<number, number>();
    nums.forEach(function (x, index) {
        console.log("Setting value ".concat(x, " at index ").concat(index));
        numbersMap.set(x, index);
    });
    var result = [];
    // console.log('loaded map');
    numbersMap.forEach(function (value, key) {
        console.log("".concat(key, " = ").concat(value));
    });
    var done = false;
    nums.forEach(function (x, index) {
        if (!done) {
            var complement = target - x;
            console.log("checking ".concat(x, " an index ").concat(index, ", for complement of ").concat(complement));
            if (numbersMap.has(complement) && numbersMap.get(complement) !== index) {
                console.log(numbersMap.get(complement), index);
                result.push(index);
                result.push(numbersMap.get(complement));
                done = true;
                //return [index, numbersMap.get(complement)];
            }
        }
    });
    return result;
}
console.log('twoSum([2, 7, 11, 17], 9)');
var result = twoSum([2, 7, 11, 17], 9);
console.log("RESULT: ".concat(result));
console.log('twoSum([3, 2, 4], 6);');
result = twoSum([3, 2, 4], 6);
console.log("RESULT: ".concat(result));
console.log('-------------------------');
console.log('twoSum([3, 3], 6);');
result = twoSum([3, 3], 6);
console.log("RESULT: ".concat(result));
