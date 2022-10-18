
  for (let i = sentence.length - 1; i >= 0; i--) {
    newWord = sentence[i]
    newSentence.push(newWord);
  }

  newSentence.join(" ");
  if (newSentence === updatedSentence) {
    return true;
  } else {
    return false;
  }