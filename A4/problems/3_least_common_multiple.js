/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  // your code here...
  let multiple = 0;

  while (true) {
    multiple += 1;
    if (multiple % num1 === 0 && multiple % num2 === 0) {
      return multiple;
    }
  }
}

console.log(leastCommonMultiple(24, 26));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
