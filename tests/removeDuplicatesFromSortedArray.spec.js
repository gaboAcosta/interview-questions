
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { removeDuplicates } = require(path.resolve(path.join(targetDir, 'removeDuplicatesFromSortedArray.js')))

describe('removeDuplicatesFromSortedArray', () => {
  it('Should remove any duplicate', () => {
    const nums = [1,1,2]
    const validElements = removeDuplicates(nums)
    expect(validElements).toEqual(2)
    let current = nums[0]
    for(let i = 1; i < validElements; i++) {
      expect(nums[i]).not.toEqual(current)
      current = nums[i]
    }
  })
  it('Should remove any duplicate', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]
    const validElements = removeDuplicates(nums)
    expect(validElements).toEqual(5)
    let current = nums[0]
    for(let i = 1; i < validElements; i++) {
      expect(nums[i]).not.toEqual(current)
      current = nums[i]
    }
  })
  it('Should allow a max number of repeated numbers', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]
    const maxDup = 2
    const validElements = removeDuplicates(nums, maxDup)
    expect(validElements).toEqual(9)
    let current = nums[0]
    let currentCount = 1
    for(let i = 1; i < validElements; i++) {
      if(nums[i] === current) {
        currentCount++
      } else {
        currentCount = 1
      }
      current = nums[i]
      expect(currentCount).toBeLessThanOrEqual(maxDup)
    }
  })
  it('Should allow a max number of repeated numbers', () => {
    const nums = [0,0,0,1,1,1,1,2,2,2,3,3,3,4,4]
    const maxDup = 3
    const validElements = removeDuplicates(nums, maxDup)
    expect(validElements).toEqual(14)
    let current = nums[0]
    let currentCount = 1
    for(let i = 1; i < validElements; i++) {
      if(nums[i] === current) {
        currentCount++
      } else {
        currentCount = 1
      }
      current = nums[i]
      expect(currentCount).toBeLessThanOrEqual(maxDup)
    }
  })
})