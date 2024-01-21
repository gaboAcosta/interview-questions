
function zigZagString(s, numRows) {
  if(numRows === 1 ) return s
  const transformed = []
  for (let i = 0; i < numRows; i++) {
    transformed[i] = ''
  }
  let currRow = 0
  // step will be 1 when going down and -1 when going up
  let step = 1
  for(let i = 0; i < s.length; i++) {
    transformed[currRow]+= s[i]
    // here we either add or subtract 1 to currRow
    currRow += step
    // our rows are zero indexed, so we need to stop when currentRow is numRows - 1
    if(currRow === 0 || currRow === numRows - 1) {
      step = -step
    }
  }
  return transformed.reduce((acc, str) => `${acc}${str}`, '')
}

module.exports = {
  zigZagString
}
