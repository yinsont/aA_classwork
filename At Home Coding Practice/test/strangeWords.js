function strangeWords(words) {
  let ans = [];
  for (let word of words) {
    if (
      (word.length < 6 || word[0] === "e") &&
      !(word.length < 6 && word[0] === "e")
    ) {
      ans.push(word);
    }
  }
  return ans;
}
// function printStringArray(strings) {
//     if (strings.length === 0) {
//         console.log("[]");
//     } else {
//         console.log(`["${strings.join('", "')}"]`);
//     }
// }

console.log(
  strangeWords([
    "taco",
    "eggs",
    "excellent",
    "exponential",
    "artistic",
    "cat",
    "eat",
  ])
);
console.log(strangeWords(["eating", "proper", "key", "earth"]));
console.log(strangeWords(["ether", "mountain"]));
