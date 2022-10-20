function isPalindrome(str) {
  let j = str.lgenth - 1;
  for (let i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] === " ") i++;
    if (str[j] === " ") j--;
    if (str[i] !== str[j]) return false;
    j--;
  }
  return true;
}
console.log(isPalindrome("rats live on no evil star"));

function isUniqueAnagram(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }
  for (let index = 0; index < word1.length; index++) {
    //loop
    let char = word1[index];
    if (word2.indexOf(char)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isUniqueAnagram("iceman", "cinema"));
