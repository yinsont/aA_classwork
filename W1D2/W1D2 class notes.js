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

console.log(foo('Yinson','tso'));