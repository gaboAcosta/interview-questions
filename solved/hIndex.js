
function quickSortPapers(nums) {
  if(nums.length <= 1) return nums
  const first = nums[0]
  const left = []
  const right = []
  for(let i = 1; i < nums.length; i++) {
    // we will discard 0 we don't have a use for them
    if(nums[i] > first) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSortPapers(left), first, ...quickSortPapers(right)]
}

function hIndex (papers) {
  const sortedPapers = quickSortPapers(papers)
  let hIndex = 0
  for(let i = 0; i < sortedPapers.length; i ++) {
    if(sortedPapers[i] > i) {
      hIndex++
    } else {
      break
    }
  }
  return hIndex
}

module.exports = {
  hIndex
}