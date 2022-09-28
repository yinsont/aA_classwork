if(!0){
    console.log('in the if')
}else{
    console.log('in the else')
}
//in the if will appear, 0 is a falsey, ! (or bang) cancels it making if(!0), true


let num = 20;
if(num = 30){
    console.log('in the if');
}else{
    console.log('in the else');
}

// (= is assingment, === is comparison), knowing this, line 10 is reassigning num, which makes console only print 'in the if'

//---------------------------------------------------------------------------------------

function foo(){
    return 'bar';
}

console.log(foo())
console.log(foo)

//1st - invoking what the console returns
//2nd - is asking for what foo is

function foo(p1,p2){
    return p1 + ' ' + p2;
}

console.log(foo('Yinson','Tso'));

//function - a procedure of code that will run when called

/*
let foo = function(){
    return'bar';
}
let foo = () =>{
    return 'bar';
}

showing different ways to write functions
*/



function average (num1,num2){
    let sum = num1 + num2;
    let avg = sum/2;
    return avg;
}
//making a function that gives us the average of 2 numbers

function average2(num1,num2){
    let sum = sumNums(num1,num2)
    let avg = sum/2;
    return avg;
}
function sumNums(num1,num2){
    return num1 /+ num2;
}
//making a function that uses another function to help it do the same as the first 
//return a function to finish


console.log(average(12,8))//edit purple () as needed, will be sent to the first function
