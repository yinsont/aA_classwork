function dogYears(n) {
  if (n > 2) {
    ans = 10.5 * 2 + 4 * (n - 2);
    return ans;
  } else if (n > 0 && n < 2) {
    ans = n * 10.5;
    return ans;
  } else {
    return null;
  }
}

console.log(dogYears(5));
