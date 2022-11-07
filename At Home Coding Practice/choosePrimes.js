// your code here
function choosePrimes(arr){
    let ans = []
    for(num of arr){
        if (checkIfPrime(num) === true){
            ans.push(num)
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

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]