function isSubsequence(s, t) {
    var pointerS = 0;
    var pointerT = 0;
    while (pointerT < t.length) {
        if (t[pointerT] === s[pointerS]) {
            pointerT++;
            pointerS++;
        }
        pointerT++;
    }
    return pointerS === s.length;
}
isSubsequence("abc", "ahbgdc");
//# sourceMappingURL=script.js.map