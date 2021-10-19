/*
Given two (+) ints, find out if the two nums have the same frequency of digits
*/

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const arr1 = num1.toString().split('');
  const arr2 = num2.toString().split('');
  if (arr1.length !== arr2.length) {
    return false;
  }
  const digits1 = {};
  const digits2 = {};
  for (let i = 0; i < arr2.length; i++) {
    const currNum1 = arr1[i];
    const currNum2 = arr2[i];
    digits1[currNum1] = digits1[currNum1] ? digits1[currNum1]++ : 1;
    digits2[currNum2] = digits2[currNum2] ? digits2[currNum2]++ : 1;
  }

  for (let num in digits1) {
    if (!digits2[num] || digits1[num] !== digits2[num]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
