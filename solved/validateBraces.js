

const openingKeys = {
  '(': true,
  '[': true,
  '{': true
}

const openingPairs = {
  ')': '(',
  ']': '[',
  '}': '{'
}

function validateBraces(s) {
  if(s.length === 0) return true
  const firstChar = s[0]
  if(openingKeys[firstChar] !== true) return false
  let closingIndex
  for(let i = 1; i < s.length; i++) {
    const currentChar = s[i]
    if(openingKeys[currentChar] === true) continue
    const currentOpeningPair = openingPairs[currentChar]
    if(currentOpeningPair === firstChar) {
      closingIndex = i
      break
    }
  }
  if(closingIndex === undefined) {
    return false
  } else {
    if(closingIndex !== 1) {
      const currentGroupvalidateBraces = validateBraces(s.slice(1, closingIndex))
      if(currentGroupvalidateBraces !== true) return false
    }
    return validateBraces(s.slice(closingIndex + 1))
  }
}

module.exports = {
  validateBraces
}
