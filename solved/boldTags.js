
function findIntervals(string, substring) {
  const indexes = []
  let start = 0
  const end = string.length
  const substringLength = substring.length
  while (start < end) {
    const currString = string.slice(start)
    const currIndex = currString.indexOf(substring)
    if(currIndex !== - 1) {
      indexes.push({
        start: currIndex + start,
        end: (currIndex + start + substringLength) - 1
      })
      start+= currIndex + substringLength
    } else {
      break
    }
  }
  return indexes
}

function mergeIntervals (intervals) {
  const mergedIntervals = []
  const sortedIntervals = intervals.sort((a, b) => {
    if(a.start === b.start) return 0
    if(a.start > b.start) return 1
    return -1
  })
  let currStart, currEnd
  let intervalOpen = true
  for(const interval of sortedIntervals) {
    if(currStart === undefined && currEnd === undefined) {
      currStart = interval.start
      currEnd = interval.end
    } else {
      if(interval.start <= currEnd) {
        currEnd = interval.end
        intervalOpen = true
      } else {
        mergedIntervals.push({ start: currStart, end: currEnd })
        currStart = interval.start
        currEnd = interval.end
      }
    }
  }
  if(currStart !== undefined && currEnd !== undefined) {
    mergedIntervals.push({ start: currStart, end: currEnd})
  }
  return mergedIntervals
}

function boldTags (str, matches) {
  let intervals = []
  for(const match of matches) {
    const stringIntervals = findIntervals(str, match)
    for(const interval of stringIntervals) {
      intervals.push(interval)
    }
  }
  const mergedIntervals = mergeIntervals(intervals)
  let parsedString = ''
  let currEnd = -1
  for(const interval of mergedIntervals) {
    const { start, end } = interval
    if(start > currEnd) {
      parsedString+= str.slice(currEnd + 1, start)
    }
    parsedString+= `<b>${str.slice(start, end + 1)}</b>`
    currEnd = end
  }
  if(currEnd < str.length) {
    parsedString+= str.slice(currEnd + 1)
  }
  return parsedString
}

module.exports = {
  boldTags
}