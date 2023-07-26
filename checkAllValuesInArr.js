function all(array, callback) {
  console.log(array);
  if (array.length === 0) {
    return true;
  }
  if (callback(array[array.length - 1])) {
    return all(array.slice(0, array.length - 1), callback);
  }
  return false;
}

const allAreLessThanSeven = all([1, 3, 6], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven);
