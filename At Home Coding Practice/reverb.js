function reverb(str) {
  let ans = "";

  if (typeof str !== "string") {
    return null;
  } else {
    ans += str;
    for (let i = str.length - 1; i > 0; i--) {
      let vowels = "aeiou";
      if (vowels.includes(str[i].toLowerCase())) {
        let newStr = (str.substring(i))
        ans += newStr;
        return ans;
      }
    }
  }
}

console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb(197393)); // null
