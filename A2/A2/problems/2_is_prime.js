/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

function isPrime(number) {
  // your code here...
  let factors = [];

  for (let i = 0; i <= number; i ++){ //go through every number

    if (number % i === 0){  // check if the number is a factor, if so -> push
      factors.push(i);
    }  
  }

  if (factors.length != 2){ //if not only 2 factors, determine if prime
    return false

  }else{
    return true
  }
}  
let result = isPrime(7)
console.log(result)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
