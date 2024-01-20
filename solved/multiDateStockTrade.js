
function multiDateStockTrade (prices) {
  let maxProfit = 0
  for(let i = 1; i < prices.length; i++) {
    const today = prices[i]
    const yesterday = prices[i - 1]
    if(today > yesterday) {
      maxProfit += today - yesterday
    }
  }
  return maxProfit
}

module.exports = {
  multiDateStockTrade
}