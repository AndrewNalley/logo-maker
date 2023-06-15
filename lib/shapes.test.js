// Each shape class should be tested for a render() method that
// returns a string for the corresponding SVG file with the given
// shape option.

// tests for different shapes
const { Shape, Triangle, Circle, Square } = require('./shapes');
const shapeOptions = {
    text: 'YAY',
    shapeColor: 'green',
    textColor: 'white',
    color: 'blue'
};

// test for Shape
describe('Shape', function () {
    it('should have text', function () {
        let shape = new Shape(shapeOptions);
        expect(shape.text).toEqual('YAY');
    });
    it('should have shapeColor', function () {
        let shape = new Shape(shapeOptions);
        expect(shape.shapeColor).toEqual('green');
    });
    it('should have textColor', function () {
        let shape = new Shape(shapeOptions);
        expect(shape.textColor).toEqual('white');
    });
    it('should have color', function () {
        let shape = new Shape(shapeOptions);
        expect(shape.color).toEqual('blue');
    });
    it('should have a render method that returns a string', function () {
        let shape = new Shape(shapeOptions);
        let result = shape.render();
        expect(typeof result).toBe('string');
      });
});
// test for Triangle
describe('Triangle', function () {
    it('should have text', function () {
        var triangle = new Triangle(shapeOptions);
        expect(triangle.text).toEqual('YAY');
    });
    it('should have shapeColor', function () {
        var triangle = new Triangle(shapeOptions);
        expect(triangle.shapeColor).toEqual('green');
    });
    it('should have textColor', function () {
        var triangle = new Triangle(shapeOptions);
        expect(triangle.textColor).toEqual('white');
    });
    it('should have color', function () {
        var triangle = new Triangle(shapeOptions);
        expect(triangle.color).toEqual('blue');
    });
    it('should have a render method that returns a string', function () {
        let shape = new Triangle(shapeOptions);
        let result = shape.render();
        expect(typeof result).toBe('string');
      });
});

// test for Circle
describe('Circle', function () {

    it('should create a circle', function () {
        var circle = new Circle(shapeOptions);
        expect(circle.text).toEqual('YAY');
    });
    it('should have shapeColor', function () {
        var circle = new Circle(shapeOptions);
        expect(circle.shapeColor).toEqual('green');
    });
    it('should have textColor', function () {
        var circle = new Circle(shapeOptions);
        expect(circle.textColor).toEqual('white');
    });
    it('should have color', function () {
        var circle = new Circle(shapeOptions);
        expect(circle.color).toEqual('blue');
    });
    it('should have a render method that returns a string', function () {
        let shape = new Circle(shapeOptions);
        let result = shape.render();
        expect(typeof result).toBe('string');
      });
});

// test for Square
describe('Square', function () {
    it('should create a square', function () {
        var square = new Square(shapeOptions);
        expect(square.text).toEqual('YAY');
    });
    it('should have shapeColor', function () {
        var square = new Square(shapeOptions);
        expect(square.shapeColor).toEqual('green');
    });
    it('should have textColor', function () {
        var square = new Square(shapeOptions);
        expect(square.textColor).toEqual('white');
    });
    it('should have color', function () {
        var square = new Square(shapeOptions);
        expect(square.color).toEqual('blue');
    });
    it('should have a render method that returns a string', function () {
        let shape = new Square(shapeOptions);
        let result = shape.render();
        expect(typeof result).toBe('string');
      });
});
