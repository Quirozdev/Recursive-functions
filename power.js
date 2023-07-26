function power(base, exponent) {
  if (exponent < 0) {
    throw new Error('exponent needs to be a positive number');
  }
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

/*
power(2, 2) = 2 * power(2, 1)
    power(2, 1) = 2 * power(2, 0)
        power(2, 0) = 1
    2 * 1 = 2
2 * 2 = 4
*/

console.log(power(2, 4));
