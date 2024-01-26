/**
 * Implement a list that stores, searches and finds elements in O(1) time
 *
 * Also implement a getRandom number
 *
 * @type {string}
 */

const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const OptimalList = require(path.resolve(path.join(targetDir, 'optimalList.js')))

describe('optimalList', () => {
  it('Should insert an item and find it', () => {
    const list = new OptimalList()
    list.insert(1)
    expect(list.find(1)).toEqual(1)
  })
  it('Should return false if we try to find an item that does not exist', () => {
    const list = new OptimalList()
    expect(list.find(1)).toEqual(false)
  })
  it('Should return false if we try to remove an item that does not exist', () => {
    const list = new OptimalList()
    expect(list.remove(1)).toEqual(false)
  })
  it('Should remove an item', () => {
    const list = new OptimalList()
    list.insert(1)
    expect(list.find(1)).toEqual(1)
    expect(list.remove(1)).toEqual(true)
  })
  it('Should return a random item', () => {
    const list = new OptimalList()
    const numbers = [1,2,3,4,5,6]
    for(const number of numbers) list.insert(number)
    let i = 0
    while(i++ <= 10) {
      const randomNumber = list.getRandom()
      expect(numbers.includes(randomNumber)).toEqual(true)
    }
  })
})