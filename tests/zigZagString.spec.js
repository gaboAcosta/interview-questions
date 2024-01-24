
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { zigZagString } = require(path.resolve(path.join(targetDir, 'zigZagString.js')))

describe('zigZag string', () => {
  it('It should return the same string if numRows is 1', ()  => {
    expect(zigZagString('ABC', 1)).toEqual('ABC')
  })
  it('It should return the correct zigzag word', () => {
    expect(zigZagString('PAYPALISHIRING', 1)).toEqual('PAYPALISHIRING')
    expect(zigZagString('PAYPALISHIRING', 100)).toEqual('PAYPALISHIRING')
    expect(zigZagString('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
    expect(zigZagString('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI')
    expect(zigZagString('A', 4)).toEqual('A')
    expect(zigZagString('A', 1)).toEqual('A')
  })
})