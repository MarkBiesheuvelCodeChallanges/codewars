var map = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

function number2words(n){
  if (n in map) {
    return map[n];
  }
  if (n < 100) {
    var ones = n % 10;
    return number2words(n - ones) + '-' + number2words(ones);
  }
  if (n < 1000) {
    var hundreds = Math.floor(n / 100);
    var remainder = n % 100;

    var result = number2words(hundreds) + ' hundred';

    if (remainder > 0) {
      result += ' ' + number2words(remainder)
    }

    return result;
  }
  if (n < 1000000) {
    var thousands = Math.floor(n / 1000);
    var remainder = n % 1000;

    var result = number2words(thousands) + ' thousand';

    if (remainder > 0) {
      result += ' ' + number2words(remainder)
    }

    return result;
  }
}