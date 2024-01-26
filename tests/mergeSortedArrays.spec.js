
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { mergeSortedArrays } = require(path.resolve(path.join(targetDir, 'mergeSortedArrays.js')))

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

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