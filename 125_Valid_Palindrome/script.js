function isPalindrome(s) {
    var regex = /[A-Z]/;
    var s_char_arr = s.toUpperCase().split('').filter(function (x) { return x.match(regex); }).join('');
    var result = s_char_arr.length > 0 && s_char_arr === s_char_arr.split('').reverse().join('');
    console.log(s, result);
    return result;
}
;
isPalindrome('A man, a plan, a canal: Panama');
isPalindrome(".,");
//# sourceMappingURL=script.js.map