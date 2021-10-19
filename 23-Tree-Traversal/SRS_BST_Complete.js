class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    // Create new node
    let node = new Node(value);
    // If there is not a root, just make this node the root
    if (!this.root) {
      this.root = node;
      // Otherwise, check if the value of the node is > or < the value of the current root
    } else {
      let current = this.root;
      // Iterative solution
      while (current) {
        if (value === current.value) return undefined;
        if (value > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            break;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        }
      }
    }
    return this;
  }
  find(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  // Breadth-First-Search = process nodes horizontally by level
  BFS() {
    // Set root at the first element in the queue
    let queue = [this.root];
    // Create visited array to store BFS order
    let visited = [];
    // While there is something in the queue...
    while (queue.length) {
      // Pop off the first thing in the queue
      let current = queue.pop();
      // Push that value to the visited array
      visited.push(current.value);
      // If the node that we popped off the queue has left and
      // right nodes, add them to the end of the queue
      // NOTE: if there were an n-ary tree, you could just loop over all of the children to add them to the queue and it would still work!
      if (current.left) queue.unshift(current.left);
      if (current.right) queue.unshift(current.right);
    }
    return visited;
  }
  // Depth-First-Search = process nodes vertically
  // Pre-Order = visit node first, then process left side, then process right side
  DFSPreOrder() {
    // Create variable to store DFS Pre-Order values
    let visited = [];
    // Write a helper function which accepts a node
    function traverse(node) {
      // Push the value of the current node into visited
      visited.push(node.value);
      // If there's a left in the node, recursively call traverse on node.left
      if (node.left) traverse(node.left);
      // Same for if there's a right node
      if (node.right) traverse(node.right);
    }
    // Invoke traverse on the root node
    traverse(this.root);
    // Return the solution
    return visited;
  }
  // Post-Order = Process left first, then right, then root
  DFSPostOrder() {
    // Create variable to store DFS Post-Order values
    let visited = [];
    // Write a helper function which accepts a node
    function traverse(node) {
      // If there's a left in the node, recursively call traverse on node.left
      if (node.left) traverse(node.left);
      // Same for if there's a right node
      if (node.right) traverse(node.right);
      // Last, push the value of the current node into visited
      visited.push(node.value);
    }
    // Invoke traverse on the root node
    traverse(this.root);
    // Return the solution
    return visited;
  }
  // Process left, then root, then right (sorted if a BST)
  DFSInOrder() {
    // Create variable to store DFS In-Order values
    let visited = [];
    // Write a helper function which accepts a node
    function traverse(node) {
      // If there's a left in the node, recursively call traverse on node.left
      if (node.left) traverse(node.left);
      // Push the value of the current node into visited
      visited.push(node.value);
      // Traverse the right
      if (node.right) traverse(node.right);
    }
    // Invoke traverse on the root node
    traverse(this.root);
    // Return the solution
    return visited;
  }
}

//      10
//   6     15
// 3  8      20

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log('BFS: ', tree.BFS());
console.log('DFS PreOrder: ', tree.DFSPreOrder());
console.log('DFS PostOrder: ', tree.DFSPostOrder());
console.log('DFS InOrder: ', tree.DFSInOrder());
