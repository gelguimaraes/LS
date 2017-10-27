// JavaScript Document
const fibonacci = require('./fibonacci')

/*test('Fibonacci series with 4 numbers is 0,1,1,2', () => {
  expect(fibonacci(4)).toEqual([0,1,1,2]);
});

test('Fibonacci series with 6 numbers is 0,1,1,2,3,5', () => {
  expect(fibonacci(6)).toEqual([0,1,1,2,3,5]);
});*/

test('Fibonacci series with 4 numbers is 0,1,1,2', () => {
  expect(fibonacci(4)).toBe('0,1,1,2');
});

test('Fibonacci series with 6 numbers is 0,1,1,2,3,5', () => {
  expect(fibonacci(6)).toBe('0,1,1,2,3,5');
});