function dynamicFizzBuzz(max, min1, min2){
  let fizz = [];

  for (let i = 0; i < max; i++){
      if (i % min1 == 0 && i % min2 == 0){

      } else if (i % min1 == 0 && i % min2 != 0) {
          fizz.push(i);
      } else if (i % min1 != 0 && i % min2 == 0){
          fizz.push(i);
      } else { continue }
  }
  console.log(fizz)
  return fizz;
}

dynamicFizzBuzz(20, 4, 6)