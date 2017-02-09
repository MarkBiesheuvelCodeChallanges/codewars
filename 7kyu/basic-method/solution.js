/* eslint-disable no-extend-native */
Array.prototype.max = function () {
  return this.reduce((a, b) => Math.max(a, b), Number.NEGATIVE_INFINITY)
}
