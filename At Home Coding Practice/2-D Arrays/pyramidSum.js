function pyramidSum(base) {
  let arr = [base];

  for (let i = 0; i < base.length - 1; i++) {
    let layerOne = arr[0];
    let nextStack = [];

    for (let e = 0; e < layerOne.length - 1; e++) {
      let ichi = layerOne[e];
      let ni = layerOne[e + 1];
      nextStack.push(ichi + ni);
    }
    arr.unshift(nextStack);
  }

  return arr;
}

console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
