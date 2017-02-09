/* eslint-disable no-unused-vars */
const sumTwoSmallestNumbers = (numbers) => {
  let smallest = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]

  numbers.forEach((number) => {
    if (number < smallest[0]) {
      smallest = [number, smallest[0]]
    } else if (number < smallest[1]) {
      smallest = [smallest[0], number]
    }
  })

  return smallest[0] + smallest[1]
}
