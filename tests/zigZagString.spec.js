
const { zigZagString } = require('../unsolved/zigZagString')

describe('zigZag string', () => {
  test('It should return the same string if numRows is 1', ()  => {
    expect(zigZagString('ABC', 1)).toEqual('ABC')
  })
  test('It should return the correct zigzag word', () => {
    expect(zigZagString('PAYPALISHIRING', 1)).toEqual('PAYPALISHIRING')
    expect(zigZagString('PAYPALISHIRING', 100)).toEqual('PAYPALISHIRING')
    expect(zigZagString('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
    expect(zigZagString('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI')
    expect(zigZagString('A', 4)).toEqual('A')
    expect(zigZagString('A', 1)).toEqual('A')
  })
})