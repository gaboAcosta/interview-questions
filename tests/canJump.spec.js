
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { canJump } = require(path.resolve(path.join(targetDir, 'canJump.js')))

describe('Can you reach n.length -1 from the first index?', () => {
  it('should complete if only has one item and the value is 1', () => {
    expect(canJump([1])).toEqual(true)
  })
  it('Should be able to jump when the elements are long enough', () => {
    expect(canJump([1,2,1,3,1])).toEqual(true)
  })
  it('Should not be able to jump when the elements are not long enough', () => {
    expect(canJump([1,0,1,3,1])).toEqual(false)
  })
})
