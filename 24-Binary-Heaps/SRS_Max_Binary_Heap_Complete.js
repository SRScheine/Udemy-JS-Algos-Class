class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    // Push value in the array
    this.values.push(element);
    // Call bubbleUp
    this.bubbleUp();
  }
  bubbleUp() {
    // Set index to the last value in the array
    let index = this.values.length - 1;
    // Save the value we want to bubble up
    const element = this.values[index];
    // Loop through the array up to index === 0
    while (index > 0) {
      // Save parent index and parent value
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // If the element is less than its parent, we're done! Break out
      if (element <= parent) break;
      // Otherwise, swap the element and its parent
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Change the index to the parent index, and continue through the loop
      index = parentIndex;
    }
  }
  extractMax() {
    // Save first and last values in heap, pop off last value
    let max = this.values[0];
    let end = this.values.pop();
    // Protect for edge case of only 1 value in heap
    if (this.values.length > 0) {
      // set first value to end
      this.values[0] = end;
      // Call sinkDown
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    // Set idx to 0 and grab the value at that idx
    let idx = 0;
    const element = this.values[idx];
    while (true) {
      // Find indicies for children of element
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // Create leftChild and rightChild but don't assign yet:
      // need to check if they're valid first
      let leftChild, rightChild;
      // Set swap to null. This will tell us if we done a swap this iteration to potentially break out, and also hold the index that we want to swap with (leftCHild or rightChild)
      let swap = null;
      // Check if leftChild exists
      if (leftChildIdx < this.values.length) {
        // If it does, create leftChild value
        leftChild = this.values[leftChildIdx];
        // If this child is larger than element, set swap index to leftChildIndex
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      // Check if right child exists
      if (rightChildIdx < this.values.length) {
        // If it does, save rightChild value
        rightChild = this.values[rightChildIdx];
        // Only want to override swap to rightChildIndex in two cases:
        // 1. We did not swap with leftChild and rightChild > element, or
        // 2. We did swap with leftChild, but rightChild > leftChild
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      // If we never swapped, then we're done! Break out
      if (swap === null) break;
      // If we need to swap, then swap!
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log('ORIGINAL HEAP: ', heap.values);
heap.extractMax();
console.log('EXTRACTMAX: ', heap.values);
