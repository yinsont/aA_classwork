// function dynamicFizzBuzz(max, min1, min2){
//   let fizz = [];

//   for (let i = 0; i < max; i++){
//       if (i % min1 == 0 && i % min2 == 0){

//       } else if (i % min1 == 0 && i % min2 != 0) {
//           fizz.push(i);
//       } else if (i % min1 != 0 && i % min2 == 0){
//           fizz.push(i);
//       } else { continue }
//   }
//   console.log(fizz)
//   return fizz;
// }

// dynamicFizzBuzz(20, 4, 6)

function reverseHipsterfy(sentence) {
    let vowels = 'aeiouAEIOU'
    let newSentence =''
    for (let index1 = 0; index1 < vowels.length; index1++){
      for (let index2 = 0; index2 < sentence.length; index2++){
        if (vowels[index1] !== sentence[index2]){
          newSentence += sentence[index2]
        }
      }
    }
    return newSentence
  }
  console.log(reverseHipsterfy("proper"));