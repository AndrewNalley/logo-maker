// tests for different shapes
const { Triangle, Circle, Square } = require('./shapes');

// test for Triangle
describe('Triangle', function() {
    it('should create a triangle', function() {
        var triangle = new Triangle(10, 20, 30);
        expect(triangle.width).toEqual(10);
        expect(triangle.height).toEqual(20);
        expect(triangle.x).toEqual(10);
        expect(triangle.y).toEqual(20);
        expect(triangle.sides).toEqual(30);
        expect(triangle.area()).toEqual(100);
        expect(triangle.perimeter()).toEqual(200);
    });
});

// test for Circle
describe('Circle', function() { 

    it('should create a circle', function() {
        var circle = new Circle(10);
        expect(circle.radius).toEqual(10);
        expect(circle.x).toEqual(10);
        expect(circle.y).toEqual(10);
    });
});

// test for Square
describe('Square', function() {
    it('should create a square', function() {
        var square = new Square(10);
        expect(square.width).toEqual(10);
        expect(square.height).toEqual(10);
        expect(square.x).toEqual(10);
        expect(square.y).toEqual(10);
        expect(square.area()).toEqual(100);
        expect(square.perimeter()).toEqual(100);
    });
});

