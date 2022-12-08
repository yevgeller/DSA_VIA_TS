function isSubsequence(s: string, t: string): boolean {
  let pointerS: number = 0;
  let pointerT: number = 0;

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
