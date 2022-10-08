//string and arrays // styling and debugging

//string = primitive, non-mutable
//arrays = non-primitive, mutable

let str = "hello";
str[0] = "x";
console.log(str); //prints hello

let arr = ["h", "e", "l", "l", "o"];
arr[0] = "x"; //replace first index with an x
console.log(arr); //prints xello

//--------------------------------------------------------------------

// .indexOf
// .includes
// .concat
// .slice
// .join
// .split

//use specified variables to make things more clear

// (a)Reference Error
// (b)Type Error
// (c)Syntax Error

// let bootcamp = "anything"; //reference error w/out console.log
// console.log(bootcamp);

//"hello world".join(" "); //type error cause .join is used for arrays

// undefined.length;  //type error, meant for arrays, not strings
// let num = 20;
// num.length;

// if true {  //syntax error, have to put true in ()
//   console.log("hello");
// }
