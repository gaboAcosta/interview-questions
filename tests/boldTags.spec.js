
const targetDir = process.env.UNSOLVED === 'true' ? 'unsolved' : 'solved'
const path = require('node:path')
const { boldTags: boldTagsSpec } = require(path.resolve(path.join(targetDir, 'boldTags.js')))

describe('boldened-tags', () => {
  it('Should and find a specific text', () => {
    const str = 'abc'
    const tags = ['abc']
    const expectedResult = '<b>abc</b>'
    expect(boldTagsSpec(str, tags)).toEqual(expectedResult)
  })
  it('Should return the same string if no matches', () => {
    const str = 'abc'
    const tags = ['xyz']
    const expectedResult = 'abc'
    expect(boldTagsSpec(str, tags)).toEqual(expectedResult)
  })
  it('Should match repeated tags', () => {
    const str = 'abcxyzabc'
    const tags = ['abc']
    const expectedResult = '<b>abc</b>xyz<b>abc</b>'
    expect(boldTagsSpec(str, tags)).toEqual(expectedResult)
  })
  it('Should match all tags as many times as they appear', () => {
    const str = 'abcxyz123qweabc456zdaxyz'
    const tags = ['abc', 'xyz']
    const expectedResult = '<b>abc</b><b>xyz</b>123qwe<b>abc</b>456zda<b>xyz</b>'
    expect(boldTagsSpec(str, tags)).toEqual(expectedResult)
  })
  it('Should merge intervals where matching tags collide', () => {
    const str = 'qweqweabcxyz123qweabc456zdaxyzzxczxc'
    const tags = ['abc', 'xyz', 'bcx']
    const expectedResult = 'qweqwe<b>abcxyz</b>123qwe<b>abc</b>456zda<b>xyz</b>zxczxc'
    expect(boldTagsSpec(str, tags)).toEqual(expectedResult)
  })
})