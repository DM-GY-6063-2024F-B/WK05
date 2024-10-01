function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  for (let x = 0; x < width; x += 2) {
    ellipse(x, height / 2, 100);
  }
}

function draw() {}
