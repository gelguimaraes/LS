const total = require('./products')

describe('Cart Tool', () => {

  const produtos = [
    {
      nome: 'Bicicleta',
      preco: 1200.0
    },
    {
      nome: 'Capacete',
      preco: 450.0
    }
  ]

  test('counting total cart', () => {
    expect(total(produtos)).toBe(1650.0)
  })

})
