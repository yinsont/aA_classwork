/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  let newArr = []; // [1,2, 3]
  for (let i = 0; i < array.length; i ++){ //cycle through original array
    // 0 -> 4 -> i = 4
    // element => array[4] => 3
    if (newArr.indexOf(array[i]) === -1){ // if the number is not in our new array, add it
        newArr.push(array[i])
    }
  }
  return newArr
 
  // your code here...
  //use ? to compare 2 seperate elements on an array
// if indexOf element && element
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
