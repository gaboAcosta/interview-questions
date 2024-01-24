/**
 * We are given an array with children grades
 * We need to distribute candy to them
 *
 * The rules are:
 * 1) Each child must have at least one candy.
 * 2) Children with a higher rating get more candies than their neighbors.
 *
 * Example 1:
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 *
 * Input: ratings = [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
 * The third child gets 1 candy because it satisfies the above two conditions.
 */

const { ratingBasedCandy } = require('../solved/ratingBasedCandy')

describe('ratingBasedCandy', () => {
  it('should give one candy to one kid', () => {
    expect(ratingBasedCandy([1])).toEqual(1)
  })
  it('should give one candy to every kid if they all have the same grades', () => {
    expect(ratingBasedCandy([1,1,1])).toEqual(3)
  })
  it('should give one more candy to a student with a higher grade than neighbors', () => {
    expect(ratingBasedCandy([2,1])).toEqual(3)
    expect(ratingBasedCandy([2,1,2])).toEqual(5)
    expect(ratingBasedCandy([1,0,2])).toEqual(5)
    expect(ratingBasedCandy([1,2,2])).toEqual(4)
    expect(ratingBasedCandy([1,0,0,2])).toEqual(6)

    expect(ratingBasedCandy([1,0,1,0,2])).toEqual(8)
    expect(ratingBasedCandy([1,0,1,1,0,1])).toEqual(10)
    expect(ratingBasedCandy([1,0,1,1,0,1,2])).toEqual(13)
    expect(ratingBasedCandy([1,2,3])).toEqual(6)
    expect(ratingBasedCandy([1,2,3,2,1])).toEqual(9)
  })
  it('should work on complex arrays', () => {
    expect(ratingBasedCandy([1,2,87,87,87,2,1])).toEqual(13)
  })
})