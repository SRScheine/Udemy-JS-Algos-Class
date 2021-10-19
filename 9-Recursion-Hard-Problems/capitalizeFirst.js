/*
Write a recursive function that, given an array of strings, capitalizes the first letter of each string.
*/

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let capWord = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [capWord, ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
