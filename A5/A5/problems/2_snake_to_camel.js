/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/

function snakeToCamel(str) {
  // your code here...
  let ans = [];
  let words = str.split("_");
  for (let i = 0; i < words.length; i++) {
    //loop through every word after splitting into an array
    let new_Word = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    //first half makes first letter to uppercase
    //second half, anything at slice perameter and past are changed to lower case
    ans.push(new_Word);
  }
  return ans.join("");
}

snakeToCamel("snakes_go_hiss");
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
