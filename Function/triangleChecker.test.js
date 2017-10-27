// JavaScript Document
const tc = require('./triangleChecker')
/*
console.log(triangleChecker(2, 2, 2))    //=> equilateral
console.log(triangleChecker(10, 10, 10)) //=> equilateral

console.log(triangleChecker(3, 4, 4))    //=> isosceles
console.log(triangleChecker(4, 3, 4))    //=> isosceles
console.log(triangleChecker(4, 4, 3))    //=> isosceles
console.log(triangleChecker(10, 10, 2))  //=> isosceles

console.log(triangleChecker(3, 4, 5))    //=> scalene
console.log(triangleChecker(10, 11, 12)) //=> scalene
console.log(triangleChecker(5, 4, 2))    //=> scalene

console.log(triangleChecker(0, 0, 0))    //=> none
console.log(triangleChecker(3, 4, -5))   //=> none
console.log(triangleChecker(1, 1, 3))    //=> none
console.log(triangleChecker(2, 4, 2))    //=> none
*/
test('Triangulo Equilátero com 2,2,2', () => {
  expect(tc(2,2,2)).toBe('equilátero');
});

test('Triangulo Equilátero com 10, 10, 10)', () => {
  expect(tc(10, 10, 10)).toBe('equilátero');
});

test('Triangulo Isósceles com 3, 4, 4)', () => {
  expect(tc(3, 4, 4)).toBe('isósceles');
});

test('Triangulo Isósceles com 4, 3, 4)', () => {
  expect(tc(4, 3, 4)).toBe('isósceles');
});

test('Triangulo Isósceles com 4, 4, 3)', () => {
  expect(tc(4, 4, 3)).toBe('isósceles');
});

test('Triangulo Isósceles com 10, 10, 2)', () => {
  expect(tc(10, 10, 2)).toBe('isósceles');
});

test('Triangulo Escaleno com 3, 4, 5)', () => {
  expect(tc(3, 4, 5)).toBe('escaleno');
});

test('Triangulo Escaleno com 10, 11, 12)', () => {
  expect(tc(3, 4, 5)).toBe('escaleno');
});

test('Triangulo Escaleno com 5, 4, 2)', () => {
  expect(tc(5, 4, 2)).toBe('escaleno');
});

test('Não é Triangulo com 0, 0, 0)', () => {
  expect(tc(0, 0, 0)).toBe('none');
});

test('Não é Triangulo com 3, 4, -5)', () => {
  expect(tc(3, 4, -5)).toBe('none');
});

test('Não é Triangulo com 1, 1, 3)', () => {
  expect(tc(1, 1, 3)).toBe('none');
});

test('Não é Triangulo com 2, 4, 2)', () => {
  expect(tc(2, 4, 2)).toBe('none');
});

