function add(left, right) {
  var result = '';
  var carry = 0;
  var digit;
  var i = left.length - 1;
  var j = right.length - 1

  while (0 <= i || 0 <= j || carry === 1) {
    digit = carry;
    if (0 <= i) {
      digit += parseInt(left[i], 10);
      i--;
    }
    if (0 <= j) {
      digit += parseInt(right[j], 10);
      j--;
    }

    if (10 <= digit) {
      digit -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result = digit.toString() + result;
  }

  return result;
}