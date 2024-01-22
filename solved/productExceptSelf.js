
function productExceptSelf (nums) {
  const answer = []
  answer[0] = 1
  let prefixIndex = 1
  for(let i = 1; i < nums.length; i++) {
    prefixIndex*= nums[i - 1]
    answer[i] = prefixIndex
  }

  let postfixIndex = 1
  for(let i = nums.length - 2; i >= 0; i--) {
    postfixIndex *= nums[i + 1]
    answer[i] = answer[i] * postfixIndex
  }
  return answer
}

module.exports = {
  productExceptSelf
}
