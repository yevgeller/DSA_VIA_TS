function isPalindrome(s: string): boolean {
    let counterFromBeginningToEnd: number = 0;
    let counterFromEndToBeginning: number = s.length - 1;
    let regex = /[A-Z]/;
    //let actualStringFlag: boolean = true;

    for (; counterFromBeginningToEnd < counterFromEndToBeginning; counterFromBeginningToEnd++, counterFromEndToBeginning--) {
        while (!s[counterFromBeginningToEnd].toUpperCase().match(regex) && counterFromBeginningToEnd < counterFromEndToBeginning) { counterFromBeginningToEnd++; }
        while (!s[counterFromEndToBeginning].toUpperCase().match(regex) && counterFromEndToBeginning > counterFromBeginningToEnd) { counterFromEndToBeginning--; }


        if (s[counterFromBeginningToEnd].toUpperCase() != s[counterFromEndToBeginning].toUpperCase()) {
            return false;
        }

        //  actualStringFlag = true;
    }

    return true; // actualStringFlag && true;
};

isPalindrome(".,");