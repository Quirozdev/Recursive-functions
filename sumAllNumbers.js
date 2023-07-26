function sumRange(n) {
  if (n < 0) {
    throw new Error('n needs to be a positive number');
  }
  if (n === 1 || n === 0) {
    return n;
  }
  return n + sumRange(n - 1);
}

console.log(sumRange(3));
