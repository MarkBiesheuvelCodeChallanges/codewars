/* eslint-disable no-unused-vars */

/* Should return ᐃ type:
 0 : if ᐃ cannot be made with given sides
 1 : acute ᐃ
 2 : right ᐃ
 3 : obtuse ᐃ
 */
const ERROR = 0
const ACUTE = 1
const RIGHT = 2
const OBTUSE = 3

const angle = (x, y, z) => Math.acos((x * x + z * z - y * y) / (2 * x * z))

function triangleType (x, y, z) {
  const a = angle(x, y, z)
  const b = angle(y, x, z)
  const c = angle(x, z, y)
  const piOverTwo = Math.PI / 2

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    return ERROR
  } else if (a > piOverTwo || b > piOverTwo || c > piOverTwo) {
    return OBTUSE
  } else if (a === piOverTwo || b === piOverTwo || c === piOverTwo) {
    return RIGHT
  } else {
    return ACUTE
  }
}
