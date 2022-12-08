// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
//-----------------------------------------
for (let key in student) {
  console.log(key);
}
//* Output: name, sclass, rollno
//-----------------------------------
console.log(student["sclass"]);

//* Output: VI
//-----------------------------
console.log(Object.keys(student).length); 

//* Output: length of object: 3
//---------------------------------------
