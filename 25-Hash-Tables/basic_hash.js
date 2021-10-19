// Loop through characters in key, add value of each char to total, and use modulo to put the total within the array length
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

/*
Problems with this hash:
- Only hashes strings
- Not contstant time - linear in key length
- Could be more random
*/
