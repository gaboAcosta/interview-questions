
function canCompleteCircuit(gas, cost){
  let totalGain = 0
  let currGain = 0
  let answer = 0
  for (let i = 0; i < gas.length; i++) {
    totalGain += gas[i] - cost[i]
    currGain += gas[i] - cost[i]
    if(currGain < 0) {
      answer = i + 1
      currGain = 0
    }
  }
  return totalGain >= 0 ? answer : -1
}

module.exports = {
  canCompleteCircuit
}