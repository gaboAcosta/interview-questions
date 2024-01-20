
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { multiDateStockTrade } = require(path.resolve(path.join(targetDir, 'multiDateStockTrade.js')))

describe('oneDateStockTrade', () => {
  it('Should return 7', () => {
    const result = multiDateStockTrade([7,1,5,3,6,4])
    expect(result).toEqual(7)
  })
  it('Should return 0 if theres no ideal trade pair', () => {
    const result = multiDateStockTrade([7,6,4,3,1])
    expect(result).toEqual(0)
  })
  it('Should return 4', () => {
    const result = multiDateStockTrade([1,2,3,4,5])
    expect(result).toEqual(4)
  })
  it('Should return 4', () => {
    // on every peak there is a 10 difference, three peaks mean 30 profit
    const result = multiDateStockTrade([1, 11, 2, 12, 3, 13])
    expect(result).toEqual(30)
  })
})