/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
  let arrRange = [];
  for (i = start; i <= end; i++) {
    //find a way to get this loop working
    //console.log (i);
    arrRange.push(i);
  }
  return arrRange;
}

// console.log(range(1,4));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
