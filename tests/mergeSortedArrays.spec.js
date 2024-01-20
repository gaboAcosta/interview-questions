
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { mergeSortedArrays } = require(path.resolve(path.join(targetDir, 'mergeSortedArrays.js')))

describe('merge sorted array', () => {
  it('Should merge two sorted arrays, producing a single sorted array', () => {
    const nums1 = [1,2,3,0,0,0]
    const m = 3
    const nums2 = [2,5,6]
    const n = 3
    mergeSortedArrays(nums1, m, nums2, n)
    expect(nums1).toEqual([1,2,2,3,5,6])
  })
  it('Should merge when nums2 is empty', () => {
    const nums1 = [1]
    const m = 1
    const nums2 = []
    const n = 0
    mergeSortedArrays(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
  })
  it('Should merge empty when nums1 is empty', () => {
    const nums1 = [0]
    const m = 0
    const nums2 = [1]
    const n = 1
    mergeSortedArrays(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
  })
})