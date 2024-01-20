
function removeDuplicates(nums, maxOccurrence = 1) {
  let k = 0
  const tally = {}
  for(const num of nums) {
    if(tally[num] === undefined) tally[num] = { total: 0 }
    tally[num].total++
    if(tally[num].total > maxOccurrence) continue
    nums[k++] = num
  }
  return k
}

module.exports = {
  removeDuplicates
}