let segments = [];
let endPoint;
let zoomSlider;
let amountOfClicks = 0;

function setup() {
  createCanvas(400, 400);

  const a = createVector(0, 10);
  const b = createVector(0, 0);
  endPoint = b;

  segments.push(new Segments(a, b));

  zoomSlider = createSlider(0.1, 3, 3, 0.01);
  zoomSlider.style("width", "100px");
}

function mousePressed() {
  if (amountOfClicks >= 15) return;
  let newSegments = [];

  for (let segment of segments) {
    let newSegument = segment.rotate(endPoint);
    newSegments.push(newSegument);
  }

  endPoint = newSegments[0].a;

  segments = segments.concat(newSegments);

  amountOfClicks++;
}

function draw() {
  background(220);

  translate(width / 2, height / 2);
  scale(zoomSlider.value());

  for (let segment of segments) {
    segment.show();
  }

  // stroke(255, 0, 0);
  // strokeWeight(4);
  // point(endPoint.x, endPoint.y);
}
