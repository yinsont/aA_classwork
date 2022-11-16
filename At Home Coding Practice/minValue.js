function minValue(arr) {
  let ans = arr[1];
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (ans > arr[i]) ans = arr[i];
  }
  return ans;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null