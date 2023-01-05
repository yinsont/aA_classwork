function mapByKey(arr, key) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i][key]);
  }
  return ans;
}

const locations = [
  { city: "New York City", state: "New York", coast: "East" },
  { city: "San Francisco", state: "California", coast: "West" },
  { city: "Portland", state: "Oregon", coast: "West" },
];

console.log(mapByKey(locations, "state")); //["New York", "California", "Oregon"]
console.log(mapByKey(locations, "city")); //["New York City", "San Francisco", "Portland"]
