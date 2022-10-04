/*******************************************************************************
Write a function stringRange(min, max, step) that takes in 3 numbers as parameters
The function should return a string containing all numbers between `min` and `max`
at `step` intervals concatenated together.

Examples:

stringRange(0, 12, 2) => '024681012'
stringRange(3, 20, 5) => '381318'
*******************************************************************************/

function stringRange(min, max, step) {
  // your code here...
  let str = '';
  for (let i = min; i <= max; i += step){
    //console.log(i) 
    str += i; //string concatimation
  }
  //turn into string and combine
  return str
}

//stringRange(0,12,2)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = stringRange;
