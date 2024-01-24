
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function integerToRoman (s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const nextChar = s[i + 1]
    const value = symbols[char]
    const nextValue = nextChar === undefined ? -Infinity : symbols[nextChar]
    if(value < nextValue) {
      sum -= value
    } else {
      sum += value
    }
  }
  return sum
}

module.exports = {
  integerToRoman
}