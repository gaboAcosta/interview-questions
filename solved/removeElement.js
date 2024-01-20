
function removeElement (nums, val) {
  let k = 0
  for(const num of nums) {
    if(num !== val) {
      nums[k++] = num
    }
  }
  return k
}

module.exports = {
  removeElement
}