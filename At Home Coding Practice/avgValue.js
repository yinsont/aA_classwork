function avgVal(arr){
    if (arr.length = 0) return null
    let answer = 0
    for (let i = 0; i < arr.length; i++){
        answer += arr[i]
    }
    return answer / arr.length
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null