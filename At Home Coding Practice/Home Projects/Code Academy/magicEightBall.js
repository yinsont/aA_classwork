// console.log(Math.random())

// switch case break default
// var = var || statement
// condition ? action :(or) action (true/false only)

function magicEightBall(userName, userQuestion) {
  console.log(`Hello, ${userName}!`);
  console.log(`${userName}, you asked "${userQuestion}"`);

  let number = Math.floor(Math.random() * 8);

  switch (number) {
    case 0:
      return "Do not count on it";
    //   break;
    case 1:
      return "It is certain";
    //   break;
    case 2:
      return "It is decidedly so";
    //   break;
    case 3:
      return "Reply hazy try again";
    //   break;
    case 4:
      return "Cannot predict now";
    //   break;
    case 5:
      return "My sources say no";
    //   break;
    case 6:
      return "Outlook not so good";
    //   break;
    case 7:
      return "Signs point to yes";
    //   break;
  }
}

console.log(magicEightBall("hi", "bye"));
