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
});
// test for Triangle
describe('Triangle', function () {
    it('should create a triangle', function () {
        var triangle = new Triangle(shapeOptions);
        expect(triangle.shapeColor).toEqual('green');

    });
});

// test for Circle
describe('Circle', function () {

    it('should create a circle', function () {
        var circle = new Circle(10);
        expect(circle.radius).toEqual(10);
    });
});

// test for Square
describe('Square', function () {
    it('should create a square', function () {
        var square = new Square(10);
        expect(square.width).toEqual(10);
    });
});
