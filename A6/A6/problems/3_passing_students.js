/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

function passingStudents(students) {
  //!  object.key  obj['key']   how to key into object

  let list = [];
  for (let student in students) {
    //*student has become each object
    if (avgScores(student.grades) >= 70) {
      //* grades become array
      list.push(student);
    }
  }
  console.log(list);
}

function avgScores(array) {
  let scores = [];
  for (let key in array) {
    scores.push(key.score); //*average it
  }
  return (ans = scores / scores.length);
}

var students = [
  {
    name: "Kush",
    id: 12345,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 75 },
      { id: 2, score: 85 },
    ],
  },
  {
    name: "Ned",
    id: 55555,
    grades: [
      { id: 0, score: 100 },
      { id: 1, score: 100 },
      { id: 2, score: 100 },
    ],
  },
  {
    name: "Haseeb",
    id: 94110,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 60 },
      { id: 2, score: 65 },
    ],
  },
];

console.log(passingStudents(students));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
