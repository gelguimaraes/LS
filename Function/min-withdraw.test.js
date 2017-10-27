const withdraw = require('./min-withdraw')

describe('Minimum withdraw', () => {

  test('minimum of 1280', () => {
    expect(withdraw(1280).toEqual([[100, 12], [50, 1], [20, 1], [10, 1]])
  })

})