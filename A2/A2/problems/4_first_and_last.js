/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/

function firstAndLast(array) {
  // your code here...
  var sum = 0;
  var dif = 0;

  // console(array.length % 2 === 0)
  //console.log(array[1])
  if (array.length % 2 === 0) {
    //even number of elements
    //console.log(sum = array[0] + array [-1])
    return array[0] + parseInt(array.slice(-1));
  } else {
    //odd number of elements

    return array[0] - parseInt(array.slice(-1));
  }
}

console.log(firstAndLast([2, 4, 6, 8, 10]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
