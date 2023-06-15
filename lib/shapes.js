// parent class Shape
class Shape {
  constructor(options) {
    this.color = options.color;
    this.text = options.text;
    this.textColor = options.textColor;
    this.shapeColor = options.shapeColor;
  }
  getPreContent() {
    return `<svg version="1.1" width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${this.color}" />`;
  }

  getPostContent() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" style="z-index: 2;">${this.text}</text></svg>`;
  }

  render() {
    const preContent = this.getPreContent();
    const postContent = this.getPostContent();

    return preContent + postContent;
  }
}

// child class Triangle
class Triangle extends Shape {
  constructor(options) {
    super(options);
  }
  // code to draw the triangle
  render() {
    const parentContent = super.render();
    const triangleContent = `<polygon points="150,10 30,160 270,160" fill="${this.shapeColor}" />`;
    const preContent = this.getPreContent(); // Access preContent from the parent class
    const postContent = this.getPostContent(); // Access postContent from the parent class

    // Concatenate the contents in proper order
    return preContent + triangleContent + postContent;
  }
}

// child class Circle
class Circle extends Shape {
  constructor(options) {
    super(options);
  }
  // code to draw the circle
  render() {
    const parentContent = super.render();
    const circleContent = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    const preContent = this.getPreContent(); 
    const postContent = this.getPostContent(); 

    return preContent + circleContent + postContent;
  }
}

// child class Square
class Square extends Shape {
  constructor(options) {
    super(options);
  }
  // code to draw the square
  render() {
    const parentContent = super.render();
    const rectangleContent = `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
    const preContent = this.getPreContent(); 
    const postContent = this.getPostContent(); 

    return preContent + rectangleContent + postContent;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
