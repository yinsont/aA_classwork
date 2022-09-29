function isPrime(num){
    if (num < 2) return false; //if number is less than 2, it is not a prime so skip
    for (let n = 2; n < num; n++){ //change the number that num is being devided by by 1
        if (num % n === 0){ //if the number has a remainder of 0
            return false;  //then it is not a prime
        }
    }
    return true;
}

isPrime(5)