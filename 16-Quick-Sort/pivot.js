// // First Version
// function pivot(arr, start=0, end=arr.length+1){
//   function swap(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   var pivot = arr[start];
//   var swapIdx = start;

//   for(var i = start + 1; i < arr.length; i++){
//     if(pivot > arr[i]){
//       swapIdx++;
//       swap(arr,swapIdx,i);
//     }
//   }
//   swap(arr,start,swapIdx);
//   return swapIdx;
// }

// // Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

// SRS Version
// function pivot(arr, start = 0, end = arr.length - 1) {
//   function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//   }
//   // Assume pivot is always the first element
//   let pivot = arr[start];
//   let newPivotIdx = start;
//   for (let i = start + 1; i <= end; i++) {
//     // If we ever have a num in the arr that is smaller than the pivot, increment the pivot idx
//     // and swap the current element with the element at the pivot index
//     if (pivot > arr[i]) {
//       newPivotIdx++;
//       swap(arr, i, newPivotIdx);
//     }
//   }

//   console.log('arr before swap: ', arr);
//   // After we're done, move the pivot into the correct position
//   swap(arr, start, newPivotIdx);
//   console.log('arr after swap: ', arr);
//   return newPivotIdx;
// }

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
