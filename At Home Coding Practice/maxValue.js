function maxValue(arr) {
    let ans = arr[1];

    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
      if (ans < arr[i]) ans = arr[i];
    }
    return ans;
  }

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null