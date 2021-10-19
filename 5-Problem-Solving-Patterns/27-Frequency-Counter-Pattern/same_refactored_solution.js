// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const hash1 = {};
  const hash2 = {};

  for (let i = 0; i < arr1.length; i++) {
    const currVal1 = arr1[i];
    const currVal2 = arr2[i];
    // Create frequency counters for each array
    if (hash1.hasOwnProperty(currVal1)) {
      hash1[currVal1]++;
    } else {
      hash1[currVal1] = 1;
    }
    if (hash2.hasOwnProperty(currVal2)) {
      hash2[currVal2]++;
    } else {
      hash2[currVal2] = 1;
    }
  }

  for (let val1 in hash1) {
    if (
      !hash2.hasOwnProperty(val1 * val1) ||
      hash1[val1] !== hash2[val1 * val1]
    ) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));
