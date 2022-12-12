//Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status)
// of the following books.

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let book of library) {
  console.log(book["readingStatus"]);
}

function caesarCipher(string, num) {
  let ans = '';
  for (let i in string){
    let strLetter = string[i] 
    ans += changeLetter(strLetter,num)
  }
  return ans
}

function changeLetter(letter, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let newAlphabet = alphabet.split('')
  let character = alphabet.indexOf(letter) + num;
  let newLetter = alphabet[character]
  return newLetter;
}
console.log(caesarCipher("apple", 1));
