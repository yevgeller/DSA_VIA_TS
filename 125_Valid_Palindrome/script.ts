function isPalindrome(s: string): boolean {
    let regex = /[A-Z\d]/;
    let s_char_arr = s.toUpperCase().replace('.', '').replace(',', '').replace('!', '').replace(':', '').split('').filter(x => x.match(regex)).join('');
    let result = s_char_arr === s_char_arr.split('').reverse().join('');
    return result;
};


function isPali2(s: string): boolean {
    let regex = /[A-Z\d]/;
    if (s.trim().length === 0) return true;

    if (s.length === 1) {
        if (s[0].toUpperCase().match(regex)) return true;
        if (s === '.') return true;
    }
    let fromEnd = s.length - 1;
    let fromBeginning = 0;
    let i = false;
    for (; fromEnd > fromBeginning; fromEnd--, fromBeginning++) {
        while (!s[fromEnd].toUpperCase().match(regex) && fromEnd > fromBeginning) {
            fromEnd--;
        }
        while (!s[fromBeginning].toUpperCase().match(regex) && fromBeginning < fromEnd) {
            fromBeginning++;
        }
        if (s[fromBeginning].toUpperCase() != s[fromEnd].toUpperCase()) return false;
        i = true;
    }
    return i && true;
}

isPali2('A man, a plan, a canal: Panama');
isPalindrome(".,");