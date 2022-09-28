// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
    if (num%2 === 1){
        return true
    }else{
        return false
    }
  }

  console.log(isOdd(3));

/*
function isOdd2(num){
    let ans = num%2
}
console.log(isOdd2(3))
*/

//--------------------------------------------------------------------------------------------------------------------

// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
    return string.toUpperCase();
  }

let val = yell('testing')
console.log (val + ' hello');

//-----------------------------------------------------------------------------------------------------------------------
// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(nString) {
    return nString.toLowerCase();
  }
  let yan = whisper('HELLO');
  console.log (yan + ' HELLO')

//----------------------------------------------------------------------------------------------------------------------

// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
  return searchString.indexOf(subString) > -1
  /*
  if (isSubstring >= 0){
    return ('true')
  }else{
    return ('false')
  }
  */
  //console.log('hello'.indexOf('h'));
   // if subString in searchStrirng, result true
}

//return is already giving a true/false or if/else/then statement

console.log(isSubstring('I love food', 'food'))