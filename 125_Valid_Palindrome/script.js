function isPalindrome(s) {
    var regex = /[A-Z\d]/;
    var s_char_arr = s.toUpperCase().replace('.', '').replace(',', '').replace('!', '').replace(':', '').split('').filter(function (x) { return x.match(regex); }).join('');
    var result = s_char_arr === s_char_arr.split('').reverse().join('');
    return result;
}
;
function isPali2(s) {
    var fromEnd = s.length;
    var fromBeginning = 0;
    var regex = /[A-Z\d]/;
    var i = false;
    for (; fromEnd > fromBeginning; fromEnd--, fromBeginning++) {
        while (!s[fromEnd].match(regex) && fromEnd > fromBeginning) {
            fromEnd--;
        }
        while (!s[fromBeginning].match(regex) && fromBeginning < fromEnd) {
            fromBeginning++;
        }
        if (s[fromBeginning].toUpperCase() != s[fromEnd].toUpperCase())
            return false;
        i = true;
    }
    return i && true;
}
isPali2('A man, a plan, a canal: Panama');
isPalindrome(".,");
//# sourceMappingURL=script.js.map