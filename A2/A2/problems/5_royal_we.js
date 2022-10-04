/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  words = sentence.split(" ");
  words2 = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i]; //if sees certain word in old array, place new word in new array

    if (word === "I") {
      words2.push("we");
    } else if (word === "mine") {
      words2.push("ours");
    } else if (word === "me") {
      words2.push("us");
    } else if (word === "my") {
      words2.push("our");
    } else {
      words2.push(word);
    }
  }
  return words2.join(" ");
}
// sentence.replace('I', 'we'),('mine','ours'),('my','our'),('me','us')

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
