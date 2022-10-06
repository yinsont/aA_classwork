
// //------------------------------------------------------------------------------------------------------

// let geography = [
//   [0, 2, 3, 0],
//   [1, 4, 3, 1],
//   [1, 5, 6, 4],
//   [0, 4, 3, 2],
// ];

// function getHighestCoordinateOnAPlane(plane) {
//   let biggest = plane[0][0];
//   let currentBiggestIndex = [0, 0];

//   for (let i = 0; i < plane.length; i++) {  //checkk verticle
//     let subArray = plane[i];

//     for (let j = 0; j < subArray.length; j++) {  //check hortizontal

//       if (subArray[j] > biggest) { //if found new bigger index, then replace
//         biggest = subArray[j];
//         currentBiggestIndex = [i, j]; //state what highest index is
//       }
//     }
//   }
//   return currentBiggestIndex;
// }

// console.log(getHighestCoordinateOnAPlane(geography)); //position of 6, index 2 down, index 2 right

// //-----------------------------------------------------------------------------------------------------------

// let peopleArr = [
//   { name: "Ry", favFoods: ["Brownies", "suchi", "tacos"] },
//   { name: "Brooke", favFoods: ["apples", "bananas", "pears"] },
// ];

// function printFavoriteFoods(array) {
//   for (let i = 0; i < array.length; i++) {
//     let obj = array[i];
//     let arrayInObj = obj.favFoods;
//     for (let j = 0; j < arrayInObj.length; j++) {
//       console.log(arrayInObj[j]);
//     }
//   }
// }
// printFavoriteFoods(peopleArr);
