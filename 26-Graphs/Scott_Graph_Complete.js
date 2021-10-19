// We are building an undirected graph via Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Add a vertex (no edges yet) to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // Add an edge between two verticies (NOTE: no error handling here)
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  // Remove an edge between two verticies (NOTE: no error handling here)
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
  }
  // Remove a vertex (NOTE: no error handling here)
  removeVertex(vertex) {
    // Remove each edge from vertext to be removed
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      this.removeEdge(vertex, this.adjacencyList[vertex][i]);
    }
    // Delete the vertex
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Tokyo', 'Aspen');
console.log(g.adjacencyList);
g.removeEdge('Aspen', 'Dallas');
console.log(g.adjacencyList);
g.removeVertex('Dallas');
console.log(g.adjacencyList);
