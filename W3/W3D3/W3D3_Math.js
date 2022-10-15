// Math.floor(3.7); // => 3      Rounds DOwn
// Math.ceil(4.2) // => 5   Rounds Up
// Math.round(3.8) // => 4    Round
// Math.sqrt(25) // => 5     Square Root
// Math.abs(-3.2) // => 3.2   Absolute Value
// Math.pow(5, 3) // => 125      5 raised to the 3rd power
// Math.PI // => 3.141592653589793    Pi

// function areaCircle(radius) {
//   let area = Math.PI * Math.pow(radius, 2);
//   return Math.floor(area);
// }

// console.log(areaCircle(5));

function weirdSqrt(num) {
  return Math.floor(Math.sqrt(num)) * Math.PI;
}

// --------------------------------------------------------------

//Higher Order Functions - a function that takes other functions as
//       arguments and returns functions

//Callback Functions - a function thats passed as an arguement to another function

//-------------------------------------------------------------------------------

// let arr = [1,2,3,4,5]

// arr.forEach(function(element, index, array))
//will always be in (elements, index, array) order
// .forEach - for each element, mutates the array you gave

// -------------------------------------------------------------------------------

// let names = ['alice', 'bob', 'carol']

// names.map(function(element, index))
// .map returns a new array with the changes you told it to make

//----------------------------------------------------------------------------------

// let nums = [1,2,3,4,5]
// nums.filter(function(ele,i){
//   return ele % 2 === 0;
// }

// *Highlight even now?
// !errors and warnings
// ?questions
// //  strickthroughs
// TODO to dos

// let nums = [1, 2, 3, 4, 5];
// let newNums = nums.map(function (ele, i) {
//   return ele * 0;
// });
// console.log(newNums);

// let arr = ["alice", "bob", "carol"];
// let newArr = arr.map(function (ele, i) {
//   return ele + ele;
// });
// console.log(newArr);

// let nums = [1, 2, 3, 4, 5];

// let doubles = nums.map((ele) => ele * 2);
// let evens = nums.map((ele) => ele % 2 === 0);

// console.log(doubles);
// console.log(evens);
