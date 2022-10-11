/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  // your code here...

  let words = sentence.split(" ");
  let answer = words[0]; //set answer to current first word

  for (let i = 0; i < words.length; i++) {
    //loop
    if (answer.length <= words[i].length) {
      //if finds a bigger word during loop
      answer = words[i]; //reassign the answer w/ the new bigger word
    }
  }
  return answer;
  // return longestWord;
  // return newSentence;
}

console.log(longestWord("hate having hungry hippos"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
