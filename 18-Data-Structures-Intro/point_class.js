class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // This is a utility method! Can only be called on the Point class, not a specific Point Instance
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
