//* Data Modeling

//* Data Structure: A container to store and organize data

// let student = {
//   name: "Zack",
//   gender: "Male",
//   height: "5'6",
// };

// ! HAD ROUGH NIGHT AND DAY, PLEASE STAND BY AND WAKE ME UP IF ANYTHING IMPORTANT HAPPENS

// student -> object
// class of students -> array of objects
// car -> object cause single object
// parking lot -> array or objects

let student1 = { name: "jon", grade: 2 };
let student2 = { name: "sam", grade: 4 };
let student3 = { name: "joe", grade: 12 };

let class1 = [student1, student2, student3];

console.log(class1);

for (let student of class1) {
  console.log(student.name);
  console.log(student.grade);
}
