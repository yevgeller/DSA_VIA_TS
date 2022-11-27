function isPalindrome(s) {
    if (s.trim().length === 0)
        return true;
    var regex = /[A-Z\d]/;
    //let actualStringFlag: boolean = true;
    var s_char_arr = s.toUpperCase().split('').filter(function (x) { return x.match(regex); }).join('');
    //console.log(s_char_arr);
    var result = s_char_arr.length > 0 && s_char_arr === s_char_arr.split('').reverse().join('');
    //console.log(s, result);
    return result;
}
;
isPalindrome('A man, a plan, a canal: Panama');
isPalindrome(".,");
//# sourceMappingURL=script.js.map