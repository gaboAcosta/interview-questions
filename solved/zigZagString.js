
function zigZagString(s, numRows) {
  if(numRows === 1 ) return s
  const transformed = []
  for (let i = 0; i < numRows; i++) {
    transformed[i] = ''
  }
  let currRow = 0
  let step = 1
  for(let i = 0; i < s.length; i++) {
    transformed[currRow]+= s[i]
    currRow += step
    if(currRow === 0 || currRow === numRows - 1) {
      step = -step
    }
  }
  return transformed.reduce((acc, str) => `${acc}${str}`, '')
}

module.exports = {
  zigZagString
}
