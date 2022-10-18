/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  // your code here...
  let newWord = "";
  let updatedSentence = sentence.split(" ");
  let newSentence = updatedSentence.join("");

  for (let i = newSentence.length - 1; i >= 0; i--) {
    letter = newSentence[i];
    newWord += letter;
  }

  if (newSentence === newWord) {
    return true;
  } else {
    return false;
  }


}
console.log(isPalindrome("rats live on no evil star"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
