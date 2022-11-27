function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;
    let input = s.split('');
    let flag: boolean = true;
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        // if ('({['.indexOf(input[i]) >= 0) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
            stack.push(input[i]);
        } else {
            let lastOnStack = stack.pop();
            let compareTo = getOpeningParen(input[i]);
            if (lastOnStack !== compareTo) return false;
        }
    }
    return stack.length === 0 ? true : false;
};

function getOpeningParen(input: string): string {
    switch (input) {
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
        default:
            return '-';
    }
}


// let test: string;
// test = '()';
// console.log(test, isValid(test));
// test = '()[]{}';
// console.log(test, isValid(test));
// test = '(]';
// console.log(test, isValid(test));
// test = '([{}])';
// console.log(test, isValid(test));
console.log('((', isValid('(('));

