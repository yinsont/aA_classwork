function pairProduct(arr,target){
    for (let i = 0; i < arr.length; i++){
        let num1 = arr[i]
        for (let j = i + 1; j < arr.length; j++){
            let num2 = arr[j]
            if (num1 * num2 === target) return true
        }
    }
    return false
}
console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false