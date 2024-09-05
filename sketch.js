let segments = [];

function setup() {
  createCanvas(400, 400);

  const a = createVector(200, 100);
  const b = createVector(200, 300);

  segments.push(new Segments(a, b));
}

function draw() {
  background(220);

  for (let segment of segments) {
    segment.show();
  }
}
