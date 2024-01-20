
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { checkWinner } = require(path.resolve(path.join(targetDir, 'ticTacToe.js')))

describe('tikTakTokWinner', () => {
  it('should return X when center combinations are met', () => {
    // Vertical
    expect(checkWinner([null, 'X', null, null, 'X', null, null, 'X', null])).toEqual('X')
    // Horizontal
    expect(checkWinner([null, null, null, 'X', 'X', 'X', null, null, null])).toEqual('X')
    // top left to bottom right
    expect(checkWinner(['X', null, null, null, 'X', null, null, null, 'X'])).toEqual('X')
    // top right to bottom left
    expect(checkWinner([null, null, 'X', null, 'X', null, 'X', null, null])).toEqual('X')
  })
  it('should return X when edge combinations are met', () => {
    //top edge
    expect(checkWinner(['X', 'X', 'X', null, null, null, null, null, null])).toEqual('X')
    // right edge
    expect(checkWinner([null, null, 'X', null, null, 'X', null, null, 'X'])).toEqual('X')
    // bottom edge
    expect(checkWinner([null, null, null, null, null, null, 'X', 'X', 'X'])).toEqual('X')
    // left edge
    expect(checkWinner(['X', null, null, 'X', null, null, 'X', null, null])).toEqual('X')
  })
  it('Should return O when center combinations are met', () => {
    // Vertical
    expect(checkWinner(['X', 'O', 'X', null, 'O', 'X', null, 'O', null])).toEqual('O')
    // Horizontal
    expect(checkWinner(['X', 'X', null, 'O', 'O', 'O', null, 'X', 'X'])).toEqual('O')
    // top left to bottom right
    expect(checkWinner(['O', 'X', 'X', null, 'O', 'X', 'X', null, 'O'])).toEqual('O')
    // top right to bottom left
    expect(checkWinner([null, 'X', 'O', null, 'O', 'X', 'O', 'X', 'X'])).toEqual('O')
  })
  it('should return O when edge combinations are met', () => {
    //top edge
    expect(checkWinner(['O', 'O', 'O', 'O', 'X', 'O', 'X', 'X', 'O'])).toEqual('O')
    // right edge
    expect(checkWinner(['X', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'O'])).toEqual('O')
    // bottom edge
    expect(checkWinner(['X', 'O', 'X', 'X', 'O', 'X', 'O', 'O', 'O'])).toEqual('O')
    // left edge
    expect(checkWinner(['O', 'X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'])).toEqual('O')
  })
  it('Should return NONE when there is no winner', () => {
    expect(checkWinner([null, null, null, null, null, null, null, null, null])).toEqual('NONE')
    expect(checkWinner(['X', null, null, null, null, null, null, null, null])).toEqual('NONE')
    expect(checkWinner(['X', 'X', null, null, null, null, null, null, null])).toEqual('NONE')
    expect(checkWinner([null, null, null, 'X', null, null, null, null, null])).toEqual('NONE')
    expect(checkWinner([null, null, null, 'X', 'X', null, null, null, null])).toEqual('NONE')
    expect(checkWinner(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'])).toEqual('NONE')
    expect(checkWinner(['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'])).toEqual('NONE')
    expect(checkWinner(['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'])).toEqual('NONE')
    expect(checkWinner(['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'])).toEqual('NONE')
    expect(checkWinner(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'])).toEqual('NONE')
    expect(checkWinner(['X', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'])).toEqual('NONE')
  })
})