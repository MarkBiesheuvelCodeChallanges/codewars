/* eslint-disable no-unused-vars */
const stringChunk = (str, n) => {
  const result = []
  if (n > 0) {
    for (let i = 0; i < str.length; i += n) {
      result.push(str.substring(i, i + n))
    }
  }
  return result
}
