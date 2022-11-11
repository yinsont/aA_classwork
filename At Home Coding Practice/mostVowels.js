function mostVowels(sentence) {
  let newSentence = sentence.split(" ");
  let answer = newSentence[0];
  for (let i = 0; i <= newSentence.length; i++) {
    if (vowelCounter[i] > vowelCounter(answer)) {
      answer = newSentence[i];
    } else {
      continue;
    }
  }
  return answer;
}

function vowelCounter(word) {
  let counter = 0;
  let vowels = "aeiou";
  for (let i = 0; i <= word.length; i++) {
    if (vowels.includes(word[i])) counter++;
  }
  return counter;
}

// console.log(vowelCounter('yomomgey'))
console.log(mostVowels("what a wonderful life")); // "wonderful"
