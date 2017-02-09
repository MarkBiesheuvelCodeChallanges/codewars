function sumStrings(a, b) {
  var n = Math.max(a.length, b.length);
  var carry = 0;
  var result = '';
  var digit;

  // Add digit by digit since we need to support large numbers
  for (var i = 1; i <= n; i++) {

    digit = (parseInt(a[a.length - i], 10) | 0) +
      (parseInt(b[b.length - i], 10) | 0) +
      carry;

    result = (digit % 10) + result;
    carry = (10 <= digit)? 1 : 0;
  }

  // Add the carry if it isn't empty
  if (carry) {
    result = carry + result;
  }

  // Remove leading zeroes before returning
  return result.replace(/^0+/, '');
}