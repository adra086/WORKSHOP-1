function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function drawRandomCircle() {
  let x = random(width); 
  let y = random(height); 
  let size = random(10, 50); 
  
  fill(random(255), random(255), random(255)); 
  noStroke();  
  ellipse(x, y, size, size); 
}

function drawRandomRectangles() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = i * 80 + 40; 
      let y = j * 80 + 40; 
      let width = random(30, 70); 
      let height = random(30, 70); 
      fill(random(255), random(255), random(255)); 
      noStroke(); 
      rect(x, y, width, height); 
    }
  }
}

function setup() {
  createCanvas(400, 400); 
  background(220); 
  
 
  drawRandomCircle(); 
  drawRandomRectangles(); 
}

function draw() {

  drawRandomCircle(); 
}

// Function to draw a random circle at a random position (random x/y position, random colour & random size & no outline)
// Function to draw random rectangles in a grid pattern (random x/y position, random width/height, random colour & no outline)
// Function for 'setup' as creating background, colour, and canvas
// Functiont to draw random circle and grid of random rectangles
// Function to continuously draw random circles on each frame



