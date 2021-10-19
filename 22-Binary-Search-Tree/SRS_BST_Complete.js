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
  remove(value, parentNode = null) {
    let currentNode = this.root;
    while (currentNode) {
      // If we have not found our node yet, save parent and current nodes until we find it
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        // Once we find the node...
      } else {
        // If the node to remove has two children...
        if (currentNode.left && currentNode.right) {
          // Find the minimum value in the right subtree of the node to be removed, and change the value of the "removed" node to that value
          currentNode.value = currentNode.right.getMinValue();
          // Remove that minimum value node
          currentNode.right.remove(currentNode.value, currentNode);
          // Else if, there is no parentNode (aka we're removing the root)
        } else if (!parentNode) {
          // If the node to be removed has a left node
          if (currentNode.left) {
            // Set value of currentNode to currentNode.left's value
            currentNode.value = currentNode.left.value;
            // Set right to left.right
            currentNode.right = currentNode.left.right;
            // Set left to left.left
            currentNode.left = currentNode.left.left;
            // If the node to be remove has a right node
          } else if (currentNode.right) {
            // Set/override currentNode's info
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // This is a single-node tree; do nothing
          }
          // If there is a parent node, there's only one child, and the node we're removing is a left node
        } else if (parentNode.left === currentNode) {
          // Set the left for the parent node to the left or right node depending on which one exists (remember, at this point, there can only be one child! See conditional statements above on line 69)
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.right;
          // If there is a parent node, there's only one child, and the node we're removing is a right node
        } else if (parentNode.right === currentNode) {
          // Set the right for the parent node to the left or right node depending on which one exists (remember, at this point, there can only be one child! See conditional statements above on line 69)
          parentNode.right = currentNode.left
            ? currentNode.left
            : currentNode.right;
        }
        // break out of loop to stop once we get here, b/c we've removed our node
        break;
      }
    }
    return this;
  }
  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

//      10
//   5     13
// 2  7  11  16

/*
Psuedocode for node removal:

If node is a leaf, then it's our easiest case: just set the connection btw child and parent node to null instead of child node.

If node has only one child, then we can grab the node's child and set the child of the node's parent to the node's child.

Becomes harder when the node to remove has two children:
You have to grab the value of the smallest node in the right subtree of the node to be removed. Set that value to the value of the node to be "removed", and then remove that node that has the smallest value. In example above:
- Say we wanted to remove node with value 10
    - Grab value of 11 (smallest node in right subtree of 10)
    - Change value of 10 node to say 11
    - Remove node of value 11, and you're good!
*/

var tree = new BinarySearchTree();
tree.insert(10);
console.log('INSERT: ', tree);
tree.insert(5);
console.log('INSERT: ', tree);
tree.insert(13);
console.log('INSERT: ', tree);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log('INSERT: ', tree);
