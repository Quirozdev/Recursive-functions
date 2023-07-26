function replicate(repetitions, n) {
  if (repetitions <= 0) {
    return [];
  }
  return replicate(repetitions - 1, n).concat(n);
}

console.log(replicate(3, 5));
console.log(replicate(1, 69));
console.log(replicate(-2, 6));
