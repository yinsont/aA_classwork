// function countVowels(word) {
//     let vowels = 'aeiou'
//     let counter = 0;
//     for (let i = 0; i < word.length; i++){
//         for (let j = 0; j < vowels.length; j++){
//             if (vowels[j] === word[i]){
//                 counter++
//             }
//         }
//     }
//     return counter
// }

function countVowels(word){
    let counter = 0;
    let vowels = 'aeiou'
    for(let ele of word){ //of = element          in = index
        if(vowels.includes(ele)){
            counter++
        }
    }
    return counter
}
  
console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2