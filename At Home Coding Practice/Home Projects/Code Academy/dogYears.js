function dogYears(n) {
  let ans = null;
  if (n > 2) {
    ans = 10.5 * 2 + 4 * (n - 2);
    return `I am ${ans} years old in dog years.`;
  } else if (n > 0 && n < 2) {
    ans = n * 10.5;
    return `I am ${ans} years old in dog years.`;
  } else {
    return null;
  }
}

console.log(dogYears(0));
