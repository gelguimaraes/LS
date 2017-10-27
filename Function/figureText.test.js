const figure = require('./figureText')

describe('Figure Text Tool', () => {

  test('making triangle text with size 1', () => {
    expect(figure.triangleText(1)).toBe(
      '#'
    )
  })

  test('making triangle text with size 2', () => {
    expect(figure.triangleText(2)).toBe(
      '# \n'+
      '##'
    )
  })

  test('making triangle text with size 3', () => {
    expect(figure.triangleText(3)).toBe(
      '#  \n'+
      '## \n'+
      '###'
    )
  })

  test.skip('making half diamond text with size 1', () => {
    expect(figure.halfDiamondText(1)).toBe(
      '#'
    )
  })

  test.skip('making half diamond text with size 2', () => {
    expect(figure.halfDiamondText(2)).toBe(
      '# \n'+
      '##\n'+
      '# '
    )
  })

  test.skip('making half diamond text with size 3', () => {
    expect(figure.halfDiamondText(3)).toBe(
      '#  \n'+
      '## \n'+
      '###\n'+
      '## \n'+
      '#  '
    )
  })

})