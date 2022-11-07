function nextPrime(num){
    for (let i = num + 1; i < Infinity; i++){
        if (checkIfPrime(i) === true){
            return i
        } else {
            continue
        }
    }
}

function checkIfPrime(num){
    if (num < 2) return false
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false
    }
    return true
}


console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101