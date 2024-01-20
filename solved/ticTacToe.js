function isUsed (value) {
  return value === 'X' || value === 'O'
}

const topLeftCorner = 0
const topRowPivot = 1
const topRightCorner = 2
const leftRowPivot = 3
const centerPivot = 4
const rightRowPivot = 5
const bottomLeftCorner = 6
const bottomRowPivot = 7
const bottomRightCorner = 8

const edges = [
  { target: topRowPivot, testCases: [{ left: topLeftCorner, right: topRightCorner }] },
  { target: rightRowPivot, testCases: [{ left: topRightCorner, right: bottomRightCorner }] },
  { target: bottomRowPivot, testCases: [{ left: bottomLeftCorner, right: bottomRightCorner }] },
  { target: leftRowPivot, testCases: [{ left: topLeftCorner, right: bottomLeftCorner }] },
]

const center = {
  target: centerPivot,
  testCases: [
    { left: topLeftCorner, right: bottomRightCorner },
    { left: topRightCorner, right: bottomLeftCorner },
    { left: topRowPivot, right: bottomRowPivot },
    { left: leftRowPivot, right: rightRowPivot },
  ]
}

function checkWinnerScores (scores, target, testCases) {
  for (const testCase of testCases) {
    const left = scores[testCase.left]
    const right = scores[testCase.right]
    if(isUsed(left) && isUsed(right)) {
      if(left === target && target === right) return target
    }
  }
  return false
}

function checkWinner (scores) {
  // check edges
  for(const edge of edges) {
    const { target, testCases } = edge
    if(isUsed(scores[target])) {
      const result = checkWinnerScores(scores, scores[target], testCases)
      if(result !== false) return result
    }
  }
  //check center
  if(isUsed(scores[center.target])) {
    const result = checkWinnerScores(scores, scores[center.target], center.testCases)
    if(result !== false) return result
  }
  return 'NONE'
}

module.exports = {
  checkWinner
}