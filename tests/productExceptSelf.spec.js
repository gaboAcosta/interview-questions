
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { productExceptSelf } = require(path.resolve(path.join(targetDir, 'productExceptSelf.js')))


/**
 * Create a function that takes an array of numbers and returns
 * a new array with the product of every index except themselves
 *
 * ie:
 * input: [3,1,2,3,4]
 * for i = 0, i === 1 * 2 * 3 * 4 === 24
 * for i = 1, i === 3 * 2 * 3 * 4 === 72
 * output: [24,72,36,24,18]
 *
 * IMPORTANT!!! Using the division operator is not allowed!
 *
 */
describe('productExceptSelf', () => {
  it('Should return an array with the product of every other index', () => {
    expect(productExceptSelf([1,2,3])).toEqual([6,3,2])
    expect(productExceptSelf([3,1,2,3,4])).toEqual([24,72,36,24,18])
    expect(productExceptSelf([3,1,2,3,4])).toEqual([24,72,36,24,18])
    expect(productExceptSelf([0,2,3,4])).toEqual([24,0,0,0])
    expect(productExceptSelf([0,2,0,4])).toEqual([0,0,0,0])
    expect(productExceptSelf([-1,1,2,-3,3])).toEqual([-18,18,9,-6,6])
  })
})