const VALID = 'valid'
const INVALID = 'invalid'

function canJump(nums) {
  const validationMap = {}
  let lastValidIndex = nums.length - 1
  validationMap[lastValidIndex] = VALID

  for(let i = nums.length - 2; i >= 0; i--) {
    const distanceToLastValidIndex = lastValidIndex - i
    const currentNum = nums[i]
    if(currentNum >= distanceToLastValidIndex) {
      lastValidIndex = i
      validationMap[i] = VALID
    } else {
      validationMap[nums[i]] = INVALID
    }
  }
  //Now we have a map to know if we have valid indices, but we really just care to know if the first is valid (since that means it has a path to finish)
  return validationMap[0] === VALID
}

module.exports = {
  canJump
}