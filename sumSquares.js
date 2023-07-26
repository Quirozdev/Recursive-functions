function sumSquares(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  const lastElement = arr.pop();
  if (Array.isArray(lastElement)) {
    sum += sumSquares(lastElement);
  }
  if (typeof lastElement === 'number') {
    sum += lastElement * lastElement;
  }
  return sum + sumSquares(arr);
}

console.log(sumSquares([1, 2, 3]));
console.log(sumSquares([[1, 2], 3]));
console.log(sumSquares([[[[[[[[[1]]]]]]]]]));
console.log(sumSquares([10, [[10], 10], [10]]));
