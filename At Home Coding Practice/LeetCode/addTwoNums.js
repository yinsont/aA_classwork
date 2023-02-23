function addTwoNumbers(arr1, arr2){
    let total = []
    for (let i = arr1.length - 1; i >= 0; i--){
        let num1 = arr1[i]
        for (let j = arr2.length - 1; j >= 0; j--){
            let num2 = arr2[j]
        }
    }
}
l1 = [2,4,3], l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2))
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Input: l1 = [0], l2 = [0]
// Output: [0]

//if previous iteration had original answer over 10,
//add one to this iteration

//if this iteration is over 10, subtract 10 and return

//.reverse()