class Segments {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  rotate(origin) {
    let va = p5.Vector.sub(this.a, origin);
    let vb = p5.Vector.sub(this.b, origin);
    va.rotate(-PI / 2);
    vb.rotate(-PI / 2);
    let newA = p5.Vector.add(origin, va);
    let newB = p5.Vector.add(origin, vb);
    let newSegment = new Segments(newA, newB);

    return newSegment;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
