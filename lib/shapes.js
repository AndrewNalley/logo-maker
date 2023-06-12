// The application must include Triangle, Circle, and Square classes, 
// as well as tests for each of these classes using Jest. While not 
// a requirement, it is recommended that you place any common 
// functionality and properties shared by the Triangle, Circle, and 
// Square classes in a parent Shape class and use inheritance to 
// reuse the code in the child classes.

// Each shape class should be tested for a render() method that 
// returns a string for the corresponding SVG file with the given 
// shape color.

// parent class Shape
class Shape {
  constructor(color, text, textColor, shape) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
  }

  // render() {
  //   return `<svg width="300" height="200" viewBox="0 0 300 200" fill="${this.color}">
  //   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" />
  //   <path d="M 50 50 L 100 50" stroke="black" stroke-width="2" />
  // </svg>`;
  // }
}

// child class Triangle
class Triangle extends Shape {
  constructor(color) {
    super(color);
    // code to draw the triangle
    this.render();
  }
}

// child class Circle
class Circle extends Shape {
  constructor(color) {
    super(color);
    // code to draw the circle
    this.render();
  }
}

// child class Square
class Square extends Shape {
  constructor(color) {
    super(color);
    // code to draw the square
    this.render();
  }
}

module.exports = { Shape, Triangle, Circle, Square };