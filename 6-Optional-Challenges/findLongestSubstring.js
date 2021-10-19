/*
Write a function which accepts a string and returns the length of the longest substring of unique characters.
*/

function findLongestSubstring(string) {
  if (string.length < 2) return string.length;
  let longest = 1;
  let currLength = 0;
  let start = 0;
  let end = 1;
  let currChar = string[start];
  let hash = {
    [currChar]: start,
  };
  // console.log('HASH: ', hash);

  while (end < string.length) {
    currChar = string[end];
    if (!hash.hasOwnProperty(currChar)) {
      hash[currChar] = end;
      currLength = end - start + 1;
      if (currLength > longest) {
        longest = currLength;
      }
      end++;
    } else {
      start = hash[currChar] + 1;
      end = start + 1;
      let newStart = string[start];
      hash = {
        [newStart]: start,
      };
    }
  }

  return longest;
}

/*
LESS LINES OF CODE SOLUTION:

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

*/

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
