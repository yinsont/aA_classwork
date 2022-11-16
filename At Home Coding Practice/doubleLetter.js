function hasDoubleLetter(input) {
  if (typeof input === 'string') {
    return consLetter(input);
  } else {
    return null;
  }
}

function consLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]){
      return true;
    }
  }
  return false
}

console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null
