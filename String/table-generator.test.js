const md2html = require('./table-generator')

describe('Table Generator', () => {
  test('making text table', () => {
    let expected = `1.1 1.2 1.3 1.4
2.1 2.2 2.3 2.4
3.1 3.2 3.3 3.4`

    expect(md2html.createTable(3, 4)).toBe(expected)
  })

  test('making text table', () => {
    let expected = `Item 1.1 Item 1.2 Item 1.3 Item 1.4
Item 2.1 Item 2.2 Item 2.3 Item 2.4
Item 3.1 Item 3.2 Item 3.3 Item 3.4`

    expect(md2html.createTable(3, 4, 'Item')).toBe(expected)
  })

  test('making HTML table', () => {
    let expected = `<table>
  <tr>
    <td>Item 1.1</td>
    <td>Item 1.2</td>
    <td>Item 1.3</td>
    <td>Item 1.4</td>
  </tr>
  <tr>
    <td>Item 2.1</td>
    <td>Item 2.2</td>
    <td>Item 2.3</td>
    <td>Item 2.4</td>
  </tr>
  <tr>
    <td>Item 3.1</td>
    <td>Item 3.2</td>
    <td>Item 3.3</td>
    <td>Item 3.4</td>
  </tr>
</table>`

    expect(md2html.createTableHTML(3, 4)).toBe(expected)
  })
})