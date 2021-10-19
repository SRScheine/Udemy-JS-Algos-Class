function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  function findMiddle(left, right) {
    return Math.floor((left + right) / 2);
  }

  while (leftIdx < rightIdx) {
    let middleIdx = findMiddle(leftIdx, rightIdx);
    if (arr[middleIdx] === target) return middleIdx;
    else if (arr[leftIdx] === target) return leftIdx;
    else if (arr[rightIdx] === target) return rightIdx;
    else if (arr[middleIdx] > target) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
