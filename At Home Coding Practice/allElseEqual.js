function allElseEqual(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (arr.includes(sum / 2)) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[n] === sum / 2) return arr[n];
    }
  } else {
    return null;
  }
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null
