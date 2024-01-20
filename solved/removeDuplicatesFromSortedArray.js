
function removeDuplicates(nums) {
  let k = 0
  let lastNumber
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    if(currentNumber !== lastNumber) {
      nums[k] = nums[i]
      k++
    }
    lastNumber = nums[i]
  }
  return k
}

module.exports = {
  removeDuplicates
}