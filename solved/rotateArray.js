
function reverse(arr, startIndex, endIndex) {
  while(startIndex < endIndex) {
    const temp = arr[startIndex]
    arr[startIndex] = arr[endIndex]
    arr[endIndex] = temp
    startIndex++
    endIndex--
  }
}

function rotateArray (arr, steps) {
  const actualSteps = steps % arr.length
  // first we reverse the whole array
  reverse(arr, 0, arr.length - 1)
  // then we reverse from 0 to the actual step
  reverse(arr, 0, actualSteps - 1)
  // and last we reverse the rest
  reverse(arr, actualSteps, arr.length - 1)
  console.log('finished', arr)
}

module.exports = {
  rotateArray
}