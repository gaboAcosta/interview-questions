
const symbols = {
  '(': ')',
  '[': ']',
  '{': '}'
}

function validateBraces(s) {
  const firstChar = s[0]
  const closeTag = symbols[firstChar]
  if(closeTag === undefined) return false

  let closeIndex, openCounts = 1
  for(let i = 1; i < s.length; i++) {
    if(s[i] === firstChar) {
      openCounts++
    } else {
      if(s[i] === closeTag) {
        if(openCounts === 1) {
          closeIndex = i
          break
        } else {
          openCounts--
        }
      }
    }
  }
  if(closeIndex === undefined) return false
  if(closeIndex === 1) {
    if(s.length === 2) {
      return true
    } else {
      return validateBraces(s.slice(2))
    }
  } else {
    const isValidSegment = validateBraces(s.slice(1, closeIndex))
    if(closeIndex === s.length - 1) {
      return isValidSegment
    } else {
      return isValidSegment && validateBraces(s.slice(closeIndex + 1))
    }
  }
}

module.exports = {
  validateBraces
}