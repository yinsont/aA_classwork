//make a function that can state all the even factors of a number in an array
//60 -> 2, 4, 6, 10, 12, 

function range(max){
    let factors = [];
    let outliers = [];
    for (let i = 1; i <= max; i++){
        //console.log(i)
        if (max % i === 0){
            factors.push(i);
        }

        if (max % i != 0){
            outliers.push(i);
        }
    
    }
    return factors + '     ' + outliers
}

console.log(range(36))

