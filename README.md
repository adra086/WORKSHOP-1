# WORKSHOP-1
### Link to repository for Workshop 1: https://github.com/adra086/WORKSHOP-1

## Overview

### Use the p5.js library to create dynamic sketches using 2D pWorkshop 1: Dynamic Visuals with p5.js This workshop focused on using the p5.js library to create dynamic sketches featuring random numbers, custom functions, and 2D primitive shapes. The project incorporates random circles and rectangles arranged in a grid pattern, demonstrating randomization and continuous drawing loops.

## Learning Objectives

- Learn how to use the p5.js library to create dynamic visuals.

- Modularize code with custom functions to simplify sketch creation.

- Use random() for variability in shape properties.

- Create grids using 2D primitive shapes like circles and rectangles.

- Experiment with loops to draw patterns efficiently.

- Document the development process thoroughly.

## Project Description

### The project dynamically generates:

- Random Circles: Circles with randomized positions, sizes, and colors.

- Grid of Rectangles: A grid of rectangles with randomized dimensions and colors.

- The project demonstrates continuous drawing by updating the canvas every frame using the draw() function.

## Key Features

### Custom Functions:

- drawRandomCircle() to generate random circles.

- drawRandomRectangles() to create a grid of rectangles.

### Randomization:

- random() is used for positioning, size, and color properties of shapes.

### Efficient Looping:

- Nested for loops efficiently create a grid of rectangles.

### No Outlines:

- noStroke() removes shape outlines for a clean visual appearance.

## Code Explanation

### 1. Canvas Setup
#### Code Extract: 

function setup() {
  createCanvas(400, 400);
  background(220);
}

#### Code Description: 

- createCanvas(400, 400); defines a 400x400-pixel drawing area.

- background(220); sets a light gray background.

#### Outcome/Screenshot: 
![image](https://github.com/user-attachments/assets/1ff856c4-cc6e-4346-87ee-76cb8e618dd0)

### 2. Random Circles
#### Code Extract: 

function drawRandomCircle() {
  let x = random(width);
  let y = random(height);
  let diameter = random(10, 50);
  fill(random(255), random(255), random(255));
  ellipse(x, y, diameter);
}

#### Code Description: 

- random(width) and random(height) set random x and y positions within the canvas dimensions.

- random(10, 50) sets a random diameter between 10 and 50 pixels.

- fill(random(255), random(255), random(255)); assigns a random RGB color.

- ellipse(x, y, diameter); draws the circle.

#### Outcome/Screenshot:
![image](https://github.com/user-attachments/assets/0c0e733a-84a5-4640-a3b3-b2604726df30)

### 3. Grid of Rectangles
#### Code Extract: 

function drawRandomRectangles() {
  let cols = 8;
  let rows = 8;
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;
      fill(random(255), random(255), random(255));
      rect(x, y, cellWidth * random(0.5, 1), cellHeight * random(0.5, 1));
    }
  }
}

#### Code Description: 

- cols and rows define the number of rectangles in the grid.

- cellWidth and cellHeight calculate the dimensions of each grid cell.

- Nested for loops iterate through grid positions, calculating x and y for each rectangle.

- fill(random(255), random(255), random(255)); assigns a random RGB color.

- rect(x, y, ...) draws rectangles at calculated positions with randomized dimensions.

#### Outcome/Screenshot:
![image](https://github.com/user-attachments/assets/61c29b54-af10-4db2-b7a4-399f27fae2ce)

### 4. Continuous Drawing
#### Code Extract: 

function draw() {
  drawRandomCircle();
}

#### Code Description:

- draw() is called repeatedly, continuously generating random circles.

- This creates a dynamic, ever-changing visual effect.

#### Outcome/Screenshot:

![image](https://github.com/user-attachments/assets/9fa61a2c-e49c-4f50-aff1-b4986275f870)

### 5. Combining Functions
#### Code Extract:

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  drawRandomRectangles();
}

function draw() {
  drawRandomCircle();
}

#### Code Description: 
- Combines drawRandomRectangles() in setup() for static grid creation and drawRandomCircle() in draw() for dynamic circle generation.

- noStroke(); ensures no outlines for all shapes.

#### Outcome/Screenshot:
![image](https://github.com/user-attachments/assets/da5abaf9-6db0-4151-8903-63844f8cb4e5)

## Documentation Improvements

### Problem-Solving:

~ Debugged errors in grid alignment by verifying loop calculations.

~ Adjusted randomization ranges to achieve better visual balance.

## Helpful Resources:

~ p5.js Reference Documentation

~ p5.js Tutorials

~ Use of ChatGPT
    - ChatGPT was used for troubleshooting and refining the code:
        > Clarified the behavior of random() and loops for grid creation.
        > Provided suggestions for optimizing custom functions.
        > Helped debug alignment issues in the rectangle grid.
    This assistance improved my understanding of randomization, looping, and modularization in p5.js.



Learning Highlights

    - Randomization (random()) added dynamic quality and continuous drawing.
    - Loops were used effectively for creating grids.
    - Custom functions made the code reusable to simplify complex patterns.
    - Used noStroke() to remove shape outlines and improve visual appeal.
