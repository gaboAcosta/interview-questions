const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { containedWatter } = require(path.resolve(path.join(targetDir, 'containedWatter.js')))

/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 */

describe('containedWatter', () => {
  it('should return 0 if there are less than three heights', () => {
    expect(containedWatter([0])).toEqual(0)
  })
  it('should use the lower end of the boundary', () => {
    expect(containedWatter([1,0,100])).toEqual(1)
    expect(containedWatter([100,0,1])).toEqual(1)
    expect(containedWatter([1,0,100,0,1])).toEqual(2)
    expect(containedWatter([1,0,100,0,1])).toEqual(2)
  })
  it('should return the contained watter in a small interval', () => {
    expect(containedWatter([1,0,1])).toEqual(1)
    expect(containedWatter([2,0,1])).toEqual(1)
    expect(containedWatter([2,0,2])).toEqual(2)
    expect(containedWatter([3,0,3])).toEqual(3)
    expect(containedWatter([3,1,3])).toEqual(2)
    expect(containedWatter([3,2,3])).toEqual(1)
    expect(containedWatter([3,3,3])).toEqual(0)
  })
  it('should return the contained watter in a larger interval', () => {
    expect(containedWatter([1,0,0,1])).toEqual(2)
    expect(containedWatter([2,0,0,2])).toEqual(4)
    expect(containedWatter([3,0,0,3])).toEqual(6)
    expect(containedWatter([3,0,1,3])).toEqual(5)
    expect(containedWatter([3,0,2,3])).toEqual(4)
    expect(containedWatter([3,1,2,3])).toEqual(3)
    expect(containedWatter([3,2,2,3])).toEqual(2)
    expect(containedWatter([3,3,2,3])).toEqual(1)
    expect(containedWatter([3,3,3,3])).toEqual(0)
  })
  it('should solve for valleys and slopes', () => {
    expect(containedWatter([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6)
    expect(containedWatter([4,2,0,3,2,5])).toEqual(9)
    expect(containedWatter([4,2,0,3,2,4,3,4])).toEqual(10)
    expect(containedWatter([4,3,3,9,3,0,9,2,8,3])).toEqual(23)
    expect(containedWatter([4,2,3,5,1,9,9,6])).toEqual(7)
  })
})