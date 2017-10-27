const total = require('./products')

describe('Cart Tool', () => {

  const produtos = [
    ['Bicicleta', 1200.0],
    ['Capacete', 450.0]
  ]

  test('counting total cart', () => {
    expect(total(produtos)).toBe(1650.0)
  })

})
