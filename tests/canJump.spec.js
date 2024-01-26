
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { canJump } = require(path.resolve(path.join(targetDir, 'canJump.js')))

/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
 *
 * Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
 *
 * 0 <= j <= nums[i] and
 * i + j < n
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 *
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 */
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
