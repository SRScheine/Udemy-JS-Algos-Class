class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Create new node with the value passed into method
    let newNode = new Node(val);
    // If there is no head, then this is the first element in the list. Set head and tail to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // Otherweise, set the current tail's next to newNode, set newNode.prev to the current tail, then
      // update the tail to newNode
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    // No matter which path you take, increment the length and return the list
    this.length++;
    return this;
  }
  pop() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // Store current tail in a variable to return later
    let removedTail = this.tail;
    // If the length of the list is 1, set head and tail to null (since we're removing the only node)
    if (!removedTail.prev) {
      this.head = null;
      this.tail = null;
      // Otherwise...
    } else {
      // Update the tail to be the prev node, set new tail's next to null, and set removedTail's prev to null
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }
    // Regardless of list size, decrement length and return the removed tail
    this.length--;
    return removedTail;
  }
  shift() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // Store current head in a variable to return later
    let removedHead = this.head;
    // If the length of the list is 1, set head and tail to null (since we're removing the only node)
    if (!removedHead.next) {
      this.head = null;
      this.tail = null;
      // Otherwise...
    } else {
      // Update the head to be the next node, set new head's prev to null, and set removedHead's next to null
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    // Regardless of list size, decrement length and return the removed head
    this.length--;
    return removedHead;
  }
  unshift(val) {
    // Create new node with the value passed into method
    let newNode = new Node(val);
    // If there is no head, then this is the first element in the list. Set head and tail to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // Otherweise, set the current head's prev to newNode, set newNode.next to the current head, then
      // update the head to newNode
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    // No matter which path you take, increment the length and return the list
    this.length++;
    return this;
  }
  get(index) {
    // If the index is less than 0 or >= length, return null
    if (index < 0 || index >= this.length) return null;
    // Optimize b/c we have a doubly linked list! Start from head if index is in the first half, but start from tail otherwise
    if (index <= this.length / 2) {
      let current = this.head;
      for (let i = 1; i <= index; i++) {
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    // Get the node we want using get() method
    let node = this.get(index);
    // If we didn't find a node, return false
    if (!node) return false;
    // Otherwise, change the val and return true
    node.val = val;
    return true;
  }
  insert(index, val) {
    // If index is less than 0 or greater than length, return false
    if (index < 0 || index > this.length) return false;
    // If index is zero, unshift
    if (index === 0) {
      this.unshift(val);
      return true;
      // If index is length, push
    } else if (index === this.length) {
      this.push(val);
      return true;
      // Otherwise...
    } else {
      // Create new node
      let node = new Node(val);
      // Use get() method to access index - 1, then grab next node
      // and set all props to be correct for insertion of new node
      let leftNode = this.get(index - 1);
      let rightNode = leftNode.next;
      leftNode.next = node;
      node.prev = leftNode;
      rightNode.prev = node;
      node.next = rightNode;
      // Increment the length and return true
      this.length++;
      return true;
    }
  }
  remove(index) {
    // If index is less than 0 or >=length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If index is zero, shift
    if (index === 0) return this.shift();
    // If index is length - 1, pop
    if (index === this.length - 1) return this.pop();
    // Use get() method to retrieve node to be be removed
    let removedNode = this.get(index);
    // Update next and prev props to remove node from list
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    // Set next and prev to null on removed node
    removedNode.prev = null;
    removedNode.next = null;
    // Devrement length and return removed node
    this.length--;
    return removedNode;
  }
  reverse() {
    // Create vairable for node and swap the head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    // Create variables for prev and next
    let prev = null;
    let next = null;
    /*
      <-    <-    <-
    1     2     3
      ->    ->    ->
    head        tail

      <-  <-  <-
    1   2   3
      ->  ->  ->
    tail     head
    */
    // Loop through the list
    while (node) {
      // Set next to be the next property on node
      next = node.next;
      // Set the next property on node to be prev
      // and prev property on node to be next
      node.next = prev;
      node.prev = next;
      // Set prev to node
      prev = node;
      // Set node to next
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// Check push
// console.log(list.push('LAST ITEM'));

// Check pop
// console.log(list.pop());
// console.log(list);

// Check shift
// console.log(list.shift());
// console.log(list);

// Check shift
// console.log(list.unshift('FIRST ITEM'));

// Check get
// console.log(list.get(4));

// Check set
// console.log(list.set(1, 10000));
// console.log(list);

// Check insert
// list.insert(1, 'INSERTED');
// console.log(list);

// Check remove
// console.log(list.remove(1));
// console.log(list);

// Check reverse
list.reverse().print();
