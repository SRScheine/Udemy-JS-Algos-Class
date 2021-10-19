/*
Given an array of ints and a number, write a fcn which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that the subarray must consist of consecutive elements from the original array.
*/

function maxSubarraySum(arr, length) {
  if (arr.length < length) return null;

  let currSum = 0;

  for (let i = 0; i < length; i++) {
    currSum += arr[i];
  }

  let maxSum = currSum;

  for (let i = length; i < arr.length; i++) {
    currSum = currSum - arr[i - length] + arr[i];
    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
