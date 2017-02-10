/* eslint-disable no-unused-vars */
const divisors = (integer) => {
  const divisors = []
  const limit = Math.floor(integer / 2)

  for (let i = 2; i <= limit; i++) {
    if (integer % i === 0) {
      divisors.push(i)
    }
  }

  if (divisors.length === 0) {
    return integer + ' is prime'
  } else {
    return divisors
  }
}
