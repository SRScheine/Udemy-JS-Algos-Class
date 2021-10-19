/*
Write a function which accepts an object and returns an array of all the values in the object that have a typeof string.
*/

function collectStrings(obj) {
  let solution = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      solution.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      solution = [...solution, ...collectStrings(obj[key])];
    }
  }

  return solution;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
