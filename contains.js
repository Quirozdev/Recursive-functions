function contains(nestedObj, value) {
  const keys = Object.keys(nestedObj);
  for (let i = 0; i < keys.length; i++) {
    if (typeof nestedObj[keys[i]] === 'object') {
      const doesHaveIt = contains(nestedObj[keys[i]], value);
      if (doesHaveIt) {
        return true;
      }
      continue;
    }
    if (nestedObj[keys[i]] === value) {
      return true;
    }
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
    xd: 'test',
  },
};

console.log(contains(nestedObject, 'foo2'));
console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, 'foo'));
console.log(contains(nestedObject, 'test'));
