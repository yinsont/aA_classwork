/*
let num = 1
for (let i = 1; i <= 10; i ++){
    console.log(i);
}

// for(initializer; while conditional; incrementor)

console.log('after the loop');
*/
function printRange(start,end){
    for (let i = start; i <= end; i ++){
        console.log(i);
    }
}
printRange(3,10);

function printNums(start, end, step) {
    for (var i = start; i <= end; i += step) {
      console.log(i);
    }
  }
//printNums(0, 12, 1);  // prints all numbers from 0 to 12
//printNums(20, 30, 2); // prints all even numbers from 20 to 30
//printNums(0, 12, 3);  // prints all multiples of 3 from 0 to 12
printNums(0, 95, 5);  // prints all multiples of 5 from 0 to 95

function printRange1(start,end){
  let i= start;
  while(i <= end){
    console.log(i);
    i ++; // ++ means +1
  }
}
printRange1(7,21);

//let i = 20
//while (i === 20){
//  console.log(i);
//}
//infinite loop cause i never changes from 20

function skipFive(num){
  for(let i = 1; i <= num; i++){
    if (i === 5){
      continue 
    }
    console.log(i);
  }
}
skipFive(20);

//continue tells program to skip console.log(i) so it doesn't print 5

function breakAtFive(num){
  for (let i = 1; i <= num; i++){
    if (num ===5){
      break; 
    }
    console.log(i);
  }
  console.log('after the loop')
}
breakAtFive(20)
//break terminated the loop

/*
function isPrime(num){
    for (let i = 1; i <= num; i++){
      if (num < 2){
        break;
        console.log('number is below 2')
      }
      
    }
}
*/