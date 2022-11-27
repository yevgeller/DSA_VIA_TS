function isPalindrome(s) {
    var counterFromBeginningToEnd = 0;
    var counterFromEndToBeginning = s.length - 1;
    var regex = /[A-Z]/;
    //let actualStringFlag: boolean = true;
    for (; counterFromBeginningToEnd < counterFromEndToBeginning; counterFromBeginningToEnd++, counterFromEndToBeginning--) {
        while (!s[counterFromBeginningToEnd].toUpperCase().match(regex) && counterFromBeginningToEnd < counterFromEndToBeginning) {
            counterFromBeginningToEnd++;
        }
        while (!s[counterFromEndToBeginning].toUpperCase().match(regex)) {
            counterFromEndToBeginning--;
        }
        if (s[counterFromBeginningToEnd].toUpperCase() != s[counterFromEndToBeginning].toUpperCase()) {
            return false;
        }
        //  actualStringFlag = true;
    }
    return true; // actualStringFlag && true;
}
;
isPalindrome(".,");
//# sourceMappingURL=script.js.map