function isIsomorphic(s, t) {
    var s_arr = Array.from({ length: 256 }, function (a, b) { return -1; });
    var t_arr = Array.from({ length: 256 }, function (a, b) { return -1; });
    for (var i = 0; i < s.length; i++) {
        var cs = s[i].charCodeAt(0);
        var ct = t[i].charCodeAt(0);
        console.log(cs, ct);
        if (s_arr[cs] === -1 && t_arr[ct] === -1) {
            s_arr[cs] = ct;
            t_arr[ct] = cs;
        }
        else if (!(s_arr[cs] == ct && t_arr[ct] == cs)) {
            return false;
        }
    }
    return true;
}
console.log(isIsomorphic("add", "egg"));
//# sourceMappingURL=script.js.map