function isOdd(num) {
    if (Math.abs(num) % 2 === 1){
        return true
    } else {
        return false
    }
}
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true