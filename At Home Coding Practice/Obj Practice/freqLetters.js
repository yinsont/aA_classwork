function frequentLetters(string) {
    let ans = []
    let letters = []
    for (let i = 0; i < string.length; i++){
        if (string[i] in letters === false){
            letters[string[i]] = 1
        } else {
            letters[string[i]] += 1
        }
    }
    for (let key in letters){
        if (letters[key] > 2) {
            ans.push(key)
        }
    }

    return ans
}

console.log(frequentLetters("mississippi")); //['i', 's']
console.log(frequentLetters("bootcamp")); //[]