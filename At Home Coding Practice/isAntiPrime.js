function isAntiPrime(number){
    for (let i = 0; i < number; i++){
        if (factors(i) >= factors(number)) return false 
    }
    return true
}

function factors(n){
    let factors = [];
    for (let i = 0; i <= n; i++){
        if (n % i === 0) factors.push(i)
    }
    return factors.length
}


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false