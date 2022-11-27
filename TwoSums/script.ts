function twoSum(nums: number[], target: number): number[] {
    let numbersMap = new Map(); //<number, number>();
    nums.forEach((x, index) => {
        console.log(`Setting value ${x} at index ${index}`);
        numbersMap.set(x, index)
    });
    let result = [];

    numbersMap.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    });
    let done = false;
    nums.forEach((x, index) => {
        if (!done) {
            let complement = target - x;

            if (numbersMap.has(complement) && numbersMap.get(complement) !== index) {
                console.log(`checking ${x} an index ${index}, for complement of ${complement}`);
                //console.log(numbersMap.get(complement), index);
                result.push(index);
                result.push(numbersMap.get(complement));
                done = true;
            }
        }
    });

    return result;
}

console.log('twoSum([2, 7, 11, 17], 9)');
let result = twoSum([2, 7, 11, 17], 9);
console.log(`RESULT: ${result}`);

console.log('twoSum([3, 2, 4], 6);');
result = twoSum([3, 2, 4], 6);
console.log(`RESULT: ${result}`);

console.log('-------------------------');
console.log('twoSum([3, 3], 6);');
result = twoSum([3, 3], 6);
console.log(`RESULT: ${result}`);
