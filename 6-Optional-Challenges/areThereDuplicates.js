/*
Write function that accepts a variable num of arguments, and checks whether there are duplicates among the arguments passed in.
*/

// O(n) time and space - Frequency Counter method
function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  const freqCount = {};
  for (let i = 0; i < args.length; i++) {
    const currArg = args[i];
    if (freqCount[currArg]) return true;
    freqCount[currArg] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// O(n*logn) time and O(1) space - Multiple Pointers method
function areThereDuplicates2(...args) {
  // good luck. (supply any arguments you deem necessary.)
  args.sort();
  // console.log('SORTED ARRAY: ', args);
  let leftIdx = 0;
  let rightIdx = 1;
  while (rightIdx < args.length) {
    if (args[leftIdx] === args[rightIdx]) return true;
    leftIdx++;
    rightIdx++;
  }
  return false;
}

console.log('NEXT METHOD BELOW');
console.log(areThereDuplicates2(3, 2, 1)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true

// ONE LINER SOLUTION!
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}
