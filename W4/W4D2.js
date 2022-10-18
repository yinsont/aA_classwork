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
