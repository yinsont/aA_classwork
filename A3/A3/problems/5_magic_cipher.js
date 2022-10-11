/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher) {
  // your code here...
  let newSen = ""; //new sentence
  // console.log(sentence);
  // console.log(cipher);
  for (let i = 0; i < sentence.length; i++) {
    //loop  through old sentence
    let char = sentence[i]; //let character equal letter in old sentence
    // console.log(`char = ${char}`);
    // console.log(cipher[char]);
    if (char in cipher) {
      //if character in old sentence is in the cihper
      newSen += cipher[char]; //place new character from cipher in new sentence
    } else {
      newSen += char; // if character in old sentence is not on cipher, just add character to new sentence
    }
  }
  return newSen;
}

console.log(magicCipher("add me on facebook", { a: "c", d: "q" }));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
