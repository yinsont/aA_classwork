function removeEWords(str) {
  let e = "e";
  let arr = str.split;
  
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].toLowerCase()).includes(e)) arr.remove(i);
  }
  return arr;
}

console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'