// Set up canvas and colors
function setup() {
  createCanvas(800, 600);
  stroke(255); // White outline
  noFill(); // No fill for shapes
  drawGarden(); // Draw the garden background
}

// Draw the garden background
function drawGarden() {
  background(0, 100, 0); // Green background
  fill(200, 200, 0); // Yellow sun
  ellipse(100, 100, 80, 80); // Sun
  fill(0, 200, 0); // Dark green grass
  rect(0, height - 100, width, 100); // Grass
  fill(0, 150, 0); // Light green grass
  for (var i = 0; i < width; i += 20) {
    var grassHeight = random(50, 100);
    rect(i, height - 100, 20, grassHeight);
  }
}

// Create a random plant based on mouse click
function mouseClicked() {
  // Choose a random location for the plant
  var x = mouseX;
  var y = mouseY;
  
  // Choose a random color for the plant
  var r = random(150, 255);
  var g = random(50, 150);
  var b = random(50, 150);
  stroke(r, g, b);
  
  // Draw the stem of the plant
  var stemHeight = random(50, 200);
  var stemWidth = random(5, 20);
  var stemCurve = random(-30, 30);
  beginShape();
  curveVertex(x - stemWidth/2, y);
  curveVertex(x - stemWidth/2, y);
  curveVertex(x, y - stemHeight/2);
  curveVertex(x + stemWidth/2, y);
  curveVertex(x + stemWidth/2, y);
  endShape();
  
  // Draw the leaves of the plant
  var numLeaves = round(random(2, 5));
  var leafSize = random(20, 50);
  for (var i = 0; i < numLeaves; i++) {
    var leafX = random(x - stemWidth/2, x + stemWidth/2);
    var leafY = random(y - stemHeight/2, y - stemHeight/2 - leafSize);
    var leafCurve = random(-20, 20);
    beginShape();
    curveVertex(leafX - leafSize/2, leafY);
    curveVertex(leafX - leafSize/2, leafY);
    curveVertex(leafX, leafY - leafSize/2);
    curveVertex(leafX + leafSize/2, leafY);
    curveVertex(leafX + leafSize/2, leafY);
    endShape();
  }
}
