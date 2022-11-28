function isPalindrome(s: string): boolean {
    let regex = /[A-Z\d]/;
    let s_char_arr = s.toUpperCase().replace('.', '').replace(',', '').replace('!', '').replace(':', '').split('').filter(x => x.match(regex)).join('');
    //console.log(s_char_arr);
    let result = s_char_arr === s_char_arr.split('').reverse().join('');
    //console.log(s, result);
    // if (!result && (s.trim().length === 0 ||
    //     s.trim() === ".," ||
    //     s.trim() === "!!!")) return true; //how are these tests alphanumeric?
    return result;
};


isPalindrome('A man, a plan, a canal: Panama');
isPalindrome(".,");