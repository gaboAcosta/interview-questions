
const OptimalList = function () {
  this.list = []
  this.map = new Map()
}

OptimalList.prototype.find = function (value) {
  if(this.map.has(value) === false) return false
  return this.list[this.map.get(value)]
}
OptimalList.prototype.insert = function (value) {
  if(this.find(value) !== false) return false
  this.list.push(value)
  this.map.set(value, this.list.length - 1)
  return true
}
OptimalList.prototype.remove = function (value) {
  if(this.find(value) === false) return false
  const index = this.map.get(value)
  this.list[index] = this.list[this.list.length - 1]
  this.map.set(this.list[index], index)
  this.map.delete(value)
  return true
}
OptimalList.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.list.length)
  return this.list[randomIndex]
}

module.exports = OptimalList