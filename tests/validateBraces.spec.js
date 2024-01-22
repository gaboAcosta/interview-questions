
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { validateBraces } = require(path.resolve(path.join(targetDir, 'validateBraces.js')))

describe('validateBraces', () => {
  it('Should return true when given valid braces', () => {
    expect(validateBraces('()')).toEqual(true)
    expect(validateBraces('(){}[]')).toEqual(true)
    expect(validateBraces('{[()]}()')).toEqual(true)
    expect(validateBraces('(){[]}')).toEqual(true)
    expect(validateBraces('{[()]}')).toEqual(true)
    expect(validateBraces('{[()]}()[]')).toEqual(true)
    expect(validateBraces('[]{}{[()]}()[]')).toEqual(true)
    expect(validateBraces('([]{}){[()]}()[]')).toEqual(true)
    expect(validateBraces('([]{}){}[()]{}()[]')).toEqual(true)
  })
  it('Should return false when given invalid braces', () => {
    expect(validateBraces(')')).toEqual(false)
    expect(validateBraces('}')).toEqual(false)
    expect(validateBraces(']')).toEqual(false)
    expect(validateBraces(')[]')).toEqual(false)
    expect(validateBraces('()){)[]}')).toEqual(false)
    expect(validateBraces('{[{()]}()')).toEqual(false)
    expect(validateBraces('{[()]}()[}]')).toEqual(false)
    expect(validateBraces('[]{}{[([)]}()[]')).toEqual(false)
    expect(validateBraces('([]{}){[()]]}()[]')).toEqual(false)
    expect(validateBraces('([]{}){[(){]}()[]')).toEqual(false)
    expect(validateBraces('([(]{}){[()]}()[]')).toEqual(false)
    expect(validateBraces('([]{}){[(){]}()[]')).toEqual(false)
    expect(validateBraces('([]{}){[()]}()[](')).toEqual(false)
    expect(validateBraces('([]{}){[()]}()[]((')).toEqual(false)
  })
})