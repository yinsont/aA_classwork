// Scope

// let name = "Bob";

// function foo() {
//   //looks for variable:name within function
//   console.log(name);
// }

// function foo2() {
//   let test1 = "this";
//   for (let i = 0; i < 3; i++) {
//     console.log(test1);
//     let bar2 = "other";
//   }
//   console.log(bar2);  //bar2 not defined cause it was defined within the for loop
// }
// foo2();

let food = "pizza";
function outer() {
  let food = "sushi";
  function inner() {
    let food = "banana";
    console.log(food);
  }
  inner();
  console.log(food);
}
outer();
console.log(food);

//first defines pizza, then activated outer function, outer function activates inner function
//which is why banana is log'd first and then sushi, then pizza

//----------------------------------------------------------------------------------------------------

// Hoisting

//can be thought of as proof reading your code and moving all you definded functions to the top of your code

// console.log(bar);

// let bar = () => {
//   console.log("food");
// };
// bar();

//ES5 = function, var (for var, you have to console log it after)
//ES6 = let, const
