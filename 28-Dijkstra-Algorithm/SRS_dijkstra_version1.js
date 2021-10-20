// Dijkstra w/ Naive Priority Queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    // Create our priority queue
    const nodes = new PriorityQueue();
    // Create variables for our distances obj, previous obj, and the final path
    // Distance obj = for each vertex: distance btw starting vertex and given vertex
    // Previous obj = for each vertex: previous vertex that gets you to the given vertex the fastest
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;
    // build up initial state
    for (let vertex in this.adjacencyList) {
      // If the vertex is the starting vertex...
      if (vertex === start) {
        // Set distance btw start and vertex to 0 and add that vertex to the priority queue
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
        // Otherwise...
      } else {
        // Set distance btw start and vertex to Infinity and add that vertex to the priority queue
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
        // Remember: when we enqueue, we sort the queue by min priority, so we can just add things to the
        // queue without thinking about where they should be going
      }
      // For each vertex, set previous of that vertex to null
      previous[vertex] = null;
    }
    // as long as there is a vertex still to visit
    while (nodes.values.length) {
      // Dequeue vertex from priority queue
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (
          let neighbor = 0;
          neighbor < this.adjacencyList[smallest].length;
          neighbor++
        ) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    // Right now, the path is reversed and doesn't include start vertex, so update and return
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.Dijkstra('A', 'E'));

// ["A", "C", "D", "F", "E"]
