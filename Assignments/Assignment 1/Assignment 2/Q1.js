function analyseNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive.`);
  } else if (num === 0) {
    console.log(`${num} is zero.`);
  } else {
    console.log(`${num} is negative.`);
  }

  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }

  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`${num} is divisible by both 3 and 5.`);
  } else {
    console.log(`${num} is not divisible by both 3 and 5.`);
  }
}

analyseNumber(15);
