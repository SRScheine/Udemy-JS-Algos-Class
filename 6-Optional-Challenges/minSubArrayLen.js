/*
Write a fcn that accepts an array of positive ints and a positive int.
The fcn should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the int passed to the fcn. If there isn't one, return 0;
*/

function minSubArrayLen(arr, num) {
  let minLength = Infinity;
  let start = 0;
  let end = 1;
  let currLength;

  if (arr[start] >= num) return 1;

  let currSum = arr[start] + arr[end];

  /*
  Sliding window:
  If currSum < num, make window larger on right side and check again.
  If currSum >= num, check if length of subArray is smaller than smallest subArray length so far,
  make window smaller on left side, and check again.
  */
  while (end < arr.length) {
    if (currSum < num) {
      end++;
      if (arr[end] !== undefined) {
        currSum += arr[end];
      }
    } else {
      currLength = end - start + 1;
      if (currLength < minLength) {
        minLength = currLength;
      }
      currSum -= arr[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
