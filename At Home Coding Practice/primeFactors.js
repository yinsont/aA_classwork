function primeFactors(num){
    let ans = []
    for (let i = 2; i <= num; i++){
        if (num % i === 0){
            if (checkIfPrime(i) === true) ans.push(i)
        }
    }
    return ans
}

function checkIfPrime(num){
    if (num < 2) return false
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false
    }
    return true
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]