class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Create new node using value passed into function
    let newNode = new Node(val);
    // If no head on LL, set head and tail to this node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // Otherwise, set next prop on tail to be the new node and set the tail to the new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment length by 1
    this.length++;
    return this;
  }
  pop() {
    let current = this.head;
    // If there are no nodes in the list, return undefined
    if (!current) return undefined;
    // If there's only one element in the LL, return the head and set head and tail to null
    if (!current.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }
    // Set up variable to hold previous node
    let prevNode = current;
    // Loop through the list until you reach the tail
    // While the LL has a next
    while (current.next) {
      // Store the previous node
      prevNode = current;
      // Set current to the next node (which we know exists b/c of while loop)
      current = current.next;
    }
    // Set tail to this prevNode
    this.tail = prevNode;
    // Set next of tail to null
    this.tail.next = null;
    // Decrement length by 1
    this.length--;
    // Return value of node removed
    return current.val;
  }
  shift() {
    // Store current head as a variable
    let head = this.head;
    // If there are no nodes, return undefined
    if (!head) return undefined;
    // Set head of LL to current head's next
    this.head = head.next;
    // If we removed the only node, aka head.next is null, set this.tail to null
    if (!this.head) this.tail = null;
    // Decrement length by 1
    this.length--;
    // Return val of node removed
    return head.val;
  }
  unshift(val) {
    // Create a new node
    let newNode = new Node(val);
    // If there is no head, set the head an tail to new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // Otherwise, set the new node's next to the current head and set the head of the LL to the new node
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // Increment length by 1 and return list
    this.length++;
    return this;
  }
  get(index) {
    // Return null for edge cases
    if (index < 0 || index >= this.length) return null;
    // Set current to the head of LL
    let current = this.head;
    // Loop through list until you reach the inputted index
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    // Return the node at that index
    return current;
  }
  set(index, val) {
    // Use get method to find correct node
    const foundNode = this.get(index);
    // If node is not found, return false
    if (!foundNode) return false;
    // If node is found, set value of that node to be value passed in and return true
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    // If index is less than zero or greater than length, return false
    if (index < 0 || index > this.length) return false;
    // If index is equal to length, then we're just pushing! Call this.push to create new node at tail and return true
    if (index === this.length) {
      this.push(val);
      return true;
    }
    // Same thing for if index is zero, but for unshift
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    // Create new node
    const newNode = new Node(val);
    // Use already created get() method to access node at (index - 1)
    const leftNode = this.get(index - 1);
    // Grab the next node after this node
    const rightNode = leftNode.next;
    // Set the next on our new node to the rightNode
    newNode.next = rightNode;
    // Reassign the next on the leftNode to our newNode, and we've inserted the node in place!
    leftNode.next = newNode;
    // Increment length by 1 and return true
    this.length++;
    return true;
  }
  remove(index) {
    // If index is less than zero or >= length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If index is equal to (length - 1), then we're just popping! Call and return this.pop()
    if (index === this.length - 1) return this.pop();
    // Same thing for if index is zero, but for shift
    if (index === 0) return this.shift();
    // Use already created get() method to access node at (index - 1)
    const leftNode = this.get(index - 1);
    // Set removedNode to next of leftNode
    const removedNode = leftNode.next;
    // Set leftNode's next to leftNode.next.next
    leftNode.next = leftNode.next.next;
    // Decrement length by 1 and return removedNode
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
    // Loop through the list
    while (node) {
      // Set next to be the next property on node
      next = node.next;
      // Set the next property on node to be prev
      node.next = prev;
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

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();
// list.push('HELLO');
// list.push('GOODBYE');
// list.push('!');

// Push check
// console.log(list);

// Pop check
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// Shift check
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// Unshift check
// console.log(list.unshift('FIRST'));

// Get check
// list.push('<3');
// list.push(':)');
// console.log(list.get(0));
// console.log(list.get(3));
// console.log(list.get(4));

// Set check
// list.set(1, 'HELLO AGAIN');
// console.log(list.set(5, 'OHNO'));
// console.log(list);

// Insert check
// console.log(list.insert(4, 'INSERTING'));
// console.log(list.insert(3, 'INSERTING'));
// console.log(list);

// Remove check
// console.log(list.remove(10));
// console.log(list.remove(1));
// console.log(list);

// Reverse Check
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
list.print();
list.reverse().print();
console.log(list);
