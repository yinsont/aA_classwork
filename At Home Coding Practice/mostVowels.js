function mostVowels(sentence) {
  let newSentence = sentence.split(" ");
  let answer = ''
  for (let i = 0; i < newSentence.length; i++) {
    console.log(i)
    if (vowelCounter(newSentence[i]) > vowelCounter(answer)) {
      answer = newSentence[i];
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
