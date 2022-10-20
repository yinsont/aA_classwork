//* Recursion
//* a function calls itself within itself must have 2 below
//* Base Case - (what is the smallest possible case?)
//* Recursive Case - (AKA The inductive step)
//* Inductive Step - the problem redefined in terms of itself but on a smaller input

//*whatever can be done recursively CAN be done iterately (you can do loop)
//! Why Recursion
//! Teaches a different way of thinking(relating big problems to subProblems),
//! short and elegant code

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));

// function multiply(num1, num2) {
//   if (num1 === 1) return num2; //
//   return num2 + multiply(num1 - 1, num2);
// }
// console.log(multiply(2, 3));

// function isPalindrome(str) {
//   if (str.length <= 1) return false;
//   let i = str[0] === "" ? 1 : 0;
//   let j = str[str.length - 1] === "" ? str.length - 2 : str.length - 1;
//   if (str[i] !== str[j]) return false;
//   return isPalindrome(str.slice(i + 1, j));
// }

// const fib = (n) => {
//   if (n === 1 || n === 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(90));
