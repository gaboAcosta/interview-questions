
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { leastJumpsNeeded } = require(path.resolve(path.join(targetDir, 'leastJumpsNeeded.js')))

/**
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 *
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */
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
