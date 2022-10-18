/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2) {
  // your code here...
  let newArray = [];
  for (let i = 1; i < max; i++) {
    //console.log(i);
    if (
      (i % num1 === 0 || i % num2 === 0) &&
      !(i % num1 === 0 && i % num2 === 0)
    ) {
      newArray.push(i);
    }
  }
  return newArray;
}

// console.log(dynamicFizzBuzz(20, 5, 3));
console.log(dynamicFizzBuzz(20, 4, 6));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
