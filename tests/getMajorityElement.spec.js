
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { getMajorityElement } = require(path.resolve(path.join(targetDir, 'majorityElement.js')))
/**
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

describe('majorityElement', () => {
  it('should return the majority element', () => {
    const elements = [3,2,3]
    const majorityElement = getMajorityElement(elements)
    expect(majorityElement).toEqual(3)
  });
  it('should return the majority element', () => {
    const elements = [2,2,1,1,1,2,2]
    const majorityElement = getMajorityElement(elements)
    expect(majorityElement).toEqual(2)
  });
});