function validAnagram(word1, word2) {
  // add whatever parameters you deem necessary - good luck!
  if (word1.length !== word2.length) {
    return false;
  }
  const word1Counter = {};
  const word2Counter = {};
  for (let i = 0; i < word1.length; i++) {
    const word1Char = word1[i];
    const word2Char = word2[i];
    if (word1Counter.hasOwnProperty(word1Char)) {
      word1Counter[word1Char]++;
    } else {
      word1Counter[word1Char] = 1;
    }
    if (word2Counter.hasOwnProperty(word2Char)) {
      word2Counter[word2Char]++;
    } else {
      word2Counter[word2Char] = 1;
    }
  }
  for (let letter in word1Counter) {
    if (
      !word2Counter.hasOwnProperty(letter) ||
      word1Counter[letter] !== word2Counter[letter]
    ) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('awesome', 'awesom'));
