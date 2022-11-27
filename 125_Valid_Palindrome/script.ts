function isPalindrome(s: string): boolean {
    if (s.trim().length === 0) return true;
    let regex = /[A-Z\d]/;
    //let actualStringFlag: boolean = true;

    let s_char_arr = s.toUpperCase().split('').filter(x => x.match(regex)).join('');
    //console.log(s_char_arr);
    let result = s_char_arr.length > 0 && s_char_arr === s_char_arr.split('').reverse().join('');
    //console.log(s, result);
    return result;
};


isPalindrome('A man, a plan, a canal: Panama');
isPalindrome(".,");