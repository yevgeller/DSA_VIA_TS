function longestPalindrome(s: string): number {
  if (s.length <= 1) return s.length;
  let chars = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (chars.has(key)) {
      let val = chars.get(key);
      chars.set(key, val++);
    } else {
      chars.set(key, 1);
    }
  }

  let ans = 0;
  for (let entry of Array.from(chars.entries())) {
    let key = entry[0];
    let value = entry[1];
    ans += (value % 2) * 2;
    if (ans % 2 === 0 && value % 2 === 1) ans += 1;
  }

  // map.set(key, value) – adds a new entry in the Map.
  // map.get(key) – retrieves the value for a given key from the Map.
  // map.has(key) – checks if a key is present in the Map. Returns true or false.
  // for (let [key, value] of nameAgeMapping) {
  //     console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
  // }
  return ans;
}

longestPalindrome("abccccdd");