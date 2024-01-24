
function ratingBasedCandy (ratings) {
  const answer = []
  for(const r of ratings) answer.push(1)

  // first we traverse from left to right skipping the first one
  // because we are comparing left values
  for(let i = 1; i < ratings.length; i++) {
    if(ratings[i] > ratings[i - 1]) {
      answer[i] = answer[i - 1] + 1
    }
  }
  // we add the last item to account for it since we are skipping it in the nex for loop
  let sum = answer[ratings.length - 1]
  // Next we traverse right to left skipping the last one
  // because we are comparing the right value
  for(let i = ratings.length - 2; i >= 0; i--) {
    if(ratings[i] > ratings[i + 1]) {
      answer[i] = Math.max(answer[i], answer[i + 1] + 1)
    }
    sum += answer[i]
  }

  return sum
}

module.exports = {
  ratingBasedCandy
}