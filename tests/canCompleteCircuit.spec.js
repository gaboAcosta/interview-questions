/**
 * You have a car with an infinite tank (no need to calc if it's full)
 * you are give two num[], gas[] and cost[]
 * in gas[] you have how much gas you gain from landing in this station
 * in cost[] you have how much gas it costs to get to the next station
 *
 * Find out if there's a given index in gas[] where you can start and complete
 * two full circuits, if you can't find one return - 1
 *
 * On every test case there's only one possible answer
 */

const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { canCompleteCircuit } = require(path.resolve(path.join(targetDir, 'canCompleteCircuit.js')))

describe('canCompleteCircuit', () => {
  test('it should not be able to complete a full circuit', () => {
    expect(canCompleteCircuit([3], [4])).toEqual(-1)
    expect(canCompleteCircuit([3,1], [4,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,1,1,1], [1,1,1,1,1,2])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,1,1,1], [1,1,1,1,2,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,1,1,1], [1,1,1,2,1,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,2,1,1], [1,2,1,2,1,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,1,1,1], [1,1,2,1,1,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,2,1,1], [2,1,2,1,1,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,1,1,1], [1,2,1,1,1,1])).toEqual(-1)
    expect(canCompleteCircuit([1,1,1,1,1,1], [2,1,1,1,1,1])).toEqual(-1)
    expect(canCompleteCircuit([0,1,2,0,3,4,5,0], [2,3,4,2,5,1,2,2])).toEqual(-1)
  })
  test('it should return the right index', () => {
    expect(canCompleteCircuit([3], [3])).toEqual(0)
    expect(canCompleteCircuit([3], [1])).toEqual(0)
    expect(canCompleteCircuit([3,2], [4,1])).toEqual(1)
    expect(canCompleteCircuit([1,1,1,1,3], [1,1,1,3,1])).toEqual(4)
    expect(canCompleteCircuit([1,1,1,1,3], [1,1,3,1,1])).toEqual(3)
    expect(canCompleteCircuit([1,1,1,1,3], [1,3,1,1,1])).toEqual(2)
    expect(canCompleteCircuit([1,1,1,1,3,3], [1,3,1,3,1,1])).toEqual(4)
    expect(canCompleteCircuit([3,1,2], [4,1,1])).toEqual(1)
    expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).toEqual(3)
  })
})