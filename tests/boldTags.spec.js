
const { boldTags: boldTagsSpec } = require('../unsolved/boldTags')

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
    const str = 'abcxyz123qweabc456zdaxyz'
    const tags = ['abc', 'xyz', 'bcx']
    const expectedResult = '<b>abcxyz</b>123qwe<b>abc</b>456zda<b>xyz</b>'
    expect(boldTagsSpec(str, tags)).toEqual(expectedResult)
  })
})