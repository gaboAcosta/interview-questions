
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { oneDateStockTrade } = require(path.resolve(path.join(targetDir, 'oneDateStockTrade.js')))

describe('oneDateStockTrade', () => {
  it('Should return 0 if theres no ideal trade pair', () => {
    const result = oneDateStockTrade([8])
    expect(result).toEqual(0)
  })
  it('Should return 0 if theres no ideal trade pair', () => {
    const result = oneDateStockTrade([8,7,6,5])
    expect(result).toEqual(0)
  })
  it('Should find the max profit buy/sell values', () => {
    const result = oneDateStockTrade([7,1,5,3,6,4])
    expect(result).toEqual(5)
  })
  it('Should find the max profit buy/sell values', () => {
    const result = oneDateStockTrade([7,6,4,3,1])
    expect(result).toEqual(0)
  })
})