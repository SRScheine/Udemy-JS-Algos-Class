// Merges two already sorted arrays
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// SRS version
function merge(arr1, arr2) {
  const sortedArr = [];
  let arr1Idx = 0;
  let arr2Idx = 0;
  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    let arr1Min = arr1[arr1Idx];
    let arr2Min = arr2[arr2Idx];
    if (arr1Min <= arr2Min) {
      sortedArr.push(arr1Min);
      arr1Idx++;
    } else {
      sortedArr.push(arr2Min);
      arr2Idx++;
    }
  }
  if (arr1Idx === arr1.length) {
    for (let i = arr2Idx; i < arr2.length; i++) {
      sortedArr.push(arr2[i]);
    }
  } else {
    for (let i = arr1Idx; i < arr1.length; i++) {
      sortedArr.push(arr1[i]);
    }
  }
  return sortedArr;
}

console.log(merge([100, 200], [1, 2, 3, 5, 6]));
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
