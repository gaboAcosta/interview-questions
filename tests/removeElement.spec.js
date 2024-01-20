
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { removeElement } = require(path.resolve(path.join(targetDir, 'removeElement.js')))

describe('remove element', () => {
  it('Should remove all the occurrences of val', () => {
    const nums = [1,2,3,1,2,3]
    const val = 3
    const validElements = removeElement(nums, val)
    expect(validElements).toEqual(4)
    for(let i = 0; i < validElements; i++) {
      expect(nums[i]).not.toEqual(val)
    }
  })
  it('Should remove all the occurrences of val', () => {
    const nums = [2,2,2,5,2,5,2,5,2,5,2]
    const val = 2
    const validElements = removeElement(nums, val)
    expect(validElements).toEqual(4)
    for(let i = 0; i < validElements; i++) {
      expect(nums[i]).not.toEqual(val)
    }
  })
  it('Should remove all the occurrences of val', () => {
    const nums = [2,2,2,5,2,5,2,5,2,5,2]
    const val = 5
    const validElements = removeElement(nums, val)
    expect(validElements).toEqual(7)
    for(let i = 0; i < validElements; i++) {
      expect(nums[i]).not.toEqual(val)
    }
  })
  it('Should remove all the occurrences of val', () => {
    const nums = [3,2,2,3]
    const val = 3
    const validElements = removeElement(nums, val)
    expect(validElements).toEqual(2)
    for(let i = 0; i < validElements; i++) {
      expect(nums[i]).not.toEqual(val)
    }
  })
})