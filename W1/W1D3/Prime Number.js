function isPrime(num){
    if (num < 2){
        return false;  //if number is less than 2, it is not a prime so skip
    }
    for (let n = 2; n < num; n++){ //change the quotient by 1 everytime
    //    console.log(n);
        if (num % n === 0){ //if the number has a remainder of 0
            return false;  //then it is not a prime
        }
    }
    console.log("it is a prime number")
    return true; //if passes all rules, then number is prime/true
}
isPrime(53)