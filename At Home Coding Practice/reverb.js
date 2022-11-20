function reverb(str){
    let ans = ''

    if (typeof str !== 'string'){
        return null
    } else {
        ans += str
        for (let i = str.length -1; i > 0; i--){
            let vowels = 'aeiou'
            ans += str[i]
            //starting from end, go left till see a vowel, if sees a vowel, take vowel and all that is on the right of it and paste it into ans
        }
    }
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null