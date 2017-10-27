const calendar = require('./calendar')

describe('Calendar', () => {

  test('making month starting on Sunday and ending on the 31st', () => {
    expect(calendar('DOM', 31)).toBe(
`DOM SEG TER QUA QUI SEX SAB
 01  02  03  04  05  06  07
 08  09  10  11  12  13  14
 15  16  17  18  19  20  21
 22  23  24  25  26  27  28
 29  30  31`
    )
  })

  test('making month starting on Monday and ending on the 31st', () => {
    expect(calendar('SEG', 31)).toBe(
`DOM SEG TER QUA QUI SEX SAB
     01  02  03  04  05  06
 07  08  09  10  11  12  13
 14  15  16  17  18  19  20
 21  22  23  24  25  26  27
 28  29  30  31`
    )
  })

  test('making month starting on Tuesday and ending on the 30st', () => {
    expect(calendar('TER', 30)).toBe(
`DOM SEG TER QUA QUI SEX SAB
         01  02  03  04  05
 06  07  08  09  10  11  12
 13  14  15  16  17  18  19
 20  21  22  23  24  25  26
 27  28  29  30`
    )
  })

  test('making month starting on Wednesday and ending on the 29st', () => {
    expect(calendar('QUA', 29)).toBe(
`DOM SEG TER QUA QUI SEX SAB
             01  02  03  04
 05  06  07  08  09  10  11
 12  13  14  15  16  17  18
 19  20  21  22  23  24  25
 26  27  28  29`
    )
  })

  test('making month starting on Saturday and ending on the 31st', () => {
    expect(calendar('SAB', 31)).toBe(
`DOM SEG TER QUA QUI SEX SAB
                         01
 02  03  04  05  06  07  08
 09  10  11  12  13  14  15
 16  17  18  19  20  21  22
 23  24  25  26  27  28  29
 30  31`
    )
  })

})
