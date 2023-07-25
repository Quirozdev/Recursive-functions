function collatz(n, numberOfSteps = 0) {
  if (n <= 0) {
    throw new Error('n must be an integer value, starting from 1');
  }
  if (n === 1) {
    return numberOfSteps;
  }
  numberOfSteps++;
  if (isEven(n)) {
    return collatz(n / 2, numberOfSteps);
  } else {
    return collatz(3 * n + 1, numberOfSteps);
  }
}

function isEven(n) {
  return n % 2 === 0;
}

console.log(collatz(27));
