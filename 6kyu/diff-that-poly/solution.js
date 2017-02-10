/* eslint-disable no-unused-vars */
const diff = (poly) => {
  const highestPower = poly.length - 1

  const diff = poly.map((val, index) => val * (highestPower - index))

  diff.pop()

  return diff
}
