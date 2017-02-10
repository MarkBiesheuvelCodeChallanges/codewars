/* eslint-disable no-unused-vars */
const deleteNth = (array, n) => {
  let counter = {}

  return array.filter((value) => {
    if (value in counter) {
      counter[value]++
    } else {
      counter[value] = 1
    }

    return counter[value] <= n
  })
}
