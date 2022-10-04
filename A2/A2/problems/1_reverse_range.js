/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

 => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  let array = [];
  // your code here...
  for (let i = end - 1; i > start; i -- ){
    // i = 4
    array.push(i)
    //console.log(i)
  }
  return array
}
let result = reverseRange(2,7)
console.log(result)

console.log(reverseRange(2,7))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
