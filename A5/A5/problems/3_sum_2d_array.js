/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/
var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
function sum2DArray(array) {
  // your code here...
  let sum = 0;


  for (let i = 0; i < array.length; i++){
    let subArray = array[i];  //when log'd [i] will print the array, so we loop again through that subarray
    for (let j = 0; j < subArray.length; j++){
      sum += array[i][j] //go into the specific array and subarray
    }
  }
  return sum
}
console.log(sum2DArray(arr2));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sum2DArray;
