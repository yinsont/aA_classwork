function removeEWords(str) {
  let e = "e";
  let arr = str.split(' ')  ;
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    // if (e.includes(arr[i].toLowerCase())) arr(i).pop()
    // if ((arr[i].toLowerCase()).includes(e)) !ans.push(arr[i]);     
   if (arr[i].includes(e)) {
     continue;
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}


console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'

// split -> arr
// loop throught  arr, remove any word in arr if theres no e
// turn back into str

// cycle through str
// if theres a word w/out e, put it into a new str
