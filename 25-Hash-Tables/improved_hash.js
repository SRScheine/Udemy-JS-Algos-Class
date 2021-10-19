/*
Changes made:
- Included weird prime
- Hash function has max loop of 100 characters
*/
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

/*
Improvements with this hash:
- Prime number in the hash is helpful for spreading out the keys more uniformly
  - Why? Instructor didn't say lol
- Also helpful if the array length has a prime length
*/
