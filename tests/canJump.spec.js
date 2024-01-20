
const { canJump } = require('../unsolved/canJump')

describe('canJump problem', () => {
  it('Should be able to jump to the end when there\'s only one element in the array', () => {
    expect(canJump([1])).toEqual(true)
  })
  it('Should be able to jump when the elements are long enough', () => {
    expect(canJump([1,2,1,3,1])).toEqual(true)
  })
  it('Should not be able to jump when the elements are not long enough', () => {
    expect(canJump(1,0,1,3,1)).toEqual(false)
  })
})
