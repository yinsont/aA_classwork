/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
  // your code here...
  let words = sentence.split(" ");
  let newSent = [];

  for (let word of words) {
    newSent.push(removeVowel(word));
  }
  return newSent.join(" ");
}
function removeVowel(word) {
  let vowels = "aeiou";
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
}
//for each letter in the sentence, let it loop through vowels to see if any match
//if theres a match, remove that vowel
//return it
console.log(hipsterfy("proper"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
