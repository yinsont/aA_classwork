/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  //*students = array of student objects
  //*want to return initials and id of student w/ highest score

  let score = 0;
  let ans = "";
  for (let student of students) { //student is like i in the usual  "for loops"
    if (student.score > score) {
      //*key into that specific student's data
      score = student.score;
      ans = student; //* ans becomes the specific student we want
    }
  }
  let nameSeperated = ans.name.split(" ");
  let initials = nameSeperated[0][0] + nameSeperated[1][0];
  return initials + ans.id;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
