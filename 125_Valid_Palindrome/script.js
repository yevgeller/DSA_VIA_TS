function isPalindrome(s) {
    var regex = /[A-Z\d]/;
    var s_char_arr = s.toUpperCase().replace('.', '').replace(',', '').replace('!', '').split('').filter(function (x) { return x.match(regex); }).join('');
    //console.log(s_char_arr);
    var result = s_char_arr === s_char_arr.split('').reverse().join('');
    //console.log(s, result);
    // if (!result && (s.trim().length === 0 ||
    //     s.trim() === ".," ||
    //     s.trim() === "!!!"))
    //     return true; //how are these tests alphanumeric?
    return result;
}
;
isPalindrome('A man, a plan, a canal: Panama');
isPalindrome(".,");
//# sourceMappingURL=script.js.map