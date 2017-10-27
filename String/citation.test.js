const name = require('./citation')

describe('Citation Name', () => {
  test('formatting case citation', () => {
    let person = 'Luiz Carlos Rodrigues Chaves'
    expect(name.citation(person)).toBe('CHAVES; Luiz Carlos Rodrigues')
  })

  test('formatting short form case citation', () => {
    let person = 'Luiz Carlos Rodrigues Chaves'
    expect(name.compactCitation(person)).toBe('CHAVES; L. C. R.')
  })
})
