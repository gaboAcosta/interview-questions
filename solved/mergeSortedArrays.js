
function mergeSortedArrays (nums1, m, nums2, n) {
  const total = nums1.length
  let leftIndex = m - 1
  let rightIndex = n - 1
  for(let i = total -1; i >= 0; i--) {
    const leftValue = nums1[leftIndex]
    const rightValue = nums2[rightIndex]
    if(rightValue === undefined || leftValue >= rightValue) {
      nums1[i] = leftValue
      leftIndex--
    } else {
      nums1[i] = rightValue
      rightIndex--
    }
  }
}

module.exports = {
  mergeSortedArrays
}