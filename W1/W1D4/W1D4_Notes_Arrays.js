//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/*
var alphabet = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",  
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z"
  ];
//more readable version
//array are mutable, meaning they can be mutated/altered

console.log(alphabet [0]); //output would be the first string within the array

console.log(alphabet[alphabet.length - 2]); //asks for the 2nd to last string of the array

console.log(alphabet[30]); //comes out underfinded because there is no 30th string within array

//--------------------------------------------------------------------------------------------------------
// const - variable that cannot be changed

const fruits = ['Pineapple', 'Mango', 'Strawberry', 'Apple', 'Banana', 'Orange', 'Peach'];
const newLength = fruits.push('Watermelon'); //adds a new string to the end of the array
console.log(fruits); //prints the array
console.log(fruits.length); //prints length ofarray

//------------------------------------------------------------------------------------------------
const removedItem = fruits.pop(); //removes the last string in array (watermelon)
console.log(fruits);

//-------------------------------------------------------------------------------------------------
const start = -3; //set a new variable
const removedItems = fruits.splice(start); //splice cuts off variables from set position, in this case, everything after apple
console.log(fruits); 
console.log(removedItems); //prints the array of strings that have been cut off 

//-----------------------------------------------------------------------------------------------------
const shiftedItem = fruits.shift(); //removes first string from array
console.log(shiftedItem);
console.log(fruits);
console.log(fruits.length);

//---------------------------------------------------------------------------------------------------
const newLength2 = fruits.unshift('Grape'); //adds a string to the front/first of the array
console.log(fruits);
*/
//---------------------------------------------------------------------------------------------
let arr = ['hi', 10, 9, true, undefined, null, [1,2]];
console.log(arr)
console.log(arr[0]);
console.log(arr[6][1])