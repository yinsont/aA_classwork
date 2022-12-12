function lastIndex(str, char) {
    for (let i = -1; i < str.length; i--){
      if (str[i].includes(char)){
        return i
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7