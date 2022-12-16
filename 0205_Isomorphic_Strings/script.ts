function isIsomorphic(s: string, t: string): boolean {
  let s_arr = Array.from({ length: 256 }, (a, b) => -1);
  let t_arr = Array.from({ length: 256 }, (a, b) => -1);

  for (let i = 0; i < s.length; i++) {
    let cs = s[i].charCodeAt(0);
    let ct = t[i].charCodeAt(0);
    console.log(cs, ct);
    if (s_arr[cs] === -1 && t_arr[ct] === -1) {
      s_arr[cs] = ct;
      t_arr[ct] = cs;
    } else if (!(s_arr[cs] == ct && t_arr[ct] == cs)) {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic("add", "egg"));
