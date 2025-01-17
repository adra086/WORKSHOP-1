# WORKSHOP-1

## Overview

Use the p5.js library to create dynamic sketches using 2D primitive shapes, random numbers, and custom functions. This sketch incorporates a combination of random circles and rectangles in a grid pattern using random and continuous loops of creation.

## Learning Objectives

    - Learn how to use the p5.js library to create dynamic visuals.
    - Use custom functions to modularize code and simplify sketch creation.
    - Explore random() to add variability to shapes and properties.
    - Use 2D primitive shapes such as circles and rectangles for creative patterns.
    - Experiment with loops to draw a grid of shapes.
    - Document the process during development.

## Process Notes
### Setup and Canvas Creation

    - Used the setup() function to:
        > Define the canvas size with createCanvas(400, 400).
        > Set the initial background using background(220).

### Custom Functions

    - drawRandomCircle():
        > Draws a circle with random x & y position, size, and color.
        > Demonstrated how to use random() to control x/y position, diameter, and fill color.
    - drawRandomRectangles():
        > Creates a grid of rectangles with randomized width, height, and color.
        > Used nested loops to draw through the grid.

### Random Numbers

    - Used the random() function to:
        > Randomize shape positions and dimensions.
        > Add variability to colors, ensuring each shape is unique.

Continuous Drawing

    - The draw() function continuously calls drawRandomCircle() to add random circles on each frame, creating a dynamic animation.

Learning Highlights

    - Randomization (random()) added dynamic quality and continuous drawing.
    - Loops were used effectively for creating grids.
    - Custom functions made the code reusable to simplify complex patterns.
    - Used noStroke() to remove shape outlines and improve visual appeal.
