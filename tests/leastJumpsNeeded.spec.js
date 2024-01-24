
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { leastJumpsNeeded } = require(path.resolve(path.join(targetDir, 'leastJumpsNeeded.js')))

describe('calculate the least number of jumps needed to get to n.length -1', () => {
  it('Should complete in two jumps', () => {
    expect(leastJumpsNeeded([2,3,1,1,4])).toEqual(2)
  })
  it('Should complete in two jumps', () => {
    expect(leastJumpsNeeded([2,3,0,1,4])).toEqual(2)
  })
  it('Should complete in four jumps', () => {
    expect(leastJumpsNeeded([1,3,2,2,5,2,1,1,1,1,8])).toEqual(4)
  })
})
