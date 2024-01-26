
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { hIndex } = require(path.resolve(path.join(targetDir, 'hIndex.js')))
/**
 * Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
 *
 * According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
 *
 *
 *
 * Example 1:
 *
 * Input: citations = [3,0,6,1,5]
 * Output: 3
 * Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
 * Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
 */

describe('hIndex problem', () => {
  it('Should return the h number of papers cited at least h times', () => {
    // In this case, there's 3 papers rated 3 or more
    expect(hIndex([3,0,6,1,5])).toEqual(3)
  })
  it('Should be able to jump when the elements are long enough', () => {
    // 5 is the highest number that has at least 5 papers rated 5 or more
    expect(hIndex([1,2,1,3,2,5,10,12,13,14])).toEqual(5)
  })
  it('Should not be able to jump when the elements are not long enough', () => {
    expect(hIndex([1,3,1])).toEqual(1)
  })
  it('Should return the min number of papers as result', () => {
    expect(hIndex([11,15])).toEqual(2)
  })
  it('Should return the min number of papers as result', () => {
    expect(hIndex([100])).toEqual(1)
  })
})
