function twoDimensionalProduct(arr) {
  let product = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      product *= subArr[j];
    }
  }
  return product / arr[0][0];
}
let arr1 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [[11, 4], [2]];
console.log(twoDimensionalProduct(arr2)); // 88
