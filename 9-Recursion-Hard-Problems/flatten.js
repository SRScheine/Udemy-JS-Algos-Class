/*
Write a recursive function which accepts an array of arrays and returns a new array with all values flattened.
*/

function flatten(arr) {
  let solution = [];
  for (let i = 0; i < arr.length; i++) {
    let currElem = arr[i];
    if (!Array.isArray(currElem)) {
      solution.push(currElem);
    } else {
      solution.push(...flatten(currElem));
    }
  }
  return solution;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
