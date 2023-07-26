function totalIntegers(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let counter = 0;
  const lastElement = arr.pop();

  if (Array.isArray(lastElement)) {
    counter += totalIntegers(lastElement);
  }
  if (typeof lastElement === 'number') {
    counter++;
  }

  return counter + totalIntegers(arr);
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));
