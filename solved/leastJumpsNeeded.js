function leastJumpsNeeded (nums) {
  // we know we have to at least do one jump from the first spot
  let jumpCount = 0
  // we know the first jump will end when we reach the first length
  let currEnd = 0
  let currFar = 0
  // we stop at nums.length - 2 because we are trying to figure out
  // how many jumps to reach the last index, so the value in the last
  // index would not be contemplated
  for(let i = 0; i < nums.length - 1; i++) {
    currFar = Math.max(currFar, i + nums[i])
    if(i === currEnd) {
      currEnd = currFar
      jumpCount++
    }
  }
  return jumpCount
}

module.exports = {
  leastJumpsNeeded
}