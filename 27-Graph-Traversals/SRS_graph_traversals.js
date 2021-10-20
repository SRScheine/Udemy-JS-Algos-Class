class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    // Save variables for our result, verticies visited, and our adjacency list
    const result = [];
    const visited = {};
    // Need to do this b/c of "this" context within the helper function
    const adjacencyList = this.adjacencyList;

    // Helper function to do our DFS recusion
    function dfs(vertex) {
      // If vertex is empty / doesn't exist, return null
      if (!vertex) return null;
      // Place vertex into visited object
      visited[vertex] = true;
      // Push newly visited vertex into result
      result.push(vertex);
      // Loop over all values in the adjacency list for that vertex
      adjacencyList[vertex].forEach((neighbor) => {
        // If we have not visited the neighbor, recursively call dfs on that neighbor
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    }
    // Invoke helper function
    dfs(start);
    // Return the result array
    return result;
  }
  // Look at class solution for slightly more performant method (less verticies added to stack)
  depthFirstIterative(start) {
    // Create list to store results and object to store visited verticies
    const result = [];
    const visited = {};
    // Create a stack to keep track of all verticies
    const stack = [start];
    // While there are still verticies on that stack...
    while (stack.length) {
      // Pop off vertex from the stack
      let vertex = stack.pop();
      // If we have not visited that vertex before...
      if (!visited[vertex]) {
        // Add it to visited object, push it to the results array, and push its
        // neighbors onto the stack
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => stack.push(neighbor));
      }
    }
    // Return the results
    return result;
  }
  breadthFirst(start) {
    // Create list to store results and object to store visited verticies
    const result = [];
    const visited = {};
    // Create a queue to keep track of all verticies
    const queue = [start];
    // Mark starting vertex as visited
    visited[start] = true;
    // While there is something in the queue...
    while (queue.length) {
      // Remove first vertex from queue and push it into results
      let vertex = queue.shift();
      result.push(vertex);
      // For each neighbor of this vertex...
      this.adjacencyList[vertex].forEach((neighbor) => {
        // If we have not visited this neighbor before, set visited to true and push it into the queue
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    // Return the result
    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
// console.log(g.depthFirstRecursive('A'));
// console.log(g.depthFirstIterative('A'));
console.log(g.breadthFirst('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
