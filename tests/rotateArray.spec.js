
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const controller = require(path.resolve(path.join(targetDir, 'rotateArray.js')))

describe('rotateArray', () => {
  it('Should rotate an array one step', () => {
    console.log(controller)
    const arr = [1,2,3,4,5]
    const expected = [5,1,2,3,4]
    controller.rotateArray(arr, 1)
    expect(arr).toEqual(expected)
  })
  it('Should rotate an array two steps', () => {
    const arr = [1,2,3,4,5]
    const expected = [4,5,1,2,3]
    controller.rotateArray(arr, 2)
    expect(arr).toEqual(expected)
  })
  it('Should rotate an array more than its length', () => {
    const arr = [1,2,3,4,5]
    const expected = [4,5,1,2,3]
    controller.rotateArray(arr, 7)
    expect(arr).toEqual(expected)
  })
  it('Should rotate an array', () => {
    const arr = [1,2,3,4,5,6,7]
    const expected = [5,6,7,1,2,3,4]
    controller.rotateArray(arr, 3)
    expect(arr).toEqual(expected)
  })
  it('Should rotate an array', () => {
    const arr = [-1,-100,3,99]
    const expected = [3,99,-1,-100]
    controller.rotateArray(arr, 2)
    expect(arr).toEqual(expected)
  })
})