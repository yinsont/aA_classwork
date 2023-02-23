//Given an integer x, return true if x is a palindrome, and false otherwise.

function palindromeNum(int) {
  let intStr = int.toString();
  let newStr = "";
  for (let i = intStr.length - 1; i >= 0; i--) {
    newStr += intStr[i];
  }
//   if (newStr !== intStr) ? return true : return false
//   return(newStr);
  if (newStr !== intStr){
    return false
  } else {
    return true
  }
}

console.log(palindromeNum(121));
console.log(palindromeNum(-121));
console.log(palindromeNum(10));
