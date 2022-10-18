/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  // your code here...
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      continue;
    }
    if (string[i] === "e" || string[i] === "E") {
      continue;
    }
    if (string[i] === "i" || string[i] === "I") {
      continue;
    }
    if (string[i] === "o" || string[i] === "O") {
      continue;
    }
    if (string[i] === "u" || string[i] === "U") {
      continue;
    } else {
      newString += string[i];
    }
  }

  return newString;
}
console.log(disemvowel("bootcamp"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
