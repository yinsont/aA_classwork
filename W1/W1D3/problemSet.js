// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6

function logBetween(lowNum, highNum){
    for (let i = lowNum; i <= highNum ; i++){
        console.log(i);
    }
}
logBetween(1,10)

//-------------------------------------------------------------------------------------------------------------------

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15


function logBetweenStepper(min, max, step){
    for (i = min; i <= max; i += step){
        console.log(i);
    }
}
logBetweenStepper(-10, 15, 5)

//------------------------------------------------------------------------------------------------------------

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

function printFives(max){
    for (i = 0; max; i += 5){
        console.log(i);
        if (i === max){
            break;
        }
    }
}
printFives(20)

//----------------------------------------------------------------------------------------------------------------------------

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse(min, max){
    for (i = max; i >= min ; i --){
        console.log(i)
        if (max === min){
            break;
        }
    }
}
printReverse(3,8)

