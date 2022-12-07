function multiplierThing(numbers, product){
    for (let i = 0; i < numbers.length; i++){
        let num1 = numbers[i]
        for (let j = i + 1; j < numbers.length; j++){
            let num2 = numbers[j]
            if (num1 * num2 === product) return true
        }
    }
    return false
}

console.log(multiplierThing([4, 2, 8, 6], 16))


// givin sentence, if word has less than 3 letters, keep as is.
// if letter has 3 or more, if starts with vowel, make it end with a 'yay'
// if letter has 3 or more, doesn't start w/ vowel, let take all letter before first vowel
// and place at the end, then add 'ay' at end