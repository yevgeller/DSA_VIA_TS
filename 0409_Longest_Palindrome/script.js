function longestPalindrome(s) {
    if (s.length <= 1)
        return s.length;
    var chars = new Map();
    for (var i = 0; i < s.length; i++) {
        var key = s[i];
        if (chars.has(key)) {
            var val = chars.get(key);
            chars.set(key, ++val);
        }
        else {
            chars.set(key, 1);
        }
    }
    var ans = 0;
    for (var _i = 0, _a = Array.from(chars.entries()); _i < _a.length; _i++) {
        var entry = _a[_i];
        var key = entry[0];
        var value = entry[1];
        ans += (Math.floor(value / 2)) * 2;
        if (ans % 2 === 0 && value % 2 === 1)
            ans += 1;
    }
    return ans;
}
console.log(longestPalindrome("abccccdd"));
