let segments = [];

function setup() {
  createCanvas(400, 400);

  const a = createVector(100, 250);
  const b = createVector(100, 200);

  segments.push(new Segments(a, b));
}

function mousePressed() {
  let segment = segments[0];
  let newSegment = segment.rotate(segment.b);
  segments.push(newSegment);
}

function draw() {
  background(220);

  for (let segment of segments) {
    segment.show();
  }
}
