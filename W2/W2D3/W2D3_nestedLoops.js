// a nested loop is a loop within a loop

// function everyCombination() {
//   for (let i = 0; i < 3; i++) {
//     console.log(`outerloop: ${i}`); //backtick (top left under escape)
//     for (let j = 0; j < 5; j++) {
//       //i won't change until j hits 5
//       //j -> 0
//       //console.log(i + " " + j);
//       console.log(`innerloop: ${j}`);
//     }
//   }
// }
// everyCombination();

//-------------------------------------------------------------------------------------------------------------------------

let students = ["kevin", "jesse", "jason", "simon"];
//pair students with each other, making nobody pair again w/ same people
function pairStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    let student = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let student2 = arr[j];
      console.log(`${student} will be pared with ${student2}`);
    }
  }
}
pairStudents(students);

//--------------------------------------------------------------------------------------------------

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log([i, j]);
      }
    }
  }
}
twoSum([0, 1, 2, 3, 4, 5, 6], 5);

//-----------------------------------------------------------------------------------------------------

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1]);

for (let i = 0; i < matrix.length; i++) {
  let subArray = matrix[i];
  for (let j = 0; j < subArray.length; j++) {
    let ele = matrix[i][j];
    console.log(ele);
  }
}

//------------------------------------------------------------------------------------------------------

let geography = [
  [0, 2, 3, 0],
  [1, 4, 3, 1],
  [1, 5, 6, 4],
  [0, 4, 3, 2],
];

function getHighestCoordinateOnAPlane(plane) {
  let biggest = plane[0][0];
  let currentBiggestIndex = [0, 0];

  for (let i = 0; i < plane.length; i++) {
    //checkk verticle
    let subArray = plane[i];

    for (let j = 0; j < subArray.length; j++) {
      //check hortizontal

      if (subArray[j] > biggest) {
        //if found new bigger index, then replace
        biggest = subArray[j];
        currentBiggestIndex = [i, j]; //state what highest index is
      }
    }
  }
  return currentBiggestIndex;
}

console.log(getHighestCoordinateOnAPlane(geography)); //position of 6, index 2 down, index 2 right

//-----------------------------------------------------------------------------------------------------------

let peopleArr = [
  { name: "Ry", favFoods: ["Brownies", "suchi", "tacos"] },
  { name: "Brooke", favFoods: ["apples", "bananas", "pears"] },
];

function printFavoriteFoods(array) {
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    let arrayInObj = obj.favFoods;
    for (let j = 0; j < arrayInObj.length; j++) {
      console.log(arrayInObj[j]);
    }
  }
}
printFavoriteFoods(peopleArr);
