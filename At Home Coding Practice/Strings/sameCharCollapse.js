function sameCharCollapse(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2, str.length);
      i = 0;
    }
  }
  return str;
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
console.log(7%25)