function isValid(s) {
    if (s.length % 2 !== 0)
        return false;
    var input = s.split('');
    var flag = true;
    var stack = [];
    for (var i = 0; i < input.length; i++) {
        if ('({['.indexOf(input[i]) >= 0) {
            stack.push(input[i]);
        }
        else {
            var lastOnStack = stack.pop();
            var compareTo = getOpeningParen(input[i]);
            if (lastOnStack !== compareTo)
                return false;
        }
    }
    return true;
}
;
function getOpeningParen(input) {
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
