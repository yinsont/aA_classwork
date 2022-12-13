let ans = []
function pyramidSum(base) {
    ans.push(base)
    if (base.length === 1){
        return ans
    }
    let subAns = []
    let sum = 0;
    for (let i = 0; i < base.length; i++){
        let num1 = base[i]
        for (let j = i+1; j < base.length; j++){
            let num2 = base[j]
            sum = (num1 + num2)
            subAns.push(sum)
        }
    }
     return pyramidSum(subAns)
}

console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
