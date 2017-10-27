
const array = require('./array-operations')

test('adding values from an array', () => {
  let arr = [1, 2, 3]
  expect(array.sum(arr)).toBe(6)
  arr = [2, 2, 2]
  expect(array.sum(arr)).toBe(6)
  arr = [1, 2, 3, 4, 5, 6]
  expect(array.sum(arr)).toBe(21)
})

test('adding odd values from an array', () => {
  let arr = [1, 2, 3]
  expect(array.sumOdds(arr)).toBe(4)

  arr = [2, 2, 2]
  expect(array.sumOdds(arr)).toBe(0)

  arr = [1, 2, 3, 4, 5, 6]
  expect(array.sumOdds(arr)).toBe(9)
})

test('multiplying values from an array', () => {
  arr = [1, 2, 3]
  expect(array.product(arr)).toBe(6)

  arr = [2, 2, 2]
  expect(array.product(arr)).toBe(8)

  arr = [1, 2, 3, 4, 5, 6]
  expect(array.product(arr)).toBe(720)
})

test('adding a matrix by another matrix', () => {
  let a = [[3, 8], [4, 6]]
  let b = [[4, 0], [1, -9]]
  expect(array.addingMatrix(a, b)).toEqual([[7, 8], [5, -3]])
})

test('multiplying a matrix by another matrix', () => {
  let a = [[1, 2, 3], [4, 5, 6]]
  let b = [[7, 8], [9, 10], [11, 12]]
  expect(array.multiplyingMatrix(a, b)).toEqual([[58, 64], [139, 154]])
})
