/*
Write a function which takes in two strings and checks whether the chars in the first string form a subsequence of chars in the second string. In other words, the function should check whether the chars in the first string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING
*/

function isSubsequence(str1, str2) {
  let str1Point = 0;
  let str2Point = 0;

  if (str1.length > str2.length) return false;

  while (str2Point < str2.length) {
    let currChar1 = str1[str1Point];
    let currChar2 = str2[str2Point];

    if (currChar1 === currChar2) str1Point++;

    if (str1Point === str1.length) return true;

    str2Point++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
