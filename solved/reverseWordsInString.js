
function getWords (s) {
  const words = []
  let currStart = null
  let currEnd = null
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      if(currStart !== null && currEnd === null) {
        words.push(s.slice(currStart, i))
        currEnd = i - 1
        currStart = null
      }
    } else {
      if(currStart === null) {
        currStart = i
        currEnd = null
      }
    }
  }
  if(currStart !== null && currEnd === null) {
    words.push(s.slice(currStart, s.length))
  }
  return words
}

function reverseWordsInString (s) {
  const words = getWords(s)
  let reversed = ''
  for(let i = words.length -1; i >=0; i--) {
    const separator = reversed.length === 0 ? '' : ' '
    reversed += `${separator}${words[i]}`
  }
  return reversed
}


module.exports = { reverseWordsInString }