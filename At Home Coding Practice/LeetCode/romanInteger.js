function romanToInt(string) {
  let count = 0;
  let romNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < string.length; i++) {
    count += romNum[string[i]];
    let current = string[i]
    let next = string[i + 1]
    if ((current === 'I') && (next === 'V')){
        count += 4
    } else if ((current === 'I') && (next === 'V')){
        count += 9
    } else if ((current === 'X') && (next === 'L')){
        count += 40
    } else if ((current === 'X') && (next === 'C')){
        count += 90
    } else if ((current === 'C') && (next === 'D')){
        count += 400
    } else if ((current === 'C') && (next === 'M')){
        count += 900
    }
  }
  return count;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
