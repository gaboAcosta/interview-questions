
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { integerToRoman } = require(path.resolve(path.join(targetDir, 'integerToRoman.js')))

/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * Example 2:
 *
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * Example 3:
 *
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

describe('integerToRoman', () => {
  it('should solve for the first three integers', () => {
    expect(integerToRoman(1)).toEqual('I')
    expect(integerToRoman(2)).toEqual('II')
    expect(integerToRoman(3)).toEqual('III')
  })
  it('should solve for values involving V symbol', () => {
    expect(integerToRoman(4)).toEqual('IV')
    expect(integerToRoman(5)).toEqual('V')
    expect(integerToRoman(6)).toEqual('VI')
    expect(integerToRoman(7)).toEqual('VII')
    expect(integerToRoman(8)).toEqual('VIII')
  })
  it('should solve for values involving X symbol', () => {
    expect(integerToRoman(9)).toEqual('IX')
    expect(integerToRoman(10)).toEqual('X')
    expect(integerToRoman(11)).toEqual('XI')
    expect(integerToRoman(14)).toEqual('XIV')
    expect(integerToRoman(17)).toEqual('XVII')
    expect(integerToRoman(19)).toEqual('XIX')
    expect(integerToRoman(24)).toEqual('XXIV')
    expect(integerToRoman(29)).toEqual('XXIX')
  })
  it('should solve for values involving L symbol', () => {
    expect(integerToRoman(59)).toEqual('LIX')
    expect(integerToRoman(44)).toEqual('XLIV')
    expect(integerToRoman(69)).toEqual('LXIX')
    expect(integerToRoman(14)).toEqual('XIV')
  })
  it('should solve for values involving C symbol', () => {
    expect(integerToRoman(94)).toEqual('XCIV')
    expect(integerToRoman(144)).toEqual('CXLIV')
    expect(integerToRoman(169)).toEqual('CLXIX')
    expect(integerToRoman(945)).toEqual('CMXLV')
  })
  it('should solve for values involving M symbol', () => {
    expect(integerToRoman(1094)).toEqual('MXCIV')
    expect(integerToRoman(1144)).toEqual('MCXLIV')
    expect(integerToRoman(1969)).toEqual('MCMLXIX')
    expect(integerToRoman(3945)).toEqual('MMMCMXLV')
  })
})
