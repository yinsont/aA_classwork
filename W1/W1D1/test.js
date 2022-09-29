console.log("hello world");

console.log(2);
console.log(2+2);
console.log(2+5);
console.log(10+3);
console.log(10/3);
console.log(10%3);
console.log(9%2);
console.log(10%2);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true && false);
console.log(!true);
console.log(!false);
console.log(!!!false);

let str = "hello ";
console.log(str[1]);
console.log(str.length);

console.log('hello'.indexOf('h'));
console.log('hello'.indexOf('x'));

console.log('race'.concat('car'));
console.log('race' + 'car');

console.log(4 + "hi");
console.log(4 * "10");
console.log(4 + '10'); 

console.log('hello'.toUpperCase()); //turn text uppdercase
console.log('HELLO'.toLowerCase()); //turn text undercase

console.log('hello'.slice());
console.log('hello'.slice(1));
console.log('hello'.slice(1,4));

let name = 'Jonathan';
console.log(name);
console.log(name === 'Jonathan');

name = "kevin";
//reassigning the variable "name" after it has already been assigned
console.log(name);

let firstName = 'Jonathan'
let lastName = 'Diaz'

let test
console.log(test);
//remember to define a variable - comes out as undefined


if (20 === 20){
    console.log('they are equal');
}else{
    console.log('they are not equal');
}

/*
// === checks type and value, == only checks value
let num = 20.5
if(num === 20){
    console.log('equals 20');
}else if (num > 20){
    console.log('greater');
}else{
    console.log('less than');
}

//0=falsey value
if (0){
    console.log(false);
}else{
    console.log(true);
}
*/