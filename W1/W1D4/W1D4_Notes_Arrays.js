//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
console.log(fruits.length)
console.log(fruits.indexOf('Orange'))
console.log(fruits.includes('Watermelon')) //**includes** checks if watermelon is there
//------------------------------------------------------------------------------------------

const newLength = fruits.push('Watermelon'); //**push** adds a new string to the end of the array
console.log(fruits); //prints the array
console.log(fruits.length); //prints length ofarray

//------------------------------------------------------------------------------------------------
const removedItem = fruits.pop(); //**pop** removes the last string in array (watermelon)
console.log(fruits);

//-------------------------------------------------------------------------------------------------
const start = -3; //set a new variable
const removedItems = fruits.splice(start); //**splice** cuts off variables from set position, in this case, everything after apple
console.log(fruits); 
console.log(removedItems); //prints the array of strings that have been cut off 

//-----------------------------------------------------------------------------------------------------
const shiftedItem = fruits.shift(); //**shift** removes first string from array
console.log(shiftedItem);
console.log(fruits);
console.log(fruits.length);

//---------------------------------------------------------------------------------------------------
const newLength2 = fruits.unshift('Grape'); //**unshift** adds a string to the front/first of the array
console.log(fruits);

//---------------------------------------------------------------------------------------------
const combinedFruits = fruits.concat(removedItems); //**concat** combines 2 arrats
console.log(combinedFruits);

//----------------------------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log (fruitsAndNumbers = (fruits.concat(numbers)))

console.log(numbers.slice());
console.log(numbers.slice(1)) //**slice** returns a shallow copy of a portion of an array into a new array
console.log(numbers.slice(2,6)) //includes 2nd, excludes 6th

//--------------------------------------------------------------------------------------------
let arr = ['hi', 10, 9, true, undefined, null, [1,2]];
console.log(arr)
console.log(arr[0]); //states what is in position? 1
console.log(arr[6][1]) //states what is in position 6, and then in that array, position 1

//----------------------------------------------------------------------------------------------
let string = 'hi my name is Xandar' 
console.log(string.split(' ')); //converts string into array
// console.log(string);

 console.log(numbers.join("_______")); //converts array into string

//------------------------------------------------------------------------------------------------
for(let i = 0; i < numbers.length; i++){
    let ele = numbers [i];
    console.log(ele);
}
for (let i = numbers.length -1; i >=0; i--){
    let ele =numbers[i];
    console.log(ele);
}