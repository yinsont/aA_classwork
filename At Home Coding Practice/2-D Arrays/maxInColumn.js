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
      //column
      let num = subArray[j];
      if (num > matrix[i - 1][j]) {
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
      //different variant
      //   if ((j = 0)) {
      //     if (num > column1) {
      //       column1 = num;
      //     }
      //   }
      //   if ((j = 1)) {
      //     if (num > column2) {
      //       column2 = num;
      //     }
      //   }
      //   if ((j = 2)) {
      //     if (num > column3) {
      //       column3 = num;
      //     }
      //   }
    }
    // subArray[matrix[i]]
    // console.log(subArray)
  }
  return ans;
}

console.log(maxColumn(matrix)); // [12, 19, 21]
