// The application must include Triangle, Circle, and Square classes,
// as well as tests for each of these classes using Jest. While not
// a requirement, it is recommended that you place any common
// functionality and properties shared by the Triangle, Circle, and
// Square classes in a parent Shape class and use inheritance to
// reuse the code in the child classes.

// Each shape class should be tested for a render() method that
// returns a string for the corresponding SVG file with the given
// shape option.

// parent class Shape
class Shape {
  constructor(options) {
    this.color = options.color;
    this.text = options.text;
    this.textColor = options.textColor;
    this.shape = options.shape;
    this.shapeColor = options.shapeColor;
  }

  render() {
    return `<svg version="1.1" width="300" height="200"/>
    <rect width="100%" height="100%" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" style="z-index: 2;">${this.text}</text>`;
  }
}

// child class Triangle
class Triangle extends Shape {
  constructor(options) {
    super(options);
  }
  // code to draw the triangle
  render() {
    return `${super.render()}<polygon points="150,20 50,180 250,180" fill="${this.shapeColor}"/></svg>`;
  }
}

// child class Circle
class Circle extends Shape {
  constructor(options) {
    super(options);
  }
  // code to draw the circle
  render() {
    return `${super.render()}<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /></svg>`;
  }
}

// child class Square
class Square extends Shape {
  constructor(options) {
    super(options);
  }
  // code to draw the square
  render() {
    return `${super.render()} <rect x="10" y="10" width="100" height="100" fill="${this.shapeColor}"/></svg>`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
