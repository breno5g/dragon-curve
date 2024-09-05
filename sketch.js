let segments = [];
let endPoint;

function setup() {
  createCanvas(400, 400);

  const a = createVector(200, 200);
  const b = createVector(200, 190);
  endPoint = b;

  segments.push(new Segments(a, b));
}

function mousePressed() {
  let newSegments = [];

  for (let segment of segments) {
    let newSegument = segment.rotate(endPoint);
    newSegments.push(newSegument);
  }

  endPoint = newSegments[0].a;

  segments = segments.concat(newSegments);
}

function draw() {
  background(220);

  for (let segment of segments) {
    segment.show();
  }

  stroke(255, 0, 0);
  strokeWeight(4);
  point(endPoint.x, endPoint.y);
}
