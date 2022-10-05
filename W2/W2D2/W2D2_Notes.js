function catBuilder(name, color, toys) {
  return {
    //Output: { name: 'whiskers', color: 'black', toys: 'yarn' }
    name,
    color,
    toys,
  };
}

console.log(catBuilder("whiskers", "black", "yarn"));
//---------------------------------------------------------------------------------------------------

// Fuction Decomposition / Objects

// function isPrime(max) {
//   if (max < 2) {
//     return false;
//   }
//   for (i = 1; i >= max; i++) {
//     if (i % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function laligetSum(num) {
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(laligetSum(10));
// console.log(laligetSum(17));

//-------------------------------------------------------------------------------------------------------------------------------------

// JS Datastructure
// Mutable
// Key - Vakue Pairs
// key - Always a String
// Value - Can be Anything
// Keys are Unique
// Objects are Unordered, arrays are ordered

let cat = {
  name: "whiskers",
  color: "black",
  toys: {
    outside: ["ball", "whistle"],
    inside: ["blanket"],
  },
};

// cat["name"] = "Jael";
// cat["age"] = 21;
// console.log(cat);
// console.log(cat["color"]);

// cat.name;
// cat.age;
// cat.toys.outside[0];
// console.log(cat.test);
// let test = "name";
// console.log(cat[test]);
// console.log(cat.test);

// console.log(cat.name);

//------------------------------------------------------------------------------------------------
//let through object

function printObject(obj) {
  for (let key in obj) {
    // looping key is in obj
    console.log(key); //looking for key
    console.log(obj[key]); // looking for key's value
  }
}
printObject(cat);
