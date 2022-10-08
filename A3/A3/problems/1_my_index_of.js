/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

function myIndexOf(array, ele) {
  // your code here...
  //loop through array
  //as you loop, check to see if ele is within that element
  for (let i = 0; i <= array.length; i++) {
    //console.log(i);
    //console.log(array[i]);
    if (i === array.length) {
      return -1;
    }
    if (array[i] === ele) {
      return i;
    } else {
      continue;
    }
  }
}

console.log(myIndexOf([1, 2, 3, 4, 5], 1));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
