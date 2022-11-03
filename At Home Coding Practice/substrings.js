function isSubstring(searchString, subString) {
    if (searchString.indexOf(subString) > 0){
        return true
    } else {
        return false
    }
}

// function isSubstring(searchString, subString) {
//     return searchString.includes(subString)
// }

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false