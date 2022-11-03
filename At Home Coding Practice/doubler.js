// function doubler(numbers) {
//     return numbers.map(x => x * 2);
// }

function doubler(numbers) {
    let arr = []
    for (let i = 0; i < numbers.length; i++){
        arr.push(numbers[i] * 2)
    }
    return arr
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]