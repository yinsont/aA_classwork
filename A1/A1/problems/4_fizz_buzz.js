/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:


*******************************************************************************/
console.log(fizzBuzz(20)) //=> [3, 5, 6, 9, 10, 12, 18]
function fizzBuzz(max) {
  let arr = [];
  for (let i = 3; i < max; i++){
    if ((i % 3 === 0 || i % 5 === 0)  //if number contains factors of 3 or 5
        && !(i % 3 === 0 && i % 5 === 0)) { //and not both 3 and 5
      arr.push(i); //then push
    }
  }
  return(arr)
}
  // your code here...
//run a loop that goes through every digit between 0 and the given max
//if the number is divisable by 3 or 5, put into array
//if number does not have a factor of 3 or 5 or both, do not add to array


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
