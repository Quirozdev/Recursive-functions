function factorial(n) {
  if (n < 0) {
    throw new Error('n needs to be a positive number');
  }
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
