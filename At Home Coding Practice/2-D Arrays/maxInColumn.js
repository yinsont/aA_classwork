matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

function maxColumn(matrix) {
  let column1 = matrix[0][0];
  let column2 = matrix[0][1];
  let column3 = matrix[0][2];
  let ans = [column1, column2, column3];

  for (let i = 0; i < matrix.length; i++) {
    //row
    let subArray = matrix[i];
    for (let j = 0; j < subArray.length; j++) {
      //column?
      let num = subArray[j]; //this works
      if (num > matrix[i - 1][j]) { //must fix
        if ((j = 0)) {
          column1 = num;
        }
        if ((j = 1)) {
          column2 = num;
        }
        if ((j = 2)) {
          column3 = num;
        }
      }
    }
  }
  return ans;
}
//*maybe just change/loop i, no need to make second loop?
console.log(maxColumn(matrix)); // [12, 19, 21]
