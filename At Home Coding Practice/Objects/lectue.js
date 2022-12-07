let testObject = {};

console.log(testObject); //empty

testObject["num"] = 10;

console.log(testObject); //puts in key 'num' and gave it value 10

testObject.num2 = 20; //easier way to add key/value

console.log(testObject);

//bracket notation allos use of variables for keys

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person.firstName)

person.key3 = "value3"

console.log(person.key3)

person.key4 = 0

for (let i = 0; i < 50; i++){
  person.key4 = person.key4 + 1
}

console.log(person.key4)

console.log(person)