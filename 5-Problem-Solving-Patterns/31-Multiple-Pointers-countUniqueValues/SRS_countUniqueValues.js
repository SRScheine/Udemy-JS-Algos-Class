function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }
  let leftIdx = 0;
  let rightIdx = 1;
  let uniqueCount = 1;
  while (rightIdx < arr.length) {
    if (arr[leftIdx] === arr[rightIdx]) {
      rightIdx++;
    } else {
      uniqueCount++;
      while (leftIdx < rightIdx) {
        leftIdx++;
      }
    }
  }
  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
