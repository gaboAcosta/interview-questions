
function getMajorityElement (nums) {
   let currMajority = nums[0], currMajorityCount = 1
  for(let i = 1; i < nums.length; i++) {
    if(currMajorityCount === 0) currMajority = nums[i]
    if(nums[i] === currMajority) {
      currMajorityCount++
    } else {
      currMajorityCount--
    }
  }
  return currMajority
}

module.exports = {
  getMajorityElement
}