/* Should return ᐃ type:
 0 : if ᐃ cannot be made with given sides
 1 : acute ᐃ
 2 : right ᐃ
 3 : obtuse ᐃ
 */
function triangleType(x, y, z){

  var angle = function(x, y, z) {
    return Math.acos((x*x + z*z - y*y) / (2 * x * z));
  };

  var a = angle(x, y, z),
    b = angle(y, x, z),
    c = angle(x, z, y);

  // pi over two
  var pi_2 = Math.PI / 2;

  if (a > 0 && b > 0 && c > 0) {

    if (a > pi_2 || b > pi_2 || c > pi_2) {
      return 3;
    }

    if (a == pi_2 || b == pi_2 || c == pi_2) {
      return 2;
    }

    return 1;
  }

  return 0;
}