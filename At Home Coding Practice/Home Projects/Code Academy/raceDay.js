// let raceNumber = Math.floor(Math.random() * 1000);

// let food = true

// raceNumber > 500 ? console.log(true) : console.log(false)

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 17;

runnerAge > 18 ? (raceNumber += 1000) : null;

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Number ${raceNumber}, your race begins at 9:30 AM.`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Number ${raceNumber}, your race will begin at 11 AM.`);
} else if (runnerAge < 18) {
  console.log(`Number ${raceNumber}, your race will begin at 12:30 PM.`);
} else {
  console.log(
    `For those that are 18, please head over to the registration desk immediately.`
  );
}