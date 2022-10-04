/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  // your code here...

  let arr = sentence.split(' ')  //converts sentence to array
  let newArr = []; //make new array w/ nothing
  for (let i = 0; i < arr.length; i++){ //cycle through each index
    //console.log(arr[i])
    newArr.unshift(arr[i]); //bring back but from the front in new array
  }
  return newArr.join(' ') //returns final new array into string
}
  

reverseSentence('Please reverse this sentence')

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
