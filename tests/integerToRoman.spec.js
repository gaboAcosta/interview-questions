
const testCases = [
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['IV', 4],
  ['V', 5],
  ['VI', 6],
  ['VII', 7],
  ['VIII', 8],
  ['IX', 9],
  ['X', 10],
  ['XI', 11],
  ['XII', 12],
  ['XIII', 13],
  ['XIV', 14],
  ['XV', 15],
  ['XVI', 16],
  ['XVII', 17],
  ['XVIII', 18],
  ['XIX', 19],
  ['XX', 20],
  ['XXI', 21],
  ['XLIV', 44],
  ['XLVI', 46],
  ['XCIV', 94],
  ['XCVI', 96],
  ['CMXCIV', 994],
  ['MMCMXCIV', 2994],
]

const { integerToRoman } = require('../solved/integerToRoman')

describe('integerToRoman', () => {
  it('should pass all test cases', () => {
    for (const testCase of testCases) {
      expect(integerToRoman(testCase[0])).toEqual(testCase[1])
    }
  })
})
