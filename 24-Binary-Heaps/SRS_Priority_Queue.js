// This will be a Min Binary Heap!
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    // Push value in the array
    this.values.push(newNode);
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
      // If the element is greater than its parent, we're done! Break out
      if (element.priority >= parent.priority) break;
      // Otherwise, swap the element and its parent
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Change the index to the parent index, and continue through the loop
      index = parentIndex;
    }
  }
  dequeue() {
    // Save first and last values in heap, pop off last value
    let min = this.values[0];
    let end = this.values.pop();
    // Protect for edge case of only 1 value in heap
    if (this.values.length > 0) {
      // set first value to end
      this.values[0] = end;
      // Call sinkDown
      this.sinkDown();
    }
    return min;
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
        // If this child is smaller than element, set swap index to leftChildIndex
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      // Check if right child exists
      if (rightChildIdx < this.values.length) {
        // If it does, save rightChild value
        rightChild = this.values[rightChildIdx];
        // Only want to override swap to rightChildIndex in two cases:
        // 1. We did not swap with leftChild and rightChild < element, or
        // 2. We did swap with leftChild, but rightChild < leftChild
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
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

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
console.log('PRIORITY QUEUE: ', ER);
ER.dequeue();
console.log('DEQUEUE 1: ', ER);
ER.dequeue();
console.log('DEQUEUE 2: ', ER);
ER.dequeue();
console.log('DEQUEUE 3: ', ER);
ER.dequeue();
console.log('DEQUEUE 4: ', ER);
ER.dequeue();
console.log('DEQUEUE 5: ', ER);
